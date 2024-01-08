import React, { useEffect } from 'react';
import Header from '../../../layouts/header/header';
import BodyContent from '../../../components/CompanyCreate';
import Footer from '../../../layouts/footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Loader1 } from '@/components/Loaders';

const createCompany = () => {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  const companyId = useSelector((state) => state.auth.user?.userCompanyId);
  useEffect(() => {
    if (!token) {
      router.push('/home');
    }
    if (companyId) {
      router.push('/dashboard');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Create Company - IT ORCHARD</title>
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
export default createCompany;
