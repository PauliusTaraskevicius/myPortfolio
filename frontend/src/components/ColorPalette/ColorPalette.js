import React from "react";
import { useState } from "react";

const moonSvg = (
  <svg
    xmlnsXlink="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const sunSvg = (
  <svg
    xmlnsXlink="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    backgroundColor="black"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const ColorPalette = (props) => {
  const [svg, setSvg] = useState(sunSvg);

  const svgHandler = () => {
    if (svg === sunSvg) {
      setSvg(moonSvg);
    } else {
      setSvg(sunSvg);
    }
  };

  const multipleEventHandler = () => {
    props.toggleTheme();
    svgHandler();
  };

  return (
    <div className="fixed right-0 mr-4 z-10 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
      <div className="flex flex-wrap">
        <button
          className="btnColorOnChange zoom text-white font-bold py-2 px-4 rounded-full"
          onClick={multipleEventHandler}
        >
          {svg}
        </button>
      </div>
    </div>
  );
};

export default ColorPalette;
