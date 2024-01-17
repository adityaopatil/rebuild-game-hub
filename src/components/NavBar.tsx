import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={logo} alt="game hub logo" className="w-16 h-16" />
      <p className="ml-2">NavBar</p>
    </div>
  );
};

export default NavBar;
