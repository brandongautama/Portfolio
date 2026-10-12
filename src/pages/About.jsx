import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { myphoto2 } from "../assets/images";
import { linkedin, github, gmail } from "../assets/icons";
import { highlights } from "../constants";

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
          <h2 className="subhead-text ">Senior Software Engineer</h2>
          <p className="mt-2 font-poppins font-medium text-slate-700">
            Backend and distributed systems · Roblox Marketplace · ex-Amazon
            (Alexa, AWS)
          </p>
          <div className="mt-5 gap-3 text-slate-500">
            <p>
              I'm a Senior Software Engineer at Roblox based in the San Francisco Bay Area, working on the backend of the Avatar Marketplace. Before that I spent six years at Amazon. At Alexa, I built the cloud service powering content on Echo Show devices worldwide, and at AWS I built data platforms and workflow engines for enterprise customers across genomics and automotive. Most of my work is distributed systems under heavy load, like the safe mode I built that kept Echo Show content serving through a 50x retry storm during a major AWS outage. I work mostly in C#, Java and AWS.
            </p>
          </div>
          <div className="flex flex-wrap justify-left md:justify-start items-center w-full">
            <span className="flex w-fit justify-center items-center mt-4">
              <a href="https://www.linkedin.com/in/brandongautama">
                <img src={linkedin} className="w-8 h-8 mx-2 ml-0" />
              </a>
              <a href="https://github.com/brandongautama">
                <img src={github} className="w-8 h-8 mx-2" />
              </a>
              <CopyToClipboard
                text="brandongautama15@gmail.com"
                onCopy={onCopyText}
              >
                <img src={gmail} className="w-8 h-8 mx-2 cursor-pointer" />
              </CopyToClipboard>
              {copyStatus ? (
                <span className="ml-1 font-poppins italic text-blue-400">
                  Email copied!
                </span>
              ) : (
                ""
              )}
            </span>
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

      {/* Highlights */}
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.metric}
            className="bg-white rounded-xl border-2 p-4 flex flex-col"
          >
            <span className="blue-gradient_text font-poppins font-semibold text-3xl">
              {highlight.metric}
            </span>
            <span className="mt-2 text-sm text-slate-500">
              {highlight.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
