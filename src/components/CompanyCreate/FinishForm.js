import React from 'react';

import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';

const FinishFormSection = ({ currentStep, handlePrev }) => {
  const router = useRouter();

  return (
    <section className='finsih-section'>
      <h3>You’re all Set</h3>
      <ReactSVG src='/assets/images/svg/finish.svg' className='finish-svg' />
      <p>
        Thank you for signing up on IT Orchard. It's time to connect you with business partners around the world now.
      </p>

      <hr className='finish-divider' />
      <div className='button-section'>
        <button disabled={currentStep === 0} onClick={handlePrev} className='back-arrow'>
          <ReactSVG src='/assets/images/svg/backArrow.svg' /> Back
        </button>
        <button type='submit' onClick={() => router.push('/dashboard')} className='next-arrow'>
          Dashboard <ReactSVG src='/assets/images/svg/nextArrow.svg' />
        </button>
      </div>
    </section>
  );
};

export default FinishFormSection;
