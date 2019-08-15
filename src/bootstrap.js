import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
import Home from "./components/pages/home";
import Gallary from "./components/pages/gallary";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/grid" component={Gallary} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
