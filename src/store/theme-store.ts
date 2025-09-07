import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

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
        applyTheme(theme);
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

const applyTheme = (theme: Theme) => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
};

if (typeof window !== "undefined") {
  const initialTheme = useThemeStore.getState().theme;
  applyTheme(initialTheme);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", () => {
    const currentTheme = useThemeStore.getState().theme;
    if (currentTheme === "system") {
      applyTheme("system");
    }
  });
}

export { useThemeStore };
