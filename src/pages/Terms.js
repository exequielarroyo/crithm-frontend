import React from "react";
import style from "../styles/Terms.module.css";

const Terms = () => {
  return (
    <>
      <section className={style.terms}>
        <nav className={style.nav_bar}>
          <h1>Terms and Conditions</h1>
          <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
        </nav>
          <textarea
            readOnly
            className={style.termsContainer}
            value={`USER AGREEMENT

Welcome to crithm!

These terms and conditions outline the rules and regulations for the use of Crithm's Website, located at crithm.cf.

By accessing this website we assume you accept these terms and conditions. Do not continue to use crithm if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies
We employ the use of cookies. By accessing crithm, you agreed to use cookies in agreement with the Crithm's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

License
Unless otherwise stated, Crithm and/or its licensors own the intellectual property rights for all material on crithm. All intellectual property rights are reserved. You may access this from crithm for your own personal use subjected to restrictions set in these terms and conditions.

You must not:

Republish material from crithm
Sell, rent or sub-license material from crithm
Reproduce, duplicate or copy material from crithm
Redistribute content from crithm
This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Template.

`}
          />
      </section>
    </>
  );
};

export default Terms;
