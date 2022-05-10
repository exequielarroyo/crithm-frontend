import React from "react";
import style from "../styles/App.module.css";

const WCard = ({ W_content_job, W_content, W_div, W_name, W_circle }) => {
  return (
    <div className={style.WhyusCard}>
      <div>
        <p className={style.W_content_job}>{W_content_job}</p>
        <p className={style.W_content}>{W_content}</p>
        <div className={style.W_circle}>{W_circle}</div>
        <p className={style.W_name}>{W_name}</p>
      </div>
    </div>
  );
};

export default WCard;
