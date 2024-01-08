import React, { useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import { createContactUs } from '@/graphql/mutations'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import { toast } from 'react-toastify'
import { MultiSelect } from 'react-multi-select-component'

const category = [
  { label: 'Software Development', value: 'software_development' },
  { label: 'Web Development', value: 'web_development' },
  { label: 'E-Commerce Development', value: 'ecommerce_Development' },
  { label: 'AR/VR Development', value: 'ar_vr_development' },
  { label: 'Machine Learning', value: 'machine_learning' },
  { label: 'Digital Marketing', value: 'digital_marketing' },
  { label: 'Social Media', value: 'social_media' },
  { label: 'SEO', value: 'seo' },
]

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.array().min(1, 'Select at least one category').required('Categories are required'),
})

const ContactUs = () => {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const handleFile = (e) => {
    const newFile = e.target.files[0]
    setFile(newFile)
    setFileName(newFile.name)
  }

  const [selectedcategory, setSelectedcategory] = useState([])

  return (
    <>
      <div className='contac-us-bg'>
        <img src='../../assets/images/contact-us-bg.png' alt='image' />
      </div>
      <Container>
        <Row className='contact-row-inverse'>
          <Col sm={12} md={12} lg={7} xl={7}>
            <div className='contact-form-content'>
              <div className='info-title'>
                <h6 className='info-h6'>Your Info:</h6>
              </div>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phoneNumber: '',
                  companyName: '',
                  website_url: '',
                  skypeid: '',
                  description: '',
                  category: [],
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const finalCategories = selectedcategory.map((x) => x.label)
                    let finalData = {
                      first_name: values.firstName,
                      last_name: values.lastName,
                      email: values.email,
                      phone_number: values.phoneNumber,
                      company_name: values.companyName,
                      website_url: values.website_url,
                      description: values.description,
                      category: finalCategories,
                    }
                    if (file) {
                      await Storage.put(file.name, file)
                      finalData.file = file.name
                    }
                    const res = await API.graphql(graphqlOperation(createContactUs, { input: finalData }))
                    if (res) {
                      toast.success('Your request has been sent successfully')
                      setSubmitting(false)
                      resetForm()
                      setFile(null)
                      setFileName('')
                      setSelectedcategory([])
                    }
                  } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                    setSubmitting(false)
                  }
                }}>
                {({ errors, touched, isSubmitting, setFieldError, setFieldValue }) => (
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Field className='main-contact-input' type='text' name='firstName' placeholder='First Name' />
                        {errors.firstName && touched.firstName ? (
                          <div className='quote-errors'>{errors.firstName}</div>
                        ) : null}
                      </Col>
                      <Col md={6}>
                        <Field className='main-contact-input' type='text' name='lastName' placeholder='Last Name' />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Field className='main-contact-input' type='email' name='email' placeholder='Email' />
                        {errors.email && touched.email ? <div className='quote-errors'>{errors.email}</div> : null}
                      </Col>
                      <Col md={6}>
                        <Field
                          className='main-contact-input'
                          type='tel'
                          name='phoneNumber'
                          placeholder='Phone Number'
                        />
                      </Col>
                    </Row>

                    <div className='info-title'>
                      <h6 className='company-h6'>Company Info:</h6>
                    </div>
                    <Row>
                      <Col md={6}>
                        <Field
                          className='main-contact-input'
                          type='text'
                          name='companyName'
                          placeholder='Company Name'
                        />
                      </Col>
                      <Col md={6}>
                        <Field className='main-contact-input' type='url' name='website_url' placeholder='Website URL' />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <MultiSelect
                          options={category}
                          value={selectedcategory}
                          onChange={(value) => {
                            setSelectedcategory(value)
                            setFieldValue('category', value)

                            // Reset the error for the category field
                            if (touched.category) {
                              setFieldError('category', '')
                            }
                          }}
                          labelledBy='Search here'
                          className='contact-multiselect'
                          name='category'
                        />
                        {errors.category && touched.category ? (
                          <div className='quote-errors'>{errors.category}</div>
                        ) : null}
                      </Col>
                      <Col md={6}>
                        <Field className='main-contact-input' type='text' name='skypeid' placeholder='Skype ID' />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <label className='contact-form-file' htmlFor='contactupload-file'>
                          <Field
                            id='contactupload-file'
                            className='main-contact-inputfile file-input'
                            type='file'
                            name='fileInput'
                            onChange={handleFile}
                          />
                          <svg className='contactform-linkicon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#contactform-linkicon'></use>
                          </svg>
                          <span>|</span> {fileName ? fileName : 'Attach File'}
                        </label>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Field
                          as='textarea'
                          className='main-contact-textarea'
                          placeholder='Write us something about your project.'
                          name='description'
                          style={{ minHeight: '119px', maxHeight: '180px' }}
                        />
                        {errors.description && touched.description ? (
                          <div className='quote-errors'>{errors.description}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <button className='contct-form-submit-btn' type='submit'>
                      {isSubmitting ? <Spinner color='light' /> : '  Submit'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col sm={12} md={12} lg={5} xl={5}>
            <div className='contact-form-heading'>
              <h1 className='contactform-h1'>How Can We Be Your ORCHARD?</h1>
            </div>
            <div className='contact-form-sub-heading'>
              <p className='contactform-p'>
                Welcome to our contact portal, where your ideas take flight. Share, connect, and let us help you
                regarding your queries!
              </p>
            </div>
            <div className='contact-form-image'>
              <img src='../../assets/images/svg/contact_us.svg' alt='image' /> 
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default ContactUs
