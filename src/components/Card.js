import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/Project.module.css'

const Card = ({ title, description }) => {
  return (
    <div className={style.card}>
      {!title ? (
        <div className={style.icon}>
          <FontAwesomeIcon icon={faPlus} size='6x' />
        </div>
      ) : (
        <div className={style.insideCard}>
          <h2>{title}</h2>
          <p className={style.p}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
