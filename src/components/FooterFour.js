import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterFour = () => {
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className="footer-area bg-cover mt-0 pd-top-120"
        style={{ backgroundImage: 'url("assets/img/bg/14.png")' }}
      >
        <div className="footer-subscribe">
          <div className="container">
            <div className="footer-subscribe-inner box-shadow style-2 bg-white p-0 bg-cover">
              <div className="media bg-base-2">
                <div className="media-left me-3 align-self-xl-center">
                  <img src="assets/img/icon/40.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h6 className="text-white">(+92) 32145676</h6>
                  <p className="mb-0 text-white">Call Us</p>
                </div>
              </div>
              <div className="row align-self-center">
                <div className="col-lg-4">
                  <div className="border-1">
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="border-1">
                    <input type="text" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <a
                    className="btn w-100 btn-black sky border-radius-0"
                    href="#"
                  >
                    Submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="widget widget_contact">
                  <ul className="details text-white">
                    <li>
                      <FaMapMarkerAlt className="sky" />
                      Defense, Lahore Pakistan.
                    </li>
                    <li className="mt-3">
                      <FaPhoneAlt className="sky" /> (+92) 32145676
                    </li>
                    <li className="mt-2">
                      <FaEnvelope className="sky" /> info@zahidsol.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Technologies</h4>
                <ul>
                  <li className="sky">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <div className="post-info  mb-2">
                          <span style={{ textAlign: "justify" }}>
                            We have Developed many projects in multiple
                            technolgies like .NET, Node.js, Laravel & Django as
                            Backend API Server. And Frontend UI is developed in
                            Next.js & React.js.We have worked on both SQL &
                            NoSQL Databases.
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">About Us</h4>
                <ul>
                  <li className="sky">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <div className="post-info  mb-2">
                          <span style={{ textAlign: "justify" }}>
                            We are passionate and experienced developers who
                            love what we do. Our goal is to provide high-quality
                            software solutions that help businesses and
                            individuals to achieve their goals.We believe that
                            technology is a tool that can make people's lives
                            easier and more efficient.{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div style={{ textAlign: "center" }}>
                <p> © Zahid Solutions 2025 | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* =============== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
