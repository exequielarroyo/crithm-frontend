import React from "react";
import style from "../styles/Pricing.module.css";

const PricingCard = ({ plan, srp_price, price,  feature, features }) => {
  return (
    <div className={style.pricingcard}>
      <div>
        <h2 className={style.plan}>{plan}</h2>

        <h1 className={style.srp_price}>
          {srp_price}
          <span className={style.span}>.00</span>
        </h1>
        <h6 className={style.price}>{price}</h6>
        <h5 className={style.feature}>{feature}</h5>
        <h5 className={style.features}>{features}</h5>
      </div>
    </div>
  );
};

export default PricingCard;
