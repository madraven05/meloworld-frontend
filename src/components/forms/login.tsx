import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../ui/button";
import { IoKey, IoMail } from "react-icons/io5";
import Input from "../ui/input";
import { signAndRequest } from "../../lib/aws-axios";
import { useNavigate } from "react-router-dom";
import { FormState } from "./signup";

const ADMIN_HOST = import.meta.env.VITE_AWS_ADMIN_HOST;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<FormState>({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;

    // add constraints
    switch (key) {
      case "email":
        if (value.length < 2) {
          setFormState((prevState) => ({
            ...prevState,
            [key]: { value: value, error: "Minimum 3 characters Required" },
          }));
        } else {
          setFormState((prevState) => ({
            ...prevState,
            [key]: { value: value, error: "" },
          }));
        }
        break;

      case "password":
        if (value.length < 8) {
          setFormState((prevState) => ({
            ...prevState,
            [key]: { value: value, error: "Minimum 8 characters Required" },
          }));
        } else {
          setFormState((prevState) => ({
            ...prevState,
            [key]: { value: value, error: "" },
          }));
        }
        break;

      default:
        break;
    }
  };

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errorFlag = false;
    Object.values(formState).forEach((value) => {
      if (value.error.length > 0) {
        errorFlag = true;
      }
    });

    if (errorFlag) return;

    const payload = {
      email: formState["email"].value,
      password: formState["password"].value,
    };

    console.log(payload);

    // add post api here
    signAndRequest(
      "POST",
      ADMIN_HOST,
      "/default/psychometricAdmin/admin?action=login",
      payload
    ).then(() => {
        alert("Login successful!");
        navigate("/admin/dashboard");
      })
      .catch((err: string) => {
        alert(err);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSignup}
        className="w-full flex items-center -mt-10 lg:items-center flex-col gap-2"
      >
      
        <div className="flex flex-col gap-1 w-full justify-start items-center mb-5">
          <label className="text-sm">Please enter your Email ID</label>
          <Input
            name="email"
            onChange={handleFormChange}
            value={formState["email"].value}
            placeholder="Email"
            icon={<IoMail />}
          />
          {formState["email"].error.length > 0 && (
            <p className="text-xs text-red-400">{formState["email"].error}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full justify-start items-center mb-5">
          <label className="text-sm">Type a password</label>
          <Input
            name="password"
            onChange={handleFormChange}
            type="password"
            value={formState["password"].value}
            placeholder="Password"
            icon={<IoKey />}
          />
          {formState["password"].error.length > 0 && (
            <p className="text-xs text-red-400">
              {formState["password"].error}
            </p>
          )}
        </div>
        <Button type="submit" className="w-fit mt-5">
          Login
        </Button>
      </form>
      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <a className="font-semibold hover:underline">Sign up</a>
      </p>
    </>
  );
};

export default Login;
