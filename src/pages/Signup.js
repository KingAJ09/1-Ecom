import React, { useState } from 'react'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { database } from '../utils/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {

  const [login,setLogin] = useState(false)

  const history = useNavigate()

  const handleSubmit =(e,type)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    if(type === "signup"){
    createUserWithEmailAndPassword(database, email, password).then(data=>{
      console.log(data, "authData")
      history('/Home')
    }).catch(err=>{
      alert(err.code)
      setLogin(true)
    })
  }else{
    signInWithEmailAndPassword(database, email, password).then(data=>{
      console.log(data, "authData")
      history('/Home')
    }).catch(err=>{
      alert(err.code)
    })
  }
  }
  return (
    <>
     <Meta title={"Signup"} />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">

            <div className="auth-card">
              <h3 className='text-center mb-4'>{login?"sign In":"Create Account"}</h3>

              <form onSubmit={(e)=>handleSubmit(e,login?'login':'signup')} action="" className='d-flex flex-column gap-15'> 
                
                {/* <CustomInput type="text"  name='name' placeholder='First Name' id="inputName" />
                                
                <CustomInput type="text" name='name' placeholder='Last Name' id="inputName" />   

                <CustomInput type="tel" name='mobile' placeholder='Phone Number' id="inputNumber" />  */}

                <CustomInput type="email" name='email' placeholder='Email Add...' id="staticEmail" /> 

                <CustomInput type="password" name='password' placeholder='Create Password' id="inputPassword" />           

                <div>
                  <Link to='/'>Login</Link>
                </div>

                <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button className='button border-0'>{login?"Login":"Signup"}</button>
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