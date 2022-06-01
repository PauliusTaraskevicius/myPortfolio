import React from "react";

import js from "../../images/skills/js.png";

const Skills = () => {
  return (
    <section id="skills" className="bg-transparent dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl dark:text-white">
          Skills 💪
        </h1>

        <div className="grid grid-cols-1 gap-2 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="move-top object-cover w-28 h-28 "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="python"
            />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img className="object-contain w-28 h-28" src={js} alt="js" />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="object-cover w-28 h-28"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
              alt="html"
            />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="object-cover w-28 h-28"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              alt="css"
            />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="object-cover w-28 h-28 "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="tailwinds"
            />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="object-cover w-28 h-28 "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
            />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="object-cover w-28 h-28 "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="postgresql"
            />
          </div>

          <div className="move-top flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group rounded-xl">
            <img
              className="object-cover w-28 h-28 "
              src="https://img.icons8.com/color/144/000000/django.png"
              alt="django"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
