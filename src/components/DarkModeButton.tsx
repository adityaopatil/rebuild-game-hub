import React, { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark)").matches) {
      setTheme("dark");
    }
    setTheme("dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <div
          className={`pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ${
            theme === "dark"
              ? "bg-green-600 ring-black/20"
              : "bg-green-950/10 ring-green-950/5"
          }`}
          onClick={handleToggle}
        >
          <div
            className={`h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${
              theme === "light" ? "translate-x-4" : ""
            }`}
          ></div>
        </div>
        <span className="ml-2">Dark Mode</span>
      </div>
    </>
  );
};

export default DarkModeButton;
