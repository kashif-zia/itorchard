import React from 'react';
import Header from '../../../layouts/header/header';
import BodyContent from '../../../components/EditProfile/index';
import InnerBanner from '../../../components/Banner/InnerBanner';
import Footer from '../../../layouts/footer/Footer';
import Head from 'next/head';

const EditProfile = () => {
  const bannerTitle = 'Edit Profile';
  const bannerBreadcrumbs = [''];
  return (
    <>
      <Head>
        <title>Edit Profile - IT ORCHARD</title>
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
export default EditProfile;
