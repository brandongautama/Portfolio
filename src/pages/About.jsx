import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { myphoto2 } from "../assets/images";
import { linkedin, github, gmail } from "../assets/icons";

const About = () => {
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  return (
    <section id="#about">
      {/* Introduction */}
      <div className="md:grid md:grid-cols-5 md:grid-rows-none  justify-around items-start">
        <div className="grid items-start col-span-3">
          <h1 className="head-text ">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Brandon
            </span>
          </h1>
          <h2 className="subhead-text ">Cloud Software Engineer</h2>
          <div className="mt-5 gap-3 text-slate-500">
            <p>
              I'm a backend software engineer based in San Francisco Bay Area.
              My experience has been mainly on building highly scalable
              microservices using Java and AWS infrastructure ecosystems.
            </p>
          </div>
          <div className="flex justify-start items-center py-6">
            <a href="https://www.linkedin.com/in/brandongautama">
              <img src={linkedin} className="w-9 h-9 mx-2 ml-0" />
            </a>
            <a href="https://github.com/brandongautama">
              <img src={github} className="w-9 h-9 mx-2" />
            </a>
            <CopyToClipboard
              text="brandongautama15@gmail.com"
              onCopy={onCopyText}
            >
              <img src={gmail} className="w-9 h-9 mx-2 cursor-pointer" />
            </CopyToClipboard>
            {copyStatus ? (
              <span className="ml-1 font-poppins text-blue-500">
                Email copied!
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="sm:flex justify-center md:col-span-2">
          <img
            src={myphoto2}
            className="object-contain float-center h-56 md:h-full m-auto"
            alt="Profile Picture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
