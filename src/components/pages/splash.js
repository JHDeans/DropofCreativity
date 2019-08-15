import React from "react";

import Image from "../../../static/assets/images/dropofcreativity-splash-page-color.png";
import Navbar from "../../components/navigation/navbar";

const Splash = () => {
  return (
    <div className="splash-page-container">
      <img className="splash-color" src={Image} />
      <div className="Nav">
        <Navbar />
      </div>
    </div>
  );
};
export default Splash;
