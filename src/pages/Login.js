import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <>
        <Meta title={"Login"} />

        <BreadCrumb title='Login' />

        <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">

                <div className="col-12">

                    <div className="auth-card">

                        <h3 className='text-center mb-4'>LOGIN</h3>

                        <form action="" className='d-flex flex-column gap-15'>  
                            <CustomInput type="email"  name='email' placeholder='Email Add...' id="staticEmail" />

                            <CustomInput type="password" name='password' placeholder='Password' id="inputPassword" />

                            <div>
                                <Link to='/forgot-password'>Forgotten Password</Link>
                            </div>

                            <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Login</button>
                                <Link to='/Signup' className='button signup'>Signup</Link>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </Container>

    </>
  )
}

export default Login