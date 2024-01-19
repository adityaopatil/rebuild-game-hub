import React from "react";
import logo from "../assets/logo.webp";
import DarkModeButton from "./DarkModeButton";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between pr-2 mt-2">
      <img src={logo} alt="game hub logo" className="w-[70px] h-[70px]" />
      <SearchInput onSearch={onSearch} />
      <DarkModeButton />
    </div>
  );
};

export default NavBar;
