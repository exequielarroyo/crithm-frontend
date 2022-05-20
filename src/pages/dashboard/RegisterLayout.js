import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import style from "../../styles/Register.module.css";

const RegisterLayout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [tab, setTab] = useState(1);

  function handlePRF(e) {
    setTab(1);
    navigate(`/dashboard/register/${id}`, { replace: true });
  }
  function handleReview(e) {
    setTab(2);
    navigate(`/dashboard/register/${id}/review`, { replace: true });
  }

  useEffect(() => {
    setTab(location.pathname.split("/")[4] === "review" ? 2 : 1);
  }, [location]);

  return (
    <>
      {/* <nav className={style.nav_bar}>
        <h1>Project Registration Form</h1>
        <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
        {id !== "create" && (
          <div>
            <button onClick={handlePRF}>PRF</button>
            <button onClick={handleReview}>Review</button>
          </div>
        )}
      </nav> */}
      <div className={style.container}>
        <div className={style.nav}>
          <div className={`${tab === 1 ? style.active : style.tab}`} onClick={handlePRF}>
            Project registration
          </div>
          {id !== "create" && (
            <div className={`${tab === 2 ? style.active : style.tab}`} onClick={handleReview}>
              Review project
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default RegisterLayout;
