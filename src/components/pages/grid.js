import React from "react";

import Img from "../../../static/images/Other/RainbowCodeCircle.jpg";

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-wrapper">
        <div className="item1">
          <div className="item-wrapper">
            <img src={Img} />
          </div>
        </div>
        <div className="item2">
          <div className="item-wrapper">
            <img src={Img} />
          </div>
        </div>
        <div className="item2">
          <div className="item-wrapper">
            <img src={Img} />
          </div>
        </div>
        <div className="item2">
          <div className="item-wrapper">
            <img src={Img} />
          </div>
        </div>
        <div className="item2">
          <div className="item-wrapper">
            <img src={Img} />
          </div>
        </div>
        <div className="item2">
          <div className="item-wrapper">
            <img src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
