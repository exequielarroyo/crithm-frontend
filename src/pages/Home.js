import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={'/assets/images/logo.png'} className='App-logo' alt='logo' />
        <div className='content'>
          <p>Crithm is a small company.</p>
          <p id='subtitle'>This website is on development.</p>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <section>
        <div className='slogan-container'>
          <div className='slogan'>Better designs and functions ready for the future</div>
          <div className='slogan2'>
            We are a Web Solutions and Digital Marketing company that specializes in developing cutting-edge software solutions. We assist corporate clients in
            untangling complicated issues that arise frequently along their digital transformation journey.
          </div>
        </div>

        <Card
        content={
          'Need applications that you demand? We are a professional group with high expertise. A company that specializes on providing high-end web solutions.'
        }
        button={'Learn More'}
        img={'👌'}></Card>
      </section>
    </div>
  );
};

export default Home;
