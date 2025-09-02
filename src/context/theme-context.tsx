import { createContext } from "react";

export type Theme = "dark" | "light" | "system";

export type ContextValues = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const themeContext = createContext<ContextValues | null>(null);

export default themeContext;
