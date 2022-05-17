import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import style from "../../styles/DashboardLayout.module.css";

const DashboardLayout = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  document.title = "Crithm | dashboard";

  async function handleSignout() {
    await logout();
    navigate("/signin");
  }
  function handleProfile() {
    navigate("/dashboard/profile");
  }
  function handleDashboard() {
    navigate("/dashboard");
  }

  return (
    <>
      <div className={style.container}>
        <img className={style.logo}
          src="/assets/images/logo.png"
          alt="logo"
          height="24"
          onClick={() => {
            navigate("/");
          }}
        />
        <div>
          <button onClick={handleDashboard}>Dashboard</button>
          <button onClick={handleProfile}>Profile</button>
          <button onClick={handleSignout}>Sign out</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
