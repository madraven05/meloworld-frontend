import React, { useState } from "react";
import logoTransparent from "../../assets/logo-transparent.png";
import { GoHomeFill } from "react-icons/go";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoLogOut, IoPeople } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight, FaWpforms } from "react-icons/fa6";
import { useAuthStore } from "../stores/auth-store";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DashboardSidebar: React.FC = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const location = useLocation();

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
      to: "/admin/dashboard/candidates",
      icon: <IoPeople />,
    },
    {
      title: "Email Management",
      to: "/admin/dashboard/email",
      icon: <PiBuildingApartmentFill />,
    },
    {
      title: "Settings",
      to: "/admin/dashboard/settings",
      icon: <PiBuildingApartmentFill />,
    },
  ];

  const [expandMobileMenu, setExpandMobileMenu] = useState(false);

  return (
    <>
      <div className="w-1/5 h-full bg-sky-900 hidden lg:block backdrop-blur-lg shadow-2xl z-100">
        <div className="flex gap-1 justify-center border-b-2 border-secondary rounded-b-xl items-center">
          <img className="w-20 -ml-3 mt-2" src={logoTransparent} />
          <h2 className="text-primary mt-3">Admin Portal</h2>
        </div>
        <div className="w-full flex flex-col px-4 mt-10 gap-5 items-center text-secondary">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname.startsWith(item.to ?? "");

            return (
              <Link
                to={item.to!}
                key={idx}
                className={`w-full no-underline p-2 rounded-xl transition duration-300 flex gap-2 items-center justify-start ${
                  isActive
                    ? "bg-secondary text-sky-900 translate-x-2 shadow-secondary shadow-md"
                    : "hover:bg-secondary hover:text-sky-900 hover:translate-x-2"
                }`}
              >
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </Link>
            );
          })}

          <div
            onClick={clearAuth}
            className="w-full no-underline hover:bg-secondary shadow-secondary hover:shadow-md hover:text-sky-900 p-2 rounded-xl transition duration-300 hover:translate-x-2 flex gap-2 items-center justify-start cursor-pointer"
          >
            <p>
              <IoLogOut />
            </p>
            <p>Logout</p>
          </div>
        </div>
      </div>

      {/* Mobile collapsible sidebar */}
      <div
        className={`absolute z-50 -translate-y-1/2 top-1/2 ${
          expandMobileMenu ? "right-1/5" : "left-0"
        }`}
      >
        <button
          className="lg:hidden rounded-tr-xl rounded-br-xl px-0.5 py-2 text-lg bg-sky-900 text-secondary h-20 shadow-2xl"
          onClick={() => setExpandMobileMenu(!expandMobileMenu)}
        >
          {!expandMobileMenu ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <AnimatePresence>
        {expandMobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "backInOut" }}
            exit={{ x: "-100%", opacity: 0 }}
            className="fixed w-3/4 h-full bg-sky-900 lg:hidden backdrop-blur-lg shadow-2xl z-100"
          >
            <div className="flex gap-1 justify-center border-b-2 border-secondary rounded-b-xl items-center">
              <img className="w-20 -ml-3 mt-2" src={logoTransparent} />
              <h2 className="text-primary mt-3">Admin Portal</h2>
            </div>
            <div className="w-full flex flex-col px-6 mt-10 gap-5 items-center text-secondary">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname.startsWith(item.to ?? "");

                return (
                  <Link
                    onClick={() => setExpandMobileMenu(false)}
                    to={item.to!}
                    key={idx}
                    className={`w-full no-underline p-2 rounded-xl transition duration-300 flex gap-2 items-center justify-start ${
                      isActive
                        ? "bg-secondary text-sky-900 translate-x-2 shadow-secondary shadow-md"
                        : "hover:bg-secondary hover:text-sky-900 hover:translate-x-2"
                    }`}
                  >
                    <p>{item.icon}</p>
                    <p>{item.title}</p>
                  </Link>
                );
              })}

              <div
                onClick={clearAuth}
                className="w-full no-underline hover:bg-secondary shadow-secondary hover:shadow-md hover:text-sky-900 p-2 rounded-xl transition duration-300 hover:translate-x-2 flex gap-2 items-center justify-start cursor-pointer"
              >
                <p>
                  <IoLogOut />
                </p>
                <p>Logout</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardSidebar;
