import React, { useState } from "react";
import HighlightText from "../components/HighlightText";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const ConatctUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="rounded-[50px] p-6 tracking-wider w-11/12 lg:h-[700px] bg-[#9bb068] mt-8">
      <div className="flex flex-col lg:gap-0 gap-2 lg:mb-0 mb-4">
        <p className="text-center font-Urbanist font-[700] lg:text-[45px] text-[35px] lg:leading-[80px] leading-none text-[#533b2b] lg:mt-0 mt-6 lg">
          Get in Touch With us.
        </p>
        <p className="text-center font-Urbanist text-[17px] font-[500]">
          Have questions or need assistance ? we are here to help you out every
          step of the way !
        </p>
        <p className="text-center font-Urbanist font-[700] text-[30px] lg:leading-[80px] text-[#24160c]">
          Submit The Form Below
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[600px] font-Urbanist flex flex-col items-center"
        >
          <div className="mb-4 flex flex-row items-center gap-3 bg-white p-2 lg:rounded-[950px] rounded-[970px] w-full">
            <div className="text-[30px] font-[800] bg-[#fe631b] p-2 rounded-[1234px]  lg:h-[60px] lg:w-[80px] h-[55px] w-[90px] flex items-center justify-center">
              <p className="text-white">01</p>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2  focus:outline-none border-b-2 placeholder:font-[700] lg:placeholder:text-[18px] placeholder:text-[13px]"
              placeholder="Enter your full name.."
              required
            />
            <div className="pr-4">
              <BsFillPersonFill size={25} />
            </div>
          </div>
          <div className="mb-4 flex flex-row items-center gap-3 bg-white p-2 rounded-[950px] w-full">
            <div className="text-[30px] font-[800] bg-[#fe631b] p-2 rounded-[1234px]  lg:h-[60px] lg:w-[80px] h-[55px] w-[90px] flex items-center justify-center">
              <p className="text-white">02</p>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2  focus:outline-none border-b-2 placeholder:font-[700] lg:placeholder:text-[18px] placeholder:text-[13px]"
              placeholder="Enter your email address.."
              required
            />
            <div className="pr-4">
              <AiOutlineMail size={25} />
            </div>
          </div>

          <div className="mb-4 flex flex-row items-center gap-3 bg-white p-2 rounded-[950px] w-full">
            <div className="text-[30px] font-[800] bg-[#fe631b] p-2 rounded-[1234px]  lg:h-[60px] lg:w-[80px] h-[55px] w-[90px] flex items-center justify-center">
              <p className="text-white">03</p>
            </div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2  focus:outline-none border-b-2 placeholder:font-[700] lg:placeholder:text-[18px] placeholder:text-[13px]"
              placeholder="Enter your phone number.."
              required
            />
            <div className="pr-4">
              <AiOutlinePhone size={25} />
            </div>
          </div>
          <div className="mb-4 flex flex-row items-center gap-3 bg-white p-2 rounded-[950px] w-full">
            <div className="text-[30px] font-[800] bg-[#fe631b] p-2 rounded-[1234px]  lg:h-[60px] lg:w-[80px] h-[55px] w-[90px] flex items-center justify-center">
              <p className="text-white">04</p>
            </div>
            <input
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2  focus:outline-none border-b-2 placeholder:font-[700] lg:placeholder:text-[18px] placeholder:text-[13px]"
              rows="1"
              placeholder="Enter your message..."
              required
            />
            <div className="pr-4">
              <BiMessageDetail size={25} />
            </div>
          </div>

          <button
            type="submit"
            className="flex flow-row h-[56px] p-4 lg:pt-[16px] pb-[16px] pl-[16px] pr-[8px]  justify-around items-center gap-6  rounded-[1000px] bg-[#fe631b]"
          >
            <p className="font-Urbanist text-[18px] font-[700] text-white tracking-wider">
              Submit
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
        </form>
      </div>
    </div>
  );
};

export default ConatctUs;
