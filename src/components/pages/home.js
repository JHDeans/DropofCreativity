import React from "react";
import NavLinks from "../navigation/navlinks";

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className="hero-section">
        <NavLinks />
      </div>
      <div className="content-box">
        <h1>Content goes here</h1>
      </div>
    </div>
  );
};

export default Home;
