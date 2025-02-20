import {
    MdOutlineDashboard,
    MdOutlineManageAccounts,
    MdManageAccounts,
  } from "react-icons/md";

  import {
    IoDocumentTextOutline,
    IoDocumentTextSharp,
  } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";


export const generalDashboard = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: MdOutlineDashboard,
      boldIcon: BiSolidDashboard,
    },
    // {
    //   label: "MAIN MENU",
    //   href: "/dashboard",
    //   // icon: MdOutlineDashboard,
    //   // boldIcon: BiSolidDashboard,
    // },
    {
      label: "Branches",
      href: "/dashboard",
      icon: MdOutlineDashboard,
      boldIcon: BiSolidDashboard,
    },
    {
      label: "Roles",
      href: "/dashboard/stakeholders-overview",
      icon: IoDocumentTextOutline,
      boldIcon: IoDocumentTextSharp,
    },
   
    {
      label: "Users",
      href: "/dashboard/messages",
      icon: AiOutlineMessage,
      boldIcon: AiFillMessage,
    },
    {
      label: "   Card Scheme",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: "  Card Profile   ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: "Card Request",
      href: "dashboard/card-request",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: " Stock ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: " Cards ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: "   Authorization List ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: "   Authorization Queue ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: "   Trail ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
    {
      label: "   Account ",
      href: "/dashboard/user-management",
      icon: MdOutlineManageAccounts,
      boldIcon: MdManageAccounts,
    },
  ];
  

  
  
  
  
  