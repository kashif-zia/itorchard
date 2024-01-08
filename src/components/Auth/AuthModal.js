import React, { useEffect, useState } from 'react'
import { Row, Col, Modal, Form, Button, InputGroup, Spinner } from 'react-bootstrap'
import * as Yup from 'yup'
import Lottie from 'lottie-react'
import SignUpAnimationData from '../../../public/assets/Lottie/SignUp.json'
import LoginAnimationData from '../../../public/assets/Lottie/LogIn.json'
import { toast } from 'react-toastify'
import { API, Auth, graphqlOperation, Hub } from 'aws-amplify'
import { useFormik } from 'formik'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { getUser } from '@/graphql/queries'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/libs/redux/reducers/authReducer'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { BiHide, BiShow } from 'react-icons/bi'

const AuthModalComponent = ({
  id,
  showLoginModal,
  setShowLoginModal,
  showSignupModal,
  setShowSignupModal,
  handleSignupModalOpen,
  showForgotPassword,
  setShowForgotPassword,
}) => {
  useEffect(() => {
    const unsubscribe = Hub.listen('auth', async ({ payload: { event, data } }) => {
      console.log('INISDE:::::');
      switch (event) {
        case 'signIn':
          console.log('SINGIN!!!!!!');
          const findUser = await Auth.currentAuthenticatedUser();
          console.log('findUser::', findUser);
          console.log('data::', data);
          const userId = data?.signInUserSession.accessToken.payload.sub;
          console.log('userId::', userId);

          const user = await API.graphql(graphqlOperation(getUser, { id: userId }));

          console.log('user::', user);
          const token = data.signInUserSession.accessToken.jwtToken;
          console.log('token::', token);
          dispatch(loginUser({ token: token, user: user.data.getUser }));
          break;
      }
    })

    return unsubscribe
  }, [])

  // const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [otpModal, setOtpModal] = useState(false)
  const [username, setOtpEmail] = useState('')
  const [resendLoading, setResendLoading] = useState(false)
  const [otp, setOtp] = useState('')
  const [showResetModal, setShowResetModal] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()
  const pathName = usePathname()

  const handleLoginModalOpen = () => {
    setShowLoginModal(true)
    setShowSignupModal(false)
  }

  const handleOtpModal = () => {
    setShowLoginModal(false)
    setShowSignupModal(false)
    setOtpModal(false)
    setShowForgotPassword(false)
    verifyOtp.resetForm()
  }

  const handleClose = () => {
    setShowLoginModal(false)
    setShowSignupModal(false)
    setShowForgotPassword(false)
    register.resetForm()
    login.resetForm()
    forgotPass.resetForm()
  }

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true)
  }

  const register = useFormik({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      password: Yup.string().min(8, 'Password must be 8 characters long').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Invalid email address'
        ),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const res = await Auth.signUp({
          username: values.email,
          password: values.password,
          attributes: {
            name: values.name,
          },
        })
        if (res) {
          setLoading(false)
          toast.success('Email has been sent for confirmation')
          setOtpModal(true)
          setShowSignupModal(false)
          setOtpEmail(values.email)
          register.resetForm()
        }
      } catch (err) {
        toast.error(err.message)
        setLoading(false)
      }
    },
  })

  const login = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const res = await Auth.signIn({
          username: values.email,
          password: values.password,
        })
        console.log(res)
        if (res) {
          setLoading(false)
          const findUser = await Auth.currentAuthenticatedUser()
          const userId = findUser?.attributes.sub
          const user = await API.graphql(graphqlOperation(getUser, { id: userId }))
          console.log(user, 'users')
          // const token = res.signInUserSession.accessToken.jwtToken;
          login.resetForm()
          if (user) {
            // dispatch(loginUser({ token: token, user: user.data.getUser }));
            setShowLoginModal(false)
            if (pathName.includes('/company-detail')) {
              router.push('/review/' + id)
            } else {
              router.push('/dashboard/create-company')
            }
            toast.success('User login successfully')
          } else {
            router.push('/')
            toast.success('User login successfully')
          }
        }
      } catch (err) {
        if (err.message === 'User is not confirmed.') {
          setOtpModal(true)
          setShowLoginModal(false)
          setOtpEmail(values.email)
        }
        toast.error(err.message)
        setLoading(false)
      }
    },
  })

  const verifyOtp = useFormik({
    initialValues: {
      email: username,
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string().required('OTP is required'),
    }),
    onSubmit: async (values) => {
      console.log(values)
    },
  })

  const resendOTP = async () => {
    setResendLoading(true)
    try {
      const res = await Auth.resendSignUp(username)
      if (res) {
        console.log(res)
        setResendLoading(false)
      }
    } catch (error) {
      console.log(error)
      toast.error(err.message)
      setResendLoading(false)
    }
  }

  const confirmNewUser = async () => {
    setLoading(true)
    try {
      const res = await Auth.confirmSignUp(username, otp)
      if (res) {
        setLoading(false)
        toast.success('User verified successfully')
        console.log(res)
        setOtpModal(false)
        setShowLoginModal(true)
        setShowLoginModal(true)
        verifyOtp.resetForm()
      }
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  const forgotPass = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const res = await Auth.forgotPassword(values.email)
        if (res) {
          setLoading(false)
          toast.success('Email has been sent')
          setShowResetModal(true)
          setResetEmail(values.email)
          setShowLoginModal(false)
          forgotPass.resetForm()
        }
      } catch (err) {
        if (
          err.message === 'Cannot reset password for the user as there is no registered/verified email or phone_number'
        ) {
          setOtpModal(true)
          setShowLoginModal(false)
          setLoading(false)
          setOtpEmail(values.email)
          toast.error('Please verify your account first')
        } else {
          toast.error(err.message)
          setLoading(false)
        }
      }
    },
  })

  const resetPass = useFormik({
    initialValues: {
      otp: '',
      password: '',
      cpassword: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string().required('OTP is required'),
      password: Yup.string().min(8, 'Password must be 8 characters long').required('Password is required'),
      cpassword: Yup.string()
        .min(8, 'Password must be 8 characters long')
        .oneOf([Yup.ref('password'), null], 'Confirm password does not match the original')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const res = await Auth.forgotPasswordSubmit(resetEmail, values.otp, values.password)
        if (res) {
          setLoading(false)
          toast.success('Password reset successfully')
          setShowLoginModal(true)
          resetPass.resetForm()
        }
      } catch (err) {
        toast.error(err.message)
        setLoading(false)
      }
    },
  })

  const googleSignIn = async () => {
    try {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  const linkedInSignIn = () => {
    try {
      Auth.federatedSignIn({ provider: 'LinkedIn' })
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const [showconfirmPassword, setconfirmPassword] = useState(false)

  const toggleconfirmPasswordVisibility = () => {
    setconfirmPassword(!showconfirmPassword)
  }
  return (
    <div>
      {/* Login Modal */}
      <Modal
        show={showLoginModal}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='auth-modal'>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          {showForgotPassword ? (
            <>
              <h4 className='signup-h4'>Forgot Password</h4>
              <p className='signup-sub-p'>
                Enter the email address associated with your account and we w'll send you a link to reset your password
              </p>
              <Form onSubmit={forgotPass.handleSubmit}>
                <Form.Group className='mb-3 authformgroup' controlId='formGroupForgotEmail'>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    value={forgotPass.values.email}
                    onChange={forgotPass.handleChange}
                    className='authFormControl form-control'
                  />
                  {forgotPass.touched.email && forgotPass.errors.email ? (
                    <div className='input-errors'>{forgotPass.errors.email}</div>
                  ) : null}
                </Form.Group>
                <Button type='submit' className='Submit-form-btn'>
                  {loading ? <Spinner color='light' /> : ' Send Email'}
                </Button>
              </Form>
            </>
          ) : (
            <>
              <h4 className='signup-h4'>Login</h4>
              <p className='signup-sub-p'>Get started in seconds – Log In to write a review</p>
              <Row>
                <Col md={6}>
                  <div className='signup-img'>
                    <Lottie animationData={LoginAnimationData} loop={true} autoplay={true} />
                  </div>
                </Col>
                <Col md={6}>
                  <Form onSubmit={login.handleSubmit}>
                    <Form.Group className='authformgroup' controlId='formGroupEmail'>
                      <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={login.values.email}
                        onChange={login.handleChange}
                        className='authFormControl form-control'
                      />
                      {login.touched.email && login.errors.email ? (
                        <div className='input-errors'>{login.errors.email}</div>
                      ) : null}
                    </Form.Group>

                    <Form.Group className='authformgroup' controlId='formGroupPassword'>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder='Password'
                          name='password'
                          value={login.values.password}
                          onChange={login.handleChange}
                          className='authFormControl form-control pwdfield'
                        />
                        <InputGroup.Text
                          className='icongroup'
                          onClick={togglePasswordVisibility}
                          style={{ cursor: 'pointer' }}>
                          {showPassword ? <BiHide /> : <BiShow />}
                        </InputGroup.Text>
                      </InputGroup>
                      {login.touched.password && login.errors.password ? (
                        <div className='input-errors'>{login.errors.password}</div>
                      ) : null}
                      <p className='forget-password'>
                        <span className='forget-link' onClick={handleForgotPasswordClick}>
                          Forgot Password?
                        </span>
                      </p>
                    </Form.Group>

                    <Button type='submit' className='Submit-form-btn'>
                      {loading ? <Spinner color='light' /> : 'Log In'}
                    </Button>
                    <Button className='google-btn' onClick={googleSignIn}>
                      <svg className='google-icon'>
                        <use xlinkHref='/assets/images/svg/icons.svg#googleicon'></use>
                      </svg>
                      Continue with Google
                    </Button>
                    <div className='social-group-btn'>
                      <Button className='linkedin-btn' onClick={linkedInSignIn}>
                        <svg className='linkedin-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#signuplinkedinicon'></use>
                        </svg>
                        Linkedin
                      </Button>
                    </div>
                    <p className='login-p'>
                      Don’t have any account? &nbsp;
                      <span className='primary-text sigup-link' onClick={handleSignupModalOpen}>
                        Sign Up
                      </span>
                    </p>
                  </Form>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Sign up Modal */}
      <Modal
        show={showSignupModal}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='auth-modal modal-custom-width'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 className='signup-h4'>Sign Up</h4>
          <p className='signup-sub-p'>Get started in seconds – Sign up to write a review</p>
          <Row>
            <Col md={6}>
              <div className='signup-img'>
                <Lottie animationData={SignUpAnimationData} loop={true} autoplay={true} />
              </div>
            </Col>
            <Col md={6}>
              <Form onSubmit={register.handleSubmit}>
                <Form.Group className='authformgroup' controlId='fformGroupName' label='Name'>
                  <Form.Control
                    type='text'
                    placeholder='Name'
                    className='authFormControl'
                    name='name'
                    value={register.values.name}
                    onChange={register.handleChange}
                  />
                  {register.touched.name && register.errors.name ? (
                    <div className='input-errors'>{register.errors.name}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className='authformgroup' controlId='formGroupEmail' label='Email'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className='authFormControl'
                    name='email'
                    value={register.values.email}
                    onChange={register.handleChange}
                  />
                  {register.touched.email && register.errors.email ? (
                    <div className='input-errors'>{register.errors.email}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className='authformgroup mb-3' controlId='formGroupPassword'>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      name='password'
                      value={register.values.password}
                      onChange={register.handleChange}
                      className='authFormControl pwdfield'
                    />
                    <InputGroup.Text
                      className='icongroup'
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer' }}>
                      {showPassword ? <BiHide /> : <BiShow />}
                    </InputGroup.Text>
                  </InputGroup>
                  {register.touched.password && register.errors.password ? (
                    <div className='input-errors'>{register.errors.password}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className='authformgroup mb-3' controlId='formGroupPassword'>
                  <InputGroup>
                    <Form.Control
                      type={showconfirmPassword ? 'text' : 'password'}
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      value={register.values.confirmPassword}
                      onChange={register.handleChange}
                      className='authFormControl pwdfield'
                    />
                    <InputGroup.Text
                      className='icongroup'
                      onClick={toggleconfirmPasswordVisibility}
                      style={{ cursor: 'pointer' }}>
                      {showconfirmPassword ? <BiHide /> : <BiShow />}
                    </InputGroup.Text>
                  </InputGroup>
                  {register.touched.confirmPassword && register.errors.confirmPassword ? (
                    <div className='input-errors'>{register.errors.confirmPassword}</div>
                  ) : null}
                </Form.Group>
                <Button type='submit' className='Submit-form-btn'>
                  {loading ? <Spinner color='light' /> : 'Sign up'}
                </Button>
                <p className='term-policy-p d-none'>
                  By continuing, you agree to IT ORCHARD Company’s Terms of Use and Privacy Policy.
                </p>
                <div className='divider'>
                  <div className='text'>Continue with</div>
                </div>
              </Form>
              <Button type='submit' className='google-btn' onClick={googleSignIn}>
                <svg className='google-icon'>
                  <use xlinkHref='/assets/images/svg/icons.svg#googleicon'></use>
                </svg>
                Continue with Google
              </Button>
              <div className='social-group-btn'>
                <Button type='submit' className='linkedin-btn' onClick={linkedInSignIn}>
                  <svg className='linkedin-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#signuplinkedinicon'></use>
                  </svg>
                  Linkedin
                </Button>
              </div>
              <p className='login-p'>
                Already have an account? &nbsp;
                <span className='primary-text login-link' onClick={handleLoginModalOpen}>
                  Log In
                </span>
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Reset Password Modal */}
      <Modal
        onHide={() => {
          setShowResetModal(false)
          resetPass.resetForm()
        }}
        show={showResetModal}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='auth-modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 className='signup-h4'>Reset Your Password</h4>
          <p className='signup-sub-p'>Your password needs to be at least 8 characters.</p>
          <Row>
            <Col md={6}>
              <div className='signup-img'>
                <Lottie animationData={SignUpAnimationData} loop={true} autoplay={true} />
              </div>
            </Col>
            <Col md={6}>
              <Form onSubmit={resetPass.handleSubmit}>
                <Form.Group className='authformgroup' controlId='formGroupName'>
                  <Form.Control type='email' readOnly className='authFormControl' value={resetEmail} />
                </Form.Group>
                <Form.Group className='authformgroup' controlId='formGroupName'>
                  <Form.Control
                    type='text'
                    placeholder='OTP'
                    className='authFormControl'
                    name='otp'
                    value={resetPass.values.otp}
                    onChange={resetPass.handleChange}
                  />
                  {resetPass.touched.otp && resetPass.errors.otp ? (
                    <div className='input-errors'>{resetPass.errors.otp}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className='authformgroup' controlId='formGroupPassword'>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      className='authFormControl pwdfield'
                      name='password'
                      value={resetPass.values.password}
                      onChange={resetPass.handleChange}
                    />
                    <InputGroup.Text
                      className='icongroup'
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer' }}>
                      {showPassword ? <BiHide /> : <BiShow />}
                    </InputGroup.Text>
                  </InputGroup>
                  {resetPass.touched.password && resetPass.errors.password ? (
                    <div className='input-errors'>{resetPass.errors.password}</div>
                  ) : null}
                </Form.Group>
                <Form.Group className='authformgroup' controlId='formGroupConfirmPassword'>
                  <InputGroup>
                    <Form.Control
                      type={showconfirmPassword ? 'text' : 'password'}
                      placeholder='Confirm New Password'
                      className='authFormControl pwdfield'
                      name='cpassword'
                      value={resetPass.values.cpassword}
                      onChange={resetPass.handleChange}
                    />
                    <InputGroup.Text
                      className='icongroup'
                      onClick={toggleconfirmPasswordVisibility}
                      style={{ cursor: 'pointer' }}>
                      {showconfirmPassword ? <BiHide /> : <BiShow />}
                    </InputGroup.Text>
                  </InputGroup>
                  {resetPass.touched.cpassword && resetPass.errors.cpassword ? (
                    <div className='input-errors'>{resetPass.errors.cpassword}</div>
                  ) : null}
                </Form.Group>
                <Button type='submit' className='Submit-form-btn'>
                  {loading ? <Spinner color='light' /> : 'Reset your Password'}
                </Button>
              </Form>
              <p className='login-p'>
                <span
                  className='primary-text sigup-link'
                  onClick={() => {
                    setShowLoginModal(true)
                    setShowForgotPassword(false)
                    setShowResetModal(false)
                  }}>
                  Back to Login
                </span>
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* verify otp Modal */}
      <Modal
        onHide={handleOtpModal}
        show={otpModal}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='auth-modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 className='signup-h4'>Verify OTP</h4>
          <p className='signup-sub-p'>Verify your account with the code sent to your email</p>
          <Row>
            <Col md={6}>
              <div className='signup-img'>
                <Lottie animationData={SignUpAnimationData} loop={true} autoplay={true} />
              </div>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group className='authformgroup' controlId='formGroupName'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className='authFormControl'
                    name='email'
                    value={username}
                    onChange={verifyOtp.handleChange}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className='authformgroup' controlId='formGroupPassword'>
                  <Form.Control
                    type='text'
                    placeholder='OTP'
                    className='authFormControl'
                    name='otp'
                    value={verifyOtp.values.otp}
                    onChange={(e) => {
                      verifyOtp.handleChange(e)
                      setOtp(e.target.value)
                    }}
                  />
                  {verifyOtp.touched.otp && verifyOtp.errors.otp ? (
                    <div className='input-errors'>{verifyOtp.errors.otp}</div>
                  ) : null}
                </Form.Group>
              </Form>
              <div className='otp-btn-group'>
                <Button type='button' onClick={confirmNewUser} className='verify-form-btn'>
                  {loading ? <Spinner color='light' /> : 'Verify Otp'}
                </Button>
                <Button onClick={resendOTP} type='button' className='Resend-form-btn'>
                  {resendLoading ? <Spinner color='light' /> : 'Resend Otp'}
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default AuthModalComponent
