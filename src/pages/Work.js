import React from "react";
import BannerFour from "../components/BannerFour";
import FooterFour from "../components/FooterFour";
import NavbarThree from "../components/NavbarThree";
import CaseStudyAreaOne from "../components/CaseStudyAreaOne";
import AboutAreaFive from "../components/AboutAreaFive";
import AboutAreaSix from "../components/AboutAreaSix";
import BlogAreaFive from "../components/BlogAreaFive";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";
import TestimonialFive from "../components/TestimonialFive";
import WorkProcessFour from "../components/WorkProcessFour";
import BrandAreaOne from "../components/BrandAreaOne";
import Breadcrumb from "../components/Breadcrumb";


const HomeFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

       {/* Breadcrumb */}
       <Breadcrumb title={"Work"} />

       {/* ORU WORK ------ Case Study Area One */}
       <CaseStudyAreaOne />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Work Process Four */}
      <WorkProcessFour />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFour;
