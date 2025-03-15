import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  development: [
    { name: "HTML & CSS", level: "95%" },
    { name: "JavaScript", level: "90%" },
    { name: "React.js", level: "85%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Express.js", level: "80%" },
    { name: "MongoDB", level: "85%" },
  ],
  programming: [
    { name: "C & C++", level: "90%" },
    { name: "Python", level: "75%" },
    { name: "Java", level: "70%" },
    { name: "DSA", level: "80%" },
    { name: "Machine Learning", level: "75%" },
    { name: "SQL", level: "75%" },
  ]
};


const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -15 }} 
      animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" }}} 
      className='w-full flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 px-4 sm:px-8 md:px-12 lg:px-16'
      
    >
      <div className='w-full lg:w-1/2'>
        <div className='py-8 sm:py-12  font-titleFont flex flex-col'>
          <h2 className='text-3xl font-bold'>Development Skills</h2>
          <p className="text-sm text-gray-400 tracking-wide">Technical Expertise</p>
        </div>
        <div className='w-full flex flex-col gap-5'>
          {skills.development.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      <div className='w-full lg:w-1/2'>
        <div className='py-8 sm:py-12  font-titleFont flex flex-col'>
          <h2 className='text-3xl font-bold'>Programming Proficiency</h2>
          <p className="text-sm text-gray-400 tracking-wide">Core Skills</p>
        </div>
        <div className='w-full flex flex-col gap-5'>
          {skills.programming.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillBar = ({ name, level }) => {
  return (
    <div className='overflow-x-hidden'>
      <p className='text-sm font-medium'>{name}</p>
      <div className='w-full h-2 bg-gray-700 rounded-md mt-2 relative'>
        <motion.div 
          initial={{ width: "0%" }} 
          animate={{ width: level }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className='h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
        >
          <span className='absolute -top-6 right-0 text-xs font-semibold'>{level}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
