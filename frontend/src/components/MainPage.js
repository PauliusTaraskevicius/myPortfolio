import React from "react";

import Hero from "./Hero/Hero";
import Navbar from "./Navigation/Navbar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";
import SwitchBox from "./Switcher/SwitchBox";
import Skills from "./Skills/Skills";

const MainPage = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Card />
      <SwitchBox />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
