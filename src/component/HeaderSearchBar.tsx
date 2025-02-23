"use client";
import React, { FC } from "react";
import { CiSearch } from "react-icons/ci";

interface ISearch {
  className?: string;
  search?: string;
  setSearch?: (search: string) => void;
}

const SearchBar: FC<ISearch> = ({ className, search, setSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch?.(e.target.value);
  };
  return (
    <div
      className={`relative flex items-center border border-[#D0D5DD] max-w-[320px] w-full rounded-3xl bg-white ${className}`}
    >
      <CiSearch className="text-gray-500 ml-3" size={18} />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 py-3 pl-3 pr-4 bg-transparent focus:outline-[#CCDBEF] text-xs"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
