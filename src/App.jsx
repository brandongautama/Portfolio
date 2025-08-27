import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CTA from "./components/CTA";

import { Home, About, Projects, Timeline, Skills, TaxWise } from "./pages";
import Navbar from "./components/Navbar";
import { routes } from "./routes";
import { work_experience, education } from "./constants";

const HomePage = () => (
  <>
    <About />
    <Skills />
    <Timeline id={"#work_experience"} timeline={work_experience} />
    <Timeline id={"#education"} timeline={education} />
    <Projects />
    <hr className="border-slate-200" />
    <CTA />
  </>
);

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <section className="max-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TaxWise" element={<TaxWise />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
};

export default App;
