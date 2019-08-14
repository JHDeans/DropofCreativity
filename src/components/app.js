import React from "react";

import Navbar from "./navigation/navbar";
import Footer from "./navigation/footer";
import Splash from "./pages/splash";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Splash />
      <Footer />
    </div>
  );
};
export default App;
