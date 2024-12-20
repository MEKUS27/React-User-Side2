import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (

        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec, 2024</p>
                <h5 className='title'>A beautiful sunday morning renaisance</h5>
                <p className='desc'> Discover
                    If you have a specific topic or theme for your blog, let me know, and I can tailor it further!</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard