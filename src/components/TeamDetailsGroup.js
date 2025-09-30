import React from "react";
import FaqAreaOne from "../components/FaqAreaOne";
import TeamAreaOne from "../components/TeamAreaOne";

const TeamDetailsGroup = () => {
  return (
    <>
      {/* ================= TeamDetailsGroup Start =================*/}
      <div className='team-blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='team-details-page'>
            <div className='row'>
              <div className='col-lg-5 text-center'>
                <div className='thumb mb-4 mb-lg-0'>
                  <img src='assets/img/team/zahid.png' alt='img' style={{ borderRadius: '10px' }}/>
                </div>
              </div>
              <div className='col-lg-7 align-self-center ps-xl-5'>
                <h3 className='mb-2'>Muhammad Zahid Rasool</h3>
                <span className='designation'>Founder</span>
                <div className='details mt-4'>
                  <h4>About Company</h4>
                  <p style={{ textAlign: 'justify' }}>
                  We are passionate and experienced developers who love what we do. Our goal is to provide high-quality software solutions that help businesses and individuals to achieve their goals.
                  We believe that technology is a tool that can make people's lives easier and more efficient. That's why we always strive to create user-friendly, reliable, and innovative software that solves real problems.{" "}
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                  At our software house, we value teamwork, creativity, and communication. We work closely with our clients to understand their needs and goals, and we are always available to answer any questions or concerns they may have.
We are committed to delivering exceptional results. Our clients' satisfaction is our top priority, and we always go the extra mile to ensure that they are happy with our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Area One */}
<TeamAreaOne />
    {/* FAQ Area One */}
    <FaqAreaOne />




      {/* ================= TeamDetailsGroup End =================*/}
    </>
  );
};

export default TeamDetailsGroup;
