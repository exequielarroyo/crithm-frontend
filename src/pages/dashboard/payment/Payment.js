import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../styles/Payment.module.css";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className={style.payment}>
      <div className={style.payment_border}>
        {/* ---- NAV BAR ---- */}
        <div className={style.nav}>
          <nav className={style.nav_bar}>
            <h1>Choose a Plan</h1>
          </nav>
        </div>
        <div className={style.payment_body}>
          <form>
            <div className={style.radios}>
              <label className={style.custom_radio}>
                <input type="radio" name="radio" value="" className={style.radio} />
                <div className={style.radio_content}>
                  <h2>BASIC</h2>
                  <h1>
                    ₱ 11,000<span className={style.span}>.00</span>
                  </h1>
                  <h6>₱ 16,000.00</h6>
                  <h5>1 Project</h5>
                  <h5>2 Features</h5>
                </div>
              </label>
            </div>
            <div className={style.radios}>
              <label className={style.custom_radio}>
                <input type="radio" name="radio" value="" className={style.radio} />
                <div className={style.radio_content}>
                  <h2>STANDARD</h2>
                  <h1>
                    ₱ 27,000<span className={style.span}>.00</span>
                  </h1>
                  <h6>₱ 32,000.00</h6>
                  <h5>3 Project</h5>
                  <h5>5 Features</h5>
                </div>
              </label>
            </div>
            <div className={style.radios}>
              <label className={style.custom_radio}>
                <input type="radio" name="radio" value="" className={style.radio} />
                <div className={style.radio_content}>
                  <h2>PREMIUM</h2>
                  <h1>
                    ₱ 82,000<span className={style.span}>.00</span>
                  </h1>
                  <h6>₱ 87,000.00</h6>
                  <h5>5 Project</h5>
                  <h5>10 Features</h5>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className={style.payment_button}>
          <div>
            <button
              onClick={() => {
                navigate("/dashboard/payment/paypal");
              }}
            >
              Start Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
