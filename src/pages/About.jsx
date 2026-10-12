import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { myphoto3 } from "../assets/images";
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
          <h2 className="subhead-text ">Senior Software Engineer at Roblox</h2>
          <p className="mt-2 font-poppins font-medium text-slate-700">
            Backend · Distributed Systems
          </p>
          <div className="mt-5 gap-3 text-slate-500">
            <p>
              I'm a Senior Software Engineer at Roblox based in the San Francisco Bay Area. Before that I spent six years at Amazon. At Alexa, I built the cloud service powering content on Echo Show devices worldwide, and at AWS I built a multi-tenant data streaming platform and workflow engines for enterprise customers across automotive and genomics. I design and build high-throughput distributed systems, including fault-tolerant retry storm protection that absorbed a 50x traffic surge during a major AWS outage.
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
            src={myphoto3}
            className="object-cover float-center h-56 w-56 md:h-80 md:w-80 m-auto rounded-2xl shadow-md"
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
            <span className="mt-2 font-poppins font-semibold text-slate-800">
              {highlight.title}
            </span>
            <span className="mt-1 text-sm text-slate-500">
              {highlight.detail}
            </span>
            <span className="mt-auto pt-3 text-xs font-medium text-slate-400">
              {highlight.where}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
