import React from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

function Wishlist() {
    return (
        <>
            <Meta title={"WishList"} />
            <BrandCrumb title="WishList" />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5 px-5'>
                <div>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Electronic Watches For Men  Digital Wristwatch
                                    </h5>
                                    <h6 className='price'> $ 100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Electronic Watches For Men  Digital Wristwatch
                                    </h5>
                                    <h6 className='price'> $ 100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Electronic Watches For Men  Digital Wristwatch
                                    </h5>
                                    <h6 className='price'> $ 100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default Wishlist