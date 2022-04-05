import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url("https://images.wallpaperscraft.com/image/single/laptop_programming_code_205768_1920x1080.jpg")`,
        position: "relative",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        width: "100%",
        height: "100%",
        "background-size": "100% 100%",
      }}
    >
      <section className="w-full h-screen">
        <div className="container w-full h-full px-8 sm:px-0 mx-auto flex flex-col justify-center">
          <h1 className="herotxt text-6xl font-bold mb-2">
            Lorem ipsum dolor sit amet
          </h1>
          {/* TERMINAL */}
          <div className="w-full">
            <div
              className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
                      bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
            >
              <div className="top mb-2 flex">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mt-4 flex">
                <span className="terminaltxt text-green-400">
                  Paulius_Taraskevicius:~$
                </span>
                <p className="terminaltxt flex-1 typing items-center pl-2 text-green-400">
                  console.log('Full stack developer')
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </section>
    </div>
  );
};

export default Hero;
