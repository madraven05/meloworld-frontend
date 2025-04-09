import React, { useEffect } from "react";
import logoTransparent from "../../assets/logo-transparent.png";
import { GoHomeFill } from "react-icons/go";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoLogOut, IoPeople } from "react-icons/io5";
import { useAuthStore } from "../stores/auth-store";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa6";

const DashboardSidebar: React.FC = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const menuItems = [
    {
      title: "Dashboard",
      to: "/admin/dashboard/home",
      icon: <GoHomeFill />,
    },
    {
      title: "Assessments",
      to: "/admin/dashboard/assessments",
      icon: <FaWpforms />,
    },
    {
      title: "Organizations",
      to: "/admin/dashboard/organizations",
      icon: <PiBuildingApartmentFill />,
    },
    {
      title: "Candidates",
      to: "/admin/dashboard/home",
      icon: <IoPeople />,
    },
    {
      title: "Email Management",
      to: "/admin/dashboard/home",
      icon: <PiBuildingApartmentFill />,
    },
    {
      title: "Settings",
      to: "/admin/dashboard/home",
      icon: <PiBuildingApartmentFill />,
    },
    {
      title: "Logout",
      onClick: () => {
        clearAuth();
      },
      icon: <IoLogOut />,
    },
  ];
  return (
    <div className="w-1/5 h-full bg-sky-900 hidden lg:block backdrop-blur-lg shadow-2xl z-100">
      <div className="flex gap-2 justify-center border-b-2 border-secondary rounded-b-xl items-center">
        <img className="w-20 -ml-5 mt-2" src={logoTransparent} />
        <h3 className="text-primary mt-3">Admin Portal</h3>
      </div>
      <div className="w-full flex flex-col px-4 mt-10 gap-5 items-center text-secondary">
        {menuItems.map((item, idx) => (
          <Link
            to={item.to!}
            onClick={() => item.onClick!()}
            key={idx}
            className="w-full hover:bg-secondary shadow-secondary hover:shadow-md hover:text-sky-900 p-2 rounded-xl transition duration-300 hover:translate-x-2 flex gap-2 items-center justify-start"
          >
            <p className="">{item.icon}</p>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
