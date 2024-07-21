import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { BiShuffle } from "react-icons/bi";
import prod1 from '../images/prod1.jpeg'

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  // console.log(location);
  return (
    <>
    <div className={` ${location.pathname === "/Product" ? `gr-${grid}` : "col-3"}`}>
      <Link to=':id' className=" card product-card position-relative">

        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><FaRegHeart className='prod-icons' /></button>
        </div>

        <div className="product-image">
          <img src={ prod1 } className="card-img-top img-fluid" alt="blog" />
          <img src={ prod1 } className="card-img-top img-fluid" alt="blog" />
        </div>
        <div className="card-details">
          <h6 className="card-title">JBL</h6>
          <h5 className="card-text">Nice bass with mind blowing sound enjoy today</h5>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quos culpa, possimus sit tenetur asperiores quidem consequatur inventore totam iusto! Porro ullam consequuntur voluptas quasi tempore libero quas, doloremque eos!</p>
          <p className="price">$100.00</p>
          <ReactStars count={5} value='3' edit={false} size={24} isHalf={true} emptyIcon={<i className="far fa-star"></i>} halfIcon={<i className="fa fa-star-half-alt"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" />
          {/* <ReactStars count={5} value='3' size={24} activeColor="#ffd700" /> */}

        </div>

        <div className="action-bar position-absolute">

          <div className='d-flex flex-column gap-15'>

            <button className='border-0 bg-transparent'><BiShuffle className='prod-icons' /></button>
            <button className='border-0 bg-transparent'><GrView className='prod-icons' /></button>
            <button className='border-0 bg-transparent'><FaCartPlus className='prod-icons' /></button>
            

          </div>

        </div>

      </Link>
    </div>

    <div className={` ${location.pathname === "/Product" ? `gr-${grid}` : "col-3 mb-3"}`}>
      <Link className=" card product-card position-relative">

        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><FaRegHeart className='prod-icons' /></button>
        </div>

        <div className="product-image">
          <img src={ prod1 } className="card-img-top img-fluid" alt="blog" />
          <img src={ prod1 } className="card-img-top img-fluid" alt="blog" />
        </div>
        <div className="card-details">
          <h6 className="card-title">JBL</h6>
          <h5 className="card-text">Nice bass with mind blowing sound enjoy today</h5>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quos culpa, possimus sit tenetur asperiores quidem consequatur inventore totam iusto! Porro ullam consequuntur voluptas quasi tempore libero quas, doloremque eos!</p>
          <p className="price">$100.00</p>
          <ReactStars count={5} value='3' edit={false} size={24} isHalf={true} emptyIcon={<i className="far fa-star"></i>} halfIcon={<i className="fa fa-star-half-alt"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" />
          {/* <ReactStars count={5} size={24} activeColor="#ffd700" /> */}

        </div>

        <div className="action-bar position-absolute">

          <div className='d-flex flex-column gap-15'>

            <button className='border-0 bg-transparent'><BiShuffle className='prod-icons' /></button>
            <button className='border-0 bg-transparent'><GrView className='prod-icons' /></button>
            <button className='border-0 bg-transparent'><FaCartPlus className='prod-icons' /></button>
            

          </div>

        </div>

      </Link>
    </div>
    </>

    
  )
}

export default ProductCard