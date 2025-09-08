import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/types/theme";

type State = {
  theme: Theme;
};

type Action = {
  setTheme: (theme: Theme) => void;
};

const useThemeStore = create<State & Action>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme(theme) {
        set({ theme });
      },
    }),
    {
      name: "ui-theme",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

export { useThemeStore };
