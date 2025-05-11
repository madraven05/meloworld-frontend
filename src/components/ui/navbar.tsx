import React, { useEffect, useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo-transparent.png";
import { useAuthStore } from "../stores/auth-store";

const Navbar: React.FC = () => {
  const { userRole, token, clearAuth } = useAuthStore();
  const [navbarItems, setNavbarItems] = useState<{
    name: string, link?: string, onClick?: () => void;
  }[]>([
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Contact", link: "#" },
  ]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    switch (userRole) {
      case "candidate":
        if (token) {
          setNavbarItems([
            { name: "Home", link: "#" },
            { name: "Logout", link: "#", onClick: clearAuth },
          ]);
        }
        break;

      default:
        setNavbarItems([
          { name: "Home", link: "#" },
          { name: "About", link: "#" },
          { name: "Services", link: "#" },
          { name: "Contact", link: "#" },
        ]);
        break;
    }
  }, [userRole]);

  // if(window.location.pathname.includes("admin")) {
  //   return null;
  // }

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Desktop navbar (shown only in lg and md screens) */}
      <div className="bg-secondary backdrop-blur-xl w-full px-10 py-2 justify-between items-center shadow-lg lg:flex md:flex gap-5 hidden">
        <div className="flex items-center gap-2">
          <img src={logo.src} className="w-12 " />
          <h1 className="text-2xl text-primary">Meloworld</h1>
        </div>
        <div className="h-full flex justify-center items-center gap-5">
          {navbarItems.map((item, idx) => (
            <a onClick={item.onClick} className="font-semibold" href={item.link} key={idx}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Button (hidden in lg and md) */}
      <div className="lg:hidden md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="fixed top-5 right-5 rounded-full p-2 bg-secondary shadow-lg z-50"
        >
          {!showMenu ? (
            <TbMenu3 className="text-2xl" />
          ) : (
            <IoClose className="text-2xl" />
          )}
        </button>

        {/* menu overlay */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.25, ease: "backInOut" }}
              exit={{ x: 50, opacity: 0 }}
              className="
              fixed
              top-18
              right-0
              h-screen
              w-3/4
              md:w-1/2
              bg-secondary
              shadow-lg
              backdrop-blur-lg
              z-50
              flex
              flex-col
              items-center
              pt-10
              gap-10
              rounded-tl-3xl
            "
            >
              {navbarItems.map((item, idx) => (
                <a className="font-semibold" href={item.link} key={idx}>
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
