const About = () => {
  return (
    <section id="#about">
      {/* Introduction */}
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Brandon
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in San Francisco Bay Area, specializing in
          highly scalable cloud services.
        </p>
      </div>
    </section>
  );
};

export default About;
