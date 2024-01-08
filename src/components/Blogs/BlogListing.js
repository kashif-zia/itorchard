import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const BlogListingComponent = () => {
  
  return (
    <div>
   <Container>
    <Row>
        <Col md={4}>
           <div className='post-item'>
           <Image
                  src='/assets/images/blogs/blog-image-03.svg'
                  alt='main logo'
                  className='post-img'
                  width={367}
                  height={ 200}
                />
                <div className='post-meta'>Design</div>
                <h3 className='post-title'>6 Website design layout</h3>
                <p className='post-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='post-info'>
                    <div className='auth-thumbnail'>
                      <Image
                        src='/assets/images/blogs/auth-img.svg'
                        alt='main logo'
                        className='bg-shade'
                        width={36}
                        height={36}
                      />
                      <div className='auth-name'>Tracy Wilson</div>
                    </div>
                    <div className='blog-post-date'>
                      <span>14 August 2023</span>
                    </div>
                  </div>
           </div>
        </Col>
    </Row>
   </Container>
    </div>
  );
};

export default BlogListingComponent;
