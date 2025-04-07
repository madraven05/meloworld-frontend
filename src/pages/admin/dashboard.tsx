import React from "react";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { TabGroup, TabList } from "@headlessui/react";
import DashboardSidebar from "../../components/ui/sidebar";

const AdminDashboard: React.FC = () => {
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
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Panel */}
      <div
        className="
        w-full
        h-full
        flex
        p-10
        flex-wrap
        gap-5
        items-start
        justify-center
      "
      >
        {/* stats */}
        <div
          className="
          w-full
          flex
          flex-wrap
          justify-around
          items-center
            gap-5
            lg:gap-0
        "
        >
          {stats.map((stat, id) => (
            <div
              className="px-5 py-3 w-full lg:w-fit bg-primary/10 hover:bg-primary/20 hover:-translate-y-1 transition duration-200 gap-4 shadow-lg backdrop-blur-lg rounded-lg flex justify-start items-center"
              key={id}
            >
              <div className="bg-primary/40 rounded-lg text-5xl p-1">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-bold">
                  {stat.stat.toLocaleString()}
                </p>
                <p className="text-xs">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      
    </main>
  );
};

export default AdminDashboard;
