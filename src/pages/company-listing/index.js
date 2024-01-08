import React from 'react';
import BodyContent from '../../components/CompanyListing';
import InnerBanner from '../../components/Banner/InnerBanner';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/Footer';
import Head from 'next/head';

const Home = () => {
  const bannerTitle = 'Best Web Design Companies';
  const bannerBreadcrumbs = ['Home', 'Best Web Design Companies'];
  return (
    <>
      <Head>
        <title>Company Listing - IT ORCHARD</title>
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
