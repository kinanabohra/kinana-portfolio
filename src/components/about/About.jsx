import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaLinkedin, FaGithub } from "react-icons/fa";
import Title from "../layouts/Title";
import { aboutmeImg } from '../../assets';


const About = () => {
  return (
    <section id="about" className="w-full py-16 text-white">
      <div className="text-center mb-12">
        <Title title="About Me" des="A Passionate Developer Who Loves to Code" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6">
        
        <div className="relative w-[80%] md:w-[40%]">
          <div className="relative rounded-full overflow-hidden shadow-xl hover:scale-105 transition duration-300">
            <img src={aboutmeImg} alt="Kinana Bohra" className="rounded-full w-full h-auto" />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-[#1e293b] p-3 rounded-full shadow-md">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kinanabohra" },
              { icon: <FaGithub />, link: "https://github.com/kinanabohra" },
              
            ].map((item, index) => (
              <a 
                key={index}
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#334155] hover:bg-designColor hover:bg-opacity-50 rounded-full text-white text-2xl transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-designColor mb-6">
            Who Am I?
          </h2>
          <p className="text-lightText text-lg leading-relaxed mb-6 text-justify">
            I am a B.Tech CS (Data Science) student and a MERN stack developer with expertise in web development, UI/UX, and data science. Passionate about problem-solving, clean code, and innovation.
          </p>

          <ul className="text-lg space-y-3 border-l-4 border-designColor pl-6">
            <li className="flex items-center gap-3">
              <FaGraduationCap className="text-designColor text-xl" />
              <strong>Degree:</strong> B.Tech
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-designColor text-xl" />
              <strong>Location:</strong> Jaipur, Rajasthan
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-designColor text-xl" />
              <strong>Email:</strong> kinanabohra@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-designColor text-xl" />
              <strong>Phone:</strong> +91 8529482153
            </li>
            <li className="flex items-center gap-3">
              <FaBriefcase className="text-designColor text-xl" />
              <strong>Freelance:</strong> Available
            </li>
          </ul>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/Kinana Bohra (Resume).pdf"
              download="Kinana Bohra (Resume).pdf"
              className="bg-designColor text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 hover:bg-opacity-80 shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
