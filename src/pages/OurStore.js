import React, { useState } from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
// import { Link } from 'react-router-dom';
import Color from '../components/Color';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import Container from '../components/Container';

function OurStore() {
    const [grid, setGrid] = useState(4);
    console.log(grid)

    return (
        <>
            <Meta title={"Our Store"} />
            <BrandCrumb title="Our Store" />
            <Container class1="store-wrapper  home-wrapper-2 py-5 px-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop By Categories</h3>
                                <ul className='ps-0'>
                                    <li className=''>Watch</li>
                                    <li className=''>Tv</li>
                                    <li className=''>Camera</li>
                                    <li className=''>Laptop</li>
                                </ul>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className='sub-title'>Availablity</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='' />
                                            <label className='form-check-label' htmlFor=''>In Stock (1)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='' />
                                            <label className='form-check-label' htmlFor=''>Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlForfor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlForfor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <Color />
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='color-1' />
                                            <label className='form-check-label' htmlFor='color-1'>
                                                S (2)
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='color-2' />
                                            <label className='form-check-label' htmlFor='color-2'>
                                                M (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className='products-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Headphone
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Laptop
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Mobile
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className='random-products d-flex mb-3'>
                                        <div className='w-50'>
                                            <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Kids headphone bulk 10 multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={13}
                                                value="4"
                                                edit={false}
                                                // isHalf={true}
                                                emptyIcon={<FaRegStar />}
                                                halfIcon={<FaStarHalfAlt />}
                                                fullIcon={<FaStar />}
                                                char={FaStar}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Kids headphone bulk 10 multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={13}
                                                value="4"
                                                edit={false}
                                                emptyIcon={<FaRegStar />}
                                                halfIcon={<FaStarHalfAlt />}
                                                fullIcon={<FaStar />}
                                                char={FaStar}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                                        <select 
                                            defaultValue={"manual"}
                                            name='' 
                                            className='form-control form-select'
                                            >
                                            {/* <option disabled value="DEFAULT">Select</option> */}
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" >
                                                Best selling
                                            </option>
                                            <option value="title-ascending">
                                                Alphabetically, Z-A
                                            </option>
                                            <option value="title-descending">
                                                Alphabetically, Z-A
                                            </option>
                                            <option value="price-ascending">
                                                Price, low to high
                                            </option>
                                            <option value="price-descending">
                                                Price, high to low
                                            </option>
                                            <option value="created-ascending">
                                                Date, old  to new
                                            </option>
                                            <option value="created-descending">
                                                Date, new to old
                                            </option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0'>21 Products</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img
                                                onClick={() => setGrid(3)}
                                                src="images/gr4.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => setGrid(4)}
                                                src="images/gr3.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => setGrid(6)}
                                                src="images/gr2.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => setGrid(12)}
                                                src="images/gr.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='d-flex gap-10 flex-wrap'>
                                    <ProductCard grid={grid} />
                                    {/* <ProductCard grid={grid} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
}

export default OurStore;
