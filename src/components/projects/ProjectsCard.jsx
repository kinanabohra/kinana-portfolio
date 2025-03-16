import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProjectsCard = ({ title, des, img, tag, github, live }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState("");

  const showPopup = (message) => {
    setPopupText(message);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000); // Hide after 3s
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl py-5 px-5 md:py-7 md:px-7 rounded-xl shadow-shadowOne 
      bg-gradient-to-r from-bodyColor via-[#131922] to-[#1a202c] group hover:bg-gradient-to-bl hover:from-[#131922] 
      hover:via-[#1a202c] hover:to-bodyColor transition-all duration-500 mx-auto"
    >
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <motion.img
          className="w-auto h-auto max-w-full object-contain rounded-xl group-hover:scale-110 duration-300 cursor-pointer"
          src={img}
          alt="Project Image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-3">
        <div>
          <h3 className="text-xl md:text-2xl font-titleFont font-bold text-lightText">{title}</h3>
          {tag && <p className="inline px-2 py-1 rounded-md bg-gray-800 text-sm text-gray-400">{tag}</p>}
        </div>

        <p className="text-lightText text-sm md:text-base">{des}</p>

        <div className="flex gap-2 mt-3">
          {github ? (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black/70 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <BsGithub />
            </motion.a>
          ) : (
            <button
              className="text-lg w-10 h-10 rounded-full bg-black/70 inline-flex justify-center items-center text-gray-500 cursor-not-allowed"
              onClick={() => showPopup("GitHub link is not available")}
            >
              <BsGithub />
            </button>
          )}

          {live ? (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black/70 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <FaGlobe />
            </motion.a>
          ) : (
            <button
              className="text-lg w-10 h-10 rounded-full bg-black/70 inline-flex justify-center items-center text-gray-500 cursor-not-allowed"
              onClick={() => showPopup("Live demo is not available")}
            >
              <FaGlobe />
            </button>
          )}
        </div>
      </div>

      {popupVisible && (
        <div className="fixed bottom-4 right-4 bg-gray-700 text-white px-4 sm:px-6 py-3 rounded-lg shadow-lg text-sm sm:text-base flex items-center space-x-2 animate-slide-up">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{popupText}</span>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsCard;
