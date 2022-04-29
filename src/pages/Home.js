import React from 'react';

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
    </div>
  );
};

export default Home;
