import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

function ProductCard({ grid }) {
    const location = useLocation();

    const renderProduct = () => (
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent" to="/wishlist">
                    <img src={wish} alt="wishlist" />
                </button >
            </div>
            <div className="product-image">
                <img src={watch} className="img-fluid" alt="product" />
                <img src={watch2} className="img-fluid" alt="product" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kids headphone bulk 10 pack multi-colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={13}
                    value={3}
                    edit={false}
                    emptyIcon={<FaRegStar />}
                    halfIcon={<FaStarHalfAlt />}
                    fullIcon={<FaStar />}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    Our product is an environmentally friendly chain watch. The strap is durable,
                    easy to clean, and long-lasting... bringing comfort to your wearing. Does not rust.
                </p>
                <p className="product-price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent" to="/compare">
                        <img src={prodcompare} alt="compare" />
                    </button>
                    <button className="border-0 bg-transparent" to="/view">
                        <img src={view} alt="view" />
                    </button>
                    <button className="border-0 bg-transparent" to="/cart">
                        <img src={addcart} alt="add to cart" />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            {renderProduct()}
        </div>
    );
}

export default ProductCard;
