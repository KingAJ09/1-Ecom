import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import Container from '../components/Container';
import { services } from '../utils/Data';


function Home() {
  return (
    <>

      <Container class1="home-wrapper-1 py-5">
        
        <div className="row">

          <div className="col-6">

            <div className="main-banner position-relative">

              <img src="images/banner10.jpeg" className='img-fluid rounded-3' alt="banner2" />

              <div className="main-banner-content position-absolute">

                <h4>SUPER SALES FOR YOU !</h4>

                <h5>FULL PRO. LAVEL</h5>

                <p>40% DISCOUNT 1ST jULY TO 30TH JULY</p>

                <Link className='button'>BUY NOW</Link>

              </div>

            </div>

          </div>

          <div className="col-6">

            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">

              <div className="small-banner position-relative">

                <img src="images/small1.jpeg" className='img-fluid rounded-3' alt="banner2" />

                <div className="small-banner-content position-absolute">

                  <h4>SUPER SALES FOR YOU !</h4>

                  <h5>FULL PRO. LAVEL</h5>

                  <p>40% DISCOUNT</p>

                  <Link className='button'>BUY NOW</Link>

                </div>

              </div>

              <div className="small-banner position-relative">

                <img src="images/small2.jpeg" className='img-fluid rounded-3' alt="banner2" />

                <div className="small-banner-content position-absolute">

                  <h4>SUPER SALES FOR YOU !</h4>

                  <h5>FULL PRO. LAVEL</h5>

                  <p>40% DISCOUNT</p>

                  <Link className='button'>BUY NOW</Link>

                </div>

              </div>

              <div className="small-banner position-relative">

                <img src="images/small3.jpeg" className='img-fluid rounded-3' alt="banner2" />

                <div className="small-banner-content position-absolute">

                  <h4>SUPER SALES FOR YOU !</h4>

                  <h5>FULL PRO. LAVEL</h5>

                  <p>40% DISCOUNT</p>

                  <Link className='button'>BUY NOW</Link>

                </div>

              </div>

              <div className="small-banner position-relative">

                <img src="images/small4.jpeg" className='img-fluid rounded-3' alt="banner2" />

                <div className="small-banner-content position-absolute">

                  <h4>SUPER SALES FOR YOU !</h4>

                  <h5>FULL PRO. LAVEL</h5>

                  <p>40% DISCOUNT 1ST <br /> jULY TO 30TH JULY</p>

                  <Link className='button'>BUY NOW</Link>

                </div>

              </div>

            </div>
            
          </div>

        </div>

      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">

            <div className="services d-flex align-items-center justify-content-between">

              
              {
                services?.map((i,j)=>{
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      {i.icon}
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                      
                    </div>
                  );
                })
              }

            </div>

          </div>

        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">

            <div className="categories d-flex justify-content-between flex-wrap align-items-center">

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cam.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Iphone</h6>
                  <p>15 Items</p>
                </div>
                <img src="images/14pro.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>20 Items</p>
                </div>
                <img src="images/set1.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Laptops</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/Lappy1.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cam.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Iphone</h6>
                  <p>15 Items</p>
                </div>
                <img src="images/14pro.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>20 Items</p>
                </div>
                <img src="images/set1.jpeg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Laptops</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/Lappy1.jpeg" alt="camera" />
              </div>

            </div>

          </div>

        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">

          <div className="col-12">
            <h3 className='section-heading'>Featured Collection</h3>
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">

          <div className="col-3">

            <div className="famous-card position-relative">

              <img src="images/smart1.jpeg" alt="smartwatch" className='fam img-fluid' />

              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watch series 8</h6>
                <p>From $400 to $350</p>
              </div>

            </div>

          </div>

          <div className="col-3">

            <div className="famous-card next-card position-relative">

              <img src="images/set2.jpeg" alt="smartwatch" className='fam img-fluid' />

              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Smart watch series 8</h6>
                <p className='text-dark'>From $400 to $350</p>
              </div>

            </div>

          </div>

          <div className="col-3">

            <div className="famous-card next-card position-relative">

              <img src="images/smart4.jpeg" alt="smartwatch" className='fam img-fluid' />

              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Smart watch series 8</h6>
                <p className='text-dark'>From $400 to $350</p>
              </div>

            </div>

          </div>

          <div className="col-3">

            <div className="famous-card next-card position-relative">

              <img src="images/6s.jpeg" alt="smartwatch" className='fam img-fluid' />

              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Smart watch series 8</h6>
                <p className='text-dark'>From $400 to $350</p>
              </div>

            </div>

          </div>

        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">

          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>

          <div className="row">

            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />

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

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">

          <div className="col-12">

            <div className="marquee-inner-wrapper card-wrapper">

              <Marquee className='d-flex'>

                <div className='mx-4 w-25'>
                  <img src="images/brand1.jpg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand2.jpeg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand3.jpeg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand4.jpeg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand5.jpeg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand6.jpeg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand7.jpeg" className='mage' alt="brands" />
                </div>

                <div className='mx-4 w-25'>
                  <img src="images/brand8.jpeg" className='mage' alt="brands" />
                </div>

              </Marquee>

            </div>

          </div>

        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">

          <div className="col-12">
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />

        </div>
      </Container>
    </>
  )
}

export default Home