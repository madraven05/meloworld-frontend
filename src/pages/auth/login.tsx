import React, { useEffect } from "react";
import Input from "../../components/input";
import { IoLockClosed, IoPerson } from "react-icons/io5";
import Button from "../../components/button";
import adminImage from "../assets/admin-login.png";
import {motion} from "framer-motion"

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center px-8">
        <motion.div initial={{y: -100}} animate={{y: 0}} transition={{duration: 1, ease: "easeIn"}} className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-2xl flex flex-col-reverse lg:flex-row gap-6 justify-center items-center">
          {/* Left Section: Login Form */}
          <div className="flex flex-col justify-start items-center lg:items-start p-5 gap-10 h-[60%] w-full lg:w-[60%] lg:h-full lg:border-b-0 lg:border-r-2 border-gray-200">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="w-full flex items-center lg:items-start flex-col gap-2">
              <Input placeholder="Email" icon={<IoPerson />} />
              <Input
                placeholder="Password"
                type="password"
                icon={<IoLockClosed />}
              />
              <a className="text-sm text-blue-500 hover:underline" href="">
                Forgot password?
              </a>
              <Button className="w-fit mt-5">Login</Button>
            </div>
            <p className="text-sm mt-4 text-center">
              Don't have an account?{" "}
              <a className="font-semibold text-blue-500 hover:underline">
                Signup
              </a>
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="flex flex-col items-center justify-center h-[40%] w-full lg:w-[40%] lg:h-full text-center">
            <img
              src={adminImage}
              className="w-52 lg:w-96 md:w-64 max-w-full"
              alt="Admin Login"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
