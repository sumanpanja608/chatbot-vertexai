import React from "react";
import HighlightText from "../components/HighlightText";
import dLayout from "../assets/3D Asset 1.png";
import iphoneimage from "../assets/iPhone Space Black Front.png";
import { ReactComponent as Arrowright } from "../assets/arrow-right-sm.svg";

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col w-11/12 mt-20">
      <div className="w-full relative overflow-hidden flex justify-between">
        <img
          src={dLayout}
          className="absolute  lg:left-[25%] lg:-top-16 z-10 opacity-25 "
        />

        <div className="lg:w-[50%] w-full flex lg:flex-col flex-col lg:gap-4 gap-4 bg-transparent  ml-20">
          <p className="lg:text-[40px] text-[40px] font-Urbanist font-[700] lg:leading-[60px] text-[#4B3425] text-center lg:text-left">
            Welcome to{" "}
            <HighlightText content={" Thinker.ai "} color={"#FE814B"} />
            <br />
            Your Study Companion!
          </p>
          <p className="font-Urbanist text-[20px] font-[500] lg:w-[60%] text-center w-full lg:text-left">
            Are you a student looking for a reliable study partner? Look no
            further!{" "}
            <HighlightText content={" Thinker.ai "} color={"#FE814B"} /> is here
            to assist you on your educational journey.
          </p>
          <div className="flex flex-row gap-6">
            <button className="flex h-[64px] p-4 lg:p-8 flex-col justify-center items-center gap-10 border-black border-[1px] rounded-[1000px]">
              <p className="font-Urbanist text-[18px] font-[700] text-black tracking-wider">
                Try Demo
              </p>
            </button>
            <button className="flex flow-row h-[64px] p-4 lg:pt-[16px] pb-[16px] pl-[16px] pr-[8px]  justify-around items-center gap-6  rounded-[1000px] bg-[#9BB068]">
              <p className="font-Urbanist text-[18px] font-[700] text-white tracking-wider">
                Sign up
              </p>
              <div className="flex bg-white rounded-[1234px] h-[48px] w-[48px] items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Monotone/04-arrow-right-sm">
                    <path
                      id="Vector"
                      d="M2 12L21 12"
                      stroke="#9BB068"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M16.5529 17.7956C17.8287 17.4537 18.9561 16.7004 19.7601 15.6526C20.5642 14.6047 21 13.3208 21 12C21 10.6792 20.5642 9.3953 19.7601 8.34743C18.9561 7.29957 17.8287 6.54629 16.5529 6.20445"
                      stroke="#9BB068"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[50%] z-20 lg:flex items-center justify-end mt-6">
          <img src={iphoneimage} className="w-[457px] h-985px] scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Home;
