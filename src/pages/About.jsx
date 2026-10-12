import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { myphoto3 } from "../assets/images";
import { linkedin, github, gmail } from "../assets/icons";
import { highlights } from "../constants";

const iconLinkClass =
  "rounded-md transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

const About = () => {
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  return (
    <section id="#about">
      {/* Introduction */}
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-10 items-center">
        <div className="md:col-span-3">
          <h1 className="head-text tracking-tight text-balance">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Brandon
            </span>
          </h1>
          <h2 className="subhead-text tracking-tight text-balance">
            Senior Software Engineer at Roblox
          </h2>
          <p className="mt-2 font-poppins font-medium text-sm uppercase tracking-wide text-slate-500">
            Backend · Distributed Systems
          </p>
          <p className="mt-5 max-w-prose leading-relaxed text-[17px] text-slate-500">
            Based in the San Francisco Bay Area, I spent six years at Amazon before joining Roblox. At Alexa, I built the cloud service powering content on Echo Show devices worldwide, and at AWS I built a multi-tenant data streaming platform and workflow engines for enterprise customers across automotive and genomics. I design and build high-throughput distributed systems, including fault-tolerant retry storm protection that absorbed a 50x traffic surge during a major AWS outage.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://www.linkedin.com/in/brandongautama"
              aria-label="LinkedIn"
              className={iconLinkClass}
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/brandongautama"
              aria-label="GitHub"
              className={iconLinkClass}
            >
              <img src={github} alt="GitHub" className="w-8 h-8" />
            </a>
            <CopyToClipboard
              text="brandongautama15@gmail.com"
              onCopy={onCopyText}
            >
              <button
                type="button"
                aria-label="Copy email address"
                className={iconLinkClass}
              >
                <img src={gmail} alt="Email" className="w-8 h-8" />
              </button>
            </CopyToClipboard>
            {copyStatus && (
              <span className="font-poppins italic text-blue-400">
                Email copied
              </span>
            )}
          </div>
        </div>
        <div className="order-first md:order-last md:col-span-2 flex justify-center mb-8 md:mb-0">
          <img
            src={myphoto3}
            className="object-cover h-40 w-40 md:h-72 md:w-72 rounded-3xl ring-1 ring-slate-200 shadow-lg shadow-slate-300/50"
            alt="Brandon Gautama"
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.metric}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="font-poppins font-bold tracking-tight tabular-nums text-3xl text-slate-900">
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
