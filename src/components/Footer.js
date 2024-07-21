import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SiGooglenews } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { database } from '../utils/FirebaseConfig';

const Footer = () => {

  const history = useNavigate()

  const handleClick = () =>{
    signOut(database).then(val=>{
      console.log(val,"val");
      history('/')
    })
  }

  return (
    <>

      <footer className='py-4'>

        <div className="container-xxl">

          <div className="row align-items-center">

            <div className="col-5">

              <div className="footer-top-data d-flex align-items-center gap-30">
                <SiGooglenews className='drop text-white' />
                <h2 className='mb-0 text-white'>Signup with NewsLetter</h2>
              </div>

            </div>

            <div className="col-7">

              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>

            </div>

          </div>

        </div>
      </footer>

      <footer className='py-3'>

        <div className="container-xxl">

          <div className="row">

            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              
              <div className='footer-links d-flex flex-column'>
                <address className='text-white fs-6'>36/38, Kings Avenue, Ojodu Berger, <br /> Lagos Nigeria</address>
                <a href="tel: +234-8051764013" className="mt-3 text-white d-block mb-1">+234-8051764013</a>
                <a href="mailto: petersemmanuel442@gmail.com" className="mt-2 text-white d-block mb-1">KingStore105@gmail.com</a>

                <div className="social-icons d-flex align-items-center gap-30 mt-4">

                <a className='text-white' href="https://www.facebook.com"><BsFacebook className='fs-4' /></a>
                <a className='text-white' href="https://www.twitter.com"><AiFillTwitterCircle className='fs-4' /></a>
                <a className='text-white' href="https://www.instagram.com"><AiFillInstagram className='fs-4' /></a>
                <a className='text-white' href="https://www.linkedin.com"><FaLinkedin className='fs-4' /></a>
                <a className='text-white' href="https://www.github.com"><FaGithub className='fs-4' /></a>

                </div>
                
              </div>

            </div>

            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>

              <div className='footer-links d-flex flex-column'>
                <Link to='/PrivacyPolicy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='/RefundPolicy' className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to='/ShippingPolicy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='/TermAndCondition' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to='/Blogs' className='text-white py-2 mb-1'>Blogs</Link>
              </div>

            </div>

            <div className="col-3">

              <h4 className='text-white mb-4'>Account</h4>

              <div className='footer-links d-flex flex-column'>
                <Link to='/about' className='text-white py-2 mb-1'>About Us</Link>
                <Link to='/contact' className='text-white py-2 mb-1'>Faq'</Link>
                <Link to='/contact' className='text-white py-2 mb-1'>Contact</Link>
                
              </div>

            </div>

            <div className="col-2">

              <h4 className='text-white mb-4'>Quick Link</h4>

              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Clothes</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>

            </div>

          </div>

        </div>

      </footer>

      <button className='button text-white py-2 mb-1' onClick={handleClick}>Logout</button>

      <footer className='py-4'>

        <div className="container-xxl">

          <div className="row">

            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear() }; Powered by KingsTech </p>
            </div>

          </div>

        </div>

      </footer>

    </>
  )
}

export default Footer