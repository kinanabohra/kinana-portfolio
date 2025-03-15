import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/banner/Banner.jsx";
import About from "./components/about/About.jsx";
import Features from "./components/features/Features.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-bodyColor text-lightText px-1 ">
      <CustomCursor />
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <Banner />
        <About/>
        <Features />
        <Projects />
        <Resume />
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
