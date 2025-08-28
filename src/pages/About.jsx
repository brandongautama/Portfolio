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
              I'm a Software Engineer at Amazon based in the San Francisco Bay Area, architecting highly scalable distributed systems using Java and AWS cloud infrastructure. I hold a Master's in Computer Science from UC San Diego and specialize in backend system design and cloud-native architectures that deliver high performance, reliability, and scale. I'm passionate about technical leadership and building systems that create meaningful impact through scalable, efficient engineering solutions.
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
    </section>
  );
};

export default About;
