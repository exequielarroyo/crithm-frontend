import React from "react";
import style from "../styles/Process.module.css";

const ProcessCard = ({ title, children, ...rest }) => {
  return (
    <div className={style.processcard} {...rest}>
      <div>
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
