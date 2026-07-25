import React, { Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Works from "./Components/Works/Works";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Background from "./Components/Background/Background";
import BlurBlob from "./BlurBlob";

const Portfolio = () => {
  return (
    <div className="bg-[#050414]">
      <div></div>
      <Background />

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-[#FF8C1A] bg-clip-text text-transparent animate-pulse">
                Loading...
              </h2>
            </div>
          }
        >
          <Skills />
          <Experience />
          <Education />
          <Works />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Portfolio;
