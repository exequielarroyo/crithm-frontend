import React from "react";
import "./Payment.css";

const Payment = () => {
  const uploadImage = (async) => {
    console.log("image uploaded");
  };

  return (
    <div className="paymentBody">
      {/* ---- NAV BAR ---- */}
      <nav className="nav_bar">
        <h1>Payment</h1>
        <img src={"/assets/images/logo.png"} className="app_logo" alt="logo" />
      </nav>
      <form>
        {/* ---- CREDIT CARD ---- */}
        <div class="card" className="creditcard">
          <div>
            <h1>Bank Transfer</h1>
            <div className="inputbox">
              <label className="owner">Owner</label>
              <input type="text" />
            </div>
            <div className="inputbox">
              <label className="cardnumber">Card #</label>
              <input type="text" maxlength="16" />
            </div>
            <div className="inputbox">
              <label className="banktype">Bank type</label>
              <input type="text" />
            </div>
            <div className="inputbox">
              <label className="cvv">cvv: </label>
              <input type="text" maxlength="4" />
            </div>
            <div className="inputbox">
              <label className="expdate">Expiration Date</label>
              <select>
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
              /
              <select>
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
            <input className="submit__btn" type="submit" value="submit" />
          </div>
        </div>
        {/* ---- GCASH ---- */}
        <div class="card" className="gcash">
          <div>
            <h1>G Cash</h1>
            <div className="inputbox">
              <label className="gcashLabel">Scan to Pay</label>
              <div className="qrcode"></div>
            </div>
            <label className="gcashLabel">Upload Reciept</label>
            <input type="file" name="file" onChange={uploadImage} />
            <input class="submit__btn" type="submit" value="submit" />
          </div>
        </div>
      </form>

      {/* ---- Ellipse ---- */}
      <ellipse className="ellipsis" />
      <ellipse className="ellipsis1" />
      <ellipse className="ellipsis2" />
    </div>
  );
};

export default Payment;
