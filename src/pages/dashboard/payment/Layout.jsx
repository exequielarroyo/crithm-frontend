import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  document.title = 'Crithm | payment'
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
