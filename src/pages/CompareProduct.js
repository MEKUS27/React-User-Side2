import React from 'react';
import Meta from '../components/Meta';
import BrandCrumb from '../components/BrandCrumb';
import Color from '../components/Color';
import Container from '../components/Container';


const CompareProduct =  () => {
  return (
   <>
    <Meta title={"Compare Products"} />
    <BrandCrumb title="Compare Products" />
    <Container class1='compare-product-wrapper py-5 px-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                        <div className='product-card-image'>
                            <img src='images/watch.jpg' alt='watch' />
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                            Electronic Watches For Men  Digital Wristwatch
                            </h5>
                            <h6 className='price mb-3 mt-3'>$100.00</h6>
                        </div>
                        <div className='product-detail'>
                            <h5>Brand:</h5>
                            <p>Havels</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='product-detail'>
                            <h5>SKU:</h5>
                            <p>Havels</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Availbilty:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Color:</h5>
                            <Color />
                        </div>
                        <div className='product-detail'>
                            <h5>Size:</h5>
                           <div className='d-flex gap-10'>
                            <p>S</p>
                            <p>M</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                        <div className='product-card-image'>
                            <img src='images/watch.jpg' alt='watch' />
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                            Electronic Watches For Men  Digital Wristwatch
                            </h5>
                            <h6 className='price mb-3 mt-3'>$100.00</h6>
                        </div>
                        <div className='product-detail'>
                            <h5>Brand:</h5>
                            <p>Havels</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='product-detail'>
                            <h5>SKU:</h5>
                            <p>Havels</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Availbilty:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Color:</h5>
                            <Color />
                        </div>
                        <div className='product-detail'>
                            <h5>Size:</h5>
                           <div className='d-flex gap-10'>
                            <p>S</p>
                            <p>M</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    
   </>
  )
}

export default CompareProduct