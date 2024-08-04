import React from "react";
import { FaSearch } from "react-icons/fa";

export const InputSerach = () => {
  return (
    <div className="relative w-full">
      <input type="text" className="border-2 border-white rounded-3xl p-2 w-full" placeholder="Search for Something" />
      <FaSearch size={20} className="absolute right-4 top-3" />
    </div>
  );
};
