import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CTA from "./components/CTA";

import { Home, About, Projects, Timeline, Skills } from "./pages";
import Navbar from "./components/Navbar";
import { routes } from "./routes";
import { work_experience, education } from "./constants";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <section className="max-container">
        {/* <Router> */}
        <Navbar />
        <About />
        <Skills />
        <Timeline id={"#work_experience"} timeline={work_experience} />
        <Timeline id={"#education"} timeline={education} />
        <Projects />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        {/* </Router> */}
        <hr className="border-slate-200" />
        <CTA />
      </section>
    </main>
  );
};

export default App;
