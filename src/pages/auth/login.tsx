import React from "react";
import Button from "../../components/button";
import { IoLockClosed, IoPerson } from "react-icons/io5";
import Input from "../../components/input";

const Login: React.FC = () => {
  return (
    <>
      <div className="w-full flex items-center -mt-10 lg:items-center flex-col gap-2">
        <Input placeholder="Email" icon={<IoPerson />} />
        <Input placeholder="Password" type="password" icon={<IoLockClosed />} />
        <a className="text-sm" href="">
          Forgot password?
        </a>
        <Button className="w-fit mt-5">Login</Button>
      </div>
      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <a className="font-semibold hover:underline">Sign up</a>
      </p>
    </>
  );
};

export default Login;
