import React from "react";
import Navbar from "../Navigation/Navbar";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <section className="w-full h-3/4 bg-gray-800">
        <div className="container w-full h-full px-8 sm:px-0 mx-auto flex flex-col justify-center">
          <h1 className="text-6xl text-gray-100 font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-200 mt-4">
            Integer viverra eget augue et hendrerit. Mauris consectetur, mi et
            molestie vestibulum, nisi tortor pellentesque libero, nec semper
            nibh mauris eu neque.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
