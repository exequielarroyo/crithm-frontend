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
            <div className={style.inputbox}>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className={style.inputbox}>
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div className={style.inputbox}>
              <label>Middle Name</label>
              <input type="text" />
            </div>
            <div className={style.inputbox}>
              <label>Card #</label>
              <input type="text" maxlength="16" />
            </div>
            <div className={style.inputbox}>
              <label>cvv</label>
              <input type="text" />
            </div>
            <div className={style.dateinputbox}>
              <label>expiration mm</label>
              <select name="" id="" class="month-input">
                <option value="month" selected disabled>
                  mm
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class={style.dateinputbox}>
              <label>expiration yy</label>
              <select name="" id="" class="year-input">
                <option value="year" selected disabled>
                  yyyy
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <input className={style.submit__btn} type="submit" value="submit" />
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
