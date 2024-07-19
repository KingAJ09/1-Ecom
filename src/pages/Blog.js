import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container';

const Blog = () => {
  return (
    <>
        <Meta title={"Blogs"} />

        <BreadCrumb title='Blog' />

        <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">

                <div className="col-3">

                    <div className='filter-card mb-3'>

                        <h3 className="filter-title">Find By Categories</h3>

                        <div>
                            <ul className='ps-0'>
                                <li>Home</li>
                                <li>Our Store</li>
                                <li>Blogs</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="col-9">

                    <div className="d-flex gap-10">

                        <div className="row">

                            <div className="col-6 mb-3">
                                <div class="blogs-card">
                                <img src="images/blog5.jpeg" className="card-img" alt="blog" />
                                <div class="card-body">
                                    <h5 className="card-title">Blogs On</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to='/SingleBlog' className='button'>Read More</Link>
                                </div>
                                </div>
                            </div>

                            <div className="col-6 mb-3">
                                <div class="blogs-card">
                                <img src="images/blog5.jpeg" className="card-img" alt="blog" />
                                <div class="card-body">
                                    <h5 className="card-title">Blogs On</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to='/SingleBlog' className='button'>Read More</Link>
                                </div>
                                </div>
                            </div>

                            <div className="col-6 mb-3">
                                <div class="blogs-card">
                                <img src="images/blog5.jpeg" className="card-img" alt="blog" />
                                <div class="card-body">
                                    <h5 className="card-title">Blogs On</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to='/SingleBlog' className='button'>Read More</Link>
                                </div>
                                </div>
                            </div>

                            <div className="col-6 mb-3">
                                <div class="blogs-card">
                                <img src="images/blog5.jpeg" className="card-img" alt="blog" />
                                <div class="card-body">
                                    <h5 className="card-title">Blogs On</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to='/SingleBlog' className='button'>Read More</Link>
                                </div>
                                </div>
                            </div>

                            <div className="col-6 mb-3">
                                <div class="blogs-card">
                                <img src="images/blog5.jpeg" className="card-img" alt="blog" />
                                <div class="card-body">
                                    <h5 className="card-title">Blogs On</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to='/SingleBlog' className='button'>Read More</Link>
                                </div>
                                </div>
                            </div>

                            <div className="col-6 mb-3">
                                <div class="blogs-card">
                                <img src="images/blog5.jpeg" className="card-img" alt="blog" />
                                <div class="card-body">
                                    <h5 className="card-title">Blogs On</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to='/SingleBlog' className='button'>Read More</Link>
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

export default Blog