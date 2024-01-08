import React from 'react';
import Header from '../../layouts/header/header';

import BodyContent from '../../components/Blogs/BlogDetails';
import Footer from '../../layouts/footer/Footer';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Blogs - IT ORCHARD</title>
        <meta
          name='description'
          content='Find top-notch web, IT, and software development companies effortlessly with IT Orchard. Our platform streamlines your search, saving time while ensuring quality. Our expert-evaluated listings guarantee professionalism and excellence.'
        />
      </Head>
      <Header />
      <BodyContent />
      <Footer />
    </>
  );
};
export default Home;
