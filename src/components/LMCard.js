import React from 'react';
import style from '../styles/Card.module.css';

const LMCard = ({ lm_content, lm_button, lm_img }) => {
  return (
    <div className={style.card}>
      <div>
        <div className={style.img}>{lm_img}</div>
        <p className={style.content}>{lm_content}</p>
      </div>
      <button className={style.button}>{lm_button}</button>
    </div>
  );
};

export default LMCard;
