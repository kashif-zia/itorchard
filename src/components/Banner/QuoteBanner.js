import React from 'react';;
import Link from 'next/link';

const QuoteBanner = () => {
  return (
    <div>
      <section className='quoteus-banner-section'>
        {/* <video autoPlay muted loop className='video-bg'>
          <source src='/assets/video/demo.mp4' type='video/mp4' />
        </video> */}
        <div className='quoteus-content'>
          <h3 className='quote-banner-h3'>Breathe New Life into Your Business Growth!</h3>
          <p className='quote-banner-p'>
            Discover innovative solutions that can revive your business and propel it towards unprecedented success.
          </p>
          <Link href='/contact-us' className='let-start-btn'>
            Let’s Start
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuoteBanner;
