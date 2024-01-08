import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogList from '../Blogs/BlogListing';
import Image from 'next/image';
import { API } from 'aws-amplify';
import { listBlogs } from '@/graphql/queries';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ContentLoader from 'react-content-loader';
import moment from 'moment';
const BlogsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [blogsListings, setBlogsListings] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const getAllBlogsAPI = async () => {
    setLoading(true);
    try {
      const blogs = await API.graphql({
        query: listBlogs,
        variables: {
          limit: 4,
          // nextToken,
        },
      });
      const blogsList = blogs.data.listBlogs.items;

      setNextToken(blogs.data.listBlogs.nextToken);
      if (blogsList.length > 0) {
        setFeaturedBlogs(blogsList[0]);
        setBlogsListings(blogsList.slice(1, blogsList.length));
      }
      console.log(blogsList, 'blogsList');
      setLoading(false);
    } catch (error) {
      console.log(error, 'ERR MSG: Blogs Loaded ');
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogsAPI();
  }, []);
  return (
    <>
      {blogsListings.length > 0 && (
        <div className='home-blog-section'>
          <section>
            <h2 className='blog-heading-h2'>
              Our <span className='primary-text'>Blogs</span>
            </h2>
            <Container>
              <Row>
                <Col>
                  {loading ? (
                    <MyLoader />
                  ) : (
                    <div className='main-blog-item'>
                      <div className='main-post-img'>
                        <StorageImage imgKey={featuredBlogs.thumbnail} alt='main logo' quality={100} />
                      </div>
                      <div>
                        <span className='blog-meta'>
                          {featuredBlogs?.tags.slice(1, featuredBlogs.tags.length - 1)[0]}
                        </span>
                        <h2 className='post-title'>{featuredBlogs.title}</h2>
                        <p className='post-description'>{featuredBlogs.description}</p>
                        <div className='post-info'>
                          {/* <div className='auth-thumbnail'>
                            <Image
                              src='/assets/images/blogs/avatar.png'
                              alt='main logo'
                              className='post-thumnail'
                              width={36}
                              height={36}
                              quality={100}
                            />
                            <div className='auth-name'>{featuredBlogs?.owner?.name}</div>
                          </div> */}
                          <div className='post-date'>
                            <span>{moment(featuredBlogs.createdAt).format('DD MMMM YYYY')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </section>
          <section className='post-list-section mb-0'>
            <div>
              <Container>
                <Row>
                  {blogsListings.map((item, index) => (
                    <Col key={index} md={4}>
                      <div className='post-item'>
                        <div className='post-img'>
                          <StorageImage
                            // src='/assets/images/blogs/blog-image-03.svg'
                            imgKey={item.thumbnail}
                            alt='main logo'

                            // width={367}
                            // height={200}
                          />
                        </div>
                        <div className='auth-thumbnail'>
                          <div className='post-meta'>{item?.tags.slice(1, item.tags.length - 1)[0]}</div>
                          <div className='blog-post-date'>
                            <span>{moment(item.createdAt).format('DD MMMM YYYY')}</span>
                          </div>
                        </div>
                        <h3 className='post-title'>{item.title}</h3>
                        <p className='post-description'>{item.description}</p>
                        <div className='post-info'>
                          {/* <div className='auth-thumbnail'>
                            <Image
                              src='/assets/images/blogs/avatar.png'
                              alt='main logo'
                              className='bg-shade'
                              width={36}
                              height={36}
                            />
                            <div className='auth-name'>{item?.owner?.name}</div>
                          </div> */}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default BlogsComponent;
const MyLoader = (props) => (
  <ContentLoader speed={2} viewBox='0 0 400 160' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
    <rect x='2' y='5' rx='3' ry='3' width='380' height='146' />
  </ContentLoader>
);
