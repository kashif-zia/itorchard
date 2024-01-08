import React from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <div className='loader-text'>
      <Image src='/assets/images/header_logo.svg' className='img-fluid' width={500} height={500} alt='dsf' />
      {/* <h3 className='mt-3'>Please wait IT Orchard.....</h3> */}
    </div>
  );
};

export { LoadingScreen };
