import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
     <Meta title={"Single Blog"} />
     <BreadCrumb title='Single Blog' />

     <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">

            <div className="d-flex gap-30">

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

                <div className="col-8">

                    <div className="single-blog-card">

                        <h3 className="title">A Beautiful day for a wonderful Fit</h3>

                        <img src="images/tab.jpeg" alt="tab" className='img-fluid w-100 my-4' />

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maiores quasi officiis corporis iusto eveniet inventore error? 
                            Molestiae dolorum repellat tenetur labore delectus omnis. 
                            Natus expedita architecto officia minima voluptatibus quibusdam!
                        </p>

                        <Link to='/Blogs' className='d-flex align-items-center gap-10'><IoMdArrowBack className='fs-4' /> Back to Blog</Link>

                    </div>

                </div>

            </div>

        </div>
     </Container>
    </>
  )
}

export default SingleBlog