import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import MenuDrop from "./MenuDrop";

const Navbar = () => {
  return (
    <div className="flex lg:flex-row w-11/12 max-w-maxContent items-center justify-between bg-[#d1c8c3] lg:h-[50px] h-[65px] mt-2 p-4 rounded-[1234px]">
      <div>
        <p className="font-Urbanist font-[600]">
          <MdContactSupport size={25} color="white" />
        </p>
      </div>
      <div className="flex lg:flex-row items-center gap-2">
        <img src={logo} className="h-[35px]" alt="Website logo" />
        <p className="font-Urbanist font-[700] lg:text-xl text-[18px]">
          Thinker.ai
        </p>
      </div>
      <div className="flex gap-3 font-Urbanist">
        {/* <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/chat"}>
          <p>Chat</p>
        </Link>
        <Link to={"/signup"}>
          <p>Sign-up</p>
        </Link> */}
        <MenuDrop />
      </div>
    </div>
  );
};

export default Navbar;
