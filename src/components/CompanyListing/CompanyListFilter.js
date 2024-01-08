import React, { useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap'
import { MultiSelect } from 'react-multi-select-component'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { setFilters } from '@/libs/redux/reducers/filterReducers'
const services = [
  { label: 'Software Development', value: 'Software Development' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'E-Commerce Development', value: 'E-Commerce Development' },
  { label: 'AR/VR Development', value: 'AR/VR Development' },
  { label: 'Machine Learning', value: 'Machine Learning' },
  { label: 'Digital Marketing', value: 'Digital Marketing' },
  { label: 'Social Media', value: 'Social Media' },
  { label: 'SEO', value: 'SEO' },
]
const cities = [
  { label: 'Pakistan', id: 'pk' },
  { label: 'Japan', id: 'jp' },
  { label: 'India', id: 'ind' },
  { label: 'Bangladesh', id: 'ban' },
  { label: 'Nepal', id: 'nep' },
  // { label: 'Germany', id: 'de' },
  // { label: 'United Kingdom', id: 'uk' },
  // { label: 'Canada', id: 'ca' },
  // { label: 'South Korea', id: 'kr' },
  // { label: 'Australia', id: 'au' },
  // { label: 'Netherlands', id: 'nl' },
  // { label: 'Sweden', id: 'se' },
  // { label: 'Switzerland', id: 'ch' },
  // { label: 'Singapore', id: 'sg' },
  // { label: 'Finland', id: 'fi' },
  // { label: 'Denmark', id: 'dk' },
  // { label: 'Norway', id: 'no' },
  // { label: 'Ireland', id: 'ie' },
  // { label: 'Austria', id: 'at' },
  // { label: 'Belgium', id: 'be' },
  // { label: 'New Zealand', id: 'nz' },
  // { label: 'Luxembourg', id: 'lu' },
  // { label: 'Israel', id: 'il' },
  // { label: 'France', id: 'fr' },
  // { label: 'Italy', id: 'it' },
  // { label: 'Spain', id: 'es' },
  // { label: 'Taiwan', id: 'tw' },
  // { label: 'Hong Kong', id: 'hk' },
  // { label: 'United Arab Emirates', id: 'ae' },
  // { label: 'Qatar', id: 'qa' },
  // { label: 'Malaysia', id: 'my' },
  // { label: 'Estonia', id: 'ee' },
  // { label: 'Iceland', id: 'is' },
  // { label: 'Czech Republic', id: 'cz' },
  // { label: 'Poland', id: 'pl' },
  // { label: 'Portugal', id: 'pt' },
  // { label: 'Greece', id: 'gr' },
  // { label: 'Hungary', id: 'hu' },
  // { label: 'Slovenia', id: 'si' },
  // { label: 'Lithuania', id: 'lt' },
  // { label: 'Latvia', id: 'lv' },
  // { label: 'Cyprus', id: 'cy' },
  // { label: 'Slovakia', id: 'sk' },
  // { label: 'Bahrain', id: 'bh' },
  // { label: 'Saudi Arabia', id: 'sa' },
  // { label: 'South Africa', id: 'za' },
  // { label: 'Chile', id: 'cl' },
  // { label: 'Mexico', id: 'mx' },
  // { label: 'Brazil', id: 'br' },
  // { label: 'Argentina', id: 'ar' },
  // { label: 'Turkey', id: 'tr' },
]

const CompanyListFilter = ({ getFilteredData }) => {
  const [selectedServices, setSelectedServices] = useState(undefined)
  const dispatch = useDispatch()
  // Client Budget Dropdown Filter
  const { location, category, budget, sortBy } = useSelector((state) => state.filter)
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const handleBudgetSelect = (budgetName) => {
    setSelectedBudget(budgetName)
    dispatch(setFilters({ budget: budgetName }))
  }
  const clearSelectedBudget = () => {
    setSelectedBudget('')
    dispatch(setFilters({ budget: null }))
  }
  const handleServiceSelect = (serviceName) => {
    setSelectedServices(serviceName)
    dispatch(setFilters({ category: serviceName }))
  }
  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
    dispatch(setFilters({ location: location }))
  }
  const clearSelectedService = () => {
    setSelectedServices(undefined)
    dispatch(setFilters({ category: null }))
  }
  const clearSelectedLocation = () => {
    setSelectedLocation(undefined)
    dispatch(setFilters({ location: null }))
  }

  // Sort Dropdown Filter
  const [sortselectedOption, setsortSelectedOption] = useState(null)
  const handlesortSelect = (eventKey) => {
    setsortSelectedOption(eventKey)
    if (eventKey === 'Oldest') {
      dispatch(setFilters({ sortBy: 'ASC' }))
    } else {
      dispatch(setFilters({ sortBy: 'DESC' }))
    }
  }

  const clearsortSelection = () => {
    setsortSelectedOption(null)
    dispatch(setFilters({ sortBy: null }))
  }

  return (
    <div className='company-list-filter-box'>
      <form>
        <div className='compny-list-filter'>
          {/* <div className='filter-field location-img position-relative'>
            <ReactSVG className='location-icon' src='/assets/images/svg/location.svg' />
            <input className='search-field location-field' type='search' placeholder='Location' aria-label='Search' />
          </div> */}
          {/* Service Dropdown Filter  */}
          {/* <MultiSelect
            options={services}
            value={selectedServices}
            onChange={setSelectedServices}
            labelledBy='Search here'
            className='service-field filter-field' 
          /> */}
          {/* Location Dropdown Filter  */}
          <Dropdown className='clientbudget-field filter-field' autoClose='outside'>
            <Dropdown.Toggle id='dropdown-autoclose-outside' className='clientbudget-dropdown'>
              {selectedLocation ? (
                <>
                  {selectedLocation}
                  <i className='fa fa-close filter-closeicon' onClick={clearSelectedLocation}></i>
                </>
              ) : (
                'Location'
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className=''>
              {cities.map((item, index) => (
                <Dropdown key={index}>
                  <Form.Check
                    type='radio'
                    label={item.label}
                    name='formHorizontalRadios'
                    id={item.id}
                    onChange={() => handleLocationSelect(item.label)}
                  />
                </Dropdown>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {/* {Services Filter} */}
          <Dropdown className='clientbudget-field filter-field' autoClose='outside'>
            <Dropdown.Toggle id='dropdown-autoclose-outside' className='clientbudget-dropdown'>
              {selectedServices ? (
                <>
                  {selectedServices}
                  <i className='fa fa-close filter-closeicon' onClick={clearSelectedService}></i>
                </>
              ) : (
                'Service'
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {services.map((item, index) => (
                <Dropdown key={index}>
                  <Form.Check
                    type='radio'
                    label={item.label}
                    name='formHorizontalRadios'
                    id={item.value}
                    onChange={() => handleServiceSelect(item.value)}
                  />
                </Dropdown>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {/* Client Dropdown Filter  */}
          <Dropdown className='clientbudget-field filter-field' autoClose='outside'>
            <Dropdown.Toggle id='dropdown-autoclose-outside-budget' className='clientbudget-dropdown'>
              {selectedBudget !== '' ? (
                <>
                  Under ${selectedBudget}
                  <i className='fa fa-close filter-closeicon' onClick={clearSelectedBudget}></i>
                </>
              ) : (
                'Client Budget'
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown>
                <Form.Check
                  type='radio'
                  label='Under $250,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios1'
                  onChange={() => handleBudgetSelect('250000')}
                />
              </Dropdown>
              <Dropdown>
                <Form.Check
                  type='radio'
                  label='Under $100,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios2'
                  onChange={() => handleBudgetSelect('100000')}
                />
              </Dropdown>
              <Dropdown>
                <Form.Check
                  type='radio'
                  label='Under $75,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios3'
                  onChange={() => handleBudgetSelect('75000')}
                />
              </Dropdown>
              <Dropdown>
                <Form.Check
                  type='radio'
                  label='Under $50,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios4'
                  onChange={() => handleBudgetSelect('50000')}
                />
                <Form.Check
                  type='radio'
                  label='Under $25,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios5'
                  onChange={() => handleBudgetSelect('25000')}
                />
                <Form.Check
                  type='radio'
                  label='Under $10,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios6'
                  onChange={() => handleBudgetSelect('10000')}
                />
                <Form.Check
                  type='radio'
                  label='Under $5,000 '
                  name='formHorizontalRadios'
                  id='ProvidedServiceRadios7'
                  onChange={() => handleBudgetSelect('5000')}
                />
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>
          {/* Sort Dropdown Filter  */}
          <Dropdown className='clientbudget-field filter-field' onSelect={handlesortSelect}>
            <Dropdown.Toggle id='dropdown-autoclose-recentfilter' className='clientbudget-dropdown'>
              {sortselectedOption ? (
                <>
                  {sortselectedOption} <i className='fa fa-close filter-closeicon' onClick={clearsortSelection}></i>
                </>
              ) : (
                'Sort by:'
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className='sort-dropdown'>
              <Dropdown.Item eventKey='Oldest'> Oldest</Dropdown.Item>
              <Dropdown.Item eventKey='Newest'> Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='applyfilter-button'>
          <button
            onClick={getFilteredData}
            disabled={location === null && budget === null && category === null && sortBy === null}
            className={
              location === null && budget === null && category === null && sortBy === null
                ? 'apply-filter-btn disabled-filter-btn'
                : 'apply-filter-btn'
            }>
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}
export default CompanyListFilter
