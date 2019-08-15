import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="links-wrapper">
        <div className="link-wrapper">
          <Link exact to="/">
            HOME
          </Link>
        </div>
        <div className="link-wrapper">
          <Link exact to="/">
            GALLARY
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

export default Navbar;
