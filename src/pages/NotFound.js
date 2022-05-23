import React from "react";
import style from "../styles/Notfound.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  return (
    <div className={style.container}>
      <Player src="/assets/lottie/error.json" style={{ height: "200px" }} loop autoplay />
      {/* <Lottie animationData={groovyWalkAnimation} style={{height: '200px'}}/> */}
      <p>Page not found</p>
      <div><button onClick={handleBack}>Back</button></div>
    </div>
  );
};

export default NotFound;
