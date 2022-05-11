import React from "react";
import style from '../styles/Pricing.module.css';

const PriceCard = ({ pri_card, pri_card1, pri_card2, pri_card3 }) => {
  return (
    <div className={style.PricingCard}>
      
      <div >
        <p className={style.pri_card}>{pri_card}</p>
        <p className={style.pri_card1}>{pri_card1}</p>
        <p className={style.pri_card2}>{pri_card2}</p>
        <p className={style.pri_card3}>{pri_card3}</p>
      </div>
    </div>
  );
};

export default PriceCard;
