// components/admin/AdminLayout.tsx
import React, { ReactNode } from "react";
import DashboardSidebar from "src/components/ui/sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    // let the layout grow taller than one screen, and scroll on the <main>, not inside the children
    <main className="flex h-screen w-screen">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">{children}</div>
    </main>
  );
}
