import React, { useEffect, useMemo, useState } from 'react';
import ChartComponent from './Chart';
import { Col, Row, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

const dummyData = [
  {
    name: 'Creative Web Design and Production',
    key: 'creativeWebDesign',
    tags: [
      'Web Design',
      'UX/UI Design',
      'Architectural Design',
      'Product Design',
      'Graphic Design',
      'Logo',
      'Print Design',
      'Packaging Design',
      'Out Of Home Design',
      'Video Production',
      'Broadcast Video',
      'Other Design',
      'Corporate Photography',
      'Interior Design',
      'Lighting Design',
      'Audio Production',
      'Commercial Printing',
    ],
  },
  {
    name: 'Digital Marketing',
    key: 'digitalMarketing',
    tags: [
      'Digital Strategy',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Mobile & App Marketing',
      'Affiliate Marketing',
      'Conversion Optimization',
      'Search Engine Optimization',
      'Pay Per Click',
      'Other Digital Marketing',
      'Ecommerce Marketing',
      'Blockchain Marketing',
      'Video Marketing',
      'SMS Marketing',
      'Demand Generation Marketing',
      'Account-Based Marketing',
    ],
  },
  {
    name: 'IT Consulting, SI & Managed Services',
    key: 'iTConsulting',
    tags: [
      'IT Strategy Consulting',
      'BI & Big Data Consulting & SI',
      'Cloud Consulting & SI',
      'CRM Consulting And SI',
      'ECM Consulting And SI',
      'ERP Consulting And SI',
      'Unified Communications Consulting & SI',
      'Cybersecurity',
      'IT Managed Services',
      'IT Staff Augmentation',
      'Other IT Consulting And SI',
    ],
  },
  {
    name: 'Application Development',
    key: 'applicationDevelopment',
    tags: [
      'Custom Software Development',
      'Web Development',
      'Mobile App Development',
      'Wearable App Development',
      'E-Commerce Development',
      'AR/VR Development',
      'IoT Development',
      'Blockchain',
      'Application Testing',
      'Application Management & Support',
      'Enterprise App Modernization',
      'Other Application Development',
      'Robotics Process Automation',
      'API Development',
      'DevOps Managed Services',
      'Microservices Architecture Services',
    ],
  },
  {
    name: 'Business Services',
    key: 'businessServices',
    tags: [
      'Business Consulting',
      'Call Center Services',
      'Back Office Outsourcing',
      'Finance & Accounting Outsourcing (FAO)',
      'Transcription',
      'Translation',
      'Corporate Training & Coaching',
      'Document Digitization & Management',
      'Customer Service Outsourcing',
      'Sales Outsourcing',
      'Content Writing Services',
      'Corporate Relocation',
      'Language Interpretation',
      'Compliance Consulting',
      'Fractional CFO Services',
      'Environmental Consulting',
      'Business Continuity Management',
      'Corporate Travel Management',
    ],
  },
  {
    name: 'Commercial Real Estate',
    key: 'commercialRealEstate',
    tags: [
      'Commercial Brokerage Services',
      'Commercial Property Management',
      'Commercial Development',
      'Biohazard Cleanup',
      'Waste Management',
      'Building Security Services',
    ],
  },
];

const ServicesForm = ({ handleChange, handlePrev, handleNext, currentStep, formData }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [percentageError, setPercentageError] = useState('');

  const [suggestions, setSuggestions] = useState([]);
  const [selectedServices, setSelectedServices] = useState(formData?.services || []);

  const [arrayOfTag, setArrayOfTag] = useState([]);

  useEffect(() => {
    if (formData?.services) {
      const temp = formData.services.map((data) => data.name);

      setArrayOfTag(temp);
    }
  }, [formData]);

  const toggleAccordion = (eventKey) => {
    setAccordionOpen(eventKey === '0' ? !accordionOpen : accordionOpen);
  };

  const updateTextInput = (value, i) => {
    setSelectedServices((prevState) => {
      const totalPercentageWithoutCurrent = prevState.reduce((sum, service, index) => {
        return index !== i ? sum + service.percentage : sum;
      }, 0);
      const remainingPercentageForCurrent = 100 - totalPercentageWithoutCurrent;
      if (parseInt(value) > remainingPercentageForCurrent) {
        value = remainingPercentageForCurrent.toString();
      }
      const updatedServices = prevState.map((service, index) => {
        if (index === i) {
          return { ...service, percentage: parseInt(value) };
        }
        return service;
      });

      return updatedServices;
    });
  };

  const handleTagSelection = (tag) => {
    setError('');
    setPercentageError('');
    if (!arrayOfTag.includes(tag)) {
      setArrayOfTag((prevState) => [...prevState, tag]);
      if (selectedServices.length === 0) {
        setSelectedServices((prevState) => [...prevState, { name: tag, percentage: 100 }]);
      } else {
        setSelectedServices((prevState) => [...prevState, { name: tag, percentage: 0 }]);
      }
    }
  };

  const handleSubmit = () => {
    let temp = 0;

    // Calculate the total percentage
    selectedServices.forEach((data) => {
      temp += +data.percentage;
    });

    // Check conditions for displaying errors
    if (temp === 100 && selectedServices.length > 0) {
      let filterServices = selectedServices.filter((data) => data.percentage !== 0);

      handleNext(filterServices);
    } else {
      // Display specific error messages based on conditions
      if (selectedServices.length === 0) {
        setError('Select at least one service.');
      } else if (temp !== 100) {
        setPercentageError('percentage need to be 100%');
      }
    }
  };

  const removeSelectedTag = (tags, i) => {
    setError('');
    setPercentageError('');
    const updatedTags = selectedServices.filter((data, index) => data.name !== tags);

    setSelectedServices(updatedTags);
    setArrayOfTag((prevState) => prevState.filter((data, i) => data !== tags));
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    setSearchTerm(inputValue);
    if (inputValue) {
      // Filter tags based on the input value
      const filteredTags = dummyData.reduce((acc, item) => {
        const filteredItemTags = item.tags.filter((tag) => tag.toLowerCase().includes(inputValue.toLowerCase()));

        if (filteredItemTags.length > 0) {
          acc.push({
            // key: item.key,
            name: item.name,
            tags: filteredItemTags,
          });
        }

        return acc;
      }, []);

      // Update the suggestions

      setSuggestions(filteredTags);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion, i) => {
    handleTagSelection(suggestion.tags[i], suggestion.key);

    setSuggestions([]);
    setSearchTerm('');
  };

  const generateGreenColors = useMemo(() => {
    const numColors = selectedServices.length;
    const baseHue = 140; // Green hue in the HSL color model

    const dynamicColors = [];

    for (let i = 0; i < numColors; i++) {
      const lightness = (i + 1) * (90 / numColors); // Adjust lightness within a range to avoid white
      const color = `hsl(${baseHue}, 100%, ${lightness}%)`;
      dynamicColors.push(color);
    }

    return dynamicColors;
  }, [selectedServices]);

  return (
    <section className='form-section'>
      <Row>
        <Col md={6}>
          <div className='service-line-heading'>
            <h3>Add Services Lines</h3>
            <p>
              Provide customers with an idea of how you spend your time. Your Company Profile must include at least one
              Service line.
            </p>
          </div>

          <div className='search-section'>
            <div className='search-input'>
              <Image src='/assets/images/svg/search_icon_comp.svg' alt='search' width={18} height={18} />

              <input type='search' placeholder='Search Services' value={searchTerm} onChange={handleInputChange} />
            </div>
            {suggestions.length ? (
              <div className='search-toggle'>
                <ul>
                  {suggestions.map((suggestion) =>
                    suggestion.tags.map((data, i) => (
                      <li
                        key={`${data}-${i}`}
                        className='formLabel'
                        onClick={() => handleSuggestionClick(suggestion, i)}
                      >
                        {data}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ) : null}
          </div>
          <div className='service-line-heading'>
            <h3 className='services-margin'>All Available Services</h3>
          </div>

          {error ? <div className='errors'>{error}</div> : null}
          {selectedServices.length > 0 ? (
            <div className='selected-tags'>
              {arrayOfTag.map((tag, i) => (
                <div key={`${i}`} className='single-tag'>
                  <span>{tag}</span>
                  <Image
                    src='/assets/images/svg/close_icon_black.svg'
                    style={{ cursor: 'pointer' }}
                    alt='search'
                    width={14}
                    height={14}
                    onClick={() => removeSelectedTag(tag, i)}
                  />
                </div>
              ))}
            </div>
          ) : null}

          <hr className='service-divider' />

          {dummyData.map((x, i) => {
            return (
              <Accordion defaultActiveKey='0' key={i}>
                <Accordion.Item
                  eventKey={i}
                  className={`service-accordion ${accordionOpen === i ? 'open' : ''}`}
                  onClick={() => toggleAccordion(i)}
                >
                  <Accordion.Header>{x.name}</Accordion.Header>
                  <Accordion.Body>
                    <div className='accordian-selected-tags'>
                      <div className='divider'></div>
                      {x.tags.map((tag, i) => (
                        <div
                          key={i}
                          className={`single-tag ${arrayOfTag.includes(tag) ? 'activ-tag' : ''}`}
                          onClick={() => handleTagSelection(tag)}
                        >
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Col>
        <Col md={6}>
          <div className='graph-section'>
            <div className='graph-line-heading'>
              <h3>Select Services Lines</h3>
              <p>
                Distribute resources proportionally across service lines to align with business focus, ensuring a total
                of 100%.
              </p>
            </div>
            <ChartComponent selectedServices={selectedServices} generateGreenColors={generateGreenColors} />
            {percentageError ? <div className='errors'>{percentageError}</div> : null}
            {selectedServices.map((tag, index) => (
              <div className='rangeBox-item' key={index}>
                <div className='display-inline'>
                  <span
                    className='progressbar-color'
                    style={{
                      backgroundColor: generateGreenColors[index],
                    }}
                  ></span>
                  <label className='progressbar-label '>{tag.name}</label>
                </div>
                <div className='rangebox'>
                  <input
                    type='range'
                    name='rangeInput1'
                    min={0}
                    max={100}
                    onChange={(e) => updateTextInput(e.target.value, index)}
                    value={tag.percentage}
                    className='form-range'
                    step='5'
                  />
                  <div className='rangeInputValue'>
                    <input type='text' id='textInput1' value={tag.percentage} readOnly className='rangeValue' />
                    <span>%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <button type='submit' onClick={handleSubmit} className='next-arrow'>
            Finish <ReactSVG src='/assets/images/svg/nextArrow.svg' />
          </button>
        </div>
      ) : (
        <div className={`button-section-edit`}>
          {handlePrev()}
          <button type='submit' onClick={handleSubmit} className='next-arrow'>
            Save Changes
          </button>
        </div>
      )}
      {/* <div className='button-section'>
        <button disabled={currentStep === 0} onClick={handlePrev} className='back-arrow'>
          <ReactSVG src='/assets/images/svg/backArrow.svg' /> Back
        </button>
        <button type='submit' onClick={handleSubmit} className='next-arrow'>
          Finish <ReactSVG src='/assets/images/svg/nextArrow.svg' />
        </button>
      </div> */}
    </section>
  );
};

export default ServicesForm;
