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

const ProductCard = ({ grid = 4 }) => {
  const location = useLocation();

  return (
    <div className={`product-card-wrapper ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
      <Link to=":id" className="product-card position-relative">
        {/* Wishlist Button */}
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>

        {/* Product Images */}
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product" />
          <img src={watch2} className="img-fluid" alt="product alternate" />
        </div>

        {/* Product Details */}
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
            Our product is an environmentally friendly chain watch. The strap is
            durable, easy to clean, and long-lasting... bringing comfort to your
            wearing. Does not rust.
          </p>
          <p className="product-price">$100.00</p>
        </div>

        {/* Action Buttons */}
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="add to cart" />
            </button>
          </div>
        </div>
      </Link>

        {/* <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}` }>

        </div> */}

    </div>

    
  );
};

export default ProductCard;
