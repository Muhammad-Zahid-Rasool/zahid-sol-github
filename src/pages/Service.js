import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import NavbarThree from "../components/NavbarThree";
import FooterFour from "../components/FooterFour";
import ServiceAreaFive from "../components/ServiceAreaFive";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaFive/>


      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default Service;
