import React from "react";
import style from "../styles/Loading.module.css";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../lottie/loading.json";

const Loading = () => {
  return (
    <div className={style.container}>
      <Lottie animationData={groovyWalkAnimation} style={{height: '200px'}}/>
    </div>
  );
};

export default Loading;
