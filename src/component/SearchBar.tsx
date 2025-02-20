"use client";
import React, { FC } from "react";
import { CiSearch } from "react-icons/ci";


interface ISearch {
  className?: string;
  search?: string;
  setSearch?: (search: string) => void;
}
const SearchBar: FC<ISearch> = ({ className, search, setSearch }) => {
  const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch?.(e.target.value);
  }
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className={`border border-[#D0D5DD] ps-[58px] py-3 rounded-3xl focus:outline-[#CCDBEF] headerInput text-xs ${className}`}
        value={search}
        onChange={handleSearch}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
        <CiSearch className="text-gray-500" size={16} />
      </div>
    </div>
  );
};

export default SearchBar;
