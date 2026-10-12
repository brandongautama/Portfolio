import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { linkedin, gmail, github } from "../assets/icons";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        <span className="head-text blue-gradient_text font-semibold drop-shadow">
          Contact
        </span>
        <br className="" />
        <span>Feel free to reach out.</span>
      </p>
      {/* <Link to="/contact" className="button"></Link> */}
      <div className="flex flex-col mr-8 gap-4">
        <a
          href="mailto:brandongautama15@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row text-md font-poppins items-center text-blue-500 hover:underline"
        >
          <img src={gmail} alt="gmail" className="w-8 h-8 mx-2 ml-0 mr-4" />{" "}
          brandongautama15@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/brandongautama"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row text-md font-poppins items-center text-blue-500 hover:underline"
        >
          <img src={linkedin} alt="linkedin" className="w-8 h-8 mx-2 ml-0 mr-4" />{" "}
          linkedin.com/in/brandongautama
        </a>
        <a
          href="https://github.com/brandongautama"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row text-md font-poppins items-center text-blue-500 hover:underline"
        >
          <img src={github} alt="github" className="w-8 h-8 mx-2 ml-0 mr-4" />{" "}
          github.com/brandongautama
        </a>
      </div>
    </section>
  );
};

export default CTA;
