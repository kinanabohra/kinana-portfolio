import React from 'react';

const EducationCard = ({ title, subTitle, durationYear, address }) => {
  return (
    <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-6 group'>
      <div className='w-8 sm:w-10 h-[6px] bgOpacity mt-6 sm:mt-10 relative'>
        <span className='absolute w-4 sm:w-5 h-4 sm:h-5 rounded-full -top-1 sm:-top-2 -left-2 sm:-left-3 flex justify-center items-center bg-black bg-opacity-60'>
          <span className='w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>
      </div>

      <div className='-ml-6 w-full bg-gradient-to-r from-bodyColor via-[#131922] to-[#1a202c] group hover:bg-gradient-to-bl hover:from-[#131922] hover:via-[#1a202c] hover:to-bodyColor duration-300 rounded-xl p-4 sm:px-4 md:px-6 lg:px-8 flex flex-col justify-center gap-2 shadow-shadowOne'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 sm:pt-8'>
          <h2 className='text-md sm:text-lg md:text-xl  font-semibold group-hover:text-white duration-300'>{title}</h2>
          <p className='mt-2 sm:mt-0 px-2 py-1 text-xs sm:text-sm md:text-md font-normal text-designColor bg-black bg-opacity-20 rounded-lg text-center'>
            {durationYear}
          </p>
        </div>
        <div className='pb-4 sm:pb-8'>
          <h4 className='text-sm sm:text-md md:text-lg text-gray-400 group-hover:text-gray-300 duration-300'>{subTitle}</h4>
          <p className='text-xs sm:text-sm md:text-md text-gray-400 group-hover:text-gray-300 duration-300'>📍{address}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
