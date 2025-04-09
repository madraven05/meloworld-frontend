import React, { useEffect } from "react";

import DashboardSidebar from "../../components/ui/sidebar";
import { useAuthStore } from "../../components/stores/auth-store";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminHome from "./panels/home/admin-home";

const AdminDashboard: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userType = useAuthStore((state) => state.userType);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || userType !== "ADMIN") {
      navigate("/admin/login");
    } else if(isAuthenticated && userType == "ADMIN") {
      navigate("/admin/dashboard/home");
    }
  }, [isAuthenticated, userType]);

  return (
    <main className="flex h-screen w-screen items-start  justify-start">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Panel */}
      <Routes>
        <Route path="home" element={<AdminHome />} />
      </Routes>
    </main>
  );
};

export default AdminDashboard;
