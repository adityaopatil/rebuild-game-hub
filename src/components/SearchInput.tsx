import React, { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
      action="#"
      className="w-full"
    >
      <div className="w-full">
        <div className="relative rounded-full shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-lg">
              <BsSearch />
            </span>
          </div>
          <input
            ref={ref}
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-full border-0 py-3 pl-9 pr-22 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none sm:text-lg sm:leading-6 dark:bg-gray-700 dark:hover:bg-slate-600 bg-gray-100 hover:bg-gray-200"
            placeholder="Search games..."
          />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
