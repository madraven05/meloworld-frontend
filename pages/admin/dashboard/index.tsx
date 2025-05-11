// pages/admin/dashboard/home.tsx
import AdminHome from "../../../src/components/panels/home/admin-home"; // or wherever your component lives
import AdminLayout from "../admin-layout";
import ProtectedRoute from "@/components/protected-route";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AdminHome />
      </AdminLayout>
    </ProtectedRoute>
  );
}
