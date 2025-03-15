import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 bg-[#33ccff] rounded-full pointer-events-none z-50"
        animate={{ x: position.x - 6, y: position.y - 6 }}
        transition={{ type: "spring", stiffness: 600, damping: 18 }}
      />
      
      <motion.div
        className="fixed w-5 h-5 bg-[#33ccff] bg-opacity-30 rounded-full pointer-events-none 
                   shadow-[0_0_10px_6px_rgba(51,204,255,0.4)] z-40"
        animate={{ x: position.x - 12, y: position.y - 12, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 450, damping: 12 }}
      />
    </>
  );
};

export default CustomCursor;
