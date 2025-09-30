import React from "react";
import BannerFour from "../components/BannerFour";
import FooterFour from "../components/FooterFour";
import NavbarThree from "../components/NavbarThree";

import AboutAreaFive from "../components/AboutAreaFive";
import AboutAreaSix from "../components/AboutAreaSix";
import BlogAreaFive from "../components/BlogAreaFive";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";
import TestimonialFive from "../components/TestimonialFive";
import WorkProcessFour from "../components/WorkProcessFour";



const HomeFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Banner Four */}
      <BannerFour />
{/* About Area Five */}
<AboutAreaFive />

{/* Service Area Five */}
<ServiceAreaFive />



{/* About Area Six */}
<AboutAreaSix />

{/* Team Area Three */}
<TeamAreaThree />

{/* Work Process Four */}
<WorkProcessFour />

{/* Footer Four */}
<FooterFour />
    </>
  );
};

export default HomeFour;
