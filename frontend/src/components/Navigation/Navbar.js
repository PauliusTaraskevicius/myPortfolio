import React from "react";

import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-screen mt-1 lg:px-40 sm:px-10 px-2 sm:flex justify-between items-center border-b-1 border-gray-600 z-40">
        <div className="flex px-4 justify-between sm:py-0 pb-1">
          <img
            src="https://ravencolevol.github.io/react-portfolio/static/b7742c4d36a8aad0eae9e469b8af55d5/e8676/logo.png"
            alt="Logo"
            className="h-12 cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          />

          <button
            className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
            id="navIcon"
          >
            &#9776;
          </button>
        </div>

        <ul className="hidden sm:flex cursor-pointer" id="navContent">
          <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-blue-600 duration-300 sm:hover:bg-transparent">
            <Link to="/" className="link" onClick={() => scroll.scrollToTop()}>
              Home
            </Link>
          </li>
          <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-blue-600 duration-300 sm:hover:bg-transparent">
            <Link to="about" className="link" smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-blue-600 duration-300 sm:hover:bg-transparent">
            <Link  to="work" className="link" smooth={true} duration={1000}>
              Work
            </Link>
          </li>
          <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-blue-600 duration-300 sm:hover:bg-transparent">
            <Link to="contact" className="link" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
          <li className="text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-blue-600 duration-300 sm:hover:bg-transparent">
            <a className="link" href="/">
              Source
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
