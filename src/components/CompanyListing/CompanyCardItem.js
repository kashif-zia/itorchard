import React, { useEffect, useMemo, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Link from 'next/link';
import ReactStars from 'react-rating-stars-component';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import millify from 'millify';
import { ReactSVG } from 'react-svg';

const CompanyCardItem = ({ listing }) => {
  // const [newRating, setRatings] = useState({
  //   numReviews: 0,
  //   averageQualityWork: 0,
  //   averageCost: 0,
  //   averageResponseTime: 0,
  //   averageOverallExperience: undefined,
  // });
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
  //   console.log(typeof newRatings.averageOverallExperience);
  //   setRatings(newRatings);
  //   return newRatings;
  // }
  // console.log(listing);
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
  // console.log(newRating, 'new rating');

  // useEffect(() => {
  //   calculateRatingAverages(listing?.reviews.items);
  // }, []);

  // console.log(listing, 'listing');
  return (
    <div className='cmpny-list-col-right-content'>
      {(listing.is_sponsored && (
        <div className='svg-image'>
          <ReactSVG src='/assets/images/svg/sponsored.svg' />
        </div>
      )) ||
        null}
      <div className='company-card'>
        <div className='cmpny-detail'>
          <div className='company-image'>
            <StorageImage
              className='company-image'
              imgKey={listing.logo}
              // width='72'
              // height='72'
              // quality={100}
              alt='company image'
            />
          </div>
          <div className='about-cmpny'>
            <div className='company-name'>
              <div className='p-16-600'>{listing?.company_name}</div>

              <div className='cmpny-rtng'>
                <span className='cmpny-rtng-label'>Rating:</span>
                <span className='rating-star-box'>
                  {/* <svg className='starrating-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#starratingicon'></use>
                  </svg> */}

                  <ReactStars
                    disabled
                    isHalf={true}
                    count={5}
                    edit={false}
                    value={newRating.averageOverallExperience} // Set a default value if newRating.averageOverallExperience is undefined
                    size={15}
                    activeColor='#FF9922'
                  />
                </span>
              </div>
            </div>
            <p className='cmpny-desc'>{listing.description}</p>
          </div>
        </div>
        <hr className='cmpny-header-separator' />
        <div className='cmpmy-card-body-header'>
          {listing.is_verifeid && (
            <div className='body-header-item'>
              <svg className='verified-icon'>
                <use xlinkHref='/assets/images/svg/icons.svg#verifiedicon'></use>
              </svg>
              <h6 className='header-item-title active-verified'>Verified</h6>
            </div>
          )}
          <div className='body-header-item'>
            <svg className='founded-icon'>
              <use xlinkHref='/assets/images/svg/icons.svg#foundedicon'></use>
            </svg>
            <h6 className='header-item-title'>Established in ({listing.founded})</h6>
          </div>
          <div className='body-header-item'>
            <svg className='founded-icon'>
              <use xlinkHref='/assets/images/svg/icons.svg#employeeicon'></use>
            </svg>
            <h6 className='header-item-title'>{listing.no_of_employee}</h6>
          </div>
          <div className='body-header-item'>
            <svg className='founded-icon'>
              <use xlinkHref='/assets/images/svg/icons.svg#earningicon'></use>
            </svg>
            <h6 className='header-item-title'>${millify(listing.total_earning)} - Total Earnings</h6>
          </div>
          <div className='body-header-item'>
            <svg className='founded-icon'>
              <use xlinkHref='/assets/images/svg/icons.svg#maplocation-icon'></use>
            </svg>
            <h6 className='header-item-title'>{listing.headquarter_location}</h6>
          </div>
        </div>

        <div className='cmpny-card-content'>
          <div className='raiting-col-left'>
            <div className='cmpmy-overall-raiting-content'>
              <div className='cmpny-raiting-header'>
                <div className='overall-raiting-title'>
                  <h6>Company Overall Rating</h6>
                  <p>({listing?.reviews?.items?.length} Reviews)</p>
                </div>
                <div className='raiting-points'>
                  <h6>{Math.round(newRating.averageOverallExperience)}</h6>
                </div>
              </div>
              <div className='cmpny-raiting'>
                <div className='progress-rating-box'>
                  <div className='raiting-sub-points text-right'>
                    <p>{Math.round(newRating.averageQualityWork)}</p>
                  </div>
                  <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h5>Quality Work</h5>
                    </div>
                    <div className='progress app-design'>
                      <ProgressBar
                        className='cmpny-prgrs-bar quality-work '
                        now={newRating.averageQualityWork}
                        max={5}
                        aria-labelledby='Quality Work'
                      />
                    </div>
                  </div>
                </div>
                <div className='progress-rating-box'>
                  <div className='raiting-sub-points text-right'>
                    <p>{Math.round(newRating.averageResponseTime)}</p>
                  </div>
                  <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h5>Response time</h5>
                    </div>
                    <div className='progress app-design'>
                      <ProgressBar
                        className='cmpny-prgrs-bar response-time '
                        now={newRating.averageResponseTime}
                        max={5}
                        aria-labelledby='Response Time'
                      />
                    </div>
                  </div>
                </div>
                <div className='progress-rating-box'>
                  <div className='raiting-sub-points text-right'>
                    <p>{Math.round(newRating.averageCost)}</p>
                  </div>
                  <div className='raiting-type'>
                    <div className='raiting-type-title'>
                      <h5>Cost</h5>
                    </div>
                    <div className='progress app-design'>
                      <ProgressBar
                        className='cmpny-prgrs-bar cost '
                        now={newRating.averageCost}
                        max={5}
                        aria-labelledby='Cost'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='raiting-col-right'>
            <div className='cmpny-content-buttons'>
              <div className='cpmny-send-msg-button'>
                <button className='cpmny-send-msg-btn'>Send Message</button>
              </div>
              <div className='cpmny-view-profile-button'>
                <Link href={`/company-detail/${listing.id}`} className='cpmny-view-profile-btn'>
                  <svg className='viewprofile-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#viewprofile-icon'></use>
                  </svg>
                  View Profile
                </Link>
              </div>
              <div className='cpmny-visit-site-button'>
                <Link href='#' className='cpmny-visit-site-btn'>
                  <svg className='link-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#linkicon'></use>
                  </svg>
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyCardItem;
