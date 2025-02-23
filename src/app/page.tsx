"use client";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import manageCard from "@public/svg/Frame 1618867979.svg";
import issueInstantCard from "@public/svg/Frame 1618867979 (1).svg";
import issuePersonalizedCard from "@public/svg/Frame 1618867979 (2).svg";
import reviewCardRequests from "@public/svg/Frame 1618867979 (3).svg";
import bankNote from "@public/svg/bank-note-01.svg";
import creditCard from "@public/svg/credit-card-check.svg";
import crediCardEdit from "@public/svg/credit-card-edit.svg";
import hourglass from "@public/svg/hourglass-03.svg";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdErrorOutline } from "react-icons/md";

import Image from "next/image";
import RecentCardRequests from "@/component/RecentCardRequests";
import MonthlyIssuance from "@/component/MonthlyIssuance";
import WeeklyIncome from "@/component/WeeklyIncome";
import CardStatusDistribution from "@/component/CardStatusDistribution";
import Header from "./components/Header";
import CalendarDatePicker from "@/component/date-picker";

const cardData = [
  { id: 1, label: "Manage a Card", icon: manageCard },
  { id: 2, label: "Issue Instant Card", icon: issueInstantCard },
  { id: 3, label: "Issue Personalized Card", icon: issuePersonalizedCard },
  { id: 4, label: "Review Card Requests", icon: reviewCardRequests },
];

const analyticsCard = [
  {
    title: "Total Active Cards",
    value: "26,478",
    icon: creditCard,
    percentage: "+9%",
    percentageColor: "#29A174",
    backgroundColor: "#EFFAF6",
    textColor: "#0000008F",
    timeFrame: "this month",
    iconComponent: HiArrowUpRight,
  },
  {
    title: "Total Personalized Cards",
    value: "15,703",
    icon: crediCardEdit,
    percentage: "8.5%",
    percentageColor: "#29A174",
    backgroundColor: "#EFFAF6",
    textColor: "#0000008F",
    timeFrame: "this month",
    iconComponent: HiArrowUpRight,
  },
  {
    title: "Today’s Revenue",
    value: "₦9.3M",
    icon: bankNote,
    percentage: "+9%",
    percentageColor: "#29A174",
    backgroundColor: "#EFFAF6",
    textColor: "#0000008F",
    timeFrame: "vs yesterday",
    iconComponent: HiArrowUpRight,
  },
  {
    title: "Pending Requests",
    value: "38",
    icon: hourglass,
    percentage: null,
    percentageColor: null,
    backgroundColor: null,
    textColor: "#E78020",
    timeFrame: "Requires attention",
    iconComponent: MdErrorOutline,
  },
];

const Page = () => {
  return (
    <div>
      <Header />
      <div className="flex-1 overflow-auto p-4">
        <>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold mb-1">
              Hi Nazeer, what would you like to do today?
            </p>

            <CalendarDatePicker />
          </div>

          <p className="text-xs font-medium mb-4">
            Last login: 26/11/2024 14:39:58
          </p>

          <div className="bg-[#fefefe] p-4 rounded-lg border border-[#E2E2E2]">
            <p className="mb-3 text-base font-medium">Your Quick Access</p>

            <div className="flex flex-nowrap overflow-x-auto gap-4 ">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 flex items-center bg-[#F1F7FF] p-2 pl-4 rounded-lg w-[278px] gap-4 hover:bg-[#E0E7FF] transition-colors"
                >
                  <Image
                    src={card.icon}
                    alt="manageCard"
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-medium">{card.label}</span>
                  <MdArrowForwardIos className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-3">
            <p className="mr-2 text-lg font-bold">Analytics</p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 justify-between">
            {analyticsCard.map((card, index) => (
              <div
                key={index}
                className="bg-[#fefefe] p-3 rounded-lg border border-[#E2E2E2]"
              >
                <Image
                  src={card.icon}
                  alt="manageCard"
                  width={0}
                  height={0}
                  className="mb-1"
                />
                <p className="font-medium text-sm text-[#0000008F] mb-3">
                  {card.title}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{card.value}</span>
                  <div className="flex items-center gap-2">
                    {card.percentage && (
                      <span
                        className="flex items-center gap-1 p-2 rounded-lg"
                        style={{ backgroundColor: card.backgroundColor }}
                      >
                        <span>
                          <card.iconComponent
                            className={`text-[${card.percentageColor}] h-[8px] w-[8px]`}
                          />
                        </span>
                        <span
                          className="text-xs font-medium"
                          style={{ color: card.percentageColor }}
                        >
                          {card.percentage}
                        </span>
                      </span>
                    )}
                    <span
                      className="text-xs font-normal"
                      style={{ color: card.textColor }}
                    >
                      {card.timeFrame}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4 w-full">
            <div className="w-full md:w-1/2 h-96">
              <MonthlyIssuance />
            </div>
            <div className="w-full md:w-1/2 h-96">
              <RecentCardRequests />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4 w-full">
            <div className="w-full md:w-1/2 h-96">
              <WeeklyIncome />
            </div>
            <div className="w-full md:w-1/2 h-96">
              <CardStatusDistribution />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Page;
