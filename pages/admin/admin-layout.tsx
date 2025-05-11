// components/admin/AdminLayout.tsx
import React, { ReactNode } from 'react'
import DashboardSidebar from 'src/components/ui/sidebar'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <main className="relative flex h-screen w-screen items-start justify-start">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Page content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </main>
  )
}
