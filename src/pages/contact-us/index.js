import React from 'react';
import Header from '../../layouts/header/header';
import InnerBanner from '../../components/Banner/InnerBanner';
import BodyContent from '../../components/ContactUs';
import Footer from '../../layouts/footer/Footer';
import Head from 'next/head';

const Home = () => {
  const bannerTitle = 'Contact Us';
  const bannerBreadcrumbs = ['Home', 'Contact Us'];
  return (
    <>
      <Head>
        <title>Contact Us - IT ORCHARD</title>
        <meta
          name='description'
          content='Find top-notch web, IT, and software development companies effortlessly with IT Orchard. Our platform streamlines your search, saving time while ensuring quality. Our expert-evaluated listings guarantee professionalism and excellence.'
        />
      </Head>
      <Header />
      <section className='contactform-section'>
        <InnerBanner title={bannerTitle} breadcrumbs={bannerBreadcrumbs} />
        <BodyContent />
      </section>
      <Footer />
    </>
  );
};
export default Home;
