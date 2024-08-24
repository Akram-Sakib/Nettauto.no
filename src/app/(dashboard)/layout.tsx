// import DashboardHeader from "@/components/ui/dashboard/dashboard-header";
import Sidebar from "@/components/ui/sidebar";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nettauto | Dashboard",
};

const AdminDashboardPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <DashboardHeader /> */}
      <div className="flex h-screen overflow-hidden font-roboto bg-[#E9E9E9]">
        <Sidebar className="w-1/6 hidden md:block bg-navyblue font-roboto" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default AdminDashboardPage;
