import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
     <Meta title={"Signup"} />

      <BreadCrumb title='SignUp' />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">

            <div className="auth-card">
              <h3 className='text-center mb-4'>Create Account</h3>

              <form action="" className='d-flex flex-column gap-15'> 
                
                <CustomInput type="text"  name='name' placeholder='First Name' id="inputName" />
                                
                <CustomInput type="text" name='name' placeholder='Last Name' id="inputName" />   

                <CustomInput type="tel" name='mobile' placeholder='Phone Number' id="inputNumber" /> 

                <CustomInput type="email" name='email' placeholder='Email Add...' id="staticEmail" /> 

                <CustomInput type="password" name='password' placeholder='Create Password' id="inputPassword" />           

                <div>
                  <Link to='/Login'>Login</Link>
                </div>

                <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button className='button border-0'>Signup</button>
                </div>

              </form>

            </div>

          </div>

        </div>
      </Container>

    </>
  )
}

export default Signup