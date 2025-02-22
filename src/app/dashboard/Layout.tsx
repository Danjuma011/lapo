import React, { ReactNode } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header spans the full width */}
      <Header />

      {/* Main content area (sidebar + children) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar takes full height */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-4 overflow-y-auto bg-[#F1F7FF]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;