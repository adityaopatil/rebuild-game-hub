import React from "react";
import logo from "../assets/logo.webp";
import DarkModeButton from "./DarkModeButton";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between pr-2 pt-3">
      <Link to="/">
        <div className="w-[70px] h-[70px]">
          <img src={logo} alt="game hub logo" className=" object-cover" />
        </div>
      </Link>
      <SearchInput />
      <DarkModeButton />
    </div>
  );
};

export default NavBar;
