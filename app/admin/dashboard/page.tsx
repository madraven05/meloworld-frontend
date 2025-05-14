"use client";

import React from "react";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import blankProfilePic from "@/assets/blank-profile-pic.webp";
import { useAuthStore } from "@/components/stores/auth-store";
import AssessmentTable from "@/components/panels/admin/home/assessment-table";
import OrganizationTable from "@/components/panels/admin/home/organizations-table";
import ReportsTable from "@/components/panels/admin/home/reports-table";
import EmailsTable from "@/components/panels/admin/home/emails-table";

const stats = [
  {
    title: "Organizations",
    stat: 19,
    icon: <PiBuildingApartmentFill />,
  },
  {
    title: "Total Candidates",
    stat: 3242,
    icon: <IoPeople />,
  },
  {
    title: "Assessments Completed",
    stat: 2567,
    icon: <FaWpforms />,
  },
  {
    title: "Reports Generated",
    stat: 1895,
    icon: <FaWpforms />,
  },
];

const AdminDashboardPage: React.FC = () => {
  const metadata = useAuthStore((state) => state.metadata);

  return (
    <div className="dashboard-panel">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1>
            Welcome back <span className="text-primary">{metadata?.name}!</span>
          </h1>
          <p>Here's an overview of your activity</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <IoNotifications className="text-2xl" />
          <img
            src={blankProfilePic.src}
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>
      </div>
      {/* stats */}
      <div
        className="
      w-full
      flex
      flex-wrap
      justify-center
      lg:justify-between
      items-start
        gap-5
        lg:gap-0
    "
      >
        {/* Stats */}
        {stats.map((stat, id) => (
          <div
            className="px-3 lg:px-5 py-2 card lg:w-52 min-w-32 hover:-translate-y-1 transition duration-200 gap-1 flex flex-col justify-start items-center"
            key={id}
          >
            <div className="text-primary/70 rounded-lg text-4xl p-1">
              {stat.icon}
            </div>
            <p className="text-xl lg:text-3xl font-bold">
              {stat.stat.toLocaleString()}
            </p>
            <p className="text-xs">{stat.title}</p>
          </div>
        ))}
      </div>
      {/* Main content */}
      <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AssessmentTable />
        <OrganizationTable />
        <ReportsTable />
        <EmailsTable />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
