import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaOne = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div className="team-area bg-relative pd-top-40 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">MEET OUR EXPERTS</h6>
            <h2 className="title">
              <span>Team</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="assets/img/team/Shahid.jpg"
                    alt="img"
                    height={410}
                    width={388}
                  />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Muhammad Shahid Rasool</Link>
                  </h5>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="assets/img/team/al.jpg"
                    alt="img"
                    height={410}
                    width={388}
                  />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Ali</Link>
                  </h5>
                  <p>Software Department</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img
                    src="assets/img/team/SSM.jpg"
                    alt="img"
                    height={410}
                    width={388}
                  />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link to="/team-details">Majeed</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaOne;
