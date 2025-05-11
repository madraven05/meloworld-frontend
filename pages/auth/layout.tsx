import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-white.png";


interface AuthLayoutProps {
  imgSrc: string;
  children?: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ imgSrc, children }) => {
  return (
    <>
      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="fixed lg:block bottom-0 w-full z-10 lg:-z-10 md:-z-10"
        src={waveImg}
        alt="Background wave"
      /> */}
      <div className="h-full w-full flex items-center justify-center pt-18 lg:px-20 lg:pt-32 md:px-20 md:pt-32 md:pb-10">
        {/* Main container */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="
            absolute
            bottom-0
            top-18
            lg:relative
            lg:top-0
            md:relative
            z-10
            w-full
            h-full
            
            
            lg:p-10
            backdrop-blur-3xl
            shadow-xl
            rounded-t-4xl
            lg:rounded-xl
            md:rounded-xl
            flex
            flex-col-reverse
            lg:flex-row
            gap-6
            justify-center
            items-center
            overflow-auto
          "
        >
          <img
            src={imgSrc}
            alt="Centered for md screens"
            className="
              block
              md:block
              lg:hidden
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              opacity-20
              pointer-events-none
              max-w-[80%]
              z-0
            "
          />

          {/* Login Form */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              justify-center
              items-center
              lg:items-center
              px-14
              gap-2
              h-[70%]
              w-full
              lg:w-full
              lg:h-full
              
            "
          >
            <img className="w-40 mb-10" src={logo.src} />
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
};
