"use client";
import SearchBar from "@/component/HeaderSearchBar";
import { CardProfile } from "@/app/utils/type";
import React from "react";

import { cardProfile } from "@/app/utils/db";

const Page: React.FC<CardProfile> = () => {
 

  return (
    <div className="bg-[#fefefe] rounded-lg px-3 pb-5 pt-3 ">
      <h1 className="font-bold text-lg mb-1">Create Profile</h1>
      <p className="text-[#475467] font-normal text-sm">
        Fill in profile details and add card fee.
      </p>

      <hr className="my-2 h-[5px] text-[#98A2B3]" />
      <div className="flex justify-between items-center w-full">
        <SearchBar placeholder="Search by branch" />
      </div>

      <hr className="my-3 h-[5px] text-[#98A2B3]" />

      <table className="w-full">
        <thead>
          <tr className="text-center text-xs font-medium border-b bg-[#F9FAFB]">
            <th className="py-3">Card Name</th>
            <th className="py-3">Currency</th>
            <th className="py-3">Expiration</th>
            <th className="py-3">Bin Prefix</th>
            <th className="py-3">Date Created</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardProfile.map((request, index) => (
            <tr
              key={index}
              className="border-b text-center text-[10px] font-normal text-[#475467]"
            >
              <td className="py-3">{request.cardName}</td>
              <td className="py-3">{request.curency}</td>
              <td className="py-3">{request.expiration}</td>
              <td className="py-3">{request.binPrefix}</td>
              <td className="py-3">{request.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
