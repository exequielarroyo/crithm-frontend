import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../../../styles/Payment.module.css";

const Receipt = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState();

  useEffect(()=>{
    setDetails({total: location.state.purchase_units[0].amount.value});
    console.log(location.state)
  },[])

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
                  Contact us: <Link to={"/Contact"}>crithm.cf@gmail.com</Link>
                </label>
              </div>
            </div>
            <div className={style.body}>
              <label className={style.plan}>Plan</label>
              <label className={style.plan}>₱ {parseInt(details.total)-(parseInt(details.total)*.10)}</label>
              <label>Sub Total</label>
              <label>₱ {(parseInt(details.total)*.10)}</label>
              <label>VAT %</label>
              <label>10%</label>
              <label className={style.total}>Total:</label>
              <label className={style.total}>₱ {details.total}</label>
            </div>
            <div className={style.lower}>
              <label>Take a screen shot for proof of payment</label>
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Receipt;
