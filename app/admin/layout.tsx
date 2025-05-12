import ProtectedRoute from "@/components/protected-route";
import React, { ReactNode } from "react";
import DashboardSidebar from "src/components/ui/sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <ProtectedRoute>
      <main className="flex h-screen w-screen">
        <DashboardSidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    </ProtectedRoute>
  );
}
