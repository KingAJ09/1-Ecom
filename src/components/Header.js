import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { MdCompare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";


const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">

      <div className="container-xxl">

        <div className="row">

          <div className="col-5">
            <p className='text-white mb-0'>Shop with us now!! and Enjoy our free Delivery</p>
          </div>

          <div className="col-6">
            <p className='text-end text-white mb-0'>
              Hotline: <a className='text-white' href="tel:+234-8051764013">+234-8051764013</a>
            </p>
          </div>

        </div>

      </div>

    </header>

    <header className="header-upper py-3">

      <div className="container-xxl">

        <div className="row align-items-center">

          <div className="col-2">
            <h3><Link>KingStore</Link></h3>
          </div>

          <div className="col-4">
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search for product" aria-label="Search for product" aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
            </div>
          </div>

          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">

              <div>
                <Link to='/Check-product' className='d-flex align-items-center gap-10 text-white'>
                  <MdCompare className='icons' />
                  <p className='mb-0'>Check<br />Products</p>
                </Link>
              </div>

              <div>
                <Link to='/Wishlist' className='d-flex align-items-center gap-10 text-white'>
                  <FaRegHeart className='icons' />
                  <p className='mb-0'>Favorite<br />List</p>
                </Link>
              </div>

              <div>
                <Link to='/Login' className='d-flex align-items-center gap-10 text-white'>
                  <FaRegUser className='icons' />
                  <p className='mb-0'>Login<br />User</p>
                </Link>
              </div>

              <div>
                <Link to='/Cart' className='d-flex align-items-center gap-10 text-white'>
                  <GiShoppingCart className='icons text-warning' />
                  <div className='d-flex flex-column'>

                    <span className="badge bg-white text-dark gap-10">0</span>
                    <p className='mb-0'>$ 500</p>

                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </header>

    <header className="header-bottom py-3">

      <div className="container-xxl">

        <div className="row">

          <div className="col-12">

            <div className="menu-bottom d-flex align-items-center gap-30">

              <div>

              <div class="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <CgMenuGridR className='drop' />
                    <span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                  </ul>
                </div>

              </div>

              <div className='menu-links'>

                <div className="d-flex align-items-center gap-15">

                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/Product">Our Store</NavLink>
                  <NavLink to="/Blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>

    </>
  )
}

export default Header