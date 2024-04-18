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
        <span>Feel free to reach out!</span>
      </p>
      {/* <Link to="/contact" className="button"></Link> */}
      <div className="flex flex-col mr-8 gap-4">
        <span className="flex flex-row text-md font-poppins items-center text-blue-500">
          <img src={gmail} className="w-8 h-8 mx-2 ml-0 mr-4" />{" "}
          brandongautama15@gmail.com
        </span>
        <span className="flex flex-row text-md font-poppins items-center text-blue-500">
          <img src={linkedin} className="w-8 h-8 mx-2 ml-0 mr-4" />{" "}
          linkedin.com/in/brandongautama
        </span>
        <span className="flex flex-row text-md font-poppins items-center text-blue-500">
          <img src={github} className="w-8 h-8 mx-2 ml-0 mr-4" />{" "}
          github.com/brandongautama
        </span>
      </div>
    </section>
  );
};

export default CTA;
