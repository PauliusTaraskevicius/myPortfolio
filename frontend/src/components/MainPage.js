import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navigation/Navbar";
import About from "./About/About";
import SwitchBox from "./Switcher/SwitchBox";
import WorksSlider from "./WorksSlider/WorksSlider";
import Contact from "./Contact/Contact";


const MainPage = () => {
  return (
    <div>
      <Navbar />
      <SwitchBox />
      <Hero />
      <About />
      <WorksSlider />
      <Contact />
    </div>
  );
};

export default MainPage;
