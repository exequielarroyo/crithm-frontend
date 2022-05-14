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
            <h1>Choose payment method</h1>
          </nav>
        </div>
        <div className={style.payment_body}>
          <form className={style.payment_form}>
            <div className={style.radios}>
              <label className={style.custom_radio}>
                <input type="radio" name="radio" className={style.radio} />
                <div className={style.radio_content}>
                  <h3 className={style.radio_title}>Android / IOS</h3>
                  <h1>
                    $399<span className={style.span}>.99</span>
                  </h1>
                  <h5>Price may vary depending on the features and complexity of the system.</h5>
                </div>
              </label>
            </div>
            <div className={style.radios}>
              <label className={style.custom_radio}>
                <input type="radio" name="radio" className={style.radio} />
                <div className={style.radio_content}>
                  <h3 className={style.radio_title}>Web</h3>
                  <h1>
                    $599<span className={style.span}>.99</span>
                  </h1>
                  <h5>Price may vary depending on the features and complexity of the system.</h5>
                </div>
              </label>
            </div>
            <div className={style.radios}>
              <label className={style.custom_radio}>
                <input type="radio" name="radio" className={style.radio} />
                <div className={style.radio_content}>
                  <h3 className={style.radio_title}>Desktop App/Web</h3>
                  <h1>
                    $799<span className={style.span}>.99</span>
                  </h1>
                  <h5>Price may vary depending on the features and complexity of the system.</h5>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className={style.payment_button}>
          <div>
            <button
              className={style.credit_btn}
              onClick={() => {
                navigate("/dashboard/payment/credit");
              }}
            >
              Credit/Debit
            </button>
            <button
              className={style.gcash_btn}
              onClick={() => {
                navigate("/dashboard/payment/gcash");
              }}
            >
              GCash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
