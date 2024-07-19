import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
        <Meta title={"Your Cart"} />
        <BreadCrumb title='Your Cart' />

        <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">

                <div className="col-12">

                    <div className="cart-header d-flex justify-content-between align-items-center py-3">

                        <h4 className='cart-col-1'>PRODUCT</h4>
                        <h4 className='cart-col-2'>PRICE</h4>
                        <h4 className='cart-col-3'>QUANTITY</h4>
                        <h4 className='cart-col-4'>TOTAL</h4>

                    </div>

                    <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-3">

                        <div className='cart-col-1 gap-20 d-flex align-items-center'>

                            <div className='w-25'><img src="images/set1.jpeg" alt="headphone" className='img-fluid' /></div>

                            <div className='w-75'>
                                <p>Headphone</p>
                                <p>Color: Blue</p>
                                <p>Size: M</p>
                            </div>

                        </div>

                        <div className='cart-col-2'>
                            <h5 className="price">$ 200.00</h5>
                        </div>

                        <div className='cart-col-3 d-flex align-items-center gap-15'>

                            <div>
                                <input className='form-control' type="number" name="" min={1} max={10} id="" />
                            </div>

                            <div>
                                <MdDelete className='text-danger' />
                            </div>

                        </div>

                        <div className='cart-col-4'>
                            <h5 className="price">$ 200.00</h5>
                        </div>

                    </div>

                    <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-3">

                        <div className='cart-col-1 gap-20 d-flex align-items-center'>

                            <div className='w-25'><img src="images/small5.jpeg" alt="headphone" className='img-fluid' /></div>

                            <div className='w-75'>
                                <p>Nike Shoe</p>
                                <p>Color: White</p>
                                <p>Size: M</p>
                            </div>

                        </div>

                        <div className='cart-col-2'>
                            <h5 className="price">$ 300.00</h5>
                        </div>

                        <div className='cart-col-3 d-flex align-items-center gap-15'>

                            <div>
                                <input className='form-control' type="number" name="" min={1} max={10} id="" />
                            </div>

                            <div>
                                <MdDelete className='text-danger' />
                            </div>

                        </div>

                        <div className='cart-col-4'>
                            <h5 className="price">$ 300.00</h5>
                        </div>

                    </div>

                    <div className="col-12 py-2 mt-4">

                        <div className="d-flex justify-content-between align-items-baseline">

                            <Link to='/Product' className="button">Continue Shopping</Link>

                            <div className='d-flex flex-column justify-items-end'>
                                <h4>SubTotal: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>

                                <Link to='/Checkout' className='button'>Checkout</Link>
                            </div>

                            

                        </div>

                    </div>

                </div>

            </div>
        </Container>
    </>
  )
}

export default Cart