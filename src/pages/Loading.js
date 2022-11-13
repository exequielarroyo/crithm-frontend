import React from "react";
import style from "../styles/Loading.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div className={style.container}>
      <Player src="/assets/lottie/crithm-loading.json" style={{ height: "200px" }} loop autoplay />
      {/* <Lottie animationData={groovyWalkAnimation} style={{height: '200px'}}/> */}
    </div>
  );
};

export default Loading;
