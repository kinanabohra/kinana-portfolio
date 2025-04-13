import React from 'react';
import { motion } from 'framer-motion';
import ResearchCard from './ResearchCard';

const researchDetails = [
  {
    title: "From Pages to Reality: Revolutionizing Practical Learning in Libraries with AR-VR",
    conference: {
      name: "ICKSHI",
      year: "2024",
    },
    abstract: "Explores the integration of AR and VR in libraries to enhance hands-on learning experiences.",
    keywords: ["AR", "VR", "Libraries", "Practical Learning"],
  },
  {
    title: "The Integration of AI Tools in Student Life: Impacts on Academics and Professional Development",
    conference: {
      name: "ICSIS",
      year: "2024",
    },
    abstract: "Analyzes how AI tools influence students' academic performance and career readiness.",
    keywords: ["AI", "Education", "Student Development"],
  },
  {
    title: "From Text to Revolution: Unfolding Chat GPT's Impact on Library Services",
    conference: {
      name: "ASLIP Conclave",
      year: "2023",
    },
    publication: {
      name: "Recent Trends in Programming Language",
      year: "2023",
      link: "https://stmcomputers.stmjournals.com/index.php/RTPL/article/view/758",
    },
    abstract: "Examines the transformative role of ChatGPT in modernizing library services.",
    keywords: ["ChatGPT", "Library Services", "AI"],
  },
  {
    title: "Data Evolution: Harnessing the Power of Big Data Analytics to Drive Innovation",
    conference: {
      name: "ICUS",
      year: "2023",
    },
    publication: {
      name: "Journal of Research and Development",
      year: "2023",
      link: "#",
    },
    abstract: "Explores big data analytics' role in driving innovation across various fields.",
    keywords: ["Big Data", "Innovation", "Analytics"],
  },
];

const Research = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
      className="w-full px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="py-8 sm:py-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Research Papers</h2>
        <p className="text-sm text-gray-400 tracking-wide">Scholarly Contributions</p>
      </div>

      <div className="grid grid-cols-1 mdl:grid-cols-2 gap-6 md:gap-8">
        {researchDetails.map((research, index) => (
          <ResearchCard key={index} research={research} />
        ))}
      </div>
    </motion.div>
  );
};

export default Research;
