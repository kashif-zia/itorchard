import React from 'react'
import { ReactSVG } from 'react-svg'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
const Footer = () => {
  return (
    <section className='main-footer '>
      <Container className='p-0'>
        <Row className='row justify-content-center text-center'>
          <Col sm={12} md={12} lg={6} className='mb-4'>
            <ReactSVG className='footer-logo' src='/assets/images/footer_logo.svg' />
            <p className='footerbottom-text'>
              We ensure that all companies listed on our platform meet our high standards for quality and customer
              service.
            </p>
            <div className='fotter-social-icons'>
              <Link href='javascript:void(0)' className='footer-social-link' aria-label='Facebook'>
                <svg className='facebook-icon'>
                  <use xlinkHref='/assets/images/svg/icons.svg#facebook-icon'></use>
                </svg>
              </Link>

              <Link href='javascript:void(0)' className='footer-social-link' aria-label='Linkedin'>
                <svg className='linkedin-icon'>
                  <use xlinkHref='/assets/images/svg/icons.svg#linkedin-icon'></use>
                </svg>
              </Link>

              {/* <Link href='javascript:void(0)' className='footer-social-link' aria-label='Pinterest'>
                <svg className='instagram-icon'>
                  <use xlinkHref='/assets/images/svg/icons.svg#instagram-icon'></use>
                </svg>
              </Link> */}
              <Link href='javascript:void(0)' className='footer-social-link' aria-label='X'>
                <div className='twitter-icon'>
                  <svg className='twitter-x'>
                    <use xlinkHref='/assets/images/svg/icons.svg#twitter-x'></use>
                  </svg>
                </div>
              </Link>
              <Link href='javascript:void(0)' className='footer-social-link' aria-label='Youtube'>
                <svg className='youtube-icon'>
                  <use xlinkHref='/assets/images/svg/icons.svg#youtube-icon'></use>
                </svg>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
