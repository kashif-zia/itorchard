import React, { useEffect } from 'react';
import BodyContent from '../../components/Dashboard/index';
import InnerBanner from '../../components/Banner/InnerBanner';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/Footer';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const Home = () => {
  const bannerTitle = 'User Dashboard';
  const bannerBreadcrumbs = [''];
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(token);
    if (!token) {
      router.push('/home');
    }
  }, []);
  return (
    <>
      <Head>
        <title>User Dashboard - IT ORCHARD</title>
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
