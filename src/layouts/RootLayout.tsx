import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <h1>root layout</h1>
      <Outlet />
    </>
  );
};

export { RootLayout };
