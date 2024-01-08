import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import Lottie from 'lottie-react'
import DevelopmentAnimationData from '../../../public/assets/Lottie/Development.json'
import MarketingAnimationData from '../../../public/assets/Lottie/Marketing.json'
import BusinessAnimationData from '../../../public/assets/Lottie/Business.json'
import AdvertiseAnimationData from '../../../public/assets/Lottie/Advertise.json'
import DesignAnimationData from '../../../public/assets/Lottie/Design.json'
import ITServicesAnimationData from '../../../public/assets/Lottie/ITServices.json'

import { Controller, Navigation, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Image from 'next/image'

const PopularCategoryComponent = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  return (
    <div>
      <section className='popular-category-bg'>
        <div className='container'>
          <h2 className='poular-category-h2'>
            Most Popular <span className='primary-text'>Categories</span>
          </h2>
        </div>
        <div className='popularcategory-slide'>
          <Container fluid className='custom-padding'>
            <Row>
              <Col md={5} lg={5} className='category-img-box d-flex'>
                <div className='swiper-img-box'>
                  <Swiper
                    className='popular-category-img'
                    modules={[Controller]}
                    speed={1000}
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}>
                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DevelopmentAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={MarketingAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={BusinessAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={AdvertiseAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DesignAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={ITServicesAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DevelopmentAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={MarketingAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={BusinessAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={AdvertiseAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DesignAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={ITServicesAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DevelopmentAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={MarketingAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={BusinessAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={AdvertiseAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DesignAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={ITServicesAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DevelopmentAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={MarketingAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={BusinessAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={AdvertiseAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={DesignAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='lottie-box'>
                        <Lottie
                          animationData={ITServicesAnimationData}
                          loop={true}
                          autoplay={true}
                          className='lottie-img'
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>

              <Col md={7} lg={7} className='category-slide'>
                <p className='popular-category-text'>
                  Looking for the best IT companies to help support your business? Look no further! Our team has
                  researched and analyzed hundreds of IT companies and compiled a list of the top recommended ones based
                  on customer feedback, industry expertise, and overall performance.
                </p>

                <div className='popularcategory-Slider'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '$--Primary-Color',
                      '--swiper-pagination-color': '$--Primary-Color',
                    }}
                    spaceBetween={20}
                    slidesPerView={3}
                    speed={1000}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                      },
                      1350: {
                        slidesPerView: 1.9,
                        spaceBetween: 20,
                      },
                      1440: {
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                      },
                      1900: {
                        slidesPerView: 2.6,
                        spaceBetween: 20,
                      },
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Controller, Navigation, Autoplay]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    className='popular-category-list'>
                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='developement-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#developement-icon'></use>
                          </svg>
                          <h6>Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Software Development</li>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>E-Commerce Development</li>
                            <li>AR/VR Development</li>
                            <li>Machine Learning</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='digitalmarketing-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#digitalmarketing'></use>
                          </svg>
                          <h6>DIGITAL MARKETING</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Digital Marketing</li>
                            <li>Social Media</li>
                            <li>SEO</li>
                            <li>PPC Advertising</li>
                            <li>Email Marketing</li>
                            <li>App Marketing</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='business-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#business-icon'></use>
                          </svg>
                          <h6>Business Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Call Centers</li>
                            <li>BPO</li>
                            <li>Accounting</li>
                            <li>Commercial Real Estate</li>
                            <li>HR Services</li>
                            <li>Consulting</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='advertise-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#advertise-icon'></use>
                          </svg>
                          <h6>Advertise</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Advertising</li>
                            <li>Branding</li>
                            <li>Creative</li>
                            <li>Video Production</li>
                            <li>Public Relations</li>
                            <li>Media Planning & Buying</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='design-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#design-icon'></use>
                          </svg>
                          <h6>Design</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Web Design</li>
                            <li>User Experience Design</li>
                            <li>Logo Design</li>
                            <li>Graphic Design</li>
                            <li>Design</li>
                            <li>Digital Design</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='itservice-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#itservice-icon'></use>
                          </svg>
                          <h6>IT Services</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>IT Services</li>
                            <li>Cybersecurity</li>
                            <li>Data Analytics</li>
                            <li>Managed IT Services</li>
                            <li>Cloud Consulting</li>
                            <li>Staff Augmentation</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='developement-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#developement-icon'></use>
                          </svg>
                          <h6>Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Software Development</li>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>E-Commerce Development</li>
                            <li>AR/VR Development</li>
                            <li>Machine Learning</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='digitalmarketing-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#digitalmarketing'></use>
                          </svg>
                          <h6>DIGITAL MARKETING</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Digital Marketing</li>
                            <li>Social Media</li>
                            <li>SEO</li>
                            <li>PPC Advertising</li>
                            <li>Email Marketing</li>
                            <li>App Marketing</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='business-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#business-icon'></use>
                          </svg>
                          <h6>Business Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Call Centers</li>
                            <li>BPO</li>
                            <li>Accounting</li>
                            <li>Commercial Real Estate</li>
                            <li>HR Services</li>
                            <li>Consulting</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='advertise-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#advertise-icon'></use>
                          </svg>
                          <h6>Advertise</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Advertising</li>
                            <li>Branding</li>
                            <li>Creative</li>
                            <li>Video Production</li>
                            <li>Public Relations</li>
                            <li>Media Planning & Buying</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='design-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#design-icon'></use>
                          </svg>
                          <h6>Design</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Web Design</li>
                            <li>User Experience Design</li>
                            <li>Logo Design</li>
                            <li>Graphic Design</li>
                            <li>Design</li>
                            <li>Digital Design</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='itservice-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#itservice-icon'></use>
                          </svg>
                          <h6>IT Services</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>IT Services</li>
                            <li>Cybersecurity</li>
                            <li>Data Analytics</li>
                            <li>Managed IT Services</li>
                            <li>Cloud Consulting</li>
                            <li>Staff Augmentation</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='developement-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#developement-icon'></use>
                          </svg>
                          <h6>Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Software Development</li>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>E-Commerce Development</li>
                            <li>AR/VR Development</li>
                            <li>Machine Learning</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='digitalmarketing-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#digitalmarketing'></use>
                          </svg>
                          <h6>DIGITAL MARKETING</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Digital Marketing</li>
                            <li>Social Media</li>
                            <li>SEO</li>
                            <li>PPC Advertising</li>
                            <li>Email Marketing</li>
                            <li>App Marketing</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='business-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#business-icon'></use>
                          </svg>
                          <h6>Business Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Call Centers</li>
                            <li>BPO</li>
                            <li>Accounting</li>
                            <li>Commercial Real Estate</li>
                            <li>HR Services</li>
                            <li>Consulting</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='advertise-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#advertise-icon'></use>
                          </svg>
                          <h6>Advertise</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Advertising</li>
                            <li>Branding</li>
                            <li>Creative</li>
                            <li>Video Production</li>
                            <li>Public Relations</li>
                            <li>Media Planning & Buying</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='design-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#design-icon'></use>
                          </svg>
                          <h6>Design</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Web Design</li>
                            <li>User Experience Design</li>
                            <li>Logo Design</li>
                            <li>Graphic Design</li>
                            <li>Design</li>
                            <li>Digital Design</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='itservice-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#itservice-icon'></use>
                          </svg>
                          <h6>IT Services</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>IT Services</li>
                            <li>Cybersecurity</li>
                            <li>Data Analytics</li>
                            <li>Managed IT Services</li>
                            <li>Cloud Consulting</li>
                            <li>Staff Augmentation</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='developement-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#developement-icon'></use>
                          </svg>
                          <h6>Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Software Development</li>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>E-Commerce Development</li>
                            <li>AR/VR Development</li>
                            <li>Machine Learning</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='digitalmarketing-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#digitalmarketing'></use>
                          </svg>
                          <h6>DIGITAL MARKETING</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Digital Marketing</li>
                            <li>Social Media</li>
                            <li>SEO</li>
                            <li>PPC Advertising</li>
                            <li>Email Marketing</li>
                            <li>App Marketing</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='business-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#business-icon'></use>
                          </svg>
                          <h6>Business Development</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Call Centers</li>
                            <li>BPO</li>
                            <li>Accounting</li>
                            <li>Commercial Real Estate</li>
                            <li>HR Services</li>
                            <li>Consulting</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='advertise-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#advertise-icon'></use>
                          </svg>
                          <h6>Advertise</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Advertising</li>
                            <li>Branding</li>
                            <li>Creative</li>
                            <li>Video Production</li>
                            <li>Public Relations</li>
                            <li>Media Planning & Buying</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='design-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#design-icon'></use>
                          </svg>
                          <h6>Design</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>Web Design</li>
                            <li>User Experience Design</li>
                            <li>Logo Design</li>
                            <li>Graphic Design</li>
                            <li>Design</li>
                            <li>Digital Design</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='category-slide-box'>
                        <div className='category-item-title'>
                          <svg className='itservice-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#itservice-icon'></use>
                          </svg>
                          <h6>IT Services</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='category-list-box'>
                          <ul>
                            <li>IT Services</li>
                            <li>Cybersecurity</li>
                            <li>Data Analytics</li>
                            <li>Managed IT Services</li>
                            <li>Cloud Consulting</li>
                            <li>Staff Augmentation</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className='popular-category-mbl'>
          <Row>
            <Col md={12}>
              <p className='popular-category-text'>
                Looking for the best IT companies to help support your business? Look no further! Our team has
                researched and analyzed hundreds of IT companies and compiled a list of the top recommended ones based
                on customer feedback, industry expertise, and overall performance.
              </p>
              <div className='category-slide-box'>
                <div className='category-item-title'>
                  <svg className='developement-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#developement-icon'></use>
                  </svg>
                  <h6>Development</h6>
                </div>
                <div className='divider'></div>
                <div className='category-list-box'>
                  <ul>
                    <li>Software Development</li>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>E-Commerce Development</li>
                    <li>AR/VR Development</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
              </div>
              <div className='category-slide-box'>
                <div className='category-item-title'>
                  <svg className='developement-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#digitalmarketing'></use>
                  </svg>
                  <h6>DIGITAL MARKETING</h6>
                </div>
                <div className='divider'></div>
                <div className='category-list-box'>
                  <ul>
                    <li>Digital Marketing</li>
                    <li>Social Media </li>
                    <li>SEO</li>
                    <li>PPC Advertising</li>
                    <li>Email Marketing</li>
                    <li>App Marketing</li>
                  </ul>
                </div>
              </div>
              <div className='category-slide-box'>
                <div className='category-item-title'>
                  <svg className='business-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#business-icon'></use>
                  </svg>
                  <h6>Business Development</h6>
                </div>
                <div className='divider'></div>
                <div className='category-list-box'>
                  <ul>
                    <li>Call Centers</li>
                    <li>BPO</li>
                    <li>Accounting</li>
                    <li>Commercial Real Estate</li>
                    <li>HR Services</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </div>
              <div className='category-slide-box'>
                <div className='category-item-title'>
                  <svg className='advertise-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#advertise-icon'></use>
                  </svg>
                  <h6>Advertise</h6>
                </div>
                <div className='divider'></div>
                <div className='category-list-box'>
                  <ul>
                    <li>Advertising</li>
                    <li>Branding</li>
                    <li>Creative</li>
                    <li>Video Production</li>
                    <li>Public Relations</li>
                    <li>Media Planning & Buying</li>
                  </ul>
                </div>
              </div>
              <div className='category-slide-box'>
                <div className='category-item-title'>
                  <svg className='design-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#design-icon'></use>
                  </svg>
                  <h6>Design</h6>
                </div>
                <div className='divider'></div>
                <div className='category-list-box'>
                  <ul>
                    <li>Web Design</li>
                    <li>User Experience Design</li>
                    <li>Logo Design</li>
                    <li>Graphic Design</li>
                    <li>Design</li>
                    <li>Digital Design</li>
                  </ul>
                </div>
              </div>
              <div className='category-slide-box'>
                <div className='category-item-title'>
                  <svg className='itservice-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#itservice-icon'></use>
                  </svg>
                  <h6>IT Services</h6>
                </div>
                <div className='divider'></div>
                <div className='category-list-box'>
                  <ul>
                    <li>IT Services</li>
                    <li>Cybersecurity</li>
                    <li>Data Analytics</li>
                    <li>Managed IT Services</li>
                    <li>Cloud Consulting</li>
                    <li>Staff Augmentation</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default PopularCategoryComponent
