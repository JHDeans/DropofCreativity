import React from "react";

import DigArt from "../showcase/digArt";
import Photography from "../showcase/photo";
import LogoArt from "../showcase/logoArt";
import Video from "../showcase/video";

const Splash = () => {
  return (
    <div className="splash-page-container">
      <div className="splash-digArt-container">
        <DigArt />
      </div>
      <div className="splash-photo-container">
        <Photography />
      </div>
      <div className="splash-logos-container">
        <LogoArt />
      </div>
      <div className="splash-video-container">
        <Video />
      </div>
    </div>
  );
};
export default Splash;
