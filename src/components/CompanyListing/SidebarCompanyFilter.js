import React, { useState } from 'react';
import { Accordion, Dropdown, Form } from 'react-bootstrap';
import { MultiSelect } from 'react-multi-select-component';
const services = [
  { label: 'Software Development', value: 'software_development' },
  { label: 'Web Development', value: 'web_development' },
  { label: 'E-Commerce Development', value: 'ecommerce_Development' },
  { label: 'AR/VR Development', value: 'ar_vr_development' },
  { label: 'Machine Learning', value: 'machine_learning' },
  { label: 'Digital Marketing', value: 'digital_marketing' },
  { label: 'Social Media', value: 'social_media' },
  { label: 'SEO', value: 'seo' },
];
const Industry = [
  { label: 'eCommerce (24)', value: 'eCommerce_(24)' },
  { label: 'Information technology (15)', value: 'Information_technology_(15)' },
  { label: 'Advertising & marketing (13)', value: 'Advertising_&_marketing_(13)' },
  { label: 'Business services (13)', value: 'Business services (13)' },
  { label: 'Medical (12)', value: 'Medical_(12)' },
  { label: 'Real estate (9)', value: 'Real_estate_(9)' },
  { label: 'Education (8)', value: 'Education_(8)' },
  { label: 'Consumer products & services (6)', value: 'Consumer_products_&_services_(6)' },
  { label: 'Other industries (6)', value: 'Other_industries_(6)' },
];

const SidebarCompanyFilter = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);

  return (
    <div className='sidebar-left'>
      <div className='cmpny-list-col-left-content'>
        <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
          <div className='filter-heading'>
            <svg className='filters-icon'>
              <use xlinkHref='/assets/images/svg/icons.svg#filters-icon'></use>
            </svg>
            <p className='p-16-500'>Filters</p>
          </div>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <div className='filter-category'>
                <svg className='location-icons'>
                  <use xlinkHref='/assets/images/svg/icons.svg#location-icons'></use>
                </svg>
                <p className='p-16-500'>Location</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <form className='d-flex'>
                <input
                  className='form-control search-field'
                  type='search'
                  placeholder='Search here'
                  aria-label='Search'
                />
              </form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              <div className='filter-category'>
                <svg className='setting-icons'>
                  <use xlinkHref='/assets/images/svg/icons.svg#setting-icons'></use>
                </svg>
                <p className='p-16-500'>Services</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <MultiSelect
                options={services}
                value={selectedServices}
                onChange={setSelectedServices}
                labelledBy='Search here'
                className='mb-3'
              />

              <MultiSelect
                options={Industry}
                value={selectedIndustry}
                onChange={setSelectedIndustry}
                labelledBy='Search here'
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              <div className='filter-category'>
                <svg className='price-icon'>
                  <use xlinkHref='/assets/images/svg/icons.svg#price-icon'></use>
                </svg>
                <p className='p-16-500'>Price</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className='price-filter-box'>
                <Dropdown className='d-inline' autoClose='outside'>
                  <Dropdown.Toggle id='dropdown-autoclose-outside' className='clientbudget-dropdown'>
                    Client Budget
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown>
                      <Form.Group controlId='formGridMin'>
                        <div className='min-max-field'>
                          <Form.Control name='min_number' type='number' placeholder='Min' />
                          <Form.Control name='max_number' type='number' placeholder='Max' />
                        </div>
                      </Form.Group>
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='Under $250,000 (34)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios1'
                      />
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='Under $100,000 (34)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios2'
                      />
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='Under $75,000 (33)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios3'
                      />
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='Under $50,000 (33)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios4'
                      />
                      <Form.Check
                        type='radio'
                        label='Under $25,000 (33)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios5'
                      />
                      <Form.Check
                        type='radio'
                        label='Under $10,000 (32)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios6'
                      />
                      <Form.Check
                        type='radio'
                        label='Under $5,000 (20)'
                        name='formHorizontalRadios'
                        id='ProvidedServiceRadios7'
                      />
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='d-inline' autoClose='outside'>
                  <Dropdown.Toggle id='dropdown-autoclose' className='clientbudget-dropdown'>
                    Hourly Rate
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown>
                      <Form.Check type='radio' label='< $25 (7)' name='formHorizontalRadios' id='HourlyRateRadios1' />
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='$25 - $49 (23)'
                        name='formHorizontalRadios'
                        id='HourlyRateRadios2'
                      />
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='$50 - $99 (5)'
                        name='formHorizontalRadios'
                        id='HourlyRateRadios3'
                      />
                    </Dropdown>
                    <Dropdown>
                      <Form.Check
                        type='radio'
                        label='$100 - $149 (0)'
                        name='formHorizontalRadios'
                        id='HourlyRateRadios4'
                      />
                      <Form.Check
                        type='radio'
                        label='$150 - $199 (1)'
                        name='formHorizontalRadios'
                        id='HourlyRateRadios5'
                      />
                      <Form.Check
                        type='radio'
                        label='$200 - $300 (0)'
                        name='formHorizontalRadios'
                        id='HourlyRateRadios6'
                      />
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
export default SidebarCompanyFilter;
