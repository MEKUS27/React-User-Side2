import React from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

function Blog() {
    return (
        <>
            <Meta title={"Blogs"} />
            <BrandCrumb title="Blogs" />
            <Container class1='blog-wrapper home-wrapper-2 py-5 px-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Find By Categories</h3>
                                <ul className='ps-0'>
                                    <li className=''>Watch</li>
                                    <li className=''>Tv</li>
                                    <li className=''>Camera</li>
                                    <li className=''>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-9'>
                           <div className='row'>
                           <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                           </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Blog