import React from "react";
import NavLinks from "../navigation/navlinks";

import Salute from "../../../static/assets/images/ryansalute.jpg";

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <NavLinks />
      <div className="hero-section" />

      <div className="content-box">
        <img scr={Salute} className="ryan-salute" alt="Salute" />
      </div>
    </div>
  );
};

export default Home;
