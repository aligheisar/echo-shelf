import "@/globals.css";

import { useTheme } from "@/hook/use-theme";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Root = () => {
  useTheme();

  return <ThemeSwitcher />;
};

export default Root;
