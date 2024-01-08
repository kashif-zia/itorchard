import React from 'react';
import Header from '../../layouts/header/header';
import InnerBanner from '../../components/Banner/InnerBanner';
import BodyContent from '../../components/About';
import Footer from '../../layouts/footer/Footer';
import Head from 'next/head';

const Home = () => {
  const bannerTitle = 'About Us';
  const bannerBreadcrumbs = ['Home', 'About us'];
  return (
    <>
      <Head>
        <title>About Us - IT ORCHARD</title>
        <meta
          name='description'
          content='Find top-notch web, IT, and software development companies effortlessly with IT Orchard. Our platform streamlines your search, saving time while ensuring quality. Our expert-evaluated listings guarantee professionalism and excellence.'
        />
      </Head>
      <Header />
      <InnerBanner title={bannerTitle} breadcrumbs={bannerBreadcrumbs} />
      <BodyContent />
      <Footer />
    </>
  );
};
export default Home;
