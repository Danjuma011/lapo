"use client";

import { generalDashboard } from "@/app/utils/Dashboard-links";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "@public/svg/LAPO_Logo_2022-removebg-preview 1.svg";
import Image from "next/image";
import cadinfra from "@public/svg/cadinfra.svg";
import { useRouter } from "next/navigation";
import { GrHomeRounded } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { CiLogin } from "react-icons/ci";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon (visible on small screens) */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-3 left-4 z-20 p-2  text-[#000000] rounded"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative h-screen w-64 transform transition-transform duration-300 ease-in-out border-r-2 flex flex-col 
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 bg-white z-20 overflow-y-auto`}
      >
        <Image
          src={logo}
          alt="logo"
          width={138}
          height={45}
          // layout="responsive"
          className="my-5 object-contain"
          style={{ objectFit: "contain" }}
        />

        <div className="p-4 flex-grow">
          <p
            onClick={() => router.push("/")}
            className={`rounded-sm font-medium text-xs px-3 py-2 cursor-pointer flex items-center gap-3 hover:bg-[#F1F7FF] ${
              pathname === "/" ? "text-[#014DAF]" : "text-[#808080]"
            }`}
          >
            <GrHomeRounded
              className={pathname === "/" ? "text-[#014DAF]" : "text-[#808080]"}
            />
            Dashboard
          </p>
          <h2 className="font-medium text-[8px] text-[#7E8B9C] ml-3 mb-3 mt-2">
            MAIN MENU
          </h2>
          <ul>
            {generalDashboard.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href={item.href}
                  className={`flex items-center p-2 hover:bg-[#F1F7FF] rounded transition-colors ${
                    pathname === item.href ? "bg-[#F6F6F6]" : ""
                  }`}
                >
                  {item.icon &&
                    (location.pathname === item.href ? (
                      <item.boldIcon className="w-4 h-4 mr-3 text-[#014DAF]" />
                    ) : (
                      <item.icon className="w-4 h-4 mr-3 text-[#808080]" />
                    ))}

                  <span className="font-normal text-xs text-[#808080]">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Move this div to the bottom */}
        <div className="p-4 mt-auto">
          <p className="font-medium text-xs p-1 flex items-center gap-3 mb-8">
            <CiLogin className="text-xl" /> Logout
          </p>
          <p className="text-[8px] font-medium text-[#808080] p-2">
            POWERED BY
          </p>
          <Image
            src={cadinfra}
            alt="cadinfra"
            width={93}
            height={43}
            className="p-2 object-contain"
            style={{ objectFit: "contain" }}
          />
        </div>
      </aside>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
