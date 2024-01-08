import React from 'react';
import Banner from './Banner';
import PopularCategory from './PopularCategory';
import CompanyList from './CompanyList';
import Blogs from './Blogs';
import QuoteUs from './QuoteUs';
import Head from 'next/head';
const HomeComponent = () => {
  return (
    <div>
      <Head>
        <title>Top Company List - IT Orchard</title>
        <meta
          name='description'
          content='Find top-notch web, IT, and software development companies effortlessly with IT Orchard. Our platform streamlines your search, saving time while ensuring quality. Our expert-evaluated listings guarantee professionalism and excellence.'
        />
      </Head>
      <Banner />
      <PopularCategory />
      <CompanyList />
      <Blogs />
      <section className='section-contact-us'>
        <QuoteUs />
      </section>
    </div>
  );
};

export default HomeComponent;
