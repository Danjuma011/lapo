"use client";
import { CardRequest } from "@/app/utils/type";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cardRequests } from "@/app/utils/db";
import CardRequestHeader from "../components/card-request-header";
import SearchBar from "@/component/SearchBar";

const Page: React.FC<CardRequest> = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredRequests = cardRequests.filter((request) =>
    request.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>
    <CardRequestHeader/>
 <div className="flex-1 overflow-auto ">

    <div className="rounded-lg px-3 pb-5 pt-3">
      <h1 className="font-bold text-lg mb-1">Card Request</h1>
      <p className="text-[#475467] font-normal text-sm">
        View and attend to card requests here.
      </p>

      <hr className="my-2 h-[5px] text-[#98A2B3]" />
  
  <div className="max-w-[320px]">
  <SearchBar placeHolder="Search by card name" search={search} setSearch={setSearch} />

  </div>


      <hr className="my-3 h-[5px] text-[#98A2B3]" />

      {/* Wrapper for horizontal scrolling */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px] md:min-w-full">
          <table className="w-full border-collapse border border-gray-300 bg-[#fefefe]">
            <thead>
              <tr className="text-center text-xs font-medium bg-[#F9FAFB] border border-gray-300">
                <th className="py-3 border border-gray-300">Branch</th>
                <th className="py-3 border border-gray-300">Initiator</th>
                <th className="py-3 border border-gray-300">Quantity</th>
                <th className="py-3 border border-gray-300">Batch</th>
                <th className="py-3 border border-gray-300">Date Requested</th>
                <th className="py-3 border border-gray-300">Status</th>
                <th className="py-3 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request, index) => (
                <tr key={index} className="border border-gray-300 text-center text-[10px] font-normal text-[#475467]">
                  <td className="py-3 border border-gray-300">{request.branch}</td>
                  <td className="py-3 border border-gray-300">{request.initiator}</td>
                  <td className="py-3 border border-gray-300">{request.quantity}</td>
                  <td className="py-3 border border-gray-300">{request.batch}</td>
                  <td className="py-3 border border-gray-300">{request.dateRequested}</td>
                  <td className="py-3 border border-gray-300">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full border ${
                        request.status === "Ready"
                          ? "border-green-500 bg-green-100 text-green-500"
                          : request.status === "In Progress"
                          ? "border-yellow-500 bg-yellow-100 text-yellow-500"
                          : request.status === "Acknowledged"
                          ? "border-blue-500 bg-blue-100 text-blue-500"
                          : request.status === "Pending"
                          ? "border-[#EAECF0] bg-[#F9FAFB] text-[#344054]"
                          : "border-gray-500 bg-gray-100 text-gray-500"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 border border-gray-300">
                    <button 
                      onClick={() => router.push(`/card-request/${request.batch}/request-details`)}
                      className="text-[#014DAF] px-3 py-1 rounded hover:text-blue-800">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredRequests.length === 0 && (
        <p className="text-center text-sm text-gray-500 mt-4">No matching requests found.</p>
      )}
    </div>
  </div>
</div>
  );
};

export default Page;
