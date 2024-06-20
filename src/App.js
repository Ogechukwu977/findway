import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CustomNavbar } from "./Component/navbar";
import { HeroSection } from "./hero";
import { WhyFindWay } from "./whyfindway";
import { Features } from "./Features";
import { CustomFooter } from "./Component/Footer";
import { Home } from "./Menu/home";
import { Blog } from "./Menu/blog";
import { About } from "./Menu/about";
import { ContactUs } from "./Menu/contact";
import { Signup } from "./Menu/signup";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <HeroSection />
      <WhyFindWay />
      <Features />
      <CustomFooter />
    </div>
  );
}

export default App;
