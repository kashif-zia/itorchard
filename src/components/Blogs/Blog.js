import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import BlogList from './BlogListing'
import QuoteBanner from '../Banner/QuoteBanner'
import Avatar from 'react-bootstrap/Image'
import Link from 'next/link'
import Image from 'next/image'
import { API } from 'aws-amplify'
import { listBlogs } from '@/graphql/queries'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import ContentLoader from 'react-content-loader'
import moment from 'moment'
const tags = [
  { label: 'SEO', value: 'SEO' },
  { label: 'Social Media', value: 'Social Media' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Digital Marketing', value: 'Digital Marketing' },
  { label: 'E-Commerce ', value: 'E-Commerce Development' },
  { label: 'Software Development', value: 'Software Development' },
  { label: 'AR/VR Development', value: 'AR/VR Development' },
  { label: 'Machine Learning', value: 'Machine Learning' },
]
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { BsFilter } from 'react-icons/bs'

const BlogComponent = () => {
  const [loading, setLoading] = useState(false)
  const [featuredBlogs, setFeaturedBlogs] = useState([])
  const [blogsListings, setBlogsListings] = useState([])
  const [nextToken, setNextToken] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('All Resources')
  // Sort Dropdown Filter
  const [sortselectedOption, setsortSelectedOption] = useState('Asc')
  const handlesortSelect = () => {
    setLoading(true)
    if (sortselectedOption === 'Asc') {
      const ascendingOrder = blogsListings.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      setBlogsListings(ascendingOrder)
      setsortSelectedOption('Desc')
      setTimeout(() => {
        setLoading(false)
      }, 500)
    } else {
      const descendingOrder = blogsListings.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setBlogsListings(descendingOrder)
      setsortSelectedOption('Asc')
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }
  const getAllBlogsAPI = async () => {
    setLoading(true)
    try {
      const blogs = await API.graphql({
        query: listBlogs,
        variables: {
          limit: 14,
          // nextToken,
        },
      })
      const blogsList = blogs.data.listBlogs.items
      setNextToken(blogs.data.listBlogs.nextToken)
      if (blogsList.length > 0) {
        setFeaturedBlogs([blogsList[0], blogsList[1]])
        setBlogsListings([...blogsList.slice(2, blogsList.length)])
      }
      console.log(blogsListings.length < 1 && featuredBlogs.length < 1, 'Statement')
      console.log(blogsList, 'blogsList')
      setLoading(false)
    } catch (error) {
      console.log(error, 'ERR MSG: Blogs Loaded ')
      setLoading(false)
    }
  }
  const getAllBlogsFilters = async (filters) => {
    setLoading(true)
    try {
      const blogs = await API.graphql({
        query: listBlogs,
        variables: {
          // limit: 10,
          filter: {
            tags: {
              contains: filters,
            },
          },
        },
      })
      const blogsList = blogs.data.listBlogs.items.sort((a, b) => b.createdAt - a.createdAt)
      setNextToken(blogs.data.listBlogs.nextToken)
      if (blogsList.length > 0) {
        setFeaturedBlogs([blogsList[0], blogsList[1]])
        setBlogsListings([...blogsList.slice(2, blogsList.length)])
      } else {
        setFeaturedBlogs([])
        setBlogsListings([])
      }
      console.log(blogsList, 'blogsList')
      setLoading(false)
    } catch (error) {
      console.log(error, 'ERR MSG: Blogs Loaded ')
      setLoading(false)
    }
  }
  const LoadMoreHandler = async () => {
    setLoading(true)
    try {
      const blogs = await API.graphql({
        query: listBlogs,
        variables: {
          limit: 10,
          nextToken,
        },
      })
      const blogsList = blogs.data.listBlogs.items
      setNextToken(blogs.data.listBlogs.nextToken)
      if (blogsList.length > 0) {
        // setFeaturedBlogs([blogsList[0], blogsList[1]]);
        setBlogsListings((prev) => [...prev, ...blogsList])
      }
      console.log(blogsList, 'blogsList')
      setLoading(false)
    } catch (error) {
      console.log(error, 'ERR MSG: Blogs Loaded ')
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllBlogsAPI()
  }, [])
  const clearsortSelection = () => {
    setsortSelectedOption(null)
  }
  return (
    <div>
      <section className='post-meta-section'>
        <Container>
          <Row>
            <div className='post-top-filter'>
              <div className='sort-icon' onClick={handlesortSelect}>
                <BsFilter size={20} color='#08A857' /> <span>Sort</span>
              </div>
              <Swiper
                className='tags-swiper'
                slidesPerView={4}
                spaceBetween={30}
                loop={false}
                breakpoints={{
                  320: {
                    slidesPerView: 1.7,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.7,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 8,
                    spaceBetween: 5,
                  },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide
                  className={`meta-tag   ${selectedFilter === 'All Resources' ? 'bg-black  text-white ' : ''}`}>
                  <span
                    // className={`meta-tag   ${selectedFilter === 'All Resources' ? 'bg-black  text-white ' : ''}`}
                    onClick={() => {
                      getAllBlogsAPI()
                      setSelectedFilter('All Resources')
                    }}>
                    All Resources
                  </span>
                </SwiperSlide>
                {tags.map((tag, index) => (
                  <>
                    <SwiperSlide
                      className={`meta-tag   ${selectedFilter === tag.value ? 'bg-black  text-white ' : ''}`}>
                      <span
                        key={index}
                        onClick={() => {
                          getAllBlogsFilters(tag.value)
                          setSelectedFilter(tag.label)
                        }}
                        // className={`  `}
                      >
                        {tag.label}
                      </span>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>

              {/* Sort Dropdown Filter  */}
              {/* <Dropdown onSelect={handlesortSelect}>
                <Dropdown.Toggle id='dropdown-autoclose-outside' className='sort-dropdown'>
                  {sortselectedOption ? (
                    <>
                      {sortselectedOption} <i className='fa fa-close filter-closeicon' onClick={clearsortSelection}></i>
                    </>
                  ) : (
                    'Sort by:'
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu className='postsort'>
                  <Dropdown.Item className='dropdown-item' eventKey='Ascending'>
                    Ascending
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item' eventKey='Descending'>
                    Descending
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </Row>
        </Container>
      </section>
      {!loading && (
        <section className='post-list-section'>
          {featuredBlogs.length > 1 && (
            <div className='main-two-blog'>
              <Container>
                <Row className='row-gap'>
                  <Col md={7}>
                    <div>
                      <div className='two-post-item'>
                        <div className='maintwo-postimg'>
                          <StorageImage imgKey={featuredBlogs[0]?.thumbnail} alt='main logo' />
                        </div>
                        <div className='auth-thumbnail'>
                          <div className='post-date'>
                            <span>{moment(featuredBlogs[0]?.createdAt).format('DD MMMM YYYY')}</span>
                          </div>
                          <div className='lastpost-time'>5 minute reading time</div>
                        </div>
                        <div className='blog-title-div'>
                          <h3 className='maintwopost-title'>{featuredBlogs[0]?.title} </h3>
                        </div>
                        <div className='blog-desc-div'>
                          <p className='maintwopost-description'>{featuredBlogs[0]?.description}</p>
                        </div>
                        <div className='post-info'>
                          {/* <div className='auth-thumbnail'>
                            <Image
                              src='/assets/images/blogs/avatar.png'
                              alt='main logo'
                              className='bg-shade'
                              width={55}
                              height={55}
                            />
                            <div className='maintwopostauth-name'>{featuredBlogs[0]?.owner?.name}</div>
                          </div> */}
                          {/* <div className='post-time-date-info'>
                            <div className='post-date'>
                              <span>{moment(featuredBlogs[0]?.createdAt).format('DD MMMM YYYY')}</span>
                            </div>
                            <div className='lastpost-time'>5 minute reading time</div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </Col>
                  {featuredBlogs[1] && (
                    <Col md={5}>
                      <div>
                        <div className='two-post-item'>
                          <div className='maintwo-postimg'>
                            <StorageImage imgKey={featuredBlogs[1]?.thumbnail} alt='main logo' />
                          </div>
                          <div className='auth-thumbnail'>
                            <div className='post-date'>
                              <span>{moment(featuredBlogs[1]?.createdAt).format('DD MMMM YYYY')}</span>
                            </div>
                            <div className='lastpost-time'>5 minute reading time</div>
                          </div>
                          <div className='blog-title-div'>
                            <h3 className='maintwopost-title'>{featuredBlogs[1]?.title}</h3>
                          </div>
                          <div className='blog-desc-div'>
                            <p className='maintwopost-description'>{featuredBlogs[1]?.description}</p>
                          </div>
                          <div className='post-info'>
                            {/* <div className='auth-thumbnail'>
                              <Image
                                src='/assets/images/blogs/avatar.png'
                                alt='main logo'
                                className='bg-shade'
                                width={55}
                                height={55}
                              />
                              <div className='maintwopostauth-name'>{featuredBlogs[1]?.owner?.name}</div>
                            </div> */}
                            {/* <div className='post-time-date-info'>
                              <div className='post-date'>
                                <span>{moment(featuredBlogs[1]?.createdAt).format('DD MMMM YYYY')}</span>
                              </div>
                              <div className='lastpost-time'>5 minute reading time</div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </Col>
                  )}
                </Row>
              </Container>
            </div>
          )}
          {/* <BlogList /> */}
          {/* <BlogList /> */}
          <Container>
            <Row>
              {blogsListings.map((blog, index) => {
                return (
                  <>
                    {index > 0 && index % 6 == 0 ? (
                      <QuoteBanner />
                    ) : (
                      <Col md={4}>
                        <div className='post-item'>
                          <div className='post-img'>
                            <StorageImage imgKey={blog.thumbnail} alt='main logo' />
                          </div>
                          <div className='auth-thumbnail'>
                            <div className='post-meta'>
                              {selectedFilter === 'All Resources'
                                ? blog?.tags && blog?.tags.slice(1, blog.tags.length - 1)[0]
                                : selectedFilter}
                            </div>
                            <div className='blog-post-date'>
                              <span>{moment(blog.createdAt).format('DD MMMM YYYY')}</span>
                            </div>
                          </div>
                          <h3 className='post-title'>{blog.title}</h3>
                          <p className='post-description'>{blog.description}</p>
                          <div className='post-info'>
                            {/* <div className='auth-thumbnail'>
                              <Image
                                src='/assets/images/blogs/avatar.png'
                                alt='main logo'
                                className='bg-shade'
                                width={36}
                                height={36}
                              />

                              <div className='auth-name'>{blog?.owner?.name}</div>
                            </div> */}
                            {/* <div className='blog-post-date'>
                              <span>{moment(blog.createdAt).format('DD MMMM YYYY')}</span>
                            </div> */}
                          </div>
                        </div>
                      </Col>
                    )}
                  </>
                )
              })}
            </Row>
          </Container>
          {/* <QuoteBanner /> */}
          {/* <BlogList /> */}
          {nextToken && (
            <div className='load-more'>
              <span onClick={LoadMoreHandler} className='let-start-btn '>
                Load More
              </span>
            </div>
          )}
        </section>
      )}
      {loading && (
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
      )}
    </div>
  )
}

export default BlogComponent
const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={431}
    height={460}
    viewBox='0 0 431 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='12' y='37' rx='0' ry='0' width='374' height='207' />
  </ContentLoader>
)
