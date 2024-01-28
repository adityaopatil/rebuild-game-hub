import React from "react";
import logo from "../assets/logo.webp";
import DarkModeButton from "./DarkModeButton";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between pr-2 pt-3">
      <Link to="/" className="mr-1 ml-2">
        <img
          src={logo}
          alt="game hub logo"
          className="w-[70px] h-[70px] object-cover"
        />
      </Link>
      <SearchInput />
      <DarkModeButton />
    </div>
  );
};

export default NavBar;
