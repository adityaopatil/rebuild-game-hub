import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="px-2">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
