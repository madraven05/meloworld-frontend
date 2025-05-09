import React from "react";
import { useAuthStore } from "./stores/auth-store";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path }) => {
  const { isAuthenticated, userRole } = useAuthStore();
  return isAuthenticated && userRole && path.includes(userRole.toLocaleLowerCase() as string) ? <Outlet /> : <Navigate to={path} />;
 
};

export default PrivateRoute;
