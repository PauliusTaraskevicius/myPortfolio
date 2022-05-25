import React from "react";

import MailchimpSubscribeContainer from "../MailChimp/MailChimp";

const Footer = () => {
  return (
    <footer className="flex justify-center px-4">
      <div className="container py-6">
        <h3 className="text-center text-lg font-bold lg:text-2xl">
          Subscribe and never miss out on new updates, projects and more! 😎
        </h3>

        <MailchimpSubscribeContainer />

        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <span className="text-md font-semibold">©Paulius Taraškevičius.All Rights Reserved</span>
          </div>
          <div className="flex mt-4 md:m-0 z-10">
            <div className="-mx-4">
              <a href="https://www.facebook.com/paulius.taraskevicius/" className="zoom inline-block">
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="fb"
                />
              </a>
              <a href="/" className="zoom inline-block">
                <img
                  src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                  alt="inst"
                />
              </a>
              <a href="https://www.linkedin.com/in/paulius-tara%C5%A1kevi%C4%8Dius-916b83234/" className="zoom inline-block">
                <img
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                  alt="linked"
                />
              </a>
              <a href="https://github.com/PauliusTaraskevicius" className="zoom inline-block">
                <img
                  src="https://img.icons8.com/fluency/48/000000/github.png"
                  alt="git"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
