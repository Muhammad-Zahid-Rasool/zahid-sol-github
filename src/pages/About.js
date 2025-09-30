import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterFour from "../components/FooterFour";
import NavbarThree from "../components/NavbarThree";
import ServiceAreaOne from "../components/ServiceAreaOne";
import TeamDetailsGroup from "../components/TeamDetailsGroup";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default TeamDetails;
