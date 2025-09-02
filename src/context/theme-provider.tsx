import { useEffect, useState, type ReactNode } from "react";
import themeContext, {
  type ContextValues,
  type Theme,
} from "@/context/theme-context";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("ui-theme") as Theme) || "system"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const contextValues: ContextValues = {
    theme,
    setTheme(theme) {
      localStorage.setItem("ui-theme", theme);
      setTheme(theme);
    },
  };

  return (
    <themeContext.Provider value={contextValues}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
