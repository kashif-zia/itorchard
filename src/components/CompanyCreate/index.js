import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import Stepper from './Stepper';

import CompanyInfoForm from './CompanyInfoForm';
import ServicesForm from './ServicesForm';
import FinishForm from './FinishForm';
import { useDispatch } from 'react-redux';
import { loginUser, updateCurrentUser } from '@/libs/redux/reducers/authReducer';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { createIOCompany, updateIOCompany, updateUser } from '@/graphql/mutations';
import { Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import { Loader1 } from '../Loaders';
const CreateCompanyComponent = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e, title) => {
    setFormData((prevState) => ({ ...prevState, [title]: e }));
  };

  const handleNext = () => {
    previewLoader();
    setCurrentStep(currentStep + 1);
  };
  const previewLoader = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  };
  const gotoDashboard = () => router.push('/dashboard');
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleFormSubmit = async (service) => {
    console.log('inside');
    setShowLoader(true);

    formData.services = service;
    console.log(formData);
    try {
      const newID = uuid();
      const image = await Storage.put(`${formData.company.company_name + newID}`, formData.company.logo, {
        level: 'public',
      });
      console.log('image::', image);
      formData.company.logo = image.key;

      const createIOCompanyAPI = await API.graphql({
        query: createIOCompany,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: {
          input: {
            company_name: formData.company?.company_name,
            company_tagline: formData.company?.company_tagline,
            website_url: formData.company?.website_url,
            email: formData.company?.email,
            phone_no: formData.company?.phone_no,
            no_of_employee: formData.company?.no_of_employee,
            founded: formData.company?.founded,
            description: formData.company?.description,
            logo: formData.company?.logo,
            headquarter_location: formData.company?.location[0],
            location: formData.company?.location,
            services: formData.services,
            total_earning: formData.company?.total_earning,
            project_earnings: formData.company?.project_earnings,
            hourly_rate: formData.company?.hourly_rate,
            ownerId: user.id,
          },
        },
      });
      console.log(createIOCompanyAPI);
      const companyId = createIOCompanyAPI.data.createIOCompany.id;
      const updateUserCompanyAPI = await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            userCompanyId: companyId,
          },
        },
      });
      const newUser = updateUserCompanyAPI.data.updateUser;

      console.log('Comapany API with user', newUser);
      dispatch(updateCurrentUser(newUser));
      handleNext();
      toast.success('Company Created Successfully');
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      toast.error('Err while Listing company, Try again later');
      console.error('ERR CREATE Company', err);
    }
  };
  const steps = [
    {
      id: 1,
      title: 'Company Info',
      component: (
        <CompanyInfoForm
          formData={formData}
          handleChanges={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentStep={currentStep}
        />
      ),
      buttonTitle: 'Services',
    },
    {
      id: 2,
      title: 'Services Lines',
      component: (
        <ServicesForm
          formData={formData}
          handleChange={handleChange}
          handlePrev={handlePrev}
          // handleNext={handleNext}
          handleNext={handleFormSubmit}
          currentStep={currentStep}
        />
      ),
      buttonTitle: loading ? <Spinner /> : 'Finish',
    },

    {
      id: 3,
      title: 'Finish',
      component: <FinishForm handleFormSubmit={handleFormSubmit} currentStep={gotoDashboard} handlePrev={handlePrev} />,
      buttonTitle: 'Dashboard',
    },
  ];

  return (
    <div className='blog-detail-container'>
      <Container>
        {showLoader && <Loader1 />}
        <section className='main-section'>
          <h1>Create your Company Profile</h1>

          <div className='stepper'>
            <Row className='progress-bar-section'>
              <Col className={`company-info-bar ${steps[currentStep].id >= 1 ? 'active' : ''}`}>
                <div className={`percentage-section ${steps[currentStep].id === 1 ? 'active' : ''}`}>
                  <div className='percentage-card'>50%</div>
                  <div className='percentage-line'></div>
                </div>
              </Col>

              <Col className={`company-info-bar ${steps[currentStep].id >= 2 ? 'active' : ''}`}>
                <div className={`percentage-section ${steps[currentStep].id === 2 ? 'active' : ''}`}>
                  <div className='percentage-card'>90%</div>
                  <div className='percentage-line'></div>
                </div>
              </Col>

              <Col className={`company-info-bar ${steps[currentStep].id >= 3 ? 'active' : ''}`}>
                <div className={`percentage-section ${steps[currentStep].id === 3 ? 'active' : ''}`}>
                  <div className='percentage-card'>100%</div>
                  <div className='percentage-line'></div>
                </div>
              </Col>
            </Row>
            <ol className='progress-bar-list'>
              {steps.map((data) => (
                <li key={data.id} className={`${steps[currentStep].id >= data.id ? 'active' : ''}`}>
                  {data.title}
                </li>
              ))}
            </ol>
          </div>

          {steps[currentStep].component}
        </section>
      </Container>
    </div>
  );
};
export default CreateCompanyComponent;
