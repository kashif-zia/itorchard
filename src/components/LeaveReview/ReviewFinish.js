import React from 'react';
import {Container} from 'react-bootstrap';
import { useRouter } from 'next/router'
import Lottie from 'lottie-react';
import FinishReviewImg from '../../../public/assets/Lottie/FinishReview.json';
import Link from 'next/link';

export const FinishReview = () => {
  const router = useRouter()
  return (
    <>
      <section className='section-review-finish'>
        <Container>
          <div className='section-review-finish-content text-center'>
            <div className='review-submitted-image'>
              <Lottie animationData={FinishReviewImg} loop={true} autoplay={true} />
            </div>
            <div className='review-submited-title'>
              <p>
                Your review has been <span className='text-green-26'> Successfully Submitted.</span>
              </p>
            </div>
            <div className='review-submited-desc'>
              <p>
                Rest assured, you'll receive an email notification as soon as your review has been reviewed and approved
                for <br /> publication. We want to keep you in the loop, ensuring you're aware the moment your valuable
                input is live for others
                <br /> to see. Thank you for sharing your thoughts with us!
              </p>
            </div>
            <div className='back-to-home-button' onClick={() => router.back()}>
              Go To Homepage
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default FinishReview;
