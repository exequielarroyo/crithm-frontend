import React from 'react';
import style from '../App.module.css';


const Home = () => {
  return (
    <div className={style.App}>
      <section className='App-header'>
        <img src={'/assets/images/logo.png'} className='App-logo' alt='logo' />
        <div className='content'>
          <p>Crithm is a small company.</p>
          <p id='subtitle'>This website is on development.</p>
        </div>
      </section>

      <section>
        <div className='slogan-container'>
          <div className='slogan'>Better designs and functions ready for the future</div>
          <div className='slogan2'>
            We are a Web Solutions and Digital Marketing company that specializes in developing cutting-edge software solutions. We assist corporate clients in
            untangling complicated issues that arise frequently along their digital transformation journey.
          </div>
        </div>
      </section>

      <section>
        
      </section>
    </div>
  );
};

export default Home;
