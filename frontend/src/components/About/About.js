import React from "react";

import freelancer from "../../images/career.png";
import programming from "../../images/programming.png";
import lightbulb from "../../images/lightbulb.png";
import heart from "../../images/heart.png";
import portfolio from "../../images/portfolio.jpg";

const About = (props) => {
  return (
    <section className="dark:bg-gray-800" id="about">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-wide lg:text-5xl">
              Who is this guy? 🤔
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2">
                <img className="mx-2" src={freelancer} alt="freelancer" />

                <span className="mx-2">Currently working as a freelancer with a passion for building digital services/stuff.</span>
              </p>

              <p className="flex items-center -mx-2">
                <img className="mx-2" src={programming} alt="programming" />

                <span className="mx-2">
                  Specializing in full stack development.Skills in Javascript, Python, HTML, CSS.Frameworks/Libraries Django, React.
                </span>
              </p>

              <p className="flex items-center -mx-2">
                <img className="mx-2" src={lightbulb} alt="lightbulb" />

                <span className="mx-2">
                  Constantly improving in web development field.One of my motto "Constant and never ending improvement".
                </span>
              </p>

              <p className="flex items-center -mx-2">
                <img className="mx-2" src={heart} alt="heart" />

                <span className="mx-2">In my free time I love doing sports, reading, gaming.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="zoom object-cover w-full h-full mx-auto rounded-lg lg:max-w-2xl"
            src={portfolio}
            alt="portfolioimage"
          />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
