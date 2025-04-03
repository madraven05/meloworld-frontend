import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/button";
import { IoKey, IoMail, IoPerson } from "react-icons/io5";
import Input from "../../components/input";
import { TbRuler } from "react-icons/tb";
import awsAxios, { signAndRequest } from "../../lib/aws-axios";
import { useNavigate } from "react-router-dom";

type FormState = { [key: string]: { value: string; error: string } };
const ADMIN_HOST = import.meta.env.VITE_AWS_ADMIN_HOST;

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<FormState>({
    name: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    repassword: {
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
      case "name":
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

      case "repassword":
        if (value != formState["password"].value) {
          setFormState((prevState) => ({
            ...prevState,
            [key]: { value: value, error: "Please ensure passwords match" },
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
      name: formState["name"].value,
      email: formState["email"].value,
      password: formState["password"].value,
    };

    console.log(payload);

    // add post api here
    signAndRequest(
      "POST",
      ADMIN_HOST,
      "/default/psychometricAdmin/admin?action=register",
      payload
    ).then(() => {
        alert("Login successful!");
        navigate("/admin/login");
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
        <div className="flex gap-1 flex-col w-full justify-start items-center mb-5">
          <label className="text-sm">Please enter your name</label>
          <Input
            name="name"
            onChange={handleFormChange}
            value={formState["name"].value}
            placeholder="Name"
            icon={<IoPerson />}
          />
          {formState["name"].error.length > 0 && (
            <p className="text-xs text-red-400">{formState["name"].error}</p>
          )}
        </div>
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
        <div className="flex flex-col gap-1 w-full justify-start items-center mb-5">
          <label className="text-sm">Re-enter password</label>
          <Input
            name="repassword"
            onChange={handleFormChange}
            type="password"
            value={formState["repassword"].value}
            placeholder="Re-enter Password"
            icon={<IoKey />}
          />
          {formState["repassword"].error.length > 0 && (
            <p className="text-xs text-red-400">
              {formState["repassword"].error}
            </p>
          )}
        </div>
        <Button type="submit" className="w-fit mt-5">
          Sign Up
        </Button>
      </form>
      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <a className="font-semibold hover:underline">Login</a>
      </p>
    </>
  );
};

export default SignUp;
