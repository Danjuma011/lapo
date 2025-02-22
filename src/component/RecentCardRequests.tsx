"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";

interface RecentCardRequestsProps {
  className?: string;
}

const RecentCardRequests: React.FC<RecentCardRequestsProps> = ({
  className,
}) => {
  const cardRequests = [
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Ready",
    },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "In Progress",
    },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "Acknowledged",
    },
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Pending",
    },
  ];

  const router = useRouter();

  return (
    <div className={` h-96 p-4 bg-white shadow-md rounded-lg ${className}`}>
      <div className="flex justify-between">
        <h2 className="text-lg font-medium mb-3">Recent Card Requests</h2>
        <BsArrowsAngleExpand
          onClick={() => router.push("/card-request")}
          className="cursor-pointer"
        />
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-center text-xs font-medium border-b bg-[#F1F7FF] py-2">
            <th className="py-2">Branch</th>
            <th className="py-2">Card Type</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Status</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardRequests.map((request, index) => (
            <tr
              key={index}
              className="border-b text-center text-[10px] font-normal text-[#475467]"
            >
              <td className="py-3">{request.branch}</td>
              <td className="py-3">{request.cardType}</td>
              <td className="py-3">{request.quantity}</td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full border ${
                    request.status === "Ready"
                      ? "border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]"
                      : request.status === "In Progress"
                      ? "border-[#FEDF89] bg-[#FFFAEB] text-[#B54708]"
                      : request.status === "Acknowledged"
                      ? "border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]"
                      : request.status === "Pending"
                      ? "border-[#EAECF0] bg-[#F9FAFB] text-[#344054]"
                      : "border-gray-500 bg-gray-100 text-gray-500"
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="py-3">
                <button className="text-blue-500 px-3 py-1 rounded hover:text-blue-800">
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

export default RecentCardRequests;
