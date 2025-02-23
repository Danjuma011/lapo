import React, { ReactNode } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header spans the full width */}
      <Header />

      {/* Main content area (sidebar + children) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar takes full height and is scrollable */}
        <div className="h-full overflow-y-auto bg-[#fefefe]">
          <Sidebar />
        </div>

        {/* Main content area fills remaining space and is scrollable */}
        <main className="flex-1 overflow-y-auto p-4 bg-[#F1F7FF]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
