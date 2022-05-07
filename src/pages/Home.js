import React from 'react';
import LMCard from '../components/LMCard';
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
          <p>Get to know Crithm, all what can you expect and learn</p>
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

      <section id='process'>Process</section>
      <section id='pricing'>Pricing</section>
      <section id='why-us'>Why us?</section>
      <section id='join'>Join</section>
      <section id='terms'>Terms</section>
    </div>
  );
};

export default Home;
