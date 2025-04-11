import React from "react";

import DashboardSidebar from "../../components/ui/sidebar";
import { Outlet, Route, Routes } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  return (
    <main className="relative flex h-screen w-screen items-start  justify-start">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Panel */}
      <Outlet/>
    </main>
  );
};

export default AdminDashboard;
