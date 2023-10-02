import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import MenuDrop from "./MenuDrop";

const Navbar = () => {
  return (
    <div className="flex lg:flex-row w-11/12 max-w-maxContent items-center justify-between bg-[#d1c8c3] lg:h-[56px] h-[65px] mt-2 p-4 rounded-[1234px] z-50">
      <div>
        <Link to={"/contact-us"}>
          <p className="font-Urbanist font-[600]">
            <MdContactSupport size={28} color="black" />
          </p>
        </Link>
      </div>
      <div className="flex lg:flex-row items-center gap-2">
        <Link to={"/"}>
          <img src={logo} className="h-[35px]" alt="Website logo" />
        </Link>
        <Link to={"/"}>
          <p className="font-Urbanist font-[700] lg:text-xl text-[18px]">
            Thinker.ai
          </p>
        </Link>
      </div>
      <div className="flex gap-3 font-Urbanist">
        <MenuDrop />
      </div>
    </div>
  );
};

export default Navbar;
