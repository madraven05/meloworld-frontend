// stores/authStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserRole } from "../types";


interface UserMetadata {
  name: string;
  email: string;
  [key: string]: any;
}

interface AuthStore {
  token: string | null;
  userRole: UserRole | null;
  metadata: UserMetadata | null;
  isAuthenticated: boolean;
  setAuth: (token: string, UserRole: UserRole, metadata: UserMetadata) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        userRole: null,
        metadata: null,
        isAuthenticated: false,

        setAuth: (token, userRole, metadata) =>
          set(
            {
              token,
              userRole,
              metadata,
              isAuthenticated: true,
            },
            false,
            "auth/setAuth"
          ),

        clearAuth: () =>
          set(
            {
              token: null,
              userRole: null,
              metadata: null,
              isAuthenticated: false,
            },
            false,
            "auth/clearAuth"
          ),
      }),
      {
        name: "auth-storage", // key in localStorage
      }
    )
  )
);
