import React from "react";

const PriceCard = ({ pri_card, pri_card1, pri_card2, pri_card3 }) => {
  return (
    <div className="PricingCard">
      <div>
        <p className="pri_card">{pri_card}</p>
        <p className="pri_card1">{pri_card1}</p>
        <p className="pri_card2">{pri_card2}</p>
        <p className="pri_card3">{pri_card3}</p>
      </div>
    </div>
  );
};

export default PriceCard;
