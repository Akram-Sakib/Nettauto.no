import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nettauto | Dashboard",
};

const AdminDashboardPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex font-roboto bg-[#E9E9E9]">
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};

export default AdminDashboardPage;
