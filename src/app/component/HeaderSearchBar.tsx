"use client";
import React, { FC } from "react";
import { CiSearch } from "react-icons/ci";


interface ISearch {
  className?: string;
  search?: string;
  setSearch?: (search: string) => void;
  placeholder?: string
}
const HeaderSearchBar: FC<ISearch> = ({ className, search, setSearch, placeholder }) => {
  const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch?.(e.target.value);
  }
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={`border border-[#D0D5DD] ps-[40px] py-3 rounded-lg focus:outline-[#CCDBEF] headerInput text-xs w-[320px] ${className}`}
        value={search}
        onChange={handleSearch}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <CiSearch className="text-gray-500 font-bold" size={20} />
      </div>
    </div>
  );
};

export default HeaderSearchBar;
