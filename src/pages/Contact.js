import React, { useRef, useState } from "react";
import style from "../styles/Contact.module.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState();

  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_n63aiyw", "template_35j8w2d", form.current, "Mx8aJusmaDIrtdC2s").then(
      (res) => {
        toast("Email sent. Thanks for emailing us.");
        axiosPrivate.post("/password/receive", { email });
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
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <input type="text" name="subject" required placeholder="Subject" />
            </div>
            <div>
              <textarea className={style.textarea} type="text" name="message" required placeholder="Message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <div>
            <i class="fa-solid fa-location-dot" />
            <p>796X+W3, Santa Cruz, Laguna</p>
          </div>
          <div>
            <i class="fa-solid fa-envelope" />
            <p>contact@crithm.cf</p>
          </div>
          <div>
            <i class="fa-solid fa-phone" />
            <p>+63 950 388 0642</p>
          </div>
          <iframe
            className={style.googleMap}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.2396374665163!2d121.39669286879138!3d14.262275452926499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e30ce40712f3%3A0xc22f2f4f3751fc75!2sLaguna%20State%20Polytechnic%20University%20-%20Santa%20Cruz%20(Main)%20Campus!5e0!3m2!1sen!2sph!4v1653118273258!5m2!1sen!2sph"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
