import React from 'react';
import LMCard from '../components/LMCard';
import ProcessCard from '../components/ProcessCard';
import style from '../styles/App.module.css';

const Home = () => {
  return (
    <div className={style.home}>
      <section id='home'>
        <img src={'/assets/images/logo.png'} className={style.logo} alt='logo' />
        <div className={style.content}>
          <h1>CRITHM</h1>
          <div className={style.img}>
            <img src='/assets/images/ring.png' alt='' />
            <img src='/assets/images/curve-line.png' alt='' />
          </div>
        </div>
      </section>

      <section id='creative-software'>
        <div className={style.page2container}>
          <p className={`${style.part1} ${style.one}`}>Better designs and functions ready for the future</p>
          <p className={`${style.part1} ${style.two}`}>
            We are a Web Solutions and Digital Marketing company that specializes in developing cutting-edge software solutions. We assist corporate clients in
            untangling complicated issues that arise frequently along their digital transformation journey.
          </p>
        </div>
        <div className={style.bgcolor}>
          <div className={`${style.page2container} ${style.part2}`}>
            <p>
              Crithm delivers technology driven computing solutions, experienced consulting, and efficient IT/CS support that are tailored to the demands of any
              enterprise, allowing our customers to maximize their return of investment and expand their workforce's capabilities. We have been a visionary and
              dependable software engineering partner for world-class brands since the year 2022.
            </p>
            <img src='/assets/images/logo.png' alt='awd' />
          </div>
        </div>
      </section>

      <section id='articles'>
        <div className={style.page3container}>
          <h3>Get to know Crithm, all what can you expect and learn</h3>
          <div className={style.cards}>
            <LMCard
              lm_content={
                'Need applications that you demand? We are a professional group with high expertise. A company that specializes on providing high-end web solutions.'
              }
              lm_img={`👌`}
              lm_button={'Learn more'}
            />
            <LMCard
              lm_content={'The service that we provide are a software solution where different types of industry softwares can be utilize.'}
              lm_img={`🏬`}
              lm_button={'Learn more'}
            />
            <LMCard
              lm_content={
                'We are versatile for the reason that we can satisfy our clients on their desired system, this includes: \nItem/Product Inventory \nMessaging platform \nEducational system \nSimple Information System'
              }
              lm_img={`🤑`}
              lm_button={'Learn more'}
            />
          </div>
        </div>
      </section>

      <section id='process'>
        <ProcessCard title={'Step 1 | Mapping week 1'}>
          The development team maps the whole project. We already have some concept on how to execute the whole system. As the client answer the Project
          Registration From (PRF), the team will have the rough idea on what the client wants.
        </ProcessCard>
        <ProcessCard title={'Step 2 | Development week 2'}>
          Start of development process. The dev team will start the project. Depending on the plan subscription, the team will begin the development of
          front-end and back-end then include all the necessary features from the PRF.
        </ProcessCard>
        <ProcessCard title={'Step 3 | Demonstration week 3'}>
          Show a live demo of the software or project. The demo will not the finished product as per it will be only to present for the client to see and
          understand the flow of the project. Once the client is satisfied with the demonstration work flow, the dev team will now proceed to the lunching of
          the project. If the client is not satisfied, they have the authority to decide if they want to cancel or revise the project.
        </ProcessCard>
      </section>
      <section id='pricing'>Pricing</section>
      <section id='why-us'>Why us?</section>
      <section id='join'>Join</section>
      <section id='terms'>
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
    </div>
  );
};

export default Home;
