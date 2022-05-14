import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const DashboardLayout = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  async function handleSignout() {
    await logout();
    navigate("/signin");
  }
  return (
    <>
      <div>
        <button onClick={handleSignout}>Sign out</button>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
