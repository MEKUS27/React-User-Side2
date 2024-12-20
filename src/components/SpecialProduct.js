import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import watch from "../images/watch.jpg";

function SpecialProduct() {
    return (
        <div className='col-6 mb-3'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src={watch} className='img-fluid' alt='watch' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Havels</h5>
                        <h6 className='title'>Samsung Galaxy
                            Note18+ Mobile Phone; Sim...</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            // isHalf={true}
                            emptyIcon={<FaRegStar />}
                            halfIcon={<FaStarHalfAlt />}
                            fullIcon={<FaStar />}
                            char={FaStar}
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5</b> days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>
                        </div>
                        <div className='prod-count mt-3'> 
                                    <p>Products: 5</p>
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Example 1px high"
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ height: "7px" }}
                                    >
                                        <div className="progress-bar" style={{ width: "25%" }}></div>
                                    </div>
                        </div>
                        <Link className='button my-3'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct