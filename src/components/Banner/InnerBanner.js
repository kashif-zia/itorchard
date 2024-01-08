import React from 'react';
import Link from 'next/link';

const InnerBanner = ({ title, breadcrumbs }) => {
  return (
    <div>
      <section className='section-inner-banner'>
        <div className='container'>
          <div className='inner-banner-heading'>
            <h1 className='banner-h1'>{title}</h1>
            <div className='breadcrumb'>
              {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                  {index > 0 && (
                    <span>
                      <i className="fa fa-angle-right breadcrumb-fa-icon" aria-hidden="true"></i>
                    </span> 
                  )}
                  {breadcrumb === 'Home' ? ( // Check if the breadcrumb is "Home"
                    <Link href="/" className='home-link'>
                      {breadcrumb}
                    </Link> 
                  ) : (
                    breadcrumb
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerBanner;
