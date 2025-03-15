import React from "react";
import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="relative hidden mdl:flex lgl:w-1/2 justify-center items-center">
      <div className="relative w-[320px] h-[320px] xmdl:w-[380px] xmdl:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] flex justify-center items-center">
        
        <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-designColor"></div>

        <img
          className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-110 animate-float"
          src={bannerImg}
          alt="Profile Banner"
        />
      </div>
    </div>
  );
};

export default RightBanner;
