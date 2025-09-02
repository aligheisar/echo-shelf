import { useContext } from "react";
import themeContext from "@/context/theme-context";

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw Error("context should be use inside it provider");
  return context;
};
