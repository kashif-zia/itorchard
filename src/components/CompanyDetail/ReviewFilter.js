import React, { useState } from 'react'
import { Form, Dropdown, Button } from 'react-bootstrap'
import AuthModal from '../Auth/AuthModal'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const ReviewFilter = ({ id, reviewCount }) => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const { token } = useSelector((s) => s.auth)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const router = useRouter()

  const handleSignupModalOpen = () => {
    setShowSignupModal(true)
    setShowLoginModal(false)
  }

  const handleLoginModal = () => {
    if (token) {
      router.push('/review/' + id)
    } else {
      setShowForgotPassword(false)
      setShowSignupModal(false)
      setShowLoginModal(true)
    }
  }

  // Review Dropdown Filter
  const [selectedOption, setSelectedOption] = useState(null)
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey)
  }

  const clearSelection = () => {
    setSelectedOption(null)
  }
  // Service Dropdown Filter
  const [selectedService, setSelectedService] = useState('')
  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName)
  }

  const clearSelectedService = () => {
    setSelectedService('')
  }

  return (
    <div>
      <div className='review-top-section'>
        <div className='filter-group-dropdown'>
          <div className='sortby-filter'>
            {/* <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle id='dropdown-basic' className='sort-dropdown'>
                {selectedOption ? (
                  <>
                    {selectedOption} <i className='fa fa-close filter-closeicon' onClick={clearSelection}></i>
                  </>
                ) : (
                  'Sort by:'
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey='Most Recent'>Most Recent</Dropdown.Item>
                <Dropdown.Item eventKey='Rating: high to low'>Rating: high to low</Dropdown.Item>
                <Dropdown.Item eventKey='Rating: low to high'>Rating: low to high</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <h4 className='reviews-heading'> Reviews ({reviewCount}) </h4>
          </div>
          <div className='service-filter'>
            {/* <Form>
              <Dropdown className='d-inline px-0' autoClose='outside'>
                <Dropdown.Toggle id='dropdown-autoclose-reviewservice-filter' className='service-dropdown'>
                  {selectedService !== '' ? (
                    <>
                      {selectedService}
                      <i className='fa fa-close filter-closeicon' onClick={clearSelectedService}></i>
                    </>
                  ) : (
                    'Select Service'
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown>
                    <Form.Check
                      type='radio'
                      label='Web Design'
                      name='formHorizontalRadios'
                      id='ProvidedServiceRadios1'
                      onChange={() => handleServiceSelect('Web Design')}
                    />
                  </Dropdown>
                  <Dropdown>
                    <Form.Check
                      type='radio'
                      label='Web Development'
                      name='formHorizontalRadios'
                      id='ProvidedServiceRadios12'
                      onChange={() => handleServiceSelect('Web Development')}
                    />
                  </Dropdown>
                  <Dropdown>
                    <Form.Check
                      type='radio'
                      label='App Development'
                      name='formHorizontalRadios'
                      id='ProvidedServiceRadios13'
                      onChange={() => handleServiceSelect('App Development')}
                    />
                  </Dropdown>
                  <Dropdown>
                    <Form.Check
                      type='radio'
                      label='SEO'
                      name='formHorizontalRadios'
                      id='ProvidedServiceRadios14'
                      onChange={() => handleServiceSelect('SEO')}
                    />
                  </Dropdown>
                  <Dropdown>
                    <Form.Check
                      type='radio'
                      label='Marketing'
                      name='formHorizontalRadios'
                      id='ProvidedServiceRadios15'
                      onChange={() => handleServiceSelect('Marketing')}
                    />
                  </Dropdown>
                </Dropdown.Menu>
              </Dropdown>
            </Form> */}
          </div>
        </div>
        <div className='review-write-btn'>
          <Button className='writereview-btn' onClick={handleLoginModal}>
            <svg className='writereview-icon'>
              <use xlinkHref='/assets/images/svg/icons.svg#writeicon'></use>
            </svg>
            Write Review
          </Button>
        </div>
      </div>
      <AuthModal
        id={id}
        handleSignupModalOpen={handleSignupModalOpen}
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
        showForgotPassword={showForgotPassword}
        setShowForgotPassword={setShowForgotPassword}
      />
    </div>
  )
}
export default ReviewFilter
