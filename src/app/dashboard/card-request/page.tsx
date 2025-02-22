import SearchBar from "@/app/component/HeaderSearchBar";
import { CardRequest } from "@/utils/type";
import React from "react";

    const Page: React.FC<CardRequest> = () => {

  const cardRequests = [
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Ready",
     
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Ready",
     
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "In Progress",
     
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
     
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Acknowledged",
     
    },
  ];

  return (
    <div className="bg-[#fefefe] rounded-lg px-3 pb-5 pt-3 ">
      <h1 className="font-bold text-lg mb-1">Card Request</h1>
      <p className="text-[#475467] font-normal text-sm">
        View and attend to card requests here.
      </p>

      <hr className="my-2 h-[5px] text-[#98A2B3]" />
      <SearchBar placeholder="Search by branch" />
      <hr className="my-3 h-[5px] text-[#98A2B3]" />

      <table className="w-full">
        <thead>
          <tr className="text-center text-xs font-medium border-b bg-[#F9FAFB]">
            <th className="py-3">Branch</th>
            <th className="py-3">Initiator</th>
            <th className="py-3">Quantity</th>
            <th className="py-3">Batch</th>
            <th className="py-3">Date Requested</th>
            <th className="py-3">Status</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardRequests.map((request, index) => (
            <tr
              key={index}
              className="border-b text-center text-[10px] font-normal text-[#475467]"
            >
              <td className="py-3">{request.branch}</td>
              <td className="py-3">{request.initiator}</td>
              <td className="py-3">{request.quantity}</td>
              <td className="py-3">{request.batch}</td>
              <td className="py-3">{request.dateRequested}</td>
              <td className="py-3">
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
              <td className="py-3">
                <button className="text-[#014DAF] px-3 py-1 rounded hover:text-blue-800">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
