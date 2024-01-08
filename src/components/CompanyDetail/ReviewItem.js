import React from 'react';
import ReactStars from 'react-rating-stars-component';
const ReviewItemComponent = ({ reviews }) => {
  return (
    <div>
      {reviews.items.length > 0 &&
        reviews.items.map((item, index) => (
          <div className='review-item' key={index}>
            <h3 className='review-heaing-h3'>
              <span>{index + 1}</span>
              <span>.</span>
              {item?.company_name}
            </h3>
            <div className='first-box'>
              <div className='project-detail-box'>
                <h4 className='project-detail-h4'>Project Details:</h4>
                <div className='project-detail-item'>
                  <div className='project-item-icon'>
                    <svg className='setting-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#settingicon'></use>
                    </svg>
                  </div>
                  <span className='project-detail-text'>
                    {item?.offered_service?.map((item, index) => (
                      <span key={index}>{item}, &nbsp;</span>
                    ))}
                  </span>
                </div>
                <div className='project-detail-item'>
                  <div className='project-item-icon'>
                    <svg className='earning-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#earningicon'></use>
                    </svg>
                  </div>
                  <span className='project-detail-text'>${item.project_cost} </span>
                </div>
                <div className='project-detail-item'>
                  <div className='project-item-icon'>
                    <svg className='clock-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#clockicon'></use>
                    </svg>
                  </div>
                  <span className='project-detail-text'>
                    {item?.start_date} - {item.end_date}
                  </span>
                </div>
              </div>
              <div className='project-summary'>
                <h4 className='project-summary-h4'>Project summary:</h4>
                <p className='project-summary-text'>{item?.project_description}</p>
              </div>
            </div>
            <div className='second-box'>
              <div className='client-review-box'>
                <h4 className='client-review-title'>Client Review:</h4>
                <h3 className='client-review-h4'>{item?.review}</h3>
                <h3 className='review-summary-h4'>Review summary:</h3>
                <p className='review-summary-p'>{item?.review_description}</p>
              </div>
              <div className='client-averagereview-box'>
                <div className='clientstar'>
                  <h2 className='client-reivew-count'>{item?.rating?.overall_experience}</h2>
                  <div className='client-star-icon-group '>
                    <ReactStars
                      disabled
                      isHalf={true}
                      count={5}
                      edit={false}
                      value={item?.rating?.overall_experience} // Set a default value if newRating.averageOverallExperience is undefined
                      size={25}
                      activeColor='#FF9922'
                    />
                  </div>
                </div>
                <div className='client-perform'>
                  <span>Quality</span>
                  <span>{item?.rating?.quality_work}</span>
                </div>
                <div className='client-perform'>
                  <span>Schedule</span>
                  <span>{item?.rating?.response_time}</span>
                </div>
                <div className='client-perform'>
                  <span>Cost</span>
                  <span>{item?.rating.cost}</span>
                </div>
                {/* <div className='client-perform'>
                  <span>Willing to Refer</span>
                  <span>5.0</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ReviewItemComponent;
