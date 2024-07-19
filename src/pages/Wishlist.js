import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { MdOutlineCancel } from "react-icons/md";
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
        <Meta title={"Wish List"} />

        <BreadCrumb title='Wish List' />

        <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
            <div className="row">

                <div className="col-3">

                    <div className="wishlist-card position-relative">
                        <MdOutlineCancel className="position-absolute cross" />
                        
                        <div className="wishlist-card-image">
                            <div className="product-card-image">
                                <img src="images/smart3.jpeg" alt="watch" className='img-fluid' />

                            </div>

                            <div className="wishlist-details px-2 py-3">
                                <h5 className="title">Vintage Dress, white top</h5>
                                <h6 className="price mb-3 mt-3">$ 300.00</h6>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col-3">

                    <div className="wishlist-card position-relative">
                        <MdOutlineCancel className="position-absolute cross" />
                        
                        <div className="wishlist-card-image">
                            <div className="product-card-image">
                                <img src="images/smart3.jpeg" alt="watch" className='img-fluid' />

                            </div>

                            <div className="wishlist-details px-2 py-3">
                                <h5 className="title">Vintage Dress, white top</h5>
                                <h6 className="price mb-3 mt-3">$ 300.00</h6>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col-3">

                    <div className="wishlist-card position-relative">
                        <MdOutlineCancel className="position-absolute cross" />
                        
                        <div className="wishlist-card-image">
                            <div className="product-card-image">
                                <img src="images/smart3.jpeg" alt="watch" className='img-fluid' />

                            </div>

                            <div className="wishlist-details px-2 py-3">
                                <h5 className="title">Vintage Dress, white top</h5>
                                <h6 className="price mb-3 mt-3">$ 300.00</h6>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </Container>
    </>
  )
}

export default Wishlist