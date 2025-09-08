import { useEffect, useLayoutEffect } from "react";
import { useThemeStore } from "@/store/theme-store";
import type { Theme } from "@/types/theme";

const getSystemTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = getSystemTheme();
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
};

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener(
      "change",
      () => {
        if (useThemeStore.getState().theme === "system") {
          applyTheme("system");
        }
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };
  }, []);
};
