import React, { useRef, useState } from "react";
import style from "../styles/Contact.module.css";
import emailjs from "emailjs-com";
import {  toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjxw6wp",
        "template_35j8w2d",
        form.current,
        "Mx8aJusmaDIrtdC2s",
      )
      .then(
        (res) => {
          toast('Email sent. Thanks for emailing us.')
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <>
      <div className={style.contact}>
        <div className={style.container}>
          <div>
            <h1>Contact us</h1>
          </div>
          <form ref={form} onSubmit={handleSubmit}>
            <div>
              <input type="text" name="name" required placeholder="Name" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="Email" />
            </div>
            <div>
              <input type="text" name="subject" required placeholder="Subject" />
            </div>
            <div>
              <textarea
                className={style.textarea}
                type="text"
                name="message"
                required
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
