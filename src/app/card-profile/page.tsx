"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LuPen } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { cardProfile } from "@/app/utils/db";
import SearchBar from "@/component/SearchBar";
import CardProfileHeader from "../components/card-profile-header";

const Page = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredCards = cardProfile.filter((card) =>
    card.cardName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <CardProfileHeader />

      <div className="p-3">
        <h1 className="font-bold text-lg mb-1">Card Profile</h1>
        <p className="text-[#475467] font-normal text-sm">
          Create, view, and edit card profiles here.
        </p>

        <hr className="my-2 h-[5px] text-[#98A2B3]" />
        <div className="flex justify-between items-center w-full">
          <div className="w-[320px]">
            <SearchBar
              placeHolder="Search by card name"
              search={search}
              setSearch={setSearch}
            />
          </div>

          <button
            onClick={() => router.push(`/card-profile/create`)}
            className="bg-[#014DAF] text-[#fefefe] text-sm font-semibold py-2.5 px-5 rounded-md flex items-center gap-2 whitespace-nowrap hover:bg-[#013B82] focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <FaPlus className="flex-shrink-0" />
            <span>Add Profile</span>
          </button>
        </div>

        <hr className="my-3 h-[5px] text-[#98A2B3]" />

        {/* Table Wrapper with Scroll */}
        <div className="bg-[#fefefe] rounded-lg">
          <div className="w-full overflow-x-auto">
            <table className="min-w-max w-full border-collapse border text-[#475467] border-gray-300">
              <thead>
                <tr className="text-center text-xs font-medium bg-[#F9FAFB] border border-gray-300">
                  <th className="py-3 border border-gray-300">Card Name</th>
                  <th className="py-3 border border-gray-300">Currency</th>
                  <th className="py-3 border border-gray-300">Expiration</th>
                  <th className="py-3 border border-gray-300">Bin Prefix</th>
                  <th className="py-3 border border-gray-300">Date Created</th>
                  <th className="py-3 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCards.length > 0 ? (
                  filteredCards.map((request, index) => (
                    <tr
                      key={index}
                      className="border border-gray-300 text-center text-[10px] font-normal text-[#475467]"
                    >
                      <td className="py-3 border border-gray-300">
                        {request.cardName}
                      </td>
                      <td className="py-3 border border-gray-300">
                        {request.curency}
                      </td>
                      <td className="py-3 border border-gray-300">
                        {request.expiration}
                      </td>
                      <td className="py-3 border border-gray-300">
                        {request.binPrefix}
                      </td>
                      <td className="py-3 border border-gray-300">
                        {request.dateCreated}
                      </td>
                      <td className="py-3 flex justify-center gap-3">
                        <button className="text-[#475467]">
                          <RiDeleteBinLine className="text-[20px]" />
                        </button>
                        <button className="text-[#475467]">
                          <LuPen className="text-[20px]" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      No matching results
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
