import React, { useState } from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { TbGitCompare } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom';
import Color from '../components/Color';
import Container from '../components/Container';



const SingleProduct = () => {
    const props = {
        width: 180,
        height: 180,
        zoomWidth: 600,
        // zoomLensStyle: 500,

        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s"
    };

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title={"Product Name"} />
            <BrandCrumb title="Product Name" />

            <Container class1='main-product-wrapper py-5 px-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s' className='img-fluid' alt='' /> </div>
                            <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s' className='img-fluid' alt='' /> </div>
                            <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s' className='img-fluid' alt='' /> </div>
                            <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s' className='img-fluid' alt='' /> </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Binbond Men's Watch Fashion Waterproof Sport Quartz Business Watch
                                </h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100.00</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={13}
                                        value={4} // Fixed: value is now a number
                                        edit={false}
                                        emptyIcon={<FaRegStar />}
                                        halfIcon={<FaStarHalfAlt />}
                                        fullIcon={<FaStar />}
                                        char={FaStar}
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0 t-rivew">( 2 Reviews )</p>
                                </div>
                                <a className='review-btn' href='#review' >Write a Review</a>
                            </div>
                            <div className='py-3'>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type:</h3> <p className='product-data'>Watch </p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand:</h3> <p className='product-data'>Havels </p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category:</h3> <p className='product-data'>Watch </p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags:</h3> <p className='product-data'>Watch </p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availablity:</h3>
                                    <p className='product-data'>In Stock</p>
                                </div>

                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size:</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary" title="Small">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary" title="Medium">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary" title="Extra Large">XL</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary" title="Double Extra Large">XXL</span>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                                    <h3 className='product-heading'>Color:</h3>
                                    <Color />
                                </div>

                                <div className='d-flex align-items-center gap-15 flex-row  mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity:</h3>
                                    <div className=''>
                                        <input
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: "70px" }}
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Add To Cart</button>
                                        <button className='button signup border-0'>Buy it Now</button>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='' className='fs-5 me-2' >
                                            <TbGitCompare /> Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href='' className='fs-5 me-2'  > <CiHeart />
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column  my-3'>
                                    <h3 className='product-heading'>Shipping & Returns:</h3>
                                    <p className='product-data'>
                                        Free shhipping and returns available on all orders! <br />  We ship
                                        all US domestic orders within <b> 5-10 bussiness days!</b>
                                    </p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link:</h3>
                                    <a href='javascript:void(0);' onClick={() => {
                                        copyToClipboard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s")
                                    }}
                                    > Copy Product Link </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='description-wrapper py-5 px-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                                The sensor and processor combination also avails 6 fps continuous shooting for working with moving subjects.
                                Benefitting the imaging attributes, the sensor's design also facilitates Dual Pixel CMOS AF, which uses phase-detection autofocus for quick, accurate, and
                                smooth focusing performance when recording movies or shooting stills in live view.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container id='review' class1='reviews-wrapper  px-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Reviews</h3>
                            <div className='review-inner-wrapper'>
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={13}
                                                value={4} // Fixed: value is now a number
                                                edit={false}
                                                emptyIcon={<FaRegStar />}
                                                halfIcon={<FaStarHalfAlt />}
                                                fullIcon={<FaStar />}
                                                char={FaStar}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a className="text-dark text-decoration-underline" href="">
                                                Write a Review
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className='review-form py-4'>
                                    <h4>Write a  Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={13}
                                                value={4} // Fixed: value is now a number
                                                edit={true}
                                                emptyIcon={<FaRegStar />}
                                                halfIcon={<FaStarHalfAlt />}
                                                fullIcon={<FaStar />}
                                                char={FaStar}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name='' id='' cols='30' rows="4" className='w-100 form-control' placeholder='Comment'> </textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Emeka</h6>
                                            <ReactStars
                                                count={5}
                                                size={13}
                                                value={4} // Fixed: value is now a number
                                                edit={false}
                                                emptyIcon={<FaRegStar />}
                                                halfIcon={<FaStarHalfAlt />}
                                                fullIcon={<FaStar />}
                                                char={FaStar}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            The sensor and processor combination also avails 6 fps continuous shooting for working with moving subjects.
                                            Benefitting the imaging attributes, the sensor's design also facilitates Dual Pixel CMOS AF, which uses phase-detection autofocus for quick, accurate, and
                                            smooth focusing performance when recording movies or shooting stills in live view.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>

            <Container class1='popular-wrapper py-5 px-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                    </div>
            </Container>
        </>
    )
}

export default SingleProduct