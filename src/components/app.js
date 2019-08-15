import React, { Component } from "react";

import Home from "./pages/home";
import "../style/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}
