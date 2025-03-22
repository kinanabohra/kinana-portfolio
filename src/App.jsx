import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/banner/Banner.jsx";
import About from "./components/about/About.jsx";
import Features from "./components/features/Features.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import CustomCursor from "./components/CustomCursor";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h2 className="mt-4 text-xl text-blue-400 font-semibold tracking-wide animate-pulse">
        Kinana Bohra
      </h2>
      <p className="text-gray-400 mt-2 animate-pulse">Loading...</p>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulating dynamic loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-bodyColor text-lightText px-1">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomCursor />
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
            <Banner />
            <About />
            <Features />
            <Projects />
            <Resume />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;