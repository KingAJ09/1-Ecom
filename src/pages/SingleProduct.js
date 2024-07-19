import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { TiPuzzleOutline } from "react-icons/ti";
import { CiRuler } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import Container from '../components/Container';

// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import small5 from '../../src/small5.jpeg';

const SingleProduct = () => {
    const props = {width: 400, height: 600, zoomWidth: 600, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s"};
    const [orderedProduct] = useState(true); 
    // , setorderedProduct
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title={"Product"} />
        <BreadCrumb title='Product' />

        <Container class1="main-product-wrapper home-wrapper-2 py-5">
            <div className="row">

                <div className="col-6">

                    <div className="main-product-image">

                        <div>
                            <ReactImageZoom {...props} />
                        </div>

                    </div>

                    <div className="other-product-image d-flex flex-wrap gap-15">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s" alt="shoe" className='img-fluid prod-mag' /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s" alt="shoe" className='img-fluid prod-mag' /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s" alt="shoe" className='img-fluid prod-mag' /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s" alt="shoe" className='img-fluid prod-mag' /></div>
                    </div>

                </div>

                <div className="col-6">

                    <div className="main-product-details">

                        <div className='border-bottom'>
                            <h3 className='title'>Shoes for both kids and adults</h3>
                        </div>

                        <div className="border-bottom py-3">

                            <p className="price">$ 100</p>
                            <div className="d-flex align-items-center gap-10">
                                <ReactStars count={5} value='3' size={24} activeColor="#ffd700" />
                                <p className='mb-0 t-review'> (2 reviews) </p>
                            </div>

                            <a className='review-btn' href="#review">Write a review</a>

                        </div>

                        <div className="border-bottom py-3">

                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Type :</h3> <p className='product-data'>Snickers</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand :</h3> <p className='product-data'>Jordan</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category :</h3> <p className='product-data'>Clothes</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Tags :</h3> <p className='product-data'>Snickers</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Availability :</h3> <p className='product-data'>In Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size :</h3> 
                                <div className="d-flex flex-wrap gap-15">
                                    <span className="badge text-dark bg-white border border-1 border-secondary">S</span>
                                    <span className="badge text-dark bg-white border border-1 border-secondary">M</span>
                                    <span className="badge text-dark bg-white border border-1 border-secondary">L</span>
                                    <span className="badge text-dark bg-white border border-1 border-secondary">XL</span>
                                    <span className="badge text-dark bg-white border border-1 border-secondary">XXL</span>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Color :</h3> 
                                <Color />
                            </div>
                            <div className='d-flex gap-15 flex-row mt-2 mb-3 align-items-center'>
                                <h3 className='product-heading'>Quantity :</h3> 
                                <div className="l">
                                    <input type="number" name="" min={1} max={10} className='form-control' style={{"width": "70px"}} id="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center ms-5'>
                                    <button className='button border-0'>Add to Cart</button>
                                    <Link to='/Signup' className='button signup'>Buy Now</Link>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-15 mb-3">
                                <div>
                                    <a href="/"><BiShuffle className='fs-5 me-2' /> Add to Check</a>
                                </div>

                                <div>
                                    <a href="/"><FaRegHeart className='fs-5 me-2' /> Add to Favorite</a>
                                </div>
                            </div>

                            <div className='accordion-section'>

                                <div className="accordion" id="accordionExample">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <FaShippingFast className='fs-5 me-2' /> Shipping & Returns
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">

                                        <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <TiPuzzleOutline className='fs-5 me-2' /> Materials
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>

                                    </div>

                                    <div className="accordion-item">

                                        <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <CiRuler className='fs-5 me-2' /> Dimensions
                                        </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>

                                    </div>

                                    <div className="accordion-item">

                                        <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <FaRegHeart className='fs-5 me-2' />Care Instructions
                                        </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>

                                    </div>

                                    <div className="accordion-item">

                                        <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <FaLink className='fs-5 me-2' /> Share
                                        </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>Copy product Link. </strong> <code><FaLink className='fs-5 me-2' /></code> <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s" onClick={()=>{copyToClipboard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8ovSNTyCmy__eD5tt2bk3ubHPsts2Ez2Sg&s")}}>Image Clip</a> <code><FaLink className='fs-5 me-2' /></code>.
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </Container>

        <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">

                    <h4 className='description'>Description</h4>
                    <div className="bg-white p-3">
                            
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                            velit dolore rerum cupiditate ipsum unde labore deleniti vel exercitationem 
                            earum voluptate eveniet quasi libero aliquam reprehenderit incidunt corporis 
                            nisi neque et nihil veritatis iure. Consequatur veritatis ducimus, ex quos, 
                            obcaecati repellat aspernatur laboriosam consequuntur nulla quibusdam et magni distinctio porro.
                        </p>
                    </div>
                </div>
            </div>
        </Container>

        <Container class1="review-wrapper home-wrapper-2">
            <div className="row">

                <div className="col-12">

                    <h3 id='review'>Reviews</h3>

                    <div className="review-inner-wrapper">

                        <div className="review-head d-flex justify-content-between align-items-end">

                            <div>
                                <h4 className='mb-2'>Customers Review</h4>
                                <div className='d-flex gap-10 align-items-center'>
                                    <ReactStars count={5} value='3' edit={false} size={24} isHalf={true} emptyIcon={<i className="far fa-star"></i>} halfIcon={<i className="fa fa-star-half-alt"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" />
                                    {/* <ReactStars /> */}
                                    {/* <ReactStars count={5} size={24} activeColor="#ffd700" /> */}

                                    <p className='mb-0'>Based on 2 reviews</p>
                                </div>

                            </div>

                            {orderedProduct && (
                                <div>
                                    <a className='text-dark text-decoration-underline' href="/">Write your review</a>
                                </div>
                            )}

                        </div>

                        <div className="review-form py-4">
                            <h4 className='mb-3 mt-3'>Write a Review</h4>
                            <form action="" className='d-flex flex-column gap-15'>

                                <div className="mb-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                                </div>

                                <div className="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Add..."/>
                                </div>

                                <div className="mb-2">
                                    <p className='mb-0'>Rating</p>
                                    <ReactStars count={5} size={24} activeColor="#ffd700" />
                                </div>

                                <div className="mb-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Review Title"/>
                                </div>

                                <div className="mb-3">
                                <textarea className="form-control w-100" id="exampleFormControlTextarea1" rows="6" cols="30" placeholder='Write Your Comments Here'></textarea>
                                </div>

                                <div className="mb-1 d-flex justify-content-end">
                                <button className='button border-0'>Submit Review</button>
                                </div>
                            </form>

                        </div>

                        <div className="reviews mt-4">
                            <div className="review">
                                <div className="d-flex align-items-center gap-10">
                                    <h6  className='mb-0'>Kojo</h6>
                                    <ReactStars count={5} value='3' size={24} activeColor="#ffd700" />
                                </div>
                                <p className='mt-1'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Reprehenderit eum modi accusantium cupiditate error suscipit.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </Container>

        <Container class1="popular-wrapper py-5 home-wrapper-2">
            <div className="row">

                <div className="col-12">
                <h3 className='section-heading'>Our Popular Products</h3>
                </div>

            </div>

            <div className="row">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </Container>
    </>
  )
}

export default SingleProduct