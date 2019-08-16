import React from "react";
import { NavLink as Link } from "react-router-dom";
import Splash from "../../../static/assets/images/dropofcreativity-splash-page-color.png";

const NavLinks = () => {
  return (
    <div className="navbar-container">
      <img src={Splash} className="splash" />
      <div className="links-wrapper">
        <div className="link-wrapper">
          <Link exact to="/">
            HOME
          </Link>
        </div>
        <div className="link-wrapper">
          <Link exact to="/">
            GALLERY
          </Link>
        </div>
        <div className="link-wrapper">
          <Link exact to="/">
            ABOUT
          </Link>
        </div>
        <div className="link-wrapper">
          <Link exact to="/">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
