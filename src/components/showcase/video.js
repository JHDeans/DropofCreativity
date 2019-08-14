import React from "react";

import "../../style/video.scss";

const Video = () => {
  return (
    <div className="videos">
      <iframe
        width="1080"
        height="720"
        src="https://www.youtube-nocookie.com/embed/qd6do5noOGc"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
