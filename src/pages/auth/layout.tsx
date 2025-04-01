import React from "react";
import Input from "../../components/input";
import { IoLockClosed, IoPerson } from "react-icons/io5";
import Button from "../../components/button";
import { motion } from "framer-motion";
import waveImg from "../../assets/login-wave.png";
import logo from "../../assets/logo-white.png";

interface LayoutProps {
  imgSrc: string;
}

export const Layout: React.FC<LayoutProps> = ({ imgSrc }) => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center pt-18 lg:px-20 lg:pt-32 md:px-20 md:pt-32 md:pb-10">
        {/* wave bottom */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          className="absolute lg:block bottom-0 w-full z-10 lg:-z-10 md:-z-10"
          src={waveImg}
          alt="Background wave"
        />

        {/* Main container */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="
            relative
            w-full
            h-full
            bg-primary/20
            lg:bg-primary/5
            md:bg-primary/5
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
              gap-10
              h-[70%]
              w-full
              lg:w-[60%]
              lg:h-full
              lg:border-r-2
              border-sky-900/35
            "
          >
            <img className="w-40" src={logo} />
            <div className="w-full flex items-center -mt-10 lg:items-center flex-col gap-2">
              <Input placeholder="Email" icon={<IoPerson />} />
              <Input
                placeholder="Password"
                type="password"
                icon={<IoLockClosed />}
              />
              <a className="text-sm" href="">
                Forgot password?
              </a>
              <Button className="w-fit mt-5">Login</Button>
            </div>
            {/* <p className="text-sm mt-4 text-center">
              Don't have an account?{" "}
              <a className="font-semibold text-blue-500 hover:underline">
                Signup
              </a>
            </p> */}
          </div>

          {/* right section */}
          <div
            className="
              hidden
              lg:flex
              flex-col
              items-center
              justify-start
              gap-2
              h-[30%]
              w-full
              lg:w-[40%]
              lg:h-full
              text-center
            "
          >
            <img
              src={imgSrc}
              className="w-52 lg:w-80 md:w-64 max-w-full"
              alt="Admin Login"
            />
            <h1 className="">Welcome Back!</h1>
            <p>Don't have an account?</p>
            <Button>Sign up</Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
