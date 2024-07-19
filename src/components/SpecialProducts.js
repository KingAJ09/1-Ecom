import React from 'react'
import ReactStars from "react-rating-stars-component"
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const SpecialProducts = () => {

    // Random component
    // const Completionist = () => <span>You are good to go!</span>;

  return (
    <div className='col-6 mb-3'>

        <div className="special-product-card">

            <div className="d-flex justify-content-between">

                <div>
                    <img src="images/set2.jpeg" className='ducts img-fluid' alt="headphone" />
                </div>

                <div className='special-product-content'>
                    <h5 className="brand">Havels</h5>
                    <h6 className="tittle">JBL BASS</h6>
                    <ReactStars count={5} value='3' size={24} activeColor="#ffd700" />
                    <p className="price">
                        <span className="red-p">$100</span> &nbsp; <strike>$250</strike>
                    </p>

                    <div className='discount-till d-flex justify-content-center gap-10'>
                        <p className='mb-0'>
                            <b>15</b> Days
                        </p>

                        <div className='d-flex gap-10 align-items-center'>
                            {/* <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span> */}

                            

                            <span className='badge p-2'>

                                <Countdown
                                    date={Date.now() + 2000000000}
                                />,

                            </span>

                        </div>

                    </div>

                    <div className="prod-count my-3">
                            <p>Products: 5</p>

                            <div class="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                    </div>

                    <Link className='button'>Add to Cart</Link>

                </div>

            </div>

        </div>

    </div>
  )
}

export default SpecialProducts