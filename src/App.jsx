import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import CTA from "./components/CTA";
import { scroller } from "react-scroll";

import { About, Projects, Experience, Skills, TaxWise, Writing, NotFound } from "./pages";
import Navbar from "./components/Navbar";
import { work_experience, education } from "./constants";

const HomePage = () => (
  <div className="mx-auto max-w-[720px]">
    <About />
    <Experience id="work_experience" label="Experience" timeline={work_experience} highlightResults />
    <Writing />
    <Projects />
    <Skills />
    <Experience id="education" label="Education" timeline={education} stacked />
    <CTA />
  </div>
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
          duration: 200,
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
    <Router>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-canvas focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="max-container">
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TaxWise" element={<TaxWise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
