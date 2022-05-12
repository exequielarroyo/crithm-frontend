import React from "react";
import style from "../styles/Contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <div className={style.contact}>
        <div className={style.container}>
          <div>
            <h1>Contact us</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <textarea
                className={style.textarea}
                type="text"
                placeholder="Message"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
