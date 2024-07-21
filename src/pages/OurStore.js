import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component"
import { TfiLayoutMenuV } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { TbMenu } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import ProductCard from "../components/ProductCard";
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
    const [grid,setGrid] = useState(4);
    
    
  return (
    <>

     <Meta title={"Store"} />

     <BreadCrumb title='Our Store' />

     <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">

            <div className="col-3">

                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Shop By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Wears</li>
                            <li>Gadgets</li>
                            <li>Watch</li>
                            <li>Food</li>
                        </ul>
                    </div>
                </div>

                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Filter By</h3>
                    <div>
                        <h5 className="sub-title">Availability</h5>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="" />
                                <label className="form-check-label" htmlfor=""> In Stock (5) </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="" />
                                <label className="form-check-label" htmlfor=""> Out of Stock (5) </label>
                            </div>
                        </div>

                        <h5 className="sub-title">Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                <label htmlFor="floatingInput">From</label>
                            </div>

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                <label htmlFor="floatingInput1">To</label>
                            </div>
                        </div>

                        <h5 className="sub-title">Color</h5>
                        <div>
                            <Color />
                        </div>

                        <h5 className="sub-title">Size</h5>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                <label className="form-check-label" htmlfor="color-1"> S (2) </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                <label className="form-check-label" htmlfor="color-2"> M (4) </label>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Product Tags</h3>
                    <div>
                        <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                            <span className="badge bg-secondary rounded-3 py-2 px-3">Headphone</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Phone</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Accessories</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Clothes</span>
                        </div>
                    </div>
                </div>

                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Random Products</h3>
                    <div>
                        <div className="random-product d-flex mb-4">
                            <div className="w-50">
                                <img src="images/set2.jpeg" alt="headphone" className='img-fluid' />
                            </div>

                            <div className="w-75">
                                <h5>Headphone, Extraordinary experience for kids & adults </h5>
                                <ReactStars count={5} value='3' size={24} activeColor="#ffd700" />
                                <b>$200</b>
                            </div>
                        </div>

                        <div className="random-product d-flex">
                            <div className="w-50">
                                <img src="images/smart4.jpeg" alt="headphone" className='img-fluid' />
                            </div>

                            <div className="w-75">
                                <h5>Headphone, Extraordinary experience for kids & adults </h5>
                                <ReactStars count={5} value='3' size={24} activeColor="#ffd700" />
                                <b>$200</b>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="col-9">

                <div className="filter-sort-grid mb-4">

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">

                            <p className="mb-0" style={{"width":"100px"}}>Sort By:</p>
                            <select name="" defaultValue={"DEFAULT"} className='form-control form-select' id="">

                                <option disabled value="DEFAULT"></option>

                                <option value="manual">Featured</option>

                                <option value="best-selling">Best Selling</option>

                                <option value="title-ascending">A-Z</option>

                                <option value="title-descending">Z-A</option>

                                <option value="price-ascending">Price low to high</option>

                                <option value="price-descending">Price high to low</option>

                                <option value="created-ascending">Date, old to new</option>

                                <option value="created-descending">Date, new to old</option>

                            </select>

                        </div>

                        <div className='d-flex align-items-center gap-10'>

                            <p className="total-products mb-0">21 Products</p>

                            <div className='d-flex align-items-center gap-10'>
                                <TfiLayoutMenuV onClick={() => {setGrid(3);}} className='S-menu' />
                                <VscMenu onClick={()    => {setGrid(4);}} className='S-menu' />
                                <TbMenu onClick={() => {setGrid(6);}} className='S-menu' />
                                <TiThMenu onClick={()   => {setGrid(12);}} className='S-menu' />
                            </div>

                        </div>

                    </div>

                </div>

                <div className="product-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid} />
                    </div>
                </div>

            </div>

        </div>
     </Container>

    </>
  )
}

export default OurStore