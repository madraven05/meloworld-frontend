"use client";

import React, { useState } from "react";
import logoTransparent from "@/assets/logo-transparent.png";
import { GoHomeFill } from "react-icons/go";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoLogOut, IoPeople } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight, FaWpforms } from "react-icons/fa6";
import { useAuthStore } from "../stores/auth-store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog/dialog";
import Button from "./button/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DashboardSidebar: React.FC = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const router = useRouter();
  const pathname = usePathname();
  const menuItems = [
    {
      title: "Dashboard",
      to: "/admin/dashboard/",
      icon: <GoHomeFill />,
    },
    {
      title: "Assessments",
      to: "/admin/assessments",
      icon: <FaWpforms />,
    },
    {
      title: "Organizations",
      to: "/admin/organizations",
      icon: <PiBuildingApartmentFill />,
    },
    {
      title: "Candidates",
      to: "/admin/candidates",
      icon: <IoPeople />,
    },
    {
      title: "Email Management",
      to: "/admin/email",
      icon: <PiBuildingApartmentFill />,
    },
    {
      title: "Settings",
      to: "/admin/settings",
      icon: <PiBuildingApartmentFill />,
    },
  ];

  const [expandMobileMenu, setExpandMobileMenu] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="w-1/5 h-screen sticky top-0 bg-sky-900 hidden lg:block backdrop-blur-lg shadow-2xl z-100">
        <div className="flex gap-1 justify-center border-b-2 border-secondary rounded-b-xl items-center">
          <img className="w-20 -ml-3 mt-2" src={logoTransparent.src} />
          <h2 className="text-primary mt-3">Admin Portal</h2>
        </div>
        <div className="w-full flex flex-col px-4 mt-10 gap-5 items-center text-secondary">
          {menuItems.map((item, idx) => {
            const isActive = pathname.startsWith(item.to);
            return (
              <Link
                href={item.to}
                key={idx}
                className={`w-full no-underline p-2 rounded-xl transition duration-300 flex gap-2 items-center justify-start ${
                  isActive
                    ? "bg-secondary text-sky-900 translate-x-2 shadow-secondary shadow-md"
                    : "hover:bg-secondary hover:text-sky-900 hover:translate-x-2"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            );
          })}

          <Dialog>
            <DialogTrigger asChild>
              <div className="w-full no-underline hover:bg-secondary shadow-secondary hover:shadow-md hover:text-sky-900 p-2 rounded-xl transition duration-300 hover:translate-x-2 flex gap-2 items-center justify-start cursor-pointer">
                <IoLogOut />
                <span>Logout</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogDescription>
                  Are you sure you want to logout?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={clearAuth} size="sm">
                  Logout
                </Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </aside>

      {/* Mobile toggle button */}
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

      {/* Mobile slide-out sidebar */}
      <AnimatePresence>
        {expandMobileMenu && (
          <motion.aside
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "backInOut" }}
            className="fixed top-0 left-0 w-3/4 h-screen bg-sky-900 lg:hidden backdrop-blur-lg shadow-2xl z-100"
          >
            <div className="flex gap-1 justify-center border-b-2 border-secondary rounded-b-xl items-center">
              <img className="w-20 -ml-3 mt-2" src={logoTransparent.src} />
              <h2 className="text-primary mt-3">Admin Portal</h2>
            </div>
            <div className="w-full flex flex-col px-6 mt-10 gap-5 items-center text-secondary">
              {menuItems.map((item, idx) => {
                const isActive = pathname.startsWith(item.to);
                return (
                  <Link
                    href={item.to}
                    key={idx}
                    onClick={() => setExpandMobileMenu(false)}
                    className={`w-full no-underline p-2 rounded-xl transition duration-300 flex gap-2 items-center justify-start ${
                      isActive
                        ? "bg-secondary text-sky-900 translate-x-2 shadow-secondary shadow-md"
                        : "hover:bg-secondary hover:text-sky-900 hover:translate-x-2"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                );
              })}

              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full no-underline hover:bg-secondary shadow-secondary hover:shadow-md hover:text-sky-900 p-2 rounded-xl transition duration-300 hover:translate-x-2 flex gap-2 items-center justify-start cursor-pointer">
                    <IoLogOut />
                    <span>Logout</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Logout</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to logout?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button onClick={clearAuth} size="sm">
                      Logout
                    </Button>
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardSidebar;
