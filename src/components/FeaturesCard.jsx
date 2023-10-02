import React from "react";
import Heart from "../assets/04-heatbeat.png";
const FeaturesCard = ({ heading, body, icon }) => {
  return (
    <div className="flex flex-col p-[24px] bg-white lg:gap-[10px] gap-[4px] rounded-[48px] items-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
      <div className="flex flex-col gap-[24px]  items-center justify-center">
        <img src={icon} className="h-[80px] w-[80px]" alt="logo" />

        <p className="font-Urbanist lg:text-[24px] text-[20px] font-[700] leading-[32px] tracking-wide">
          {heading}
        </p>
        <p className="font-Urbanist lg:text-[18px] text-[15px] font-[500] leading-[28px]">
          {body}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
