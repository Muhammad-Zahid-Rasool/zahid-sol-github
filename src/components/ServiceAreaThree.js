import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceAreaThree = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area bg-relative pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center">
                <h6 className="sub-title">CREATIVE SERVICES</h6>
                <h2 className="title">
                  Smart <span>AI </span> & Digital Solutions for Tomorrow
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb">
                  <img src="assets/img/service-icon/8.svg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Agentic AI Systems</Link>
                  </h5>
                  <p>
                    Our Agentic AI Systems are designed to go beyond simple
                    automation. They act as intelligent agents capable of
                    reasoning, adapting, and making decisions. By streamlining
                    workflows, they help businesses save time and reduce costs.
                  </p>
                  <Link className="read-more-text" to="/about">
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb">
                  <img src="assets/img/service-icon/9.svg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Web Development</Link>
                  </h5>
                  <p>
                    We create modern, scalable, and user-friendly websites
                    tailored to your business. Our solutions focus on speed,
                    security, and seamless user experiences. From concept to
                    launch, we deliver digital platforms that help you grow
                    online.
                  </p>
                  <Link className="read-more-text" to="/about">
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb">
                  <img src="assets/img/service-icon/10.svg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/service-details">Mobile Development</Link>
                  </h5>
                  <p>
                    We design and build mobile apps that are fast, intuitive,
                    and engaging. Our solutions work seamlessly across platforms
                    to reach more customers. Every app is crafted to deliver
                    smooth experiences and support business growth.
                  </p>
                  <Link className="read-more-text" to="/about">
                    Touch More <FaPlus />
                  </Link>
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

export default ServiceAreaThree;
