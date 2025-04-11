import React, { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [navbarItems] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Contact", link: "#" },
  ]);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Desktop navbar (shown only in lg and md screens) */}
      <div className="bg-primary/5 backdrop-blur-xl w-full rounded-xl p-5 shadow-lg lg:flex md:flex gap-5 hidden">
        {navbarItems.map((item, idx) => (
          <a className="font-semibold" href={item.link} key={idx}>
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Button (hidden in lg and md) */}
      <div className="lg:hidden md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="fixed top-5 right-5 rounded-full p-2 bg-primary/20 shadow-lg z-50"
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
              bg-primary/70
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
                <a
                  className="font-semibold"
                  href={item.link}
                  key={idx}
                >
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
