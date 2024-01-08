import React from 'react';
import AdsList from './CompanyCardItem';
import SidebarCompanyFilter from './SidebarCompanyFilter';
import TopCompanyFilter from './TopCompanyFilter';
import { Container, Row, Col } from 'react-bootstrap';
const CompanyListComponent = () => {
  return (
    <div>
      <TopCompanyFilter />
      <section className='company-list-content'>
        <Container>
          <Row>
            <Col md={3}>
              <SidebarCompanyFilter />
            </Col>
            <Col md={9}>
            
              <AdsList />
              <AdsList />
              <AdsList />
              <AdsList />
              <AdsList />
              <AdsList />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default CompanyListComponent;
