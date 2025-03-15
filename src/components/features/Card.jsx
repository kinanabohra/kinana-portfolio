import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Card = ({ title, des, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.05 }}
      className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 md:p-8 rounded-xl shadow-shadowOne bg-gradient-to-r from-bodyColor via-[#131922] to-[#1a202c] group hover:bg-gradient-to-bl hover:from-[#131922] hover:via-[#1a202c] hover:to-bodyColor transition-all duration-500 mx-auto"
    >
      <div className="flex flex-col items-start gap-6">
        <motion.span 
          className="text-5xl text-designColor" 
          initial={{ rotate: -10 }}
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {icon}
        </motion.span>
        <h2 className="text-xl md:text-2xl font-titleFont font-bold text-lightText">{title}</h2>
        <p className="text-lightText text-sm md:text-base">{des}</p>
        <motion.button
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 text-lg text-white hover:text-designColor transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          Learn More <HiArrowRight />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;