import React from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import watch from "../images/watch.jpg";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BrandCrumb title="Cart" />

      <Container class1="cart-wrapper home-wrapper-2 py-5 px-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              <div className="cart-data py-3 mb-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-3">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="Watch" />
                  </div>
                  <div className="w-75">
                    <h5>Smart Watch</h5>
                    <p>Size: Color: Black</p>
                    <p>Color: Medium</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-3">
                  <input 
                    className="form-control" 
                    type="number" 
                    name="" 
                    min={1}
                    max={10}
                    id="" 
                  />
                  <RiDeleteBin6Fill className='text-danger fs-4' style={{ cursor: "pointer" }}/>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100.00</h5>
                </div>
              </div>
            </div>

            <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-baseline'>
                <Link to='/product' className='button'>Continue Shopping</Link>
                <div className='d-flex flex-column align-items-end'>
                    <h4>SubTotal: $ 1000</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to='/checkout' className='button'>Checkout</Link>
                </div>
                </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;
