"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../ui/button/button";
import { IoKey, IoMail } from "react-icons/io5";
import Input from "../ui/input/input";
import { FormState } from "./signup";
import { loginService } from "../../services/auth";
import { useAuthStore } from "../stores/auth-store";
import { UserRole } from "../types";
import { useToast } from "../hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginProps {
  userRole: UserRole;
}

const LoginForm: React.FC<LoginProps> = ({ userRole }) => {
  const { token, hydrated } = useAuthStore();
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const { toast } = useToast();

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

  useEffect(() => {
    if (token && hydrated) {
      if (userRole === "admin") {
        router.replace("/admin/dashboard");
      } else if (userRole === "candidate") {
        router.replace("/candidate");
      } else if (userRole === "therapist") {
        router.replace("/therapist/dashboard");
      }
    }
  }, [token, userRole, router, hydrated]);

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

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errorFlag = false;
    Object.values(formState).forEach((value) => {
      if (value.error.length > 0) {
        errorFlag = true;
      }
    });

    if (errorFlag) return;

    // send login request
    try {
      let response = null as {
        status: number;
        ok: boolean;
        data: any;
        headers: Headers;
      } | null;

      switch (userRole) {
        case "admin":
          response = await loginService.admin(
            formState.email.value,
            formState.password.value
          );
          if (response.ok) {
            const { token, name, email } = response.data;
            toast({
              title: "Admin signup successful",
              description: "Redirecting to admin dashboard…",
              variant: "success",
              position: "top-right",
            });
            setAuth(token, "admin", { name, email });
            router.push("/admin/dashboard");
          }
          break;

        case "candidate":
          response = await loginService.candidate(
            formState.email.value,
            formState.password.value
          );
          if (response.ok) {
            const { token, name, email } = response.data;
            setAuth(token, "candidate", { name, email });
            toast({
              title: "Login successful",
              description: "Redirecting to candidate portal…",
              variant: "success",
              position: "top-right",
            });
            router.push("/candidate");
          }
          break;

        case "therapist":
          response = await loginService.therapist(
            formState.email.value,
            formState.password.value
          );
          if (response.ok) {
            const { therapist } = response.data;
            const { email, therapist_name, therapist_id, license_number } =
              therapist;
            setAuth(`${therapist_id + "-" + license_number}`, "candidate", {
              name: therapist_name,
              email,
            });
            toast({
              title: "Login successful",
              description: "Redirecting to therapist dashboard…",
              variant: "success",
              position: "top-right",
            });
            router.push("/candidate");
          }
          break;

        default:
          // you can handle unsupported roles here
          toast({
            title: "Role not supported",
            variant: "error",
            position: "top-right",
          });
          return;
      }
    } catch (err) {
      toast({
        title: "Login failed",
        description: (err as any).message,
        variant: "error",
        // position: "top-right",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
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
          <label className="text-sm">Enter password</label>
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
        <Link
          href={`/auth/${userRole}/signup`}
          className="font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
