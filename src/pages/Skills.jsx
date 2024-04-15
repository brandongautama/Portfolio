import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="#skills">
      <div className="py-10 flex flex-col mb-10">
        <h3 className="subhead-text">Skills</h3>
        <div className="mt-8 flex flex-wrap gap-12 justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-3 mt-3">
              <div className="block-container w-16 h-16">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <div className="py-20">
                  <h3 className="font-poppins text-center text-slate-500">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
