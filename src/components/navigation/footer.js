import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

import Splash from "../pages/splash";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="links-wrapper">
        <div className="link-wrapper">
          {/*<Link exact to="/">
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
          </div>*/}
        </div>
        <div className="copyright-wrapper">
          <h1>COPYRIGHT</h1>
        </div>
        {/*<Switch>
          <Route exact path="/" component={Splash} />
          {/*<Route path="/form" component={CardForm} />
          <Route path="/contact" component={Contact} />
          <Route path="/auth" component={Auth} />
        </Switch>*/}
      </div>
    </div>
  );
};
export default Footer;
