import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import { Form, Formik, Field, FieldArray } from 'formik';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';
import { StorageImage } from '@aws-amplify/ui-react-storage';

const no_of_employee = [
  { label: '1-10', value: '1-10' },
  { label: '10-50', value: '10-50' },
  { label: '50-150', value: '50-150' },
  { label: '150-250', value: '150-250' },
  { label: '250-500', value: '250-500' },
  { label: '500-999', value: '500-999' },
];
const founded = [
  { label: '2001', value: '2001' },
  { label: '2002', value: '2002' },
  { label: '2003', value: '2003' },
  { label: '2004', value: '2004' },
  { label: '2005', value: '2005' },
  { label: '2006', value: '2006' },
];
const project_earnings = [
  { label: '10000$', value: '10000' },
  { label: '25000$', value: '25000' },
  { label: '50000$', value: '50000' },
  { label: '75000$', value: '75000' },
  { label: '100000$', value: '100000' },
];
const hourly_rate = [
  { label: '10$', value: '10' },
  { label: '25$', value: '25' },
  { label: '50$', value: '50' },
  { label: '75$', value: '75' },
  { label: '100$', value: '100' },
];
const CompanyInfoForm = ({ formData, handleChanges, handlePrev, handleNext, currentStep }) => {
  const formikRef = useRef();

  const isFileValid = (file) => {
    const allowedExtensions = ['jpeg', 'jpg', 'png', 'svg', 'webp'];
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(extension);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    formikRef.current.setFieldValue('logo', file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles),
    accept: ['.jpeg', '.png', '.jpg', '.svg', '.webp'],
    multiple: false,
  });

  const logoString = formData?.logo;

  useEffect(() => {
    if (formData?.company) {
      const previewUrl = URL.createObjectURL(formData?.company.logo);
      setImagePreview(previewUrl);
    }
  }, [formData]);

  const [showEmployeesDropdown, setShowEmployeesDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showCostDropdown, setShowCostDropdown] = useState(false);
  const [showRateDropdown, setShowRateDropdown] = useState(false);

  const formValues = useMemo(
    () => ({
      email: formData?.company?.email || formData?.email || '',
      company_name: formData?.company?.company_name || formData?.company_name || '',
      company_tagline: formData?.company?.company_tagline || formData?.company_tagline || '',
      website_url: formData?.company?.website_url || formData?.website_url || '',
      phone_no: formData?.company?.phone_no || formData?.phone_no || '',
      description: formData?.company?.description || formData?.description || '',
      total_earning: formData?.company?.total_earning || formData?.total_earning || '',
      location: formData?.company?.location || formData?.location || [''],
      no_of_employee: formData?.company?.no_of_employee || formData?.no_of_employee || '',
      founded: formData?.company?.founded || formData?.founded || '',
      project_earnings: formData?.company?.project_earnings || formData?.project_earnings || '',
      hourly_rate: formData?.company?.hourly_rate || formData?.hourly_rate || '',
      logo: formData?.company?.logo || formData?.logo || null,
    }),
    [formData]
  );
  return (
    <section className='form-section'>
      {handlePrev && <h3 className='from-heading'>Create your Company Profile</h3>}

      <Formik
        enableReinitialize={true}
        innerRef={formikRef}
        initialValues={formValues}
        validationSchema={Yup.object().shape({
          company_name: Yup.string()
            .required('This field is required*')
            .min(3, 'Company Name must be at least 3 characters long!'),
          company_tagline: Yup.string(),
          website_url: Yup.string().required('This field is required*').url('Url is invalid!'),
          email: Yup.string().email('Email must be a valid email').required('This field is required*'),

          // phone_no: Yup.string()
          //   .required('This field is required*')
          //   .matches(/^\+?[0-9]+$/, 'Invalid phone number. Please enter only digits')
          //   .min(10, 'Phone number must be at least 10 digits')
          //   .max(15, 'Phone number must not exceed 15 digits'),

          phone_no: Yup.string().required('This field is required*'),
          description: Yup.string()
            .required('This field is required*')
            .min(100, 'Description must be at least 100 characters long!'),
          location: Yup.array().of(Yup.string().required('This field is required*')),
          total_earning: Yup.string(),
          no_of_employee: Yup.string(),
          founded: Yup.string(),
          project_earnings: Yup.string().required('Please select project cost!'),
          hourly_rate: Yup.string().required('Please select hourly rate!'),

          logo:
            currentStep !== undefined
              ? Yup.mixed()
                  .test(
                    'fileFormat',
                    'Unsupported file format. Please upload JPEG, PNG, SVG, or WebP.',
                    (value) => value && isFileValid(value)
                  )
                  .required('This field is required*')
              : Yup.string().required('This field is required*'),
        })}
        onSubmit={(values, { resetForm }) => {
          handleChanges(values, 'company');
          handleNext?.();
          resetForm();
        }}
      >
        {({ values, isSubmitting, errors, touched, submitForm, handleChange }) => (
          <>
            <Row>
              <Col md='6'>
                <Form>
                  <div>
                    <label className='formHeader topHeader'>Company Name*</label>
                    <Field
                      name='company_name'
                      type='text'
                      className={`textField form-control ${
                        errors.company_name && touched.company_name ? 'errorBorder' : ''
                      } `}
                      label='Company Name*'
                      placeholder='Company Name'
                    />
                    {errors.company_name && touched.company_name ? (
                      <div className='errors'>{errors.company_name}</div>
                    ) : null}
                  </div>
                  <div>
                    <label className='formHeader'>Tagline</label>
                    <Field
                      name='company_tagline'
                      type='text'
                      className={`textField form-control ${
                        errors.company_tagline && touched.company_tagline ? 'errorBorder' : ''
                      } `}
                      label='Tagline*'
                      placeholder='Enter Tagline'
                    />
                    {errors.company_tagline && touched.company_tagline ? (
                      <div className='errors'>{errors.company_tagline}</div>
                    ) : null}
                  </div>
                  <div>
                    <label className='formHeader'>Company Website*</label>

                    <div className='search-input'>
                      <Image src='/assets/images/svg/globe.svg' alt='search' width={15} height={15} />
                      <Field
                        name='website_url'
                        type='url'
                        className={`${errors.website_url && touched.website_url ? 'errorBorder' : ''} `}
                        placeholder='Website'
                      />
                    </div>
                    {errors.website_url && touched.website_url ? (
                      <div className='errors'>{errors.website_url}</div>
                    ) : null}
                  </div>
                  <div>
                    <label className='formHeader'>Company Email*</label>
                    <Field
                      name='email'
                      type='email'
                      className={`textField form-control ${errors.email && touched.email ? 'errorBorder' : ''} `}
                      label='Company Email*'
                      placeholder='email@company.com'
                    />
                    {errors.email && touched.email ? <div className='errors'>{errors.email}</div> : null}
                  </div>
                  <div>
                    <label className='formHeader'>Phone No.*</label>
                    <Field
                      name='phone_no'
                      type='tel'
                      className={`textField form-control ${errors.phone_no && touched.phone_no ? 'errorBorder' : ''} `}
                      label='phone_no'
                      placeholder='+92 306 404 1221'
                    />
                    {errors.phone_no && touched.phone_no ? <div className='errors'>{errors.phone_no}</div> : null}
                  </div>
                  <Row>
                    <Col sm='6'>
                      <label className='formHeader'>Total Employees</label>

                      <Dropdown
                        className='clientbudget-field filter-field'
                        autoClose='outside'
                        show={showEmployeesDropdown}
                        onToggle={() => setShowEmployeesDropdown(!showEmployeesDropdown)}
                      >
                        <Dropdown.Toggle
                          id='dropdown-autoclose-outside'
                          className='clientbudget-dropdown'
                          onClick={() => setShowEmployeesDropdown(!showEmployeesDropdown)}
                        >
                          {values.no_of_employee ? (
                            <>{no_of_employee.find((item) => item.value === values.no_of_employee)?.label}</>
                          ) : (
                            'Select Value'
                          )}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {no_of_employee.map((employees, index) => (
                            <Dropdown key={index}>
                              <label className='formLabel' htmlFor={`no_of_employee.${employees.value}${index}`}>
                                <Field
                                  type='radio'
                                  value={employees.value}
                                  label={employees.label}
                                  name='no_of_employee'
                                  checked={values.no_of_employee === employees.value}
                                  className='form-check-input'
                                  id={`no_of_employee.${employees.value}${index}`}
                                  onChange={(e) => {
                                    setShowEmployeesDropdown(false);
                                    handleChange(e);
                                  }}
                                />
                                {employees.label}
                              </label>
                            </Dropdown>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col sm='6'>
                      <label className='formHeader'>Established Year</label>

                      <Dropdown
                        className='clientbudget-field filter-field'
                        autoClose='outside'
                        show={showYearDropdown}
                        onToggle={() => setShowYearDropdown(!showYearDropdown)}
                      >
                        <Dropdown.Toggle
                          id='dropdown-autoclose'
                          className='clientbudget-dropdown'
                          onClick={() => setShowYearDropdown(!showYearDropdown)}
                        >
                          {values.founded ? (
                            <>{founded.find((item) => item.value === values.founded)?.label}</>
                          ) : (
                            'Select Value'
                          )}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {founded.map((year, index) => (
                            <Dropdown key={index}>
                              <label className='formLabel' htmlFor={`founded.${year.value}${index}`}>
                                <Field
                                  type='radio'
                                  value={year.value}
                                  label={year.label}
                                  name='founded'
                                  className='form-check-input'
                                  checked={values.founded === year.value}
                                  id={`founded.${year.value}${index}`}
                                  onChange={(e) => {
                                    setShowYearDropdown(false);
                                    handleChange(e);
                                  }}
                                />
                                {year.label}
                              </label>
                            </Dropdown>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>

                  <div>
                    <label className='formHeader'>Description*</label>
                    <Field
                      name='description'
                      as='textarea'
                      rows={4}
                      className={`textAreaField form-control ${
                        errors.description && touched.description ? 'errorBorder' : ''
                      } `}
                      label='description'
                      placeholder='Short description about your company'
                    />
                    {errors.description && touched.description ? (
                      <div className='errors'>{errors.description}</div>
                    ) : null}
                  </div>
                </Form>
              </Col>
              <Col md='6'>
                <section className='apply-form__dropzone-wrapper'>
                  <div
                    {...getRootProps({
                      onClick: () => {
                        setImagePreview(null);
                        formikRef.current.setFieldValue('logo', '');
                      },
                      className: 'apply-form__dropzone',
                    })}
                  >
                    <div className={`profile-image-section ${imagePreview ? 'image-padding' : ''}`}>
                      {imagePreview ? (
                        <Image
                          width='250'
                          height='250'
                          src={imagePreview}
                          alt='File Preview'
                          className='secleted-image'
                        />
                      ) : (
                        (logoString && (
                          <StorageImage
                            className='card-img-top'
                            imgKey={logoString}
                            loading='lazy'
                            alt={values.company_name}
                          />
                        )) || (
                          <>
                            <ReactSVG src='/assets/images/svg/profileImage.svg' />
                            <p className='profile-image-text'>Drag and drop an Image or browse for an image</p>
                          </>
                        )
                      )}
                    </div>
                    <input {...getInputProps()} />
                    <div className='content-wrapper'>
                      <h3>Your Company logo must be one of the following image formats:</h3>
                      <ul>
                        <li>JPEG</li>
                        <li>PNG</li>
                        <li>SVG</li>
                        <li>Webp</li>
                      </ul>
                      <p>Maximum file size is 5Mb</p>
                    </div>
                  </div>

                  {errors.logo ? <div className='errors'>{errors.logo}</div> : null}
                </section>

                <div className='padding-bottom'>
                  <h3 className='from-heading'>Location</h3>

                  <label className='formHeader topHeader'>Headquarters*</label>

                  <FieldArray name='location'>
                    {({ insert, remove, push }) =>
                      values.location.length > 0 &&
                      values.location.map((branch, index) => (
                        <div key={index}>
                          {index !== 0 && <label className='formHeader'>{`Branch ${index + 1}`}</label>}
                          <div className='search-input-headquater' key='index'>
                            <Field
                              name={`location.${index}`}
                              type='text'
                              className={` ${
                                errors.location && touched.location && errors.location[index] ? 'errorBorder' : ''
                              } `}
                              label={`Branch ${index + 1}`}
                              placeholder='Search for Address'
                            />
                            {index === 0 ? (
                              <div className='button-wrapper'>
                                <ReactSVG
                                  src='/assets/images/svg/plus-circle-white.svg'
                                  onClick={() => {
                                    if (values.location.length < 5) {
                                      push('');
                                    }
                                  }}
                                  // onClick={addBranch}
                                  beforeInjection={(svg) => {
                                    svg.classList.add('AddButtton');
                                  }}
                                />
                              </div>
                            ) : (
                              <div className='button-wrapper'>
                                <ReactSVG
                                  src='/assets/images/svg/minus-circle.svg'
                                  // src='/assets/images/svg/plus-circle.svg'
                                  onClick={() => remove(index)}
                                  // onClick={() => removeBranch(index)}
                                  beforeInjection={(svg) => {
                                    svg.classList.add('AddButtton');
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          {errors.location && touched.location && errors.location[index] ? (
                            <div className='errors'>{errors.location[index]}</div>
                          ) : null}
                        </div>
                      ))
                    }
                  </FieldArray>
                </div>

                <div>
                  <h3 className='from-heading'>Project Information</h3>

                  <label className='formHeader topHeader'>Total Earnings</label>
                  <Field
                    name='total_earning'
                    type='number'
                    className={`textField form-control ${
                      errors.total_earning && touched.total_earning ? 'errorBorder' : ''
                    } `}
                    label='total_earning*'
                    placeholder='Enter Earning'
                  />
                  {errors.total_earning && touched.total_earning ? (
                    <div className='errors'>{errors.total_earning}</div>
                  ) : null}
                </div>
                <Row>
                  <Col sm='6'>
                    <label className='formHeader'> Minimum Project Cost*</label>

                    <Dropdown
                      className='clientbudget-field filter-field'
                      autoClose='outside'
                      show={showCostDropdown}
                      onToggle={() => setShowCostDropdown(!showCostDropdown)}
                    >
                      <Dropdown.Toggle
                        id='dropdown'
                        className='clientbudget-dropdown'
                        onClick={() => setShowCostDropdown(!showCostDropdown)}
                      >
                        {values.project_earnings ? (
                          <>{project_earnings.find((item) => item.value === values.project_earnings)?.label}</>
                        ) : (
                          'Select Value'
                        )}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {project_earnings.map((cost, index) => (
                          <Dropdown key={index}>
                            <label className='formLabel' htmlFor={`project_earnings.${cost.value}${index}`}>
                              <Field
                                type='radio'
                                value={cost.value}
                                label={cost.label}
                                name='project_earnings'
                                className='form-check-input'
                                checked={values.project_earnings === cost.value}
                                id={`project_earnings.${cost.value}${index}`}
                                onChange={(e) => {
                                  setShowCostDropdown(false);
                                  handleChange(e);
                                }}
                              />
                              {cost.label}
                            </label>
                          </Dropdown>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    {errors.project_earnings && touched.project_earnings ? (
                      <div className='errors'>{errors.project_earnings}</div>
                    ) : null}
                  </Col>
                  <Col sm='6'>
                    <label className='formHeader'> Average Hourly Rate*</label>

                    <Dropdown
                      className='clientbudget-field filter-field'
                      autoClose='outside'
                      show={showRateDropdown}
                      onToggle={() => setShowRateDropdown(!showRateDropdown)}
                    >
                      <Dropdown.Toggle
                        id='dropdown-autoclose-out'
                        className='clientbudget-dropdown'
                        onClick={() => setShowRateDropdown(!showRateDropdown)}
                      >
                        {values.hourly_rate ? (
                          <>{hourly_rate.find((item) => item.value === values.hourly_rate)?.label}</>
                        ) : (
                          'Select Value'
                        )}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {hourly_rate.map((rate, index) => (
                          <Dropdown key={index}>
                            <label className='formLabel' htmlFor={`hourly_rate.${rate.value}${index}`}>
                              <Field
                                type='radio'
                                value={rate.value}
                                label={rate.label}
                                name='hourly_rate'
                                className='form-check-input'
                                checked={values.hourly_rate === rate.value}
                                id={`hourly_rate.${rate.value}${index}`}
                                onChange={(e) => {
                                  setShowRateDropdown(false);
                                  handleChange(e);
                                }}
                              />
                              {rate.label}
                            </label>
                          </Dropdown>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    {errors.hourly_rate && touched.hourly_rate ? (
                      <div className='errors'>{errors.hourly_rate}</div>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr className='divider' />

            {currentStep !== undefined ? (
              <div className={`button-section ${!currentStep ? 'justify-content-end' : ''}`}>
                {(currentStep && (
                  <button disabled={currentStep === 0} onClick={handlePrev} className='back-arrow'>
                    <ReactSVG src='/assets/images/svg/backArrow.svg' /> Back
                  </button>
                )) ||
                  null}
                <button type='submit' onClick={submitForm} className='next-arrow'>
                  Services <ReactSVG src='/assets/images/svg/nextArrow.svg' />
                </button>
              </div>
            ) : (
              <div className={`button-section-edit`}>
                {handlePrev()}
                <button type='submit' onClick={submitForm} className='next-arrow'>
                  Save Changes
                </button>
              </div>
            )}
          </>
        )}
      </Formik>
    </section>
  );
};

export default CompanyInfoForm;
