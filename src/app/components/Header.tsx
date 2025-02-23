import React from "react";
import Image from "next/image";
import img from "@public/svg/home.svg";

import { PiBellLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import HeaderSearchBar from "@/component/HeaderSearchBar";

const Header = () => {
  return (
    <header className="border border-b-2  p-4 bg-[#fefefe] ">
      <div className="flex justify-between items-center ml-12 lg:ml-0">
        <div className="flex items-center gap-4">
          <Image
            src={img}
            alt="manageCard"
            width={20}
            height={20}
            className="mb-1"
          />
          <p className="text-xs font-medium">Dashboard</p>
        </div>
        <div className="flex items-center gap-6">
          <HeaderSearchBar />
          <PiBellLight size={30} />
          <div className="bg-[#F2F4F7] rounded-full">
            <FiUser size={30} className="p-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
