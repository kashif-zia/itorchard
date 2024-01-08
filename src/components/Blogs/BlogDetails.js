import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import BlogList from './BlogListing';
import QuoteBanner from '../Banner/QuoteBanner';

import Link from 'next/link';
import Image from 'next/image';
import { API } from 'aws-amplify';
import { listBlogs } from '@/graphql/queries';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ContentLoader from 'react-content-loader';
import moment from 'moment';
import InnerBanner from '../../components/Banner/InnerBanner';
import { ReactSVG } from 'react-svg';

const BlogDetailComponent = () => {
  const htmlContent = `
        <p>Progressive Web Apps is an innovative blend of web-based and native application technologies. PWAs provide increased performance, offline capabilities, push notifications, and seamless cross-platform compatibility by combining the finest characteristics of both web and native applications.</p>
        <img src='/assets/images/blog-details/object.png' />
        <p>
        They take away the requirement for traditional app downloads and installations, letting users view and utilize the app as quickly as they would a standard website. PWAs have emerged as a popular and viable alternative for businesses aiming to reach a broader audience and provide a user-friendly application experience due to their ability to deliver engaging encounters across devices and platforms.
        </p>
        <h2>
        Future of PWAs
        </h2>
        <p>
        Understanding how progressive web applications function is critical to understanding their future importance. When a user initiates a PWA, updates get downloaded in the background. When you upgrade your web application, both app site visitors and PWA users will receive access to new features without the need for any explicit upgrades.
        </p>
        <p>
        When a user encounters with the PWA, the device's capabilities may be evaluated and more data loaded in the background. This opens up opportunities for future preparation, resulting in a more competitive application.
        </p>
        <p>
        Certain factors suggest that PWAs will remain relevant in the future and evolve into an even better app. So, businesses should switch to PWA for a better future. We suggest you contact <a href='https://idenbrid.com/'>experts that can provide you with solutions that address the pain points of the users.</a> Let’s look at these factors for a better understanding of the future of these apps.
        </p>
        <h3>
        Rising Consumption
        </h3>
        <p>
Many big corporations, like Google, Microsoft, and Twitter, have adopted PWAs and are actively employing them to offer their services. The rising use of PWAs implies that they have discovered value in this strategy and are likely to continue investing in its development and enhancement.        
        </p>
        <h3>
        Mobile Supremacy
        </h3>
        <p>
        People now access the internet primarily through mobile devices, and PWAs provide a compelling approach to delivering mobile experiences. PWAs are estimated to survive as long as smartphones remain popular and people seek seamless, app-like experiences.
        </p>
        <p>
        PWAs are flexible and adaptive to different screen sizes and device capabilities, resulting in a uniform and optimized user experience across mobile platforms. PWAs can offer quick loading times, smooth navigation, and engaging characteristics that are comparable to native applications by using cutting-edge web technologies.
        </p>
        <h3>
        Web developments and conventions
        </h3>
        <p>
        The online platform is constantly evolving, and new web standards and technologies are launching regularly. These developments frequently include features that improve the functionality and performance of PWAs. Innovations in service workers, push notifications, and offline cached data, for example, have all contributed to the proliferation of PWAs.
        </p>
        <h3>
        Coherence across platforms
        </h3>
        <p>
        One of the critical benefits of PWAs is their ability to function across numerous platforms, including desktop, mobile, and upcoming technologies such as smart TVs and wearables. Due to this cross-platform seamless integration, PWAs are an appealing alternative for developers since they can target a large audience with a single codebase.
        </p>
        <h2>
        Native Apps
        </h2>
        <p>
        To comprehend the advantages of PWAs over native apps, it is necessary to first understand the nature of native apps. Native programs are particularly for specific platforms and they need installation before use. These program frequently have extensive capabilities.
        </p>
        <img src='/assets/images/blog-details/frame.png' />
        <p>
        Native apps excel at providing rich and personalized experiences that fully use the platform's capabilities. Although native apps cost more time and work to develop, they provide a solid platform for building sophisticated and feature-rich applications. Furthermore, the platform-specific code used in native app development assures excellent performance and smooth integration with the features and functionalities of the operating system.
        </p>

        <h2>
        PWA vs Native Apps
        </h2>
        <p>
        PWA and native applications are competing fiercely for domination. Users and companies are becoming more aware of PAW's cutting-edge capabilities, making it a more dependable and user-friendly software. Let's take a look at the benefits of PWAs to better understand why they are more valuable and put first than native apps.
        </p>
        <h2>
        Advantages of Progressive Web Apps
        </h2>
        <p>
        Progressive Web Apps (PWAs) offer a host of advantages, including enhanced user experience, cross-platform compatibility, offline functionality, faster load times, and seamless updates, making them a versatile and user-friendly solution for modern digital experiences.
        </p>
        <h3>
        Installation Free Usage
        </h3>
        <p>
        One of the most noticeable advantages of PWA over native apps is that it does not require installation. It saves the customer the trouble of installing the program from the app store, customizing it, and then using it. The app's quick availability is an evident positive aspect of PWA.
        </p>
        <h3>
        SEO Optimization Function
        </h3>
        <p>
        Progressive web applications are accessible online that help businesses in increasing traffic organically using search engine optimization (SEO) approaches. SEO can help your app's online presence and ranking. Although SEO benefits PWA, it may also be a difficulty because of its unique design.
        </p>

// list of content
        <h3>
        Cost Efficient
        </h3>
        <p>
        Unlike native apps, progressive web apps are made up of a single codebase, which minimizes time and money. A single codebase allows it to run efficiently across several operating systems. It is adaptable to any Android, Windows, or OS and provides an excellent user experience.
        </p>

        <h3>
        App-like Experience
        </h3>
        <p>
        Despite its simple programming, PWA can deliver an exceptional user experience in the same way that any other application, requiring intricate programming, does. Another advantage is that it does not require app updates because it is directly connected to the internet.
        </p>
        <h3>
        Offline Usage
        </h3>
        <p>
        PWAs are functional in areas with slow pace internet access. This characteristic of PWA has increased its popularity in rural places where internet access is inconsistent. Low connectivity does not affect the app's functionality; users may access all programs without interruption.
        </p>
        <p>
        PWA's offline services have proven to be cost-effective for its consumers. People do not need to purchase pricey internet services plan plans to enjoy PWA. It is particularly handy in locations where Web rates are expensive.
        </p>
        <h3>
        All-in-one processes
        </h3>
        <p>
        Progressive web apps are primarily one program that does not require separate development, updates, or product information. This all-in-one functionality is not only beneficial to businesses, but it also offers an excellent user experience. People tend to prioritize it over native apps because of low maintenance.
        </p>
        <h2>
        Conclusion
        </h2>
        <p>
        PWAs have gained popularity owing to their ability to integrate the greatest features of websites and native applications while overcoming platform constraints and providing outstanding user experiences. PWAs provide cross-platform compatibility, seamless updates, improved performance, and offline capabilities by utilizing contemporary web technologies—all without the requirement for app store installation.
        </p>
        <img src='/assets/images/blog-details/business-strategy.png' />
        <p>
        PWAs have a bright future as industry titans continue to adopt and invest in this technology. PWAs have been seen as valuable by leading companies such as Google, Microsoft, and Twitter, and have been included in their services. This extensive acceptance indicates PWAs' long-term influence and future expansion.
        </p>
        `;

  //   const [loading, setLoading] = useState(false);

  //   const [nextToken, setNextToken] = useState(null);

  //   const getAllBlogsAPI = async () => {
  //     setLoading(true);
  //     try {
  //       const blogs = await API.graphql({
  //         query: listBlogs,
  //         variables: {
  //           limit: 12,
  //           // nextToken,
  //         },
  //       });
  //       const blogsList = blogs.data.listBlogs.items;
  //       setNextToken(blogs.data.listBlogs.nextToken);
  //       if (blogsList.length > 0) {
  //         setFeaturedBlogs([blogsList[0], blogsList[1]]);
  //         setBlogsListings([...blogsList.slice(2, blogsList.length)]);
  //       }
  //       console.log(blogsListings.length < 1 && featuredBlogs.length < 1, 'Statement');
  //       console.log(blogsList, 'blogsList');
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error, 'ERR MSG: Blogs Loaded ');
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getAllBlogsAPI();
  //   }, []);

  const breadcrumbs = ['Home', 'Our Blogs'];
  return (
    <div className='blog-detail-container'>
      {/* {!loading && (
        <section className='blog-detail-section'>
    <div className='main-two-blog'> */}
      <Container>
        <Image
          src='/assets/images/blog-details/blogDetails.png'
          width='1140'
          height='440'
          className='blog-main-image'
          alt='blog'
        />
        <section className='section-blog-detail-banner'>
          <div className='inner-banner-heading'>
            <div className='breadcrumb'>
              {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                  {index > 0 && (
                    <span>
                      <i className='fa fa-angle-right breadcrumb-fa-icon' aria-hidden='true'></i>
                    </span>
                  )}
                  {breadcrumb === 'Home' ? ( // Check if the breadcrumb is "Home"
                    <Link href='/' className='home-link'>
                      {breadcrumb}
                    </Link>
                  ) : (
                    breadcrumb
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className='blog-detail-section'>
          <h1>Future of PWA: How Progressive Web Apps Outweigh Native Apps?</h1>
          <div className='about-blog'>
            <Image src='/assets/images/blog-details/faizan.svg' width='48' height='48' className='profile-image' alt='profile'/>
            <div className='writer-section'>
              <h4 className='written-by'>Faizan H.</h4>
              <h6 className='working-as'>Content Marketing</h6>
            </div>
            <div className='icon-section'>
              <ReactSVG className='calendar-icon' src='/assets/images/svg/calendar.svg' />
              <p className='icon-text'>December 13, 2023</p>
            </div>
            <div className='icon-section'>
              <ReactSVG className='calendar-icon' src='/assets/images/svg/clock.svg' />
              <p className='icon-text'>7 minute read</p>
            </div>
          </div>
          <div
            className='blog-details'
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          ></div>
        </section>
      </Container>
      {/* </div>
        </section>
      )} */}
      {/* {loading && (
        <section className='post-list-section'>
          <Container>
            <Row>
              {Array.from({ length: 13 }).map((_, index) => (
                <Col md='4'>
                  <MyLoader />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
      {!loading && (
        <section className='post-list-section'>
          {featuredBlogs.length <= 0 && (
            <div className='shadow  rounded-3   not-found  p-5 d-flex flex-column  align-items-center justify-content-center'>
              <h6 className='text-center  text-success    '>That's all!</h6>
              <p className='text-center    '>No Blogs In this category</p>
            </div>
          )}
        </section>
      )} */}
    </div>
  );
};

export default BlogDetailComponent;

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={431}
    height={460}
    viewBox='0 0 431 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='12' y='37' rx='0' ry='0' width='374' height='207' />
  </ContentLoader>
);
