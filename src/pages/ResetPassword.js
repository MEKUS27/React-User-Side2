import React from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BrandCrumb title="Reset Password" />

            <Container class1='login-wrapper py-5 px-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <Custominput type='password' name='password' placeholder='Password' />
                                <Custominput type='password' name='confpassword' placeholder='Confirm Password' />

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>OK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword