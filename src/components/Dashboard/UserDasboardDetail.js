import React, { useState, useMemo, useEffect, memo } from 'react';
import ChartComponent from '../CompanyCreate/Chart';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ReviewItem from '../CompanyDetail/ReviewItem';
import { API } from 'aws-amplify';
import { getIOCompany } from '@/graphql/queries';
import { Loader1 } from '../Loaders';

const UserDasboardDetail = () => {
  const CompanyId = useSelector((state) => state.auth.user?.userCompanyId);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState(null);
  const [services, setServices] = useState(null);
  // const { social_media, services, reviews } = company || null;

  const router = useRouter();
  const handleRedirect = (editComponent) => {
    const url = `/dashboard/edit-profile?edit=${editComponent}`;
    router.push(url, url, { shallow: true });
  };

  const generateGreenColors = useMemo(() => {
    const numColors = services?.length;
    const baseHue = 140; // Green hue in the HSL color model

    const dynamicColors = [];

    for (let i = 0; i < numColors; i++) {
      const lightness = (i + 1) * (90 / numColors); // Adjust lightness within a range to avoid white
      const color = `hsl(${baseHue}, 100%, ${lightness}%)`;
      dynamicColors.push(color);
    }

    return dynamicColors;
  }, [services]);

  const getListingDetailAPI = async () => {
    try {
      setLoading(true);
      const getListingAPI = await API.graphql({
        query: getIOCompany,
        variables: {
          id: CompanyId,
        },
      });
      const listing = getListingAPI.data.getIOCompany;
      setServices(listing?.services);
      setCompany(listing);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, 'API ERR');
    }
  };
  useEffect(() => {
    if (CompanyId) {
      getListingDetailAPI();
    }
  }, [CompanyId]);

  return (
    <div>
      <section className='companyinfo-section'>
        {loading && <Loader1 />}
        <Container>
          <Row className='userrow-gap'>
            <Col md={6}>
              <div className='userdashboard-companyinfo-box'>
                <div className='userdashboard-companyheading'>
                  <h5>Company Info</h5>
                  <div onClick={() => handleRedirect('company-info')} className='edit-btn'>
                    <svg className='edit-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#editicon'></use>
                    </svg>
                    Edit
                  </div>
                </div>
                <div className='conpanyinfo-detail'>
                  <div className='conpanyinfo-img'>
                    {/* <Image src='/assets/images/idenbrid-logo.png' width={150} height={150} alt='company image' /> */}
                    {/* <Image src='/assets/images/idenbrid-logo.png' width={150} height={150} alt='company image' /> */}
                    <StorageImage
                      imgKey={company?.logo}
                      width={150}
                      height={150}
                      loading='lazy'
                      alt={company?.company_name}
                    />
                  </div>
                  <div className='companyinfo-text'>
                    <div className='company-info-textitem'>
                      <span className='companyinfo-label'>Status</span>
                      <span className='span'>{company?.status}</span>
                    </div>
                    <div className='company-info-textitem'>
                      <span className='companyinfo-label'>Name:</span>
                      <span>{company?.company_name}</span>
                    </div>
                    <div className='company-info-textitem'>
                      <span className='companyinfo-label'>Tagline:</span>
                      <span className='span'>{company?.company_tagline}</span>
                    </div>
                    <div className='company-info-textitem'>
                      <span className='companyinfo-label'>Email:</span>
                      <span className='span'>{company?.email}</span>
                    </div>
                    <div className='company-info-textitem'>
                      <span className='companyinfo-label'>Phone:</span>
                      <span className='span'>{company?.phone_no}</span>
                    </div>
                    <div className='company-info-textitem'>
                      <span className='companyinfo-label'>Website:</span>
                      <Link href={company?.website_url || 'javascript:void(0)'} className='url'>
                        {company?.website_url}
                      </Link>
                    </div>
                    <Link href={`/company-detail/${company?.id}`} className='view-profile-link'>
                      View Profile
                      <svg className='arrowupright'>
                        <use xlinkHref='/assets/images/svg/icons.svg#arrowupright'></use>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='userdashboard-companylocation-box'>
                <div className='userdashboard-companylocationheading'>
                  <h5>Location</h5>
                  <div className='edit-btn' onClick={() => handleRedirect('company-info')}>
                    <svg className='edit-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#editicon'></use>
                    </svg>
                    Edit
                  </div>
                </div>
                <div className='headquarter-heading'>Headquarter</div>
                <p className='headquarter-text'>{company?.headquarter_location}</p>
                {company?.location?.map((item, index) => (
                  <div key={index}>
                    {' '}
                    <div className='branch-heading'>Branch {index + 1}</div>
                    <p className='branch-text'>{item}</p>
                  </div>
                ))}
                {/* <Link href='/See-more' className='Seemore-link'>
                  See more
                </Link> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='chart-section'>
        <Container>
          <Row className='userrow-gap'>
            <Col md={6}>
              <div className='userdashboard-chart-box'>
                <div className='userdashboard-chartheading'>
                  <h5>Services Provided</h5>
                  <div className='edit-btn' onClick={() => handleRedirect('services')}>
                    <svg className='edit-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#editicon'></use>
                    </svg>
                    Edit
                  </div>
                </div>
                <ChartComponent selectedServices={services} generateGreenColors={generateGreenColors} legend />
              </div>
            </Col>

            <Col md={6}>
              <div className='social-media-account'>
                <div className='userdashboard-socialheading'>
                  <h5 className='company-overall-h5'>Social Media accounts</h5>
                  <div className='edit-btn' onClick={() => handleRedirect('social-media')}>
                    <svg className='edit-icon'>
                      <use xlinkHref='/assets/images/svg/icons.svg#editicon'></use>
                    </svg>
                    Edit
                  </div>
                </div>

                <div className='url-field-group'>
                  <svg className='github-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#userdahboardgithubicon'></use>
                  </svg>
                  <input
                    type='url'
                    name='githuburl'
                    className='urlfield'
                    placeholder='https://github.com/Idenbrid'
                    value={company?.social_media?.other || ''}
                    readOnly
                  />
                </div>
                <div className='url-field-group'>
                  <svg className='linkedin-icon'>
                    <use xlinkHref='/assets/images/svg/icons.svg#userdahboardlinkedinicon'></use>
                  </svg>
                  <input
                    type='url'
                    name='githuburl'
                    className='urlfield'
                    placeholder='https://www.linkedin.com/company/idenbrid/'
                    readOnly
                    value={company?.social_media?.linkedin || ''}
                  />
                </div>
                <div className='url-field-group'>
                  <Image
                    src='/assets/images/svg/Insta.svg'
                    className='instagram-icon'
                    width={40}
                    height={40}
                    alt='instagram'
                  />
                  <input
                    type='url'
                    name='githuburl'
                    className='urlfield'
                    placeholder='https://www.instagram.com/idenbrid_inc/'
                    readOnly
                    value={company?.social_media?.instagram || ''}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {(company?.reviews?.items.length && (
        <section id='review-section'>
          <Container>
            <h2 className='profile-review-h2'>
              Profile Reviews <span className='review-count-no'>({company?.reviews?.items.length})</span>
            </h2>
            <ReviewItem reviews={company?.reviews} />
            {/* <Row>
            <Col md={12}>
              <h2 className='profile-review-h2'>
                Profile Reviews <span className='review-count-no'>(35)</span>
              </h2>
              <div className='review-item m-0'>
                <h3 className='review-heaing-h3'>
                  <span>1</span>
                  <span>.</span>
                  UI/UX Design & Video Production for Driving App Company
                </h3>
                <div className='first-box'>
                  <div className='project-detail-box'>
                    <h4 className='project-detail-h4'>Project Details:</h4>
                    <div className='project-detail-item'>
                      <div className='project-item-icon'>
                        <svg className='setting-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#settingicon'></use>
                        </svg>
                      </div>
                      <span className='project-detail-text'>Branding, Logo, UX/UI Design, Video Production</span>
                    </div>
                    <div className='project-detail-item'>
                      <div className='project-item-icon'>
                        <svg className='earning-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#earningicon'></use>
                        </svg>
                      </div>
                      <span className='project-detail-text'>$50,000 to $199,999 </span>
                    </div>
                    <div className='project-detail-item'>
                      <div className='project-item-icon'>
                        <svg className='clock-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#clockicon'></use>
                        </svg>
                      </div>
                      <span className='project-detail-text'>Oct. 2021 - Feb. 2022</span>
                    </div>
                  </div>
                  <div className='project-summary'>
                    <h4 className='project-summary-h4'>Project summary:</h4>
                    <p className='project-summary-text'>
                      IDENRBID is an IT contract development company with development teams located in Japan and
                      Pakistan. We have a wide range of customers, from startup companies to companies listed on the
                      Tokyo Stock Exchange Prime, and we provide one-stop development services.
                    </p>
                  </div>
                </div>
                <div className='second-box'>
                  <div className='client-review-box'>
                    <h4 className='client-review-title'>Client Review:</h4>
                    <h3 className='client-review-h4'>
                      “Their UI/UX team has been the most valuable part of the engagement.”
                    </h3>
                    <h3 className='review-summary-h4'>Review summary:</h3>
                    <p className='review-summary-p'>
                      The company is pleased with IDENBRID outputs — their UI/UX designs have received positive feedback
                      from internal and external stakeholders. The same is true for the video commercial. Overall, the
                      team has proven to be UI/UX experts. Their design experience has been top-notch and impressive.
                    </p>
                  </div>
                  <div className='client-averagereview-box'>
                    <div className='clientstar'>
                      <h2 className='client-reivew-count'>4.8</h2>
                      <div className='client-star-icon-group'>
                        <svg className='starrating-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#clientstaricon'></use>
                        </svg>
                        <svg className='starrating-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#clientstaricon'></use>
                        </svg>
                        <svg className='starrating-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#clientstaricon'></use>
                        </svg>
                        <svg className='starrating-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#clientstaricon'></use>
                        </svg>
                        <svg className='starrating-icon'>
                          <use xlinkHref='/assets/images/svg/icons.svg#clientstaricon'></use>
                        </svg>
                      </div>
                    </div>
                    <div className='client-perform'>
                      <span>Quality</span>
                      <span>3</span>
                    </div>
                    <div className='client-perform'>
                      <span>Schedule</span>
                      <span>3</span>
                    </div>
                    <div className='client-perform'>
                      <span>Cost</span>
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
          </Container>
        </section>
      )) ||
        null}
    </div>
  );
};
export default memo(UserDasboardDetail);
