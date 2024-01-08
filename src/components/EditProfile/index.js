import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CompanyInfoForm from '../CompanyCreate/CompanyInfoForm';
import ServicesForm from '../CompanyCreate/ServicesForm';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser, updateCurrentUser } from '@/libs/redux/reducers/authReducer';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { createIOCompany, updateIOCompany, updateUser } from '@/graphql/mutations';
import { Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { Loader1 } from '../Loaders';
import { Form, Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const EditProfile = () => {
  const { token, user } = useSelector((state) => state.auth);
  const formikRef = useRef();
  const [showLoader, setShowLoader] = useState(false);
  const [companyData, setCompanyData] = useState(user?.company);

  const router = useRouter();

  const [editSection, setEditSection] = useState('0');

  useEffect(() => {
    if (router.query.edit) console.log(router.query.edit);
    setEditSection(router.query.edit === 'company-info' ? '0' : router.query.edit === 'services' ? '1' : '2');
  }, [router.query.edit]);
  console.log(editSection);
  // const [companyData, setCompanyData] = useState(useSelector((state) => state.auth.user?.company));
  const dispatch = useDispatch();

  const handleFormSubmit = async (formData) => {
    setShowLoader(true);

    try {
      if (typeof formData.logo !== 'string') {
        const newID = uuid();
        const image = await Storage.put(`${formData.company_name + newID}`, formData.logo, {
          level: 'public',
        });

        formData.logo = image.key;
      }

      const updateIOCompanyAPI = await API.graphql({
        query: updateIOCompany,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: {
          input: {
            id: companyData.id,
            company_name: formData?.company_name,
            company_tagline: formData?.company_tagline,
            website_url: formData?.website_url,
            email: formData?.email,
            phone_no: formData?.phone_no,
            no_of_employee: formData?.no_of_employee,
            founded: formData?.founded,
            description: formData?.description,
            logo: formData?.logo,
            headquarter_location: formData?.location[0],
            location: formData?.location,
            total_earning: formData?.total_earning,
            project_earnings: formData?.project_earnings,
            hourly_rate: formData?.hourly_rate,
          },
        },
      });
      if (updateIOCompanyAPI) {
        let userData = { ...user, company: updateIOCompanyAPI.data.updateIOCompany };
        setCompanyData(updateIOCompanyAPI.data.updateIOCompany);

        dispatch(updateCurrentUser(userData));
      }

      toast.success('Company Updated Successfully');
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      toast.error('Err while Listing company, Try again later');
      console.error('ERR CREATE Company', err);
    }
  };
  const handleServiceSubmit = async (services) => {
    setShowLoader(true);
    const newData = services.map(({ __typename, ...rest }) => rest);
    try {
      const updateIOCompanyAPI = await API.graphql({
        query: updateIOCompany,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: {
          input: {
            id: companyData.id,
            services: newData,
          },
        },
      });
      if (updateIOCompanyAPI) {
        let userData = { ...user, company: updateIOCompanyAPI.data.updateIOCompany };
        setCompanyData(updateIOCompanyAPI.data.updateIOCompany);

        dispatch(updateCurrentUser(userData));
      }

      toast.success('Company Updated Successfully');
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      toast.error('Err while Listing company, Try again later');
      console.error('ERR CREATE Company', err);
    }
  };

  const submition = async (data) => {
    setShowLoader(true);

    try {
      const updateIOCompanyAPI = await API.graphql({
        query: updateIOCompany,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: {
          input: {
            id: companyData.id,
            social_media: data,
          },
        },
      });
      if (updateIOCompanyAPI) {
        let userData = { ...user, company: updateIOCompanyAPI.data.updateIOCompany };
        setCompanyData(updateIOCompanyAPI.data.updateIOCompany);

        dispatch(updateCurrentUser(userData));
      }

      toast.success('Company Updated Successfully');
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      toast.error('Err while Listing company, Try again later');
      console.error('ERR CREATE Company', err);
    }
  };

  function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <button onClick={decoratedOnClick} type='button' className='back-arrow'>
        Cancel
      </button>
    );
  }

  return (
    <>
      <section className='usereditprofile-section'>
        <Container>
          {showLoader && <Loader1 />}
          <Row>
            <Col md={12}>
              <Accordion activeKey={editSection} onSelect={(key) => setEditSection(key)}>
                <Accordion.Item eventKey='0' className='editprofile-accordianItem'>
                  <Accordion.Header>Company Profile</Accordion.Header>
                  <Accordion.Body>
                    <CompanyInfoForm
                      formData={companyData}
                      handleChanges={handleFormSubmit}
                      handlePrev={() => <CustomToggle eventKey={0} />}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1' className='editprofile-accordianItem'>
                  <Accordion.Header>Service Line</Accordion.Header>
                  <Accordion.Body>
                    <ServicesForm
                      formData={companyData}
                      handleNext={handleServiceSubmit}
                      handlePrev={() => <CustomToggle eventKey={0} />}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2' className='editprofile-accordianItem'>
                  <Accordion.Header>Social Media</Accordion.Header>
                  <Accordion.Body>
                    <Formik
                      enableReinitialize={true}
                      innerRef={formikRef}
                      initialValues={{
                        facebook: companyData?.social_media?.facebook || '',
                        instagram: companyData?.social_media?.instagram || '',
                        twitter: companyData?.social_media?.twitter || '',
                        linkedin: companyData?.social_media?.linkedin || '',
                        other: companyData?.social_media?.other || '',
                      }}
                      validationSchema={Yup.object().shape({
                        facebook: Yup.string().url('Url is invalid!'),
                        instagram: Yup.string().url('Url is invalid!'),
                        twitter: Yup.string().url('Url is invalid!'),
                        linkedin: Yup.string().url('Url is invalid!'),
                        other: Yup.string().url('Url is invalid!'),
                      })}
                      onSubmit={(values, { resetForm }) => {
                        submition(values);
                        resetForm();
                      }}
                    >
                      {({ values, isSubmitting, errors, touched, submitForm, handleChange }) => (
                        <Form>
                          <Row>
                            <Col md={6}>
                              <div className='mb-20'>
                                <div className='url-field-group'>
                                  <svg className='github-icon'>
                                    <use xlinkHref='/assets/images/svg/icons.svg#userdahboardgithubicon'></use>
                                  </svg>
                                  <Field
                                    type='url'
                                    name='other'
                                    className='urlfield'
                                    placeholder='https://github.com/Idenbrid'
                                  />
                                </div>
                                {errors.other && touched.other ? <div className='errors'>{errors.other}</div> : null}
                              </div>
                              <div className='mb-20'>
                                <div className='url-field-group'>
                                  <svg className='linkedin-icon'>
                                    <use xlinkHref='/assets/images/svg/icons.svg#userdahboardlinkedinicon'></use>
                                  </svg>
                                  <Field
                                    type='url'
                                    name='linkedin'
                                    className='urlfield'
                                    placeholder='https://www.linkedin.com/company/idenbrid/'
                                  />
                                </div>
                                {errors.linkedin && touched.linkedin ? (
                                  <div className='errors'>{errors.linkedin}</div>
                                ) : null}
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className='mb-20'>
                                <div className='url-field-group'>
                                  <Image
                                    src='/assets/images/svg/Insta.svg'
                                    className='instagram-icon'
                                    width={40}
                                    height={40}
                                    alt='instagram'
                                  />
                                  <Field
                                    type='url'
                                    name='instagram'
                                    className='urlfield'
                                    placeholder='https://www.instagram.com/idenbrid_inc/'
                                  />{' '}
                                </div>
                                {errors.instagram && touched.instagram ? (
                                  <div className='errors'>{errors.instagram}</div>
                                ) : null}
                              </div>
                            </Col>
                            <Col sm={12}>
                              <hr className='divider' />
                              <div className={`button-section-edit`}>
                                {/* <button
                                  // onClick={handlePrev}
                                  className='back-arrow'
                                >
                                  Cancel
                                </button> */}
                                <CustomToggle eventKey='2' />
                                <button
                                  type='submit'
                                  //  onClick={submitForm}
                                  className='next-arrow'
                                >
                                  Save Changes
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default EditProfile;
