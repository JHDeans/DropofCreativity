import React from "react";

import Clouds from "../../../static/images/Scenery/clouds-dark.jpg";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="left-side" />
      <div className="right-side">
        <div className="form">
          <div className="login-header">
            <h1>LOGIN HERE</h1>
          </div>
          <form className="login-form">
            <input type="text" placeholder="USERNAME" />
            <input type="text" placeholder="PASSWORD" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
