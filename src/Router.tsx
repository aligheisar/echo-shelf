import { createBrowserRouter } from "react-router";

import { RootLayout } from "@/layouts/RootLayout";
import { PlayerPage } from "@/pages/PlayerPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: PlayerPage }],
  },
]);

export { router };
