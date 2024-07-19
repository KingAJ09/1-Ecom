import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { MdOutlineCancel } from "react-icons/md";
import Color from '../components/Color';
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
     <Meta title={"Check Product"} />

      <BreadCrumb title='Check Product' />

      <Container class1="check-product home-wrapper-2 py-5">
        <div className="row">

          <div className="col-3">

            <div className="check-product-card position-relative">

              {/* <img src="" alt="" className="position-absolute" /> */}
              <MdOutlineCancel className="position-absolute cross" />

              <div className="product-card-image">
                <img src="images/Lady1.jpeg" alt="watch" className='img-fluid' />

              </div>

              <div className="check-product-details">
                <h5 className="title">Vintage Dress, white top</h5>
                <h6 className="price mb-3 mt-3">$ 100.00</h6>

                <div>

                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>BoohooMan</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Vintage</p>
                  </div>

                  <div className="product-details">
                    <h5>SKU:</h5>
                    <p>SKU099</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>

                  <div className="product-details">
                    <h5>Color:</h5>
                    <Color />
                  </div>

                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="col-3">

            <div className="check-product-card position-relative">

              {/* <img src="" alt="" className="position-absolute" /> */}
              <MdOutlineCancel className="position-absolute cross" />

              <div className="product-card-image">
                <img src="images/Men1.jpeg" alt="watch" className='img-fluid' />

              </div>

              <div className="check-product-details">
                <h5 className="title">Vintage Dress, white top</h5>
                <h6 className="price mb-3 mt-3">$ 100.00</h6>

                <div>

                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>BoohooMan</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Vintage</p>
                  </div>

                  <div className="product-details">
                    <h5>SKU:</h5>
                    <p>SKU099</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>

                  <div className="product-details">
                    <h5>Color:</h5>
                    <Color />
                  </div>

                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="col-3">

            <div className="check-product-card position-relative">

              {/* <img src="" alt="" className="position-absolute" /> */}
              <MdOutlineCancel className="position-absolute cross" />

              <div className="product-card-image">
                <img src="images/jug1.jpeg" alt="watch" className='img-fluid' />

              </div>

              <div className="check-product-details">
                <h5 className="title">Vintage Dress, white top</h5>
                <h6 className="price mb-3 mt-3">$ 100.00</h6>

                <div>

                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>BoohooMan</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Vintage</p>
                  </div>

                  <div className="product-details">
                    <h5>SKU:</h5>
                    <p>SKU099</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>

                  <div className="product-details">
                    <h5>Color:</h5>
                    <Color />
                  </div>

                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
     
    </>
  )
}

export default CompareProduct