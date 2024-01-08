import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, Spinner } from 'react-bootstrap';
import { TextAreaField } from '@aws-amplify/ui-react';
import ReactStars from 'react-rating-stars-component';
import { MultiSelect } from 'react-multi-select-component';
import { useRouter } from 'next/router';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { createReview } from '@/graphql/mutations';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ReactSVG } from 'react-svg';

const category = [
  { label: 'Software Development', value: 'software_development' },
  { label: 'Web Development', value: 'web_development' },
  { label: 'E-Commerce Development', value: 'ecommerce_Development' },
  { label: 'AR/VR Development', value: 'ar_vr_development' },
  { label: 'Machine Learning', value: 'machine_learning' },
  { label: 'Digital Marketing', value: 'digital_marketing' },
  { label: 'Social Media', value: 'social_media' },
  { label: 'SEO', value: 'seo' },
];

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const leaveReviewSchema = Yup.object().shape({
  company_name: Yup.string().required('Company Name is required'),
  company_locaion: Yup.string().required('Company Location is required'),
  start_date: Yup.string().required('Start Date is required'),
  end_date: Yup.string()
    .required('End Date is required')
    .test('isEndDateAfterStartDate', 'End Date must be after Start Date', function (value) {
      const startDate = new Date(this.parent.start_date);
      const endDate = new Date(value);
      return endDate > startDate;
    }),
  project_cost: Yup.string().required('Project Cost is required'),
  project_description: Yup.string().required('Project Description is required'),
  review: Yup.string().required('Review is required'),
  quality_work: Yup.string().required('Quality Work rating is required'),
  cost: Yup.string().required('Cost rating is required'),
  response_time: Yup.string().required('Response Time rating is required'),
  overall_experience: Yup.string().required('Overall Experience rating is required'),
  review_description: Yup.string().required('Review Description is required'),
  offered_service: Yup.array().min(1, 'Select at least one service').required('Services are required'),
});
export const Review = ({ handleFormFinish }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const id = router.query.id;
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log(id, 'Reviews ID');
  const formik = useFormik({
    initialValues: {
      company_name: null,
      company_locaion: null,
      offered_service: [],
      start_date: null,
      end_date: null,
      project_cost: null,
      project_description: null,
      review: null,
      quality_work: null,
      cost: null,
      response_time: null,
      overall_experience: null,
      review_description: null,
    },
    validationSchema: leaveReviewSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const uid = uuid();
        await API.graphql({
          query: createReview,
          variables: {
            input: {
              id: uid,
              company_name: values.company_name,
              company_locaion: values.company_locaion,
              offered_service: values.offered_service,
              start_date: values.start_date,
              end_date: values.end_date,
              project_cost: values.project_cost,
              project_description: values.project_description,
              review: values.review,
              rating: {
                quality_work: values.quality_work,
                cost: values.cost,
                response_time: values.response_time,
                overall_experience: values.overall_experience,
              },
              review_description: values.review_description,
              ownerId: user.id,
              // companyReviewsId: id,
              iOCompanyReviewsId: id,
            },
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        formik.resetForm();
        handleFormFinish();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('error while posting review', error);
      }
    },
  });
  const [selectedProjectCost, setSelectedProjectCost] = useState(null);
  const [selectedcategory, setSelectedcategory] = useState([]);
  return (
    <>
      <section className='section-review'>
        <Container>
          <Row>
            <div className='review-content'>
              <div className='review-heading'>
                <h1>Leave a Review</h1>
                <span className='underline-border'></span>
              </div>
              <Form className='review-form' onSubmit={formik.handleSubmit}>
                <div className='cmpny-info-title'>
                  <h5>Your Company Info:</h5>
                </div>
                <Row>
                  <Col md={6} className='input-col'>
                    <Form.Label className='review-form-label' htmlFor='reviewcmpnyname'>
                      Company Name
                    </Form.Label>
                    <Form.Control
                      className='review-form-input'
                      name='company_name'
                      type='text'
                      id='reviewcmpnyname'
                      aria-describedby='reviewcmpnyname'
                      placeholder='Company Name'
                      value={formik.values.company_name}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.company_name && formik.errors.company_name ? (
                      <div className='input-errors'>{formik.errors.company_name}</div>
                    ) : null}
                  </Col>
                  <Col md={6} className='input-col'>
                    <Form.Label className='review-form-label' htmlFor='reviewcompanylocation'>
                      Company Location
                    </Form.Label>
                    <div className='location-img position-relative'>
                      <ReactSVG className='location-icon' src='/assets/images/svg/location.svg' />
                      <Form.Control
                        className='review-form-input location-field'
                        type='text'
                        name='company_locaion'
                        id='reviewcompanylocation'
                        aria-describedby='reviewcompanylocation'
                        placeholder='Location'
                        value={formik.values.company_locaion}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.company_locaion && formik.errors.company_locaion ? (
                      <div className='input-errors'>{formik.errors.company_locaion}</div>
                    ) : null}
                  </Col>

                  {step >= 2 && (
                    <>
                      <div className='cmpny-info-title'>
                        <h5>Project Details:</h5>
                      </div>
                      <Col md={6} className='input-col'>
                        <Form.Label className='review-form-label' htmlFor='companyServices'>
                          Services You got from <b style={{ fontWeight: 600 }}>IDENBRID</b>
                        </Form.Label>
                        <MultiSelect
                          options={category}
                          value={selectedcategory}
                          onChange={(selectedOptions) => {
                            setSelectedcategory(selectedOptions);
                            const selectedValues = selectedOptions.map((option) => option.label);
                            formik.setFieldValue('offered_service', selectedValues);
                            if (formik.touched.category) {
                              formik.setFieldError('offered_service', '');
                            }
                          }}
                          labelledBy='Search here'
                          className='reviewform-inputselect'
                        />
                        {formik.touched.offered_service && formik.errors.offered_service ? (
                          <div className='input-errors'>{formik.errors.offered_service}</div>
                        ) : null}
                      </Col>
                      <Col md={6} className='input-col'>
                        <Row>
                          <Col md={6}>
                            <Form.Label className='review-form-label' htmlFor='startDate'>
                              Start Date
                            </Form.Label>
                            <Form.Control
                              className='review-form-input'
                              type='date'
                              name='start_date'
                              id='startDate'
                              aria-describedby='startDate'
                              value={formik.values.start_date}
                              onChange={formik.handleChange}
                            />
                            {formik.touched.start_date && formik.errors.start_date ? (
                              <div className='input-errors'>{formik.errors.start_date}</div>
                            ) : null}
                          </Col>
                          <Col md={6}>
                            <Form.Label className='review-form-label' htmlFor='endDate'>
                              End Date
                            </Form.Label>
                            <Form.Control
                              className='review-form-input'
                              type='date'
                              id='endDate'
                              name='end_date'
                              aria-describedby='endDate'
                              placeholder='Location of your Company'
                              value={formik.values.end_date}
                              onChange={formik.handleChange}
                            />
                            {formik.touched.end_date && formik.errors.end_date ? (
                              <div className='input-errors'>{formik.errors.end_date}</div>
                            ) : null}
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Form.Label className='review-form-label' htmlFor='projectCost'>
                          Provided Cost
                        </Form.Label>

                        <Dropdown className='review-form-inputcost' autoClose='outside'>
                          <Dropdown.Toggle id='dropdown-autoclose-outside' className='service-dropdown'>
                            {selectedProjectCost ? `Under $${selectedProjectCost.toLocaleString()}` : 'Provided Cost'}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $250,000'
                                name='project_cost'
                                id='ProvidedServiceRadios1'
                                value='250000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $100,000'
                                name='project_cost'
                                id='ProvidedServiceRadios12'
                                value='100000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $75,000'
                                name='project_cost'
                                id='ProvidedServiceRadios13'
                                value='75000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $50,000'
                                name='project_cost'
                                id='ProvidedServiceRadios14'
                                value='50000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $25,000'
                                name='project_cost'
                                id='ProvidedServiceRadios15'
                                value='25000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $10,000'
                                name='project_cost'
                                id='ProvidedServiceRadios16'
                                value='10000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                            <Dropdown>
                              <Form.Check
                                type='radio'
                                label='Under $5,000'
                                name='project_cost'
                                id='ProvidedServiceRadios17'
                                value='5000'
                                onChange={(e) => {
                                  formik.setFieldValue('project_cost', e.target.value);
                                  setSelectedProjectCost(parseInt(e.target.value));
                                  if (formik.touched.category) {
                                    formik.setFieldError('project_cost', '');
                                  }
                                }}
                              />
                            </Dropdown>
                          </Dropdown.Menu>
                        </Dropdown>
                        {formik.touched.project_cost && formik.errors.project_cost ? (
                          <div className='input-errors'>{formik.errors.project_cost}</div>
                        ) : null}
                      </Col>
                      <Col md={6}></Col>
                      <Col md={12} className='desc-col'>
                        <Form.Label className='review-form-label' htmlFor='projectDesc'>
                          Describe About your Project
                        </Form.Label>
                        <TextAreaField
                          className='review-form-textarea'
                          id='projectDesc'
                          name='project_description'
                          aria-describedby='projectDesc'
                          placeholder='Type here...'
                          value={formik.values.project_description}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.project_description && formik.errors.project_description ? (
                          <div className='input-errors'>{formik.errors.project_description}</div>
                        ) : null}
                      </Col>
                    </>
                  )}

                  {step >= 3 && (
                    <>
                      <div className='cmpny-info-title'>
                        <h5>Your Review:</h5>
                      </div>
                      <Col md={6} className='input-col'>
                        <Form.Label className='review-form-label' htmlFor='singleLineReview'>
                          Review in Single Sentence
                        </Form.Label>
                        <Form.Control
                          className='review-form-input'
                          type='text'
                          id='singleLineReview'
                          aria-describedby='singleLineReview'
                          placeholder='Review'
                          name='review'
                          value={formik.values.review}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.review && formik.errors.review ? (
                          <div className='input-errors'>{formik.errors.review}</div>
                        ) : null}
                      </Col>
                      <Col md={6} className='input-col'></Col>
                      <Col md={12}></Col>
                      <Col md={6} className='rtng-stars-col'>
                        <div className='raiting-title'>
                          <label className='review-form-label form-label'>Quality of Service & Deliverables</label>
                        </div>
                        <div className='raiting'>
                          <div className='raiting-star'>
                            <ReactStars
                              isHalf={true}
                              count={5}
                              onChange={(value) => {
                                formik.setFieldValue('quality_work', value);
                                if (formik.touched.category) {
                                  formik.setFieldError('quality_work', '');
                                }
                              }}
                              background-color='red'
                              size={24}
                              activeColor='#FF9922'
                            />
                            {formik.touched.quality_work && formik.errors.quality_work ? (
                              <div className='input-errors'>{formik.errors.quality_work}</div>
                            ) : null}
                          </div>
                          <div className='raiting-points'>
                            <p>{formik.values.quality_work || 0}</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className='rtng-stars-col'>
                        <div className='raiting-title'>
                          <label className='review-form-label form-label'>Cost and Value for Money</label>
                        </div>
                        <div className='raiting'>
                          <div className='raiting-star'>
                            <ReactStars
                              isHalf={true}
                              count={5}
                              onChange={(value) => {
                                formik.setFieldValue('cost', value);
                                if (formik.touched.category) {
                                  formik.setFieldError('cost', '');
                                }
                              }}
                              size={24}
                              activeColor='#FF9922'
                            />
                            {formik.touched.cost && formik.errors.cost ? (
                              <div className='input-errors'>{formik.errors.cost}</div>
                            ) : null}
                          </div>
                          <div className='raiting-points'>
                            <p>{formik.values.cost || 0}</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className='rtng-stars-col'>
                        <div className='raiting-title'>
                          <label className='review-form-label form-label'>Timeliness and Meeting Deadline</label>
                        </div>
                        <div className='raiting'>
                          <div className='raiting-star'>
                            <ReactStars
                              isHalf={true}
                              count={5}
                              onChange={(value) => {
                                formik.setFieldValue('response_time', value);
                                if (formik.touched.category) {
                                  formik.setFieldError('response_time', '');
                                }
                              }}
                              size={24}
                              activeColor='#FF9922'
                            />
                            {formik.touched.response_time && formik.errors.response_time ? (
                              <div className='input-errors'>{formik.errors.response_time}</div>
                            ) : null}
                          </div>
                          <div className='raiting-points'>
                            <p>{formik.values.response_time || 0}</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className='rtng-stars-col'>
                        <div className='raiting-title'>
                          <label className='review-form-label form-label'>Overall Experience</label>
                        </div>
                        <div className='raiting'>
                          <div className='raiting-star'>
                            <ReactStars
                              isHalf={true}
                              count={5}
                              onChange={(value) => {
                                formik.setFieldValue('overall_experience', value);
                                if (formik.touched.category) {
                                  formik.setFieldError('overall_experience', '');
                                }
                              }}
                              size={24}
                              activeColor='#FF9922'
                            />
                            {formik.touched.overall_experience && formik.errors.overall_experience ? (
                              <div className='input-errors'>{formik.errors.overall_experience}</div>
                            ) : null}
                          </div>
                          <div className='raiting-points'>
                            <p>{formik.values.overall_experience || 0}</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={12} className='describe-review'>
                        <Form.Label className='review-form-label' htmlFor='reviewDesc'>
                          Describe your Review
                        </Form.Label>
                        <TextAreaField
                          className='review-form-textarea'
                          id='reviewDesc'
                          aria-describedby='reviewDesc'
                          placeholder='Type here...'
                          name='review_description'
                          value={formik.values.review_description}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.review_description && formik.errors.review_description ? (
                          <div className='input-errors'>{formik.errors.review_description}</div>
                        ) : null}
                      </Col>
                    </>
                  )}

                  <Col md={12} className='button-col'>
                    <div className='review-form-buttons'>
                      <div className='review-draft-buttons'>
                        {/* <div className='save-drafts-button'>
                          <Button className='save-drafts-btn'>Save in drafts</Button>
                        </div> */}
                        <div className='cancel-review-button'>
                          <Button className='cancel-review-btn border-danger' onClick={() => router.back()}>
                            Cancel Review
                          </Button>
                        </div>
                      </div>
                      <div className='next-form-open-button'>
                        {step < 3 ? (
                          <Button
                            onClick={() =>
                              setStep((prevStep) => {
                                return prevStep + 1;
                              })
                            }
                            className='next-form-open-btn'
                          >
                            Next
                          </Button>
                        ) : (
                          <Button className='next-form-open-btn' type='submit'>
                            {isLoading ? <Spinner color='light' /> : 'Finish'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Review;
