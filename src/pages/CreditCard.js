import React, { useState, useEffect } from "react";
import style from "../styles/Payment.module.css";

const CreditCard = () => {
  const initialValues = { firstname: "", lastname: "", cardnumber: "", cvv: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // ---- CARD ---- //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Required field!";
    }
    if (!values.lastname) {
      errors.lastname = "Required field!";
    }
    if (!values.cardnumber) {
      errors.cardnumber = "Required field!";
    }
    if (!values.cvv) {
      errors.cvv = "Required field!";
    }

    return errors;
  };

  return (
    <div>
      {/* ---- NAV Bar ---- */}
      <div className={style.gcash_credit_nav}>
        <nav>
          <img src={"/assets/images/creditcard_logo.png"} className={style.card_logo} alt="Cards logo" />
        </nav>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        {/* ---- CREDIT CARD ---- */}
        <div class="card" className={style.cashtransfer}>
          <div className={style.bank}>
            <h1 className={style.h1}>Bank Transfer</h1>
            <div className={style.inputbox}>
              <label>First Name</label>
              <input name="firstname" type="text" value={formValues.firstname} onChange={handleChange} />
              <p>{formErrors.firstname}</p>
            </div>
            <div className={style.inputbox}>
              <label>Last Name</label>
              <input name="lastname" type="text" value={formValues.lastname} onChange={handleChange} />
              <p>{formErrors.lastname}</p>
            </div>
            <div className={style.inputbox}>
              <label>Middle Name</label>
              <input type="text" />
              <p></p>
            </div>
            <div className={style.inputbox}>
              <label>Card #</label>
              <input name="cardnumber" type="text" maxlength="16" value={formValues.cardnumber} onChange={handleChange} />
              <p>{formErrors.cardnumber}</p>
            </div>
            <div className={style.inputbox}>
              <label>cvv</label>
              <input name="cvv" type="text" maxlength="4" value={formValues.cvv} onChange={handleChange} />
              <p>{formErrors.cvv}</p>
            </div>
            <div className={style.dateinputbox}>
              <label className={style.datelabel}>Expiration date</label>
              <select class="month-input">
                <option selected disabled>
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
              <select class="year-input">
                <option selected disabled>
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
            <input className={style.submit__btn} type="submit" name="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCard;
