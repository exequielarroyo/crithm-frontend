import React from 'react';
import style from '../styles/Process.module.css';

const ProcessCard = ({ title, children, ...rest }) => {
  return (
    <div className={style.card} {...rest}>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default ProcessCard;
