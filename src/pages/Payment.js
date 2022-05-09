import React from "react";
import style from "../styles/Payment.module.css";

const Payment = () => {
  const uploadImage = (async) => {
    console.log("image uploaded");
  };

  return (
    <div className={style.paymentBody}>
      {/* ---- NAV BAR ---- */}
      <div className={style.nav}>
        <nav className={style.nav_bar}>
          <h1>Payment</h1>
          <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
        </nav>
      </div>
      <form className={style.form}>
        {/* ---- CREDIT CARD ---- */}
        <div class="card" className={style.cashtransfer}>
          <div className={style.bank}>
            <h1 className={style.h1}>Bank Transfer</h1>
            <div className={style.upperinputbox}>
              <label className={style.label}>Hover to see details</label>
              <div className={style.qrcode}></div>
            </div>
            <div className={style.lowerinputbox}>
              <label className={style.label}>Upload Reciept</label>
              <input className={style.uploads} type="file" name="file" onChange={uploadImage} />
              <input className={style.submit__btn} type="submit" value="submit" />
            </div>
          </div>
        </div>
        {/* ---- GCASH ---- */}
        <div class="card" className={style.cashtransfer}>
          <div className={style.gcash}>
            <h1 className={style.h1}>G Cash</h1>
            <div className={style.upperinputbox}>
              <label className={style.label}>Hover and scan</label>
              <div className={style.qrcode}></div>
            </div>
            <div className={style.lowerinputbox}>
              <label className={style.label}>Upload Reciept</label>
              <input className={style.uploads} type="file" name="file" onChange={uploadImage} />
              <input className={style.submit__btn} type="submit" value="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
