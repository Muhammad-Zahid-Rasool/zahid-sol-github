import React from "react";
import FooterFour from "../components/FooterFour";
import CaseStudyAreaOne from "../components/CaseStudyAreaOne";
import WorkProcessFour from "../components/WorkProcessFour";
import BrandAreaOne from "../components/BrandAreaOne";
import BannerTwo from "../components/BannerTwo";
import NavbarTwo from "../components/NavbarTwo";
import ServiceAreaThree from "../components/ServiceAreaThree";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";

const HomeFour = () => {
  return (
    <>
      {/* Navigation Bar Two*/}
      <NavbarTwo />
      {/* Home Slider */}
      <BannerTwo />

      {/* Service Area Three */}
      <ServiceAreaThree />
      {/* Service Area four -  <ServiceAreaFive /> No Services are Shown */}
      <ServiceAreaFive />

      {/* ORU WORK */}
      <CaseStudyAreaOne />

      {/*  <TeamAreaThree />*/}
      <BrandAreaOne />

      {/* Work Process Four */}
      <WorkProcessFour />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFour;
