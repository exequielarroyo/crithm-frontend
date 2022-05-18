import React from "react";
import style from "../../../styles/Payment.module.css";

const Receipt = () => {
  return (
    <div className={style.billing_container}>
      <div className={style.Billing}>
        <form>
          <div className={style.border}>
            <div className={style.upper}>
              <img src="/assets/images/logo.png" alt="logo" height="25" />
              <h5>CRITHM</h5>
              <div>
                <h6>crithm.cf</h6>
                <img className={style.side_design} src="/assets/images/receipt_side.png" />
              </div>
            </div>
            <div className={style.title}>
              <h3>Receipt of Payment</h3>
              <line />
              <div>
                <label>
                  Contact us: <a href="mailto:crithm.cf@gmail.com">crithm.cf@gmail.com</a>
                </label>
              </div>
            </div>
            <div className={style.body}>
              <label className={style.plan}>Plan</label>
              <label className={style.plan}>₱ 00.00</label>
              <label>Sub Total</label>
              <label>₱ 00.00</label>
              <label>VAT %</label>
              <label>10%</label>
              <label className={style.total}>Total:</label>
              <label className={style.total}>₱ 00.00</label>
            </div>
            <label className={style.lower}>Take a screen shot for proof of payment</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Receipt;
