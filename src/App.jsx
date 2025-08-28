import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import CTA from "./components/CTA";
import { scroller } from "react-scroll";

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

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on home page and there's a hash in the URL
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # from hash
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 300,
          delay: 0,
          smooth: true,
          offset: -70
        });
      }, 100);
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <section className="max-container">
          <Navbar />
          <ScrollHandler />
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
