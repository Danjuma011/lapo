import React from "react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import img from "@public/svg/elements.svg";
import { PiBellLight } from "react-icons/pi";
import GoBack from "@/component/back";
import { RiArrowRightSLine } from "react-icons/ri";


const RequestDetailsHeader = () => {
  return (
    <header className="border border-b-2  p-4 bg-[#fefefe] ">
      <div className="flex justify-between">

        <div className="flex items-center gap-3">
        <GoBack/>
        <Image
           src={img}
           alt="manageCard"
           width={20}
           height={20}
           className="mb-1"
         />
         <RiArrowRightSLine className="text-[#D0D5DD]"/>
          <p 
          onClick={() => window.history.back()}
          className="text-xs font-medium cursor-pointer">Card Request</p>
<RiArrowRightSLine className="text-[#D0D5DD]"/>
          <p className="text-xs font-bold">Request Details</p>
        
        </div>
        <div className="flex items-center gap-3">
        
          <PiBellLight size={20}/>
          <div className="bg-[#F2F4F7] rounded-full">
  <FiUser size={30} className="p-2" />
</div>
        </div>
      </div>
    </header>
  );
};

export default RequestDetailsHeader;
