import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { createQuotation } from '@/graphql/mutations';
import { MultiSelect } from 'react-multi-select-component';
const quoteservices = [
  { label: 'Software Development', value: 'software_development' },
  { label: 'Web Development', value: 'web_development' },
  { label: 'E-Commerce Development', value: 'ecommerce_Development' },
  { label: 'AR/VR Development', value: 'ar_vr_development' },
  { label: 'Machine Learning', value: 'machine_learning' },
  { label: 'Digital Marketing', value: 'digital_marketing' },
  { label: 'Social Media', value: 'social_media' },
  { label: 'SEO', value: 'seo' },
];
const BannerComponent = () => {
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const handleFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    setFileName(newFile.name);
  };
  const [catErr, setCatErr] = useState(null);

  const quote = useFormik({
    initialValues: {
      name: '',
      email: '',
      organization: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      organization: Yup.string().required('Company name is required'),
      // category: Yup.array().min(1, 'Select at least one category').required('Categories are required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (selectedServices.length === 0) {
        setCatErr('Please select at least one service');
      } else {
        setLoading(true);
        try {
          const finalCategories = selectedServices.map((x) => x.label);
          let finalData = {
            name: values.name,
            email: values.email,
            organization: values.organization,
            description: values.description,
            category: finalCategories,
          };
          if (file) {
            await Storage.put(file.name, file);
            finalData.file = file.name;
          }
          const res = await API.graphql(graphqlOperation(createQuotation, { input: finalData }));
          if (res) {
            toast.success('Quotation submit successfully');
            setLoading(false);
            resetForm();
            setFile(null);
            setFileName('');
            setSelectedServices([]);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
          setLoading(false);
        }
      }
    },
  });

  return (
    <div>
      <section className='main-banner'>
        <Container className='position-relative'>
          <Row>
            <Col md={12}>
              <Image
                src='/assets/images/svg/star_element.svg'
                alt='star image'
                className='star-image'
                width={89}
                height={100}
              />
              <h1 className='heading-h1'>
                The Largest <span className='primary-text'>Software Development</span>
                <br />
                Listing in <span className='primary-text layer-text'>South Asia</span>
              </h1>
              <p className='banner-p'>
                We connect you with the top IT development companies in India, Pakistan and Bangladesh
              </p>
              <div className='star-element-box'>
                <Image
                  src='/assets/images/rating_element.svg'
                  alt='main logo'
                  className='star-element-img'
                  width={200}
                  height={50}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='banner-form-section'>
        <Image src='/assets/images/bg-shade.png' alt='main logo' className='bg-shade' width={511} height={676} />
        <Container>
          <div className='banner-form-box'>
            <Row>
              <Col md={7} className='order-2 order-md-1'>
                <div className='who-we-box'>
                  <h2 className='about-service-h2'>
                    Who are <span className='primary-text'>We.</span>
                  </h2>
                  <p className='about-service-p'>
                    IT Orchard is a platform that helps individuals and businesses find the best web, IT, and software
                    development companies in their region. By narrowing down the search results, IT Orchard saves users
                    time and effort in finding the right company for their needs.IT Orchard's team of experts
                    meticulously evaluates each company listed on the platform to ensure they meet the highest standards
                    of quality and professionalism.
                  </p>
                  <h3 className='service-h3'>
                    <span className='primary-text'>Services</span> You get.
                  </h3>
                  <ul className='service-list'>
                    <li>Platform to find top IT companies</li>
                    <li>Find trusted companies evaluated by experts</li>
                    <li>Search by category</li>
                    <li>Save your time and effort</li>
                  </ul>
                </div>
              </Col>
              <Col md={5} className='order-1 order-md-2'>
                <div className='form-box'>
                  <h4 className='quote-h4'>Get a free bulk quotation</h4>
                  <Form onSubmit={quote.handleSubmit} className='form-quote'>
                    <Form.Group controlId='formBasicName'>
                      <div className='form-input'>
                        <Form.Control
                          type='text'
                          placeholder='Name'
                          name='name'
                          value={quote.values.name}
                          onChange={quote.handleChange}
                        />
                        <label htmlFor='formBasicName'>Name</label>
                      </div>
                      {quote.touched.name && quote.errors.name ? (
                        <div className='quote-errors'>{quote.errors.name}</div>
                      ) : null}
                    </Form.Group>

                    <Form.Group controlId='formBasicEmail'>
                      <div className='form-input'>
                        <Form.Control
                          type='Email'
                          placeholder='Email'
                          name='email'
                          value={quote.values.email}
                          onChange={quote.handleChange}
                        />
                        <label htmlFor='formBasicEmail'>Email</label>
                      </div>
                      {quote.touched.email && quote.errors.email ? (
                        <div className='quote-errors'>{quote.errors.email}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group controlId='formBasicOrganization'>
                      <div className='form-input'>
                        <Form.Control
                          type='text'
                          placeholder='Company Name'
                          name='organization'
                          value={quote.values.organization}
                          onChange={quote.handleChange}
                        />
                        <label htmlFor='formBasicOrganization'>Company Name</label>
                      </div>
                      {quote.touched.organization && quote.errors.organization ? (
                        <div className='quote-errors'>{quote.errors.organization}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group>
                      <MultiSelect
                        options={quoteservices}
                        value={selectedServices}
                        onChange={(e) => {
                          setSelectedServices(e);
                          setCatErr(null);
                        }}
                        className=''
                      />
                      {catErr && (
                        <div
                          style={{ color: 'rgb(243, 49, 49)', fontSize: '14px', marginTop: '3px', textAlign: 'left' }}
                        >
                          {catErr}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group controlId='contactuploadfile'>
                      <label className='contact-form-file' htmlFor='contactuploadfile'>
                        <Form.Control type='file' onChange={handleFile} />
                        <svg className='contactform-linkicon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#contactform-linkicon'></use>
                        </svg>
                        <span>|</span> {fileName ? fileName : 'Attach File'}
                      </label>
                    </Form.Group>

                    <Form.Group controlId='floatingTextArea'>
                      <Form.Control
                        as='textarea'
                        placeholder='Write us something about your project.'
                        style={{ minHeight: '94px', maxHeight: '150px' }}
                        name='description'
                        value={quote.values.description}
                        onChange={quote.handleChange}
                      />
                    </Form.Group>
                    <Button className='contact-sub-btn' type='submit'>
                      {loading ? <Spinner color='light' /> : 'Submit'}
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BannerComponent;
