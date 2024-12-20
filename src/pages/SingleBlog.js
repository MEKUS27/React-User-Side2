import React from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

function SingleBlog() {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BrandCrumb title="Dynamic Blog Name" />
      <Container class1='blog-wrapper home-wrapper-2 py-5 px-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card'>
              <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <HiArrowNarrowLeft className='fs-4' /> Go back to Blogs
              </Link>
              <h3>A Beautiful Sunday Morning Renaisance</h3>
              <img src='{blog}' className='img-fluid w-100 my-4' alt='blog' />
              <p>
                Discover If you have a specific topic or
                theme for your blog,
                let me know, and I can tailor it further!
                have a specific topic or theme for your blog, let
                me know, and I can tailor it further!
                a specific topic or theme for your blog, let me know, and I can tailor it
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog