// stores/authStore.ts
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { UserRole } from "../types";

interface UserMetadata {
  name: string;
  email: string;
  [k: string]: any;
}

interface AuthStore {
  token: string | null;
  userRole: UserRole | null;
  metadata: UserMetadata | null;
  hydrated: boolean;                               // ← flag you need
  setAuth: (t: string, r: UserRole, m: UserMetadata) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        userRole: null,
        metadata: null,
        hydrated: false,

        setAuth: (token, role, meta) =>
          set({ token, userRole: role, metadata: meta }, false, "auth/setAuth"),

        clearAuth: () =>
          set(
            { token: null, userRole: null, metadata: null },
            false,
            "auth/clearAuth"
          ),
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),

        // 🔑  This object is the *rehydrated* state; just tweak it.
        onRehydrateStorage: () => (state) => {
          if (state) state.hydrated = true;        // ← no “set”, no error
        },
      }
    )
  )
);
