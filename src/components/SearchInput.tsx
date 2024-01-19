import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="w-full ">
      <div className="relative rounded-full shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-lg">
            <BsSearch />
          </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-full border-0 py-3 pl-9 pr-22 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none sm:text-lg sm:leading-6 dark:bg-gray-900 dark:hover:bg-gray-800 bg-gray-200 hover:bg-gray-300"
          placeholder="Search games..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
