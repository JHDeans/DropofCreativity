import React from "react";

import Photography from "../showcase/photo";
import DigArt from "../showcase/digArt";
import LogoArt from "../showcase/logoArt";

const Gallary = () => {
  return (
    <div className="gallary-container">
      <div className="photo-container">
        <Photography />
      </div>
      <div className="digArt-container">
        <DigArt />
      </div>

      <div className="logos-container">
        <LogoArt />
      </div>
    </div>
  );
};

export default Gallary;
