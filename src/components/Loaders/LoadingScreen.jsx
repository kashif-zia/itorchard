import React from 'react';
import Image from 'next/image';
const LoadingScreen = () => {
  return (
    <div className='loading-container'>
      <div className='logo'>
        <Image src={'/assets/images/logo/logo_full.svg'} width={100} height={100} alt='loader-image' />
      </div>
      <div className='circle circle1'></div>
      <div className='circle circle2'></div>
    </div>
  );
};

export default LoadingScreen;
