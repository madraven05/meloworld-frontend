// components/ProtectedRoute.tsx
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";
import { useAuthStore } from "./stores/auth-store";

type Role = "admin" | "candidate" | "org";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { token, userRole, hydrated } = useAuthStore();

  const getTargetRole = (path: string): Role | undefined => {
    if (path.includes("/admin")) return "admin";
    if (path.includes("/candidate")) return "candidate";
    if (path.includes("/org")) return "org";
    return undefined;
  };

  const targetRole = getTargetRole(router.pathname);

  /** helper: login route for a role */
  const loginPath = (role?: Role) =>
    role ? `/auth/${role}/login` : "/";


  useEffect(() => {
    if (!hydrated) return; // wait until Zustand rehydrates

    // A)  no token → go to that section's login
    if (!token) {
      router.replace(loginPath(targetRole));
      return;
    }

    // B)  has token but wrong role → kick to that section's login
    if (token && targetRole && userRole && userRole !== targetRole) {
      router.replace(loginPath(targetRole));
    }
  }, [hydrated, token, userRole, targetRole, router]);

  /* Wait until hydration check is complete (avoids flash) */
  if (!hydrated) return null;

  /* If token exists but role mismatch, show 403 (avoid loop) */
  if (token && targetRole && userRole && userRole !== targetRole) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        403 • Unauthorized
      </div>
    );
  }

  /* Authenticated & correct role → render content */
  return <>{children}</>;
}
