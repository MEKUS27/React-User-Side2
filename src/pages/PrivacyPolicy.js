import React from 'react';
import BrandCrumb from '../components/BrandCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BrandCrumb title="Privacy Policy" />

      <Container class1='policy-wrapper py-5 px-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>

              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default PrivacyPolicy