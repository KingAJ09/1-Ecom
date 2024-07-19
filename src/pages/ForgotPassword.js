import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <>
     <Meta title={"Forgot Password"} />

      <BreadCrumb title='Forgot Password' />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">

            <div className="auth-card">

              <h3 className='text-center mb-4'>RESET YOUR PASSWORD</h3>

              <p className="text-center mt-2 mb-3">You will be sent your password rest link to your email</p>

              <form action="" className='d-flex flex-column gap-15'> 

                <CustomInput type="text"  name='email' placeholder='Email Add...' id="staticEmail" /> 

                  <div className=' mt-3 d-flex d-column justify-content-center gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to='/Login'>Cancel</Link>
                  </div>

              </form>

            </div>

          </div>

        </div>
      </Container>

    </>
  )
}

export default ForgotPassword