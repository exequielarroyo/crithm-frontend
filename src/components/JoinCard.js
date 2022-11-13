import React from 'react';
import style from '../styles/Join.module.css';

const JoinCard = ({ title, children, ...rest }) => {
  return (
    <div className={style.card} {...rest}>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default JoinCard;