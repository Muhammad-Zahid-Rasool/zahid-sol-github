import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className="service-area bg-gray bg-relative pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title">AI PROJECTS</h6>
                <h2 className="title">
                  Smarter <span>AI Agents </span>for Everyday Business Needs
                </h2>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/7.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Lead Generation AI Agent</Link>
                  </h5>
                  <p className="mb-0">
                    Finds and filters leads, enriches data, updates CRM, and
                    sends personalized outreach.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/8.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Customer Support AI Agent</Link>
                  </h5>
                  <p className="mb-0">
                    Manages FAQs, bookings, and queries on chat/WhatsApp,
                    escalating complex cases.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/9.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Accounting AI Agent</Link>
                  </h5>
                  <p className="mb-0">
                    Extracts invoice data, validates details, and updates
                    accounting systems to cut manual work.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src="assets/img/about/22.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/10.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Social Media AI Agent</Link>
                  </h5>
                  <p className="mb-0">
                    Creates content ideas, writes captions, schedules posts, and
                    tracks engagement for growth.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/11.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">E-commerce AI Agent</Link>
                  </h5>
                  <p className="mb-0">
                    Handles orders, syncs inventory, sends updates, and predicts
                    restocks with sales trends.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/12.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Healthcare AI Agent</Link>
                  </h5>
                  <p className="mb-0">
                    Automates patient bookings, sends reminders, manages
                    follow-ups, and reduces no-shows.
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
