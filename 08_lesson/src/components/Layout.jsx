import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;