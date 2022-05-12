import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/Payment.module.css";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className={style.paymentBody}>
      {/* ---- NAV BAR ---- */}
      <div className={style.nav}>
        <nav className={style.nav_bar}>
          <h1>Payment</h1>
          <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
        </nav>
      </div>
      <form className={style.paymentform}>
        <div className={style.radios}>
          <input type="radio" className={style.radio} />
          <label className={style.radiolabel}>Android/IOS</label>
        </div>
        <div className={style.radios}>
          <input type="radio" className={style.radio} />
          <label className={style.radiolabel}>Web</label>
        </div>
        <div className={style.radios}>
          <input type="radio" className={style.radio} />
          <label className={style.radiolabel}>Desktop/App/Web</label>
        </div>
      </form>
      <button
        onClick={() => {
          navigate("/payment/credit");
        }}
      >
        Credit/Debit
      </button>
      <button
        onClick={() => {
          navigate("/payment/gcash");
        }}
      >
        GCash
      </button>
    </div>
  );
};

export default Payment;
