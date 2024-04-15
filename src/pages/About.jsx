import { myphoto } from "../assets/images";

const About = () => {
  return (
    <section id="#about">
      {/* Introduction */}
      <div className="md:grid md:grid-cols-5 md:grid-rows-none  justify-around items-center">
        <div className="flex flex-col items-start col-span-3">
          <h1 className="head-text ">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Brandon
            </span>
          </h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I'm a Software Engineer based in San Francisco Bay Area,
              specializing in highly scalable cloud services.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <img
            src={myphoto}
            className="object-contain float-center"
            alt="Profile Picture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
