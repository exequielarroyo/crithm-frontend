import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import style from "../../styles/Register.module.css";

const RegisterLayout = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  function handlePRF(e) {
    navigate(`/dashboard/register/${id}`, { replace: true });
  }
  function handleReview(e) {
    navigate(`/dashboard/register/${id}/review`, { replace: true });
  }

  return (
    <>
      <nav className={style.nav_bar}>
        <h1>Project Registration Form</h1>
        <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
        {id !== "create" && (
          <div>
            <button onClick={handlePRF}>PRF</button>
            <button onClick={handleReview}>Review</button>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default RegisterLayout;
