import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>Our Services</h6>
                <h2 className='title'>
                  To Revolutionize Your Business
                </h2>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-6 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/9.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details' className="ZSollink">Web Development</Link>
                  </h5>
                  <p className='mb-0'>
                    Aliquam eros justo, posuere loborti inh thi viverra coin
                    design here laoreet min ouimatti posuere lorem
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/10.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details' className="ZSollink">Digital Marketing</Link>
                  </h5>
                  <p className='mb-0'>
                    Aliquam eros justo, posuere loborti inh thi viverra coin
                    design here laoreet min ouimatti posuere lorem
                  </p>
                </div>
              </div>
  
            </div>
   
            <div className='col-lg-6 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/11.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details' className="ZSollink">Mobile Development</Link>
                  </h5>
                  <p className='mb-0'>
                    Aliquam eros justo, posuere loborti inh thi viverra coin
                    design here laoreet min ouimatti posuere lorem
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/service-details' className="ZSollink">AI & ML</Link>
                  </h5>
                  <p className='mb-0'>
                    Aliquam eros justo, posuere loborti inh thi viverra coin
                    design here laoreet min ouimatti posuere lorem
                  </p>
                </div>
              </div>
   
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
