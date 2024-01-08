import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import ReviewItem from './ReviewItem';
import ReviewFilter from './ReviewFilter';
import ChartComponent from './ChartComponent';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ReactStars from 'react-rating-stars-component';
import millify from 'millify';
const HighlightComponent = ({ listing }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ratings, setRatings] = useState({
    numReviews: 0,
    averageQualityWork: 0,
    averageCost: 0,
    averageResponseTime: 0,
    averageOverallExperience: 0,
  });
  // function calculateRatingAverages(reviews) {
  //   const numReviews = reviews.length;
  //   console.log(reviews, 'all reviews object');
  //   if (numReviews === 0) {
  //     // Return default values or handle the case where there are no reviews
  //     return {
  //       numReviews: 0,
  //       averageQualityWork: 0,
  //       averageCost: 0,
  //       averageResponseTime: 0,
  //       averageOverallExperience: 0,
  //     };
  //   }

  //   // Calculate totals
  //   const totalQualityWork = reviews.reduce((sum, review) => sum + review?.rating?.quality_work, 0);
  //   const totalCost = reviews.reduce((sum, review) => sum + review?.rating?.cost, 0);
  //   const totalResponseTime = reviews.reduce((sum, review) => sum + review?.rating?.response_time, 0);
  //   const totalOverallExperience = reviews.reduce((sum, review) => sum + review?.rating?.overall_experience, 0);

  //   // Calculate averages
  //   const averageQualityWork = totalQualityWork / numReviews;
  //   const averageCost = totalCost / numReviews;
  //   const averageResponseTime = totalResponseTime / numReviews;
  //   const averageOverallExperience = totalOverallExperience / numReviews;

  //   const newRatings = {
  //     numReviews,
  //     averageQualityWork,
  //     averageCost,
  //     averageResponseTime,
  //     averageOverallExperience,
  //   };
  //   console.log(newRatings, 'object of rating');
  //   setRatings(newRatings);
  //   return newRatings;
  // }
  const newRating = useMemo(() => {
    const reviews = listing?.reviews.items;
    const numReviews = reviews.length;

    if (numReviews === 0) {
      // Return default values or handle the case where there are no reviews
      return {
        numReviews: 0,
        averageQualityWork: 0,
        averageCost: 0,
        averageResponseTime: 0,
        averageOverallExperience: 0,
      };
    }

    // Calculate totals
    const totalQualityWork = reviews.reduce((sum, review) => sum + review?.rating?.quality_work, 0);
    const totalCost = reviews.reduce((sum, review) => sum + review?.rating?.cost, 0);
    const totalResponseTime = reviews.reduce((sum, review) => sum + review?.rating?.response_time, 0);
    const totalOverallExperience = reviews.reduce((sum, review) => sum + review?.rating?.overall_experience, 0);

    // Calculate averages
    const averageQualityWork = totalQualityWork / numReviews;
    const averageCost = totalCost / numReviews;
    const averageResponseTime = totalResponseTime / numReviews;
    const averageOverallExperience = totalOverallExperience / numReviews;

    const newRatings = {
      numReviews,
      averageQualityWork,
      averageCost,
      averageResponseTime,
      averageOverallExperience,
    };
    // console.log(newRatings, 'object of rating');
    console.log(typeof newRatings.averageOverallExperience);
    return newRatings;
  }, []);

  // useEffect(() => {
  //   calculateRatingAverages(listing?.reviews.items);
  // }, []);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <section id='highlights' className='company-detail-content'>
        <div className='company-card'>
          <div className='company-detail-box'>
            <div className='company-card-text'>
              <div className='company-about-top'>
                <div className='company-image'>
                  {/* <img

                    className='filter-icon company-icon'
                    src='/assets/images/idenbrid-logo.png'
                    width='72'
                    height='72'
                    alt='Company Logo'
                  /> */}
                  <StorageImage className='company-card' imgKey={listing?.logo} />
                </div>
                <div className='about-company'>
                  <div className='company-name'>
                    <h6 className='company-heading-h2'>{listing?.company_name}</h6>
                    <div className='company-rating'>
                      <span className='rating-label'> Rating:</span>
                      <ReactStars
                        disabled
                        isHalf={true}
                        count={5}
                        edit={false}
                        value={newRating.averageOverallExperience} // Set a default value if newRating.averageOverallExperience is undefined
                        size={15}
                        activeColor='#FF9922'
                      />
                    </div>
                  </div>
                  <p className={`company-description ${isExpanded ? 'expanded' : ''}`}>
                    {listing?.description.slice(0, 160)}
                    &nbsp;
                    {isExpanded ? (
                      <>
                        {listing?.description}
                        <span onClick={handleToggle} className='read-more-link'>
                          Read less...
                        </span>
                      </>
                    ) : (
                      <>
                        <span onClick={handleToggle} className='read-more-link'>
                          Read more...
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className='company-card-body-meta'>
                {listing?.is_verifeid && (
                  <div className='company-meta-item'>
                    <svg className='verified-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#verifiedicon'></use>
                    </svg>
                    <h6 className='header-item-title'>Verified</h6>
                  </div>
                )}
                <div className='company-meta-item'>
                  <svg className='founded-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#foundedicon'></use>
                  </svg>

                  <h6 className='header-item-title'>Established in ({listing?.founded || 2001})</h6>
                </div>
                <div className='company-meta-item'>
                  <svg className='employee-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#employeeicon'></use>
                  </svg>
                  <h6 className='header-item-title'>{listing?.no_of_employee} Employees</h6>
                </div>
                <div className='company-meta-item'>
                  <svg className='earning-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#earningicon'></use>
                  </svg>
                  <h6 className='header-item-title'>${millify(listing?.total_earning)} - Total Earnings</h6>
                </div>
                <div className='company-meta-item'>
                  <svg className='hourlyicon-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#hourlyrateicon'></use>
                  </svg>

                  <h6 className='header-item-title'>{listing?.hourly_rate} / hr</h6>
                </div>
                <div className='company-meta-item'>
                  <svg className='priceperproject-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#priceperprojecticon'></use>
                  </svg>

                  <h6 className='header-item-title'>{listing?.project_earnings}+ Per Project</h6>
                </div>
              </div>
            </div>
            <div className='company-btn-group'>
              <div className='cpmny-send-msg-button'>
                <a href={`mailto:${listing?.email}`} className='company-sendmsg-btn text-decoration-none '>
                  Send Message
                </a>
              </div>
              <div className='cpmny-visit-site-button'>
                <Link href={listing?.website_url} className='company-visit-btn'>
                  <svg className='link-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#linkicon'></use>
                  </svg>
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='chart-section'>
        {listing?.reviews?.items?.length > 0 && (
          <Container fluid className='p-0'>
            <Row className='row-gap'>
              <Col md={6}>
                <div className='chart-box'>
                  <div className='chart-heading'>
                    <h5>Services Provided</h5>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing.</p> */}
                  </div>
                  <ChartComponent services={listing.services} />
                </div>
              </Col>

              <Col md={6}>
                <div className='company-raiting'>
                  <h5 className='company-overall-h5'>Company Overall Rating</h5>
                  <div className='rating-review-box'>
                    <div className='average-rating-box'>
                      <h4 className='average-h4'>Average Review Rating</h4>
                      <div className='rating-count-box'>
                        <div className='rating-number'>{Math.round(newRating.averageOverallExperience)}</div>
                        <div className='raring-group'>
                          <ReactStars
                            disabled
                            isHalf={true}
                            count={5}
                            edit={false}
                            value={newRating.averageOverallExperience} // Set a default value if newRating.averageOverallExperience is undefined
                            size={15}
                            activeColor='#FF9922'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='average-rating-box'>
                      <h4 className='average-h4'>Total Reviews</h4>
                      <div className='rating-count-box'>
                        <div className='rating-number'>{newRating.numReviews}</div>
                        <div>
                          <svg className='liketotal-icon'>
                            <use xlinkHref='/assets/images/svg/icons.svg#liketotalicon'></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='raiting-sub-points'>
                    <span>{newRating.averageQualityWork}</span>
                  </div>
                  <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h6 className='progressbar-label'>Quality Work</h6>
                    </div>
                    <div className='progressbar-box'>
                      <ProgressBar
                        className='quality-work'
                        now={newRating.averageQualityWork}
                        max={5}
                        aria-labelledby='Quality Work'
                      />
                    </div>
                  </div>
                  <div className='raiting-sub-points'>
                    <span>{newRating.averageResponseTime}</span>
                  </div>
                  <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h6 className='progressbar-label'>Response time</h6>
                    </div>
                    <div className='progressbar-box'>
                      <ProgressBar
                        className='response-time'
                        now={newRating.averageResponseTime}
                        max={5}
                        aria-labelledby='Response time'
                      />
                    </div>
                  </div>
                  <div className='raiting-sub-points'>
                    <span>{newRating.averageCost}</span>
                  </div>
                  <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h6 className='progressbar-label'>Cost</h6>
                    </div>
                    <div className='progressbar-box'>
                      <ProgressBar className='cost' now={newRating.averageCost} max={5} aria-labelledby='Cost' />
                    </div>
                  </div>
                  {/* <div className='raiting-sub-points'>
                    <span>4.0</span>
                  </div> */}
                  {/* <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h6 className='progressbar-label'>Willing to Refer</h6>
                    </div>
                    <div className='progressbar-box'>
                      <ProgressBar className='willing-refer' now={80} aria-labelledby='Willing to Refer' />
                    </div>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </section>
      <section className='google-map-section'>
        <div className='google-map-box'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54445.9184497621!2d74.41673499999999!3d31.47276475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699425260625!5m2!1sen!2s'
            width='100%'
            height='450'
            allowFullScreen=''
            aria-hidden='false'
            tabIndex={0}
          ></iframe>
        </div>
      </section>
      <section id='review' className='ads-review-section'>
        <ReviewFilter reviewCount={newRating?.numReviews} id={listing?.id} />
        <ReviewItem  reviews={listing?.reviews} />
      </section>
    </div>
  );
};

export default HighlightComponent;
