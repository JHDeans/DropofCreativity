import React from "react";

import Waterfall from "../../../static/images/Scenery/Elakala-Waterfalls.jpg";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="right-side">
        <img src={Waterfall} />
      </div>
      <div className="left-side">
        <h1>Info</h1>
        <h1>More info</h1>
      </div>
    </div>
  );
};

export default Contact;
