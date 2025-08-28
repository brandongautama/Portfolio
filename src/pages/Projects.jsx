// import { Link } from "react-router-dom";

import CTA from "../components/CTA";
import { productionProjects, technicalProjects } from "../constants";
import { arrow } from "../assets/icons";
import { Fragment } from "react";

const Projects = () => {
  const renderProjectCard = (project) => (
    <div
      className="lg:w-[400px] w-full bg-white border-2 p-4 pt-8 rounded-xl glassmorphism logo"
      key={project.name}
    >
      <div className="block-container w-12 h-12">
        <div className={`btn-back rounded-xl ${project.theme}`} />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={project.iconUrl}
            alt="Project Icon"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <h4 className="text-2xl font-poppins font-semibold">
          {project.name}
        </h4>
        <p className="mt-2 text-slate-500">{project.description}</p>
        <ul className="flex mt-2 font-poppins">
          {project.skills?.map((skill, id) => {
            return (
              <li
                key={id}
                className="border-2 rounded-3xl border-slate-500 text-slate-500 py-0.5 px-2 mx-0.5 text-xs"
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="mt-5 flex items-center gap-2 font-poppins">
          <a
            href={project.link}
            className="flex flex-row items-center font-semibold text-blue-600"
          >
            {project.link.startsWith('http') ? 'Source Code' : 'Website'}
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 object-contain ml-1"
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="#projects">
      {/* Introduction */}
      <div className="py-10">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p></p>
        </div>

        {/* Production Applications */}
        <div className="mt-12">
          <h2 className="text-3xl font-poppins font-semibold text-slate-800 mb-6">
            Production Applications
          </h2>
          <div className="flex flex-wrap gap-16 gap-y-8">
            {productionProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* Technical Implementations */}
        <div className="mt-16">
          <h2 className="text-3xl font-poppins font-semibold text-slate-800 mb-6">
            Technical Implementations
          </h2>
          <div className="flex flex-wrap gap-16 gap-y-8">
            {technicalProjects.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
