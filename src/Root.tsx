import "@/globals.css";

import { RouterProvider } from "react-router";
import { useTheme } from "@/hook/use-theme";
import { router } from "@/Router";

const Root = () => {
  useTheme();

  return <RouterProvider router={router} />;
};

export default Root;
