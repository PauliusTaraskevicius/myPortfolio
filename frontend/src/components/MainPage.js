import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navigation/Navbar";
import About from "./About/About";
import SwitchBox from "./Switcher/SwitchBox";
import WorksSlider from "./WorksSlider/WorksSlider";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <SwitchBox />
      <Hero />
      <About />
      <WorksSlider />
    </div>
  );
};

export default MainPage;
