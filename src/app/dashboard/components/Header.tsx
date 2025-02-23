import React from "react";
import { CgHome } from "react-icons/cg";
import { PiBellLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import HeaderSearchBar from "../../component/HeaderSearchBar";

const Header = () => {
  return (
    <header className="border border-b-2  p-4 bg-[#fefefe] ">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <CgHome />
          <p>Dashboard</p>
        </div>
        <div className="flex items-center gap-3">
        <HeaderSearchBar placeholder="Search"/>
          <PiBellLight size={30}/>
          <div className="bg-[#F2F4F7] rounded-full">
  <FiUser size={30} className="p-2" />
</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
