import React from "react";
import logo from "../assets/logo.webp";
import DarkModeButton from "./DarkModeButton";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-2">
      <img src={logo} alt="game hub logo" className="w-16 h-16" />
      <DarkModeButton />
    </div>
  );
};

export default NavBar;
