import React from "react";

const Hero = () => {
  return (
    <div
      className="w-auto"
      style={{
        backgroundImage: `url("https://miro.medium.com/max/5040/1*ee9Ji2ToUxeYfj3YUQ1xsA.jpeg")`,
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <section className="w-full h-screen">
        <div className="container w-full h-full px-8 sm:px-0 mx-auto flex flex-col justify-center">
          <h1 className="line anim-typewriter herotxt text-3xl font-bold mb-2">
            Hey, I'm Paulius!
          </h1>
          <p className="text-white break-words mt-2 lg:w-1/2">
            Web developer from Kaunas, Lithuania. Creating web applications as
            my hobby and full time job.I create custom websites, complex systems
            to help businesses do better online.Worry not, I will make the
            process as easy and quick as possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
