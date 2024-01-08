import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
const AboutComonent = () => {
  return (
    <>
      <section className='bg-getjob-section'>
        <div className='container'>
          <h2 className='getjob-heading-h2'>
            How It Gets the
            <span className='sub_heading'> Job Done</span>
          </h2>
        </div>
        <Container>
          <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
            <Col className='get-col'>
              <div className='getjob-box'>
                <div className='box-text'>
                  <div className='num-icon'>1</div>
                  <h3 className='getjob-heading-h3'>
                    Share the Details of
                    <br /> Your Project
                  </h3>
                  <p className='getjob-desc'>
                    Kickstart your project by sharing essential details like objectives, budget, and timeframe with us.
                  </p>
                </div>
                <Link href='/contact-us' className='sharenow-btn'>
                  Share Now
                  <svg className='share-icon-img'>
                    <use xlinkHref='/assets/images/svg/icons.svg#share_now_icons'></use>
                  </svg>
                </Link>
              </div>
            </Col>
            <Col className='get-col'>
              <div className='getjob-box'>
                <div className='box-text'>
                  <div className='num-icon'>2</div>
                  <h3 className='getjob-heading-h3'>
                    Chat with our
                    <br /> team
                  </h3>
                  <p className='getjob-desc'>Schedule a short consultation to align on your project requirements.</p>
                </div>
                <Link href='/contact-us' className='sharenow-btn'>
                  Share Now
                  <svg className='share-icon-img'>
                    <use xlinkHref='/assets/images/svg/icons.svg#share_now_icons'></use>
                  </svg>
                </Link>
              </div>
            </Col>
            <Col className='get-col'>
              <div className='getjob-box'>
                <div className='box-text'>
                  <div className='num-icon'>3</div>
                  <h3 className='getjob-heading-h3'>
                    Start the Matching
                    <br /> Process
                  </h3>
                  <p className='getjob-desc'>
                    We'll introduce you to a handful of vetted services providers that meet your criteria.
                  </p>
                </div>
                <Link href='/contact-us' className='sharenow-btn'>
                  Share Now
                  <svg className='share-icon-img'>
                    <use xlinkHref='/assets/images/svg/icons.svg#share_now_icons'></use>
                  </svg>
                </Link>
              </div>
            </Col>
            <Col className='get-col'>
              <div className='getjob-box'>
                <div className='box-text'>
                  <div className='num-icon'>4</div>
                  <h3 className='getjob-heading-h3'>
                    Start the
                    <br /> Conversation
                  </h3>
                  <p className='getjob-desc'>
                    You take it from there. Companies will typically reach out to schedule introductory calls.
                  </p>
                </div>
                <Link href='/contact-us' className='sharenow-btn'>
                  Share Now
                  <svg className='share-icon-img'>
                    <use xlinkHref='/assets/images/svg/icons.svg#share_now_icons'></use>
                  </svg>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='dicover-section'>
        <Container>
          <Row className='discover-row'>
            <Col lg={3} className='discover-col3'>
              <div className='discoverd-img-div'>
                <Image
                  src='/assets/images/svg/character_for_about_us.svg'
                  alt='main logo'
                  className='discover-person-img'
                  width={300}
                  height={513}
                />
              </div>
            </Col>
            <Col md={12} lg={9} className='discover-col9'>
              <div className='discover-subheading'>Discover ITORCHAD</div>
              <h3 className='discover-heading'>Unlocking Business Growth Through Partner Matching</h3>
              <p className='discover-text'>
                At the heart of our mission is the key to unlocking business growth: partner matching. We specialize in
                connecting you with the perfect allies, helping your business reach new heights. Our carefully tailored
                approach ensures that you find the ideal partners who share your vision and goals.
              </p>
              <div className='discover-group-box'>
                <div className='discover-group-item'>
                  <h4 className='discovr-group-h4'>$2B+</h4>
                  <p>Across the globe each year</p>
                </div>
                <div className='discover-group-item'>
                  <h4 className='discovr-group-h4'>15M+</h4>
                  <p>Annual User Engagement</p>
                </div>
                <div className='discover-group-item'>
                  <h4 className='discovr-group-h4'>Every Minute</h4>
                  <p>Buyers Meet Providers on ITORCHAD</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='world-wide-section'>
        <Container>
          <Row className='world-row'>
            <Col sm={12} md={5}>
              <h2 className='world-wide-heading'>
                World Wide <span className='primary-text'>Existence</span>
              </h2>
              <p className='world-wide-text'>
                We've Explored Worldwide So You Don't Have To. Whether It's an Advertising Agency in Amsterdam or a
                Mobile App Developer in Mumbai, We Connect You with the Ideal Partner to Drive Your Business Impact. Our
                Extensive Global Network Offers You a Multitude of Options to Discover a Partner Who Aligns with Your
                Vision and Can Fulfill Your Requirements.
              </p>
              <div className='icon-box'>
                <div className='icon-img'>
                  <svg className='world-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#world_icon'></use>
                  </svg>
                </div>
                <div className='icon-content'>
                  <h4 className='icon-content-h4'>154</h4>
                  <p className='icon-content-p'>Countries where local providers are listed</p>
                </div>
              </div>
              <div className='icon-box'>
                <div className='icon-img'>
                  <svg className='world-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#world_services'></use>
                  </svg>
                </div>
                <div className='icon-content'>
                  <h4 className='icon-content-h4'>4,75,000+</h4>
                  <p className='icon-content-p'>Service providers across the globe</p>
                </div>
              </div>
              <div className='icon-box'>
                <div className='icon-img'>
                  <svg className='world-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#worldcategories'></use>
                  </svg>
                </div>
                <div className='icon-content'>
                  <h4 className='icon-content-h4'>1,500+</h4>
                  <p className='icon-content-p'>Specialized business service categories</p>
                </div>
              </div>
            </Col>
            <Col sm={12}  md={7}>
              <Image
                src='/assets/images/world-wide.svg'
                alt='main logo'
                className='discover-person-img'
                width={656}
                height={369.577}
              />
            </Col>
          </Row>
        </Container>
        <Image
          src='/assets/images/world-bg-frame.png'
          alt='main logo'
          className='world-bg-frame'
          width={451}
          height={677}
        />
      </section>
    </>
  )
}
export default AboutComonent
