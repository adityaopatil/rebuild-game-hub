import React, { useState } from "react";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  if (error) return null;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className={`inline-flex items-center justify-between w-full px-4 py-2 text-lg font-medium dark:text-white ${
            isOpen ? "bg-gray-300" : "bg-gray-200"
          }hover:bg-gray-300 ${
            isOpen ? "dark:bg-gray-700" : "dark:bg-gray-800"
          } dark:hover:bg-gray-700 rounded-md transition ease-out duration-300`}
        >
          Platforms
          <svg
            className={`w-5 h-5 ml-2 -mr-1 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-gray-200 dark:bg-gray-800 rounded-md border border-gray-600">
          <ul className="dark:text-white text-lg py-2">
            {data.map((platform) => (
              <li
                onClick={() => handleOptionClick(platform.name)}
                className="block pl-4 pr-40 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
                key={platform.id}
              >
                {platform.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
