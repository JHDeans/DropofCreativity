import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

import Logo from "../../../static/assets/images/logos/Logo.png";

import Splash from "../pages/splash";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="top-navbar">
          <div className="h1-wrapper">
            <h1>DROPOFCREATIVITY</h1>
          </div>
        </div>
        <div className="bottom-navbar">
          <div className="right-side">
            <div className="logo-wrapper">
              <img src={Logo} alt="DROPOFCREATIVITY Logo" />
            </div>
          </div>

          {/* <div className="left-side">
              <div className="links-wrapper">
                <div className="link-wrapper">
                  <Link exact to="/">
                    HOMEPAGE
                  </Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/form">FORM</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/contact">CONTACT</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/auth">LOGIN</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Splash} />
          {/*<Route path="/form" component={CardForm} />
          <Route path="/contact" component={Contact} />
          <Route path="/auth" component={Auth} />
        </Switch>*/}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
