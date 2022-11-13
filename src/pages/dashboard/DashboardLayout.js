import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import style from "../../styles/DashboardLayout.module.css";
import { usePopper } from 'react-popper';

const DashboardLayout = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  document.title = "Crithm | dashboard";
  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {placement: 'bottom-start'});

  async function handleSignout() {
    await logout();
    navigate("/signin");
  }
  function handleProfile() {
    setOpen(false);
    navigate("/dashboard/profile");
  }
  function handleDashboard() {
    setOpen(false)
    navigate("/dashboard");
  }

  return (
    <>
      <div className={style.container} >
        <img
          className={style.logo}
          src="/assets/images/logo.png"
          alt="logo"
          height="24"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className={style.buttons}>
          <button onClick={handleDashboard}>Dashboard</button>
          <div
            ref={setReferenceElement}
            className={style.profile}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            >
            <img src="/assets/images/profile.png"  alt="logo" height="34" />
            <div className={`${style.profile_buttons} ${open ? style.open : style.close}`} style={styles.popper} {...attributes.popper} ref={setPopperElement}>
              <button onClick={handleProfile}>Profile</button>
              <button onClick={handleSignout}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
