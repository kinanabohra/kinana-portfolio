import React from "react";

const AchievementCard = ({ title, details }) => {
  return (
    <div className="w-full flex flex-col xxs:flex-row group gap-4 xxs:gap-6">
      {/* Timeline Indicator */}
      <div className="w-5 xs:w-7 sm:w-10 h-[6px] bgOpacity mt-6 sm:mt-10 relative">
        <span className="absolute w-4 sm:w-5 h-4 sm:h-5 rounded-full -top-1 sm:-top-2 -left-2 sm:-left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>

      {/* Card Content */}
      <div className="-ml-6 -2 w-full bg-gradient-to-r from-bodyColor via-[#131922] to-[#1a202c] group hover:bg-gradient-to-bl hover:from-[#131922] hover:via-[#1a202c] hover:to-bodyColor duration-300 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-shadowOne">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-designColor mb-3 sm:mb-4 border-b border-gray-500 pb-2">
          {title}
        </h2>
        <ul className="text-gray-300 space-y-3 sm:space-y-4">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sml:flex-row justify-between items-start sml:items-center hover:text-designColor transition duration-300"
            >
              <p className="text-sm sm:text-md md:text-lg">{item.Name}</p>
              <div className="flex flex-col xxs:flex-row gap-2 sm:gap-3 mt-2 sml:mt-0">
                {item.position && (
                  <p className="text-xs sm:text-sm md:text-md lg:text-lg bg-gray-800 rounded-full px-3 py-1 font-normal shadow-inner text-center w-full sm:w-auto">
                    🏆 {item.position}
                  </p>
                )}
                <p className="text-xs sm:text-sm md:text-md font-normal text-designColor bg-black bg-opacity-25 rounded-lg px-3 py-1 text-center flex items-center gap-2 w-full sm:w-auto">
                  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 10h5v5H7zM12 10h5v5h-5zM17 10h5v5h-5zM22 5h-1V3h-2v2H5V3H3v2H2C.9 5 0 5.9 0 7v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM20 21H4V9h16v12z"/>
                  </svg>
                  {item.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AchievementCard;
