import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram  } from "react-icons/fa";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
   <>
      <footer className='py-4 px-5'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
                <input type="text" className="form-control py-1 pe-5" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3 px-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
                <h4 className='text-white mb-4'>Contact Us</h4>
                <div>
                  <address className='text-white fs-6'>Hno : 277 Near Vill chopal, <br />  
                    Sonipat, Haryana <br />
                  PinCode: 131103
                  </address>
                  <a href='tel: +91 8264954234' className='mt-3 d-block mb-1 text-white'>
                    +91 8264954234
                    </a>
                    <a href='mailto: vorji325123@gmail.com' className='mt-3 d-block mb-0 text-white'>
                    vorji325123@gmail.com
                    </a>
                    <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                      <a href='#' >
                        <FaLinkedin className='text-white fs-4' />
                      </a>
                      <a href='#' >
                        <FaInstagram className='text-white fs-4' />
                      </a>
                      <a href='#' >
                        <FaGithub className='text-white fs-4' />
                      </a>
                      <a href='#' >
                        <FaYoutube className='text-white fs-4' />
                      </a>

                    </div>
                </div>
            </div>              
            <div className='col-3'>
                <h4 className='text-white mb-4'>Informtion</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                  <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                  <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                  <Link to='/terms-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                  <Link to='' className='text-white py-2 mb-1'>Blogs</Link>
                </div>
            </div>              
            <div className='col-3'>
                <h4 className='text-white mb-4'>Account</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>About</Link>
                  <Link className='text-white py-2 mb-1'>Search</Link>
                  <Link className='text-white py-2 mb-1'>FAQ</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                </div>
            </div>              
            <div className='col-2'>
                <h4 className='text-white mb-4'>Quick Links</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablet</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4 px-5'>
        <div className='contanier-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; { new Date().getFullYear() }; Powered by E-Store
                </p>
            </div>
          </div>
        </div>
      </footer>

   </>
  );
}

export default Footer