import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';
import AchievementCard from './AchievementCard';

const Education = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -15 }} 
      animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
      className='w-full flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 px-4 sm:px-8 md:px-12 lg:px-16'
    >
      <div className='w-full lg:w-1/2'>
        <div className='py-8 sm:py-12 font-titleFont flex flex-col'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Education Quality</h2>
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide">2008-Present</p>
        </div>
        <div className='pt-4 w-full border-l-[4px] sm:border-l-[6px] border-black border-opacity-30 flex flex-col gap-6 sm:gap-8'>
          <EducationCard 
            title="Secondary School Education"
            subTitle="Mohammadiya Secondary School"
            durationYear="2008-2020"
            address="Chhoti Sadri, Rajasthan"
          />
          <EducationCard 
            title="Higher Secondary School Education"
            subTitle="Carmel Convent Senior Secondary School"
            durationYear="2020-2022"
            address="Neemuch, Madhya Pradesh"
          />
          <EducationCard 
            title="Bachelor of Technology (B.Tech)"
            subTitle="Poornima Institute of Engineering and Technology"
            address="Jaipur, Rajasthan"
            durationYear="2022-Present"
          />
        </div>
      </div>

      <div className='w-full lg:w-1/2'>
        <div className='py-8 sm:py-12 font-titleFont flex flex-col'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Achievements & Recognitions</h2>
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide">Hackathons | Competitions | Certifications</p>
        </div>
        <div className='pt-4 w-full border-l-[4px] sm:border-l-[6px] border-black border-opacity-30 flex flex-col gap-6 sm:gap-8'>
          <AchievementCard 
            title="Hackathons & Exhibitions"
            details={[
              { Name: "IT Rajasthan Hackathon", year: "2023"},
              { Name: "HACK - A - MANIA", year: "2023", position: "2nd" },
              { Name: "Ideathon", year: "2023",position: "1st"},
              { Name: "Design Code Showdown", year: "2024", position: "1st" },
              { Name: "AITCE IDEA LAB - TECH FEST", year: "2025"},
            ]}
          />
          <AchievementCard
            title="Certification"
            details={[
              { Name: "Operating System Fundamentals", year: "2024" },
              { Name: "Data Base Management System", year: "2024" },
              { Name: "Problem Solving In C", year: "2024" }
            ]}
            
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
