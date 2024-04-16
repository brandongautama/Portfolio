import { myphoto2 } from "../assets/images";

const About = () => {
  return (
    <section id="#about">
      {/* Introduction */}
      <div className="md:grid md:grid-cols-5 md:grid-rows-none  justify-around items-start">
        <div className="flex flex-col items-start col-span-3">
          <h1 className="head-text ">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Brandon
            </span>
          </h1>
          <h2 className="subhead-text ">Cloud Software Engineer</h2>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I'm a backend software engineer based in San Francisco Bay Area.
              My experience has been mainly on building highly scalable
              microservices using Java and AWS infrastructure ecosystems.
            </p>
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
