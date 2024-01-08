import React, { useEffect, useState } from 'react';
import SidebarCompany from './Sidebar';
import Highlight from './Highlight';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import ContentLoader from 'react-content-loader';
import { getIOCompany } from '@/graphql/queries';
const CompanyDetailComponent = () => {
  const router = useRouter();
  const id = router.query.id;
  const [loading, setLoading] = useState(false);
  const [listingDetail, setListingDetail] = useState();
  const getListingDetailAPI = async () => {
    try {
      setLoading(true);
      const getListingAPI = await API.graphql({
        query: getIOCompany,
        variables: {
          id: id,
        },
      });
      const listing = getListingAPI.data.getIOCompany;
      setListingDetail(listing);
      setLoading(false);
      console.log(listing);
    } catch (err) {
      setLoading(false);
      console.log(err, 'API ERR');
    }
  };
  useEffect(() => {
    if (id) {
      getListingDetailAPI();
    }
  }, [id]);
  return (
    <div>
      <section className='company-detail-section'>
        <Container>
          <Row>
            <Col sm={12} md={1}>
              <SidebarCompany social_media={listingDetail?.social_media} />
            </Col>
            <Col sm={12} md={11}>
              {loading && Array.from({ length: 4 }).map((item, index) => <MyLoader key={index} />)}
              {!loading && listingDetail && <Highlight listing={listingDetail} />}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const MyLoader = (props) => (
  <ContentLoader speed={2} viewBox='0 0 400 160' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
    <rect x='2' y='5' rx='3' ry='3' width='380' height='146' />
  </ContentLoader>
);
export default CompanyDetailComponent;
