import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerFour = () => {
  return (
    <>
      {/* ================== BannerFour Start ==================*/}
      <div className='banner-area bg-relative banner-area-3' >
        
        <div className='container custom-container'>
          <div className='bg-gray'>
            <img
              className='img-right'
              src='assets/img/banner-4/1.gif'
              alt='img'
            />
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 align-self-center'>
                  <div className='banner-inner'>
                    <h6
                      className='bg-base-2 text-white subtitle '
                      data-aos='fade-right'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    >
                      DESIGNING FOR THE FUTURE
                    </h6>
                    <h2
                      className='title '
                      data-aos='fade-right'
                      data-aos-delay='250'
                      data-aos-duration='1500'
                    >
                      Innovative <span >Solutions</span> For A <span>Digital World</span> 
                    </h2>
                    <Link
                      className='mt-3 btn btn-border-base-2'
                      data-aos='fade-right'
                      data-aos-delay='400'
                      data-aos-duration='1500'
                      to='/about'
                    >
                      Discover More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFour End ==================*/}
    </>
  );
};

export default BannerFour;
