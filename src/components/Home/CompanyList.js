import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdsList from '../CompanyListing/CompanyCardItem';
import AdsListCompanyFilter from '../CompanyListing/CompanyListFilter';
import Link from 'next/link';
import { API } from 'aws-amplify';
import Image from 'next/image';
import { listActiveCompanies, listIOCompanies } from '@/graphql/queries';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
const CompanyList = () => {
  const [adsListings, setAdsListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState(null);
  const filter = useSelector((state) => state.filter);
  const getByFilters = async (e) => {
    e.preventDefault();
    const variables = {
      // nextToken,
      limit: 10,
      status: 'active',
      sortDirection: filter.sortBy,
    };
    if (filter.budget) {
      variables.filter = { ...variables.filter, project_earnings: { le: filter.budget } };
    }
    // if (filter.category) {
    //   variables.filter = { ...variables.filter, offered_service: { contains: filter.category } }
    // }
    if (filter.location) {
      variables.filter = { ...variables.filter, headquarter_location: { contains: filter.location } };
    }
    console.log(filter, 'filter');
    console.log(variables, 'filter');
    try {
      setLoading(true);
      const getAdsAPI = await API.graphql({
        query: listActiveCompanies,
        variables,
      });
      const adsList = getAdsAPI.data.listActiveCompanies.items;
      setAdsListing(adsList);
      setNextToken(getAdsAPI.data.listActiveCompanies.nextToken);
      // console.log(getAdsAPI.data.listAdsPosts, 'AdsList');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, 'Get ads post error');
    }
  };
  const getAdsListingAPI = async () => {
    try {
      setLoading(true);
      const getAdsAPI = await API.graphql({
        query: listActiveCompanies,
        variables: {
          status: 'active',
          nextToken,
          limit: 4,
          sortDirection: filter.sortBy,
        },
      });
      const adsList = getAdsAPI.data.listActiveCompanies.items;
      setAdsListing(adsList);
      setNextToken(getAdsAPI.data.listActiveCompanies.nextToken);
      console.log(getAdsAPI.data.listActiveCompanies, 'AdsList');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, 'Get ads post error');
    }
  };
  const LoadMoreHandler = async () => {
    try {
      setLoading(true);
      const getAdsAPI = await API.graphql({
        query: listActiveCompanies,
        variables: {
          status: 'active',
          nextToken,
          limit: 4,
        },
      });
      const adsList = getAdsAPI.data.listActiveCompanies.items;
      setAdsListing((prev) => [...prev, ...adsList]);
      setNextToken(getAdsAPI.data.listActiveCompanies.nextToken);
      console.log(getAdsAPI.data.listActiveCompanies.items, 'AdsList');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, 'Get ads post error');
    }
  };
  useEffect(() => {
    getAdsListingAPI();
    console.log(filter, 'FILTERS');
  }, []);
  return (
    <section className='company-list-section'>
      <Image src='/assets/images/bg-shade-one.png' alt='main logo' className='bg-shade-two' width={668} height={951} />
      <Container className='company-list'>
        <h2 className='company-list-h2'>
          Top Rated Companies for <span className='primary-text'>Mobile App</span>
        </h2>
        <Row>
          <Col md={12}>
            <AdsListCompanyFilter getFilteredData={getByFilters} />
            {!loading &&
              adsListings.length > 0 &&
              adsListings.map((item, index) => <AdsList key={index} listing={item} />)}
            {!loading && !adsListings.length > 0 && (
              <div className='shadow  rounded-3 p-5 d-flex flex-column  align-items-center justify-content-center bg-white'>
                <h6 className='text-center  text-success    '>That's all!</h6>
                <p className='text-center    '>No Related Companies</p>
              </div>
            )}

            {loading && Array.from({ length: 4 }).map((item, index) => <MyLoader key={index} />)}
            <div className='browse-button'>
              {nextToken && (
                <button onClick={LoadMoreHandler} className='view-more-btn '>
                  Load More
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
const MyLoader = (props) => (
  <ContentLoader speed={2} viewBox='0 0 400 160' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
    <rect x='2' y='5' rx='3' ry='3' width='380' height='146' />
  </ContentLoader>
);

export default CompanyList;
