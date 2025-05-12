import ContentDashboard from "@/components/dashboard/layout/content/ContentDashboard";
import HeaderDashboard from "@/components/dashboard/layout/header/HeaderDashboard";
import SidebarDashboard from "@/components/dashboard/layout/sidebar/SidebarDashboard";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-bgDash w-dvw h-dvh p-4 gap-5 flex rtl">
      <SidebarDashboard />

      <div className="w-10/12 max-xl:w-full flex flex-col gap-5">
        <HeaderDashboard />

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {children}
          <ContentDashboard />
        </div>
      </div>
    </div>
  );
};

export default Layout;
