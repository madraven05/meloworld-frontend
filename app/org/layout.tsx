import ProtectedRoute from "@/components/protected-route";
import React, { ReactNode } from "react";
import DashboardSidebar from "src/components/ui/sidebar";
import { GoHomeFill } from "react-icons/go";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function OrgLayout({ children }: AdminLayoutProps) {
    const menuItems = [
        {
          title: "Dashboard",
          to: "/org/dashboard/",
          icon: <GoHomeFill />,
        },
        {
          title: "Employees",
          to: "/org/employees",
          icon: <IoPeople />,
        },
        {
          title: "Report Management",
          to: "/org/reports",
          icon: <PiBuildingApartmentFill />,
        },
        {
          title: "Settings",
          to: "/org/settings",
          icon: <PiBuildingApartmentFill />,
        },
      ];
  return (
    // <ProtectedRoute>
      <main className="flex h-screen w-screen">
        <DashboardSidebar title="Organization" menuItems={menuItems}/>
        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    // </ProtectedRoute>
  );
}
