import React from 'react';
import { FaRegNewspaper, FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa';

const ResearchCard = ({ research }) => {
  return (
    <div className="bg-gradient-to-r from-bodyColor via-[#131922] to-[#1a202c] group hover:bg-gradient-to-bl hover:from-[#131922] hover:via-[#1a202c] hover:to-bodyColor backdrop-blur-md transition-all 
        rounded-xl p-5 sm:p-6 flex flex-col justify-center gap-4 shadow-lg transform 
        hover:scale-[1.03] duration-300 border border-gray-800 relative w-full max-w-lg mx-auto">
      
      <h3 className="text-lg sm:text-xl font-semibold text-white">{research.title}</h3>

      {research.conference && (
        <p className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
          <FaChalkboardTeacher className="text-lg text-green-300" />
          <span className="font-medium text-gray-400">Conference:</span> {research.conference.name} ({research.conference.year})
        </p>
      )}

      {research.publication && (
        <p className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
          <FaRegNewspaper className="text-lg text-designColor" />
          <span className="font-medium text-gray-400">Publication:</span> 
          {research.publication.link ? (
            <a 
              href={research.publication.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-designColor hover:underline"
            >
              {research.publication.name} ({research.publication.year})
            </a>
          ) : (
            `${research.publication.name} (${research.publication.year})`
          )}
        </p>
      )}

      <p className="text-xs sm:text-sm text-gray-400 italic line-clamp-3">{research.abstract}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {research.keywords.map((keyword, index) => (
          <span key={index} className="px-3 py-1 text-xs sm:text-sm text-white bg-gray-700 rounded-full">
            {keyword}
          </span>
        ))}
      </div>

      {research.publication?.link && (
        <a 
          href={research.publication.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 inline-block text-designColor hover:underline text-sm sm:text-base"
        >
          Read More →
        </a>
      )}
    </div>
  );
};

export default ResearchCard;
