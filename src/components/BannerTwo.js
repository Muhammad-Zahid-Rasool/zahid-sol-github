import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const BannerTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerTwo Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/bg/8.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle "
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  Welcome To
                </h6>
                <h2
                  className="title "
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  {" "}
                  Zahid <span>Solutions</span>
                </h2>
                <h6
                  className="subtitle "
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  AI & Web Development Company
                </h6>
                <p
                  className="content pe-xl-5 text-justify"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  we build intelligent Agentic AI systems and modern digital
                  solutions to help businesses grow. We design AI agents that
                  streamline operations, automate tasks, and enhance
                  decision-making. Our team creates scalable web and mobile
                  solutions that deliver seamless user experiences. Every
                  project is tailored to match your unique business needs and
                  long-term goals. We focus on innovation, efficiency, and
                  future-ready solutions that drive measurable impact.
                </p>
                <Link
                  className="mt-1 btn btn-border-base-2"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                  to="/about"
                >
                  About Us <FaPlus />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="assets/img/banner-2/ai3.jpg"
                    alt="img"
                    style={{ borderRadius: "10px" }}
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner-2/static-imag02.jpg"
                    alt="img"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerTwo End ==================*/}
    </>
  );
};

export default BannerTwo;
