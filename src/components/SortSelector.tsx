import React, { useState } from "react";

interface Props {}

const SortSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className={`inline-flex items-center justify-between w-full px-4 py-2 text-lg font-medium dark:text-white ${
            isOpen ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300 ${
            isOpen ? "dark:bg-gray-700" : "dark:bg-gray-800"
          } dark:hover:bg-gray-700 rounded-md`}
        >
          OrderBy: Relevance
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-gray-200 dark:bg-gray-800 rounded-md border border-gray-600">
          <ul className="dark:text-white text-lg py-2">
            <li className="block pl-4 pr-40 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
              Relevance
            </li>
            <li className="block pl-4 pr-40 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
              Date Added
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
