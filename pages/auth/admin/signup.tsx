import React from "react";
import AuthLayout from "../layout";
import SignUpForm from "@/components/forms/signup";

const AdminSignup = () => {
  return (
    <AuthLayout imgSrc="">
      <SignUpForm userRole="admin" />
    </AuthLayout>
  );
};

export default AdminSignup;
