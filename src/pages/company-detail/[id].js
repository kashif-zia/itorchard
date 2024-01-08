import React from 'react';
import BodyContent from '../../components/CompanyDetail';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home = () => {
  const bannerTitle = 'Best Web Design Companies';
  const bannerBreadcrumbs = ['Home', 'Best Web Design Companies'];

  return (
    <>
      <Head>
        <title>Company Detail - IT</title>
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
