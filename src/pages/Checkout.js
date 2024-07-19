import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from "react-icons/io";
import Container from '../components/Container';

export const Checkout = () => {
  return (
    <>
        <Meta title={"Checkout"} />
        <BreadCrumb title='Checkout' />

        <Container class1="checkout-wrapper home-wrapper-2 py-5">
            <div className="row">

                <div className="col-7">

                    <div className="checkout-left-data">

                        <h3 className='web-name'>King Store</h3>
                        <nav style={{"--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <Link to='/Cart' className="text-dark breadcrumb-item total-price">Cart</Link>
                                &nbsp; /
                                <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                                &nbsp; /
                                <Link className="text-dark breadcrumb-item active total-price">Shipping</Link>
                                &nbsp; /
                                <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                            </ol>
                        </nav>

                        <h4 className='title total'>Contact Information</h4>

                        <p className="user-details total">Kojo Kay (kojokay22@gmail.com)</p>

                        <h4 className='mb-3'>Shipping Address</h4>

                        <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>

                            <div className='w-100'>

                                <select name="" className='form-control form-select' id="">
                                    <option value="" selected disabled>Country / Region</option>
                                </select>

                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" placeholder="First Name" className="form-control" />
                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" placeholder="Last Name" className="form-control" />
                            </div>

                            <div className='w-100'>
                                <input type="text" placeholder="Address" className="form-control" />
                            </div>

                            <div className='w-100'>
                                <input type="text" placeholder="Apartment, Suite, (Optional)" className="form-control" />
                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" placeholder="City" className="form-control" />
                            </div>

                            <div className='flex-grow-1'>

                                <select name="" className='form-control form-select' id="">
                                    <option value="" selected disabled>State</option>
                                </select>

                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" placeholder="ZIP Code" className="form-control" />
                            </div>

                            <div className="w-100">

                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to='/Cart' className='text-dark d-flex align-items-center gap-10'><IoMdArrowBack className='fs-4' />Return to Cart</Link>
                                    <Link to='/Cart' className='button d-flex align-items-center gap-10'>Continue to Shipping<IoMdArrowRoundForward className='fs-4' /></Link>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

                <div className="col-5">

                    <div className='border-bottom py-4'>
                        <div className="d-flex gap-10 mb-2 justify-content-between align-items-center">
                            <div className='w-75 d-flex gap-10 align-items-center'>
                                <div className='w-25 position-relative'>
                                    <span style={{top: "-10px", right: "2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                    <img src="images/set1.jpeg" alt="set" className='img-fluid' />
                                </div>

                                <div>
                                    <h5 className='title'>Headphone</h5>
                                    <p className='total-price'>S / #abed</p>
                                </div>
                            </div>

                            <div className='flex-grow-1'>
                                <h5 className='total'>$ 200.00</h5>
                            </div>
                        </div>
                    </div>

                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>$ 200.00</p>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total mb-0'>Shipping</p>
                            <p className='total-price mb-0'>$ 200.00</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$ 200.00</h5>
                    </div>

                </div>

            </div>
        </Container>
    </>
  )
}
