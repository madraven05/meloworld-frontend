import React, { useEffect } from "react";
import { useAuthStore } from "../../../../components/stores/auth-store";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import blankProfilePic from "../../../../assets/blank-profile-pic.webp";
import dashboardImg from "../../../../assets/Work time-amico.png";
import AssessmentTable from "./assessment-table";
import OrganizationTable from "./organizations-table";
import ReportsTable from "./reports-table";
import EmailsTable from "./emails-table";

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

const AdminHome: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userType = useAuthStore((state) => state.userRole);
  const token = useAuthStore((state) => state.token);

  const metadata = useAuthStore((state) => state.metadata);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated]);

  return (
    <div className="dashboard-panel">
      <img
        src={dashboardImg}
        className="fixed top-1/2 left-1/2 -translate-y-50 -translate-x-50 lg:translate-y-0 lg:top-0 lg:w-1/2 -z-10 opacity-20"
      />
      <div className="flex w-full justify-between items-center">
        <div>
          <h1>
            Welcome back <span className="text-primary">{metadata!.name}!</span>
          </h1>
          <p>Here's an overview of your activity</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <IoNotifications className="text-2xl" />
          <img
            src={blankProfilePic}
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
      <div className="w-full flex flex-col flex-wrap gap-2 justify-between">
        <div className="flex flex-wrap lg:flex-wrap gap-2 w-full items-center">
          <AssessmentTable />
          
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full items-center">
        <OrganizationTable />
          <ReportsTable />
          <EmailsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
