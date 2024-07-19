import React from 'react'
import Meta from '../components/Meta'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
// import BreadCrumb from '../components/BreadCrumb'

const ResetPassword = () => {
  return (
    <>
        <Meta title={"Reset Password"} />

        {/* <BreadCrumb title='Login' /> */}

        <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">

                <div className="col-12">

                    <div className="auth-card">
                        <h3 className='text-center mb-4'>Reset Password</h3>

                        <form action="" className='d-flex flex-column gap-15'>  

                            <CustomInput type="password"  name='password' placeholder='New Password' id="inputPassword" />

                            <CustomInput type="password" name='confirmPassword' placeholder='Confirm Password' id="inputPassword" />

                            <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Change</button>
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