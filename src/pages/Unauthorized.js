import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/Unauthorized.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Unauthorized = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  return (
    <div className={style.container}>
      <p>Unauthorized try logging in again</p>
      <Player src="/assets/lottie/unauthorized.json" style={{ height: "200px" }} loop autoplay />
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Unauthorized;
