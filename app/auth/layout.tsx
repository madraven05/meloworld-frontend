"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-white.png";


interface AuthLayoutProps {
  imgSrc: string;
  children?: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ imgSrc, children }) => {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center pt-10 lg:px-10 lg:pt-20 md:px-20 md:pt-32 md:pb-10">
        {/* Main container */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="
            absolute
            bottom-0
            
            lg:relative
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
            <img className="w-40 mb-5" src={logo.src} />
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AuthLayout;
