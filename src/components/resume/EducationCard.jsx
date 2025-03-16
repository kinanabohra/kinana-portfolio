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
        <div className='flex flex-col xsml:flex-row  justify-between items-start xsml:items-center pt-4 sm:pt-8'>
          <h2 className='text-md sm:text-lg md:text-xl  font-semibold group-hover:text-white duration-300'>{title}</h2>
          <p className='mt-2 sml:mt-0 px-2 py-1 text-xs sm:text-sm md:text-md font-normal text-designColor bg-black bg-opacity-20 rounded-lg text-center'>
            {durationYear}
          </p>
        </div>
        <div className='pb-4 sm:pb-8 flex flex-col gap-1'>
          <h4 className='text-sm sm:text-md md:text-lg text-gray-400 group-hover:text-gray-300 duration-300'>{subTitle}</h4>
          <p className='text-xs sm:text-sm md:text-md text-gray-400 group-hover:text-gray-300 duration-300 flex items-center gap-1'> 
            <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-gray-300 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
