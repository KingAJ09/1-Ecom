import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMailUnread } from "react-icons/io";
import { FaInfo } from "react-icons/fa";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />

      <BreadCrumb title='Contact Us' />

      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.972926928815!2d3.366461674360129!3d6.650277521678441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93887086a975%3A0x4ab18726a46238fd!2s30%20Kings%20Ave%2C%20Ojodu%2C%20Ikeja%20102109%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1720907667043!5m2!1sen!2sng" 
            width="600" 
            height="450" 
            className='border-0 w-100' 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="col-12 mt-5">

            <div className="contact-inner-wrapper d-flex justify-content-between">

              <div>
                <h3 className="contact-title mb-4">Contact</h3>

                <form action="" className='d-flex flex-column gap-15'>

                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                  </div>

                  <div className="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Add..."/>
                  </div>

                  <div className="mb-3">
                    <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Phone number"/>
                  </div>

                  <div className="mb-3">
                    <textarea className="form-control w-100" id="exampleFormControlTextarea1" rows="5" cols="30" placeholder='Comments'></textarea>
                  </div>

                  <div className="mb-2">
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>

              </div>

              <div>
                <h3 className="contact-title mb-4">Get in touch with Us</h3>

                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <FaHome className='fs-5 text-secondary' />
                      <address className='mb-0'>Hno:18, Falcon Street, Chelsea city, UK</address>
                    </li>

                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <BsFillTelephoneFill className='fs-5 text-secondary' />
                      <a href="tel:+234 8051764013">(+234) 8051764013</a>
                    </li>

                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <IoIosMailUnread className='fs-5 text-secondary' />
                      <a href="mailto:info@kingstore105.com">info@kingstore105.com</a>
                    </li>

                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <FaInfo className='fs-5 text-secondary' />
                      <p className='mb-0'>Monday-Friday 9AM-8PM</p>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>

    </>
  )
}

export default Contact