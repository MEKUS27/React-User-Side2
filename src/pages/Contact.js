import React from 'react';
import Meta from '../components/Meta';
import BrandCrumb from '../components/BrandCrumb';
import { AiOutlineHome } from "react-icons/ai";
import { PiPhoneCall } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Container from '../components/Container';


const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BrandCrumb title="Contact Us" />
            <Container class1='contact-wrapper py-5 px-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15895.845485022915!2d7.32443115!3d5.109928549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1733143241485!5m2!1sen!2sng" width="600" height="450" className='border-0 w-100' allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='col-12 mt-5'>
                            <div className='contact-inner-wrapper d-flex justify-content-between'>
                                <div>
                                    <h3 className='contact-title mb-4'>Contact</h3>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type='text' className='form-control' placeholder='Name' />
                                        </div>
                                        <div>
                                            <input type='email' className='form-control' placeholder='Email' />
                                        </div>
                                        <div>
                                            <input type='tel' className='form-control' placeholder='Mobile Number' />
                                        </div>
                                        <div>
                                            <textarea name='' id='' cols='30' rows="4" className='w-100 form-control' placeholder='Comment'> </textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <AiOutlineHome   className='fs-5' />
                                            <address className='mb-0'>Hon:277 , Near Village chopal , Mandaura, Sonipat, Haryanna</address>
                                            </li>

                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <PiPhoneCall  className='fs-5' />
                                            <a href='tel:+91 8264954234'>+91 8264954234</a>
                                            </li>

                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <GoMail  className='fs-5' />
                                            <a href='mailto: vorji325123@gmail.com'>vorji325123@gmail.com</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <IoIosInformationCircleOutline  className='fs-5' />
                                            <p className='mb-0'>Monday - Firday 10 Am - 8 PM </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
}

export default Contact;
