import React from "react";
import { useAuthStore } from "./stores/auth-store";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Outlet /> : <Navigate to={path} />;
};

export default PrivateRoute;
