// stores/authStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UserType = "ADMIN" | "ORG" | "CANDIDATE";

interface UserMetadata {
  name: string;
  email: string;
  [key: string]: any;
}

interface AuthStore {
  token: string | null;
  userType: UserType | null;
  metadata: UserMetadata | null;
  isAuthenticated: boolean;
  setAuth: (token: string, userType: UserType, metadata: UserMetadata) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        userType: null,
        metadata: null,
        isAuthenticated: false,

        setAuth: (token, userType, metadata) =>
          set(
            {
              token,
              userType,
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
              userType: null,
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
