import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navigation/Navbar";
import About from "./About/About";
import SwitchBox from "./Switcher/SwitchBox";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";

const MainPage = () => {

  return (
    <div>
      <Navbar />
      <SwitchBox />
      <Hero />
      <About />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
