import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
      <div className="blog-card">

        <div className="card">
          <img src="images/blog1.jpeg" className="card-img-top img-fluid" alt="blog" />
          <div className="card-body">
            <h5 className="card-title">New Arrivals</h5>
            <p className="card-text">New Outfit for any occasion</p>
            <Link className='button'>Check Out</Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default BlogCard