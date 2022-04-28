import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={'/assets/logo.png'} className='App-logo' alt='logo' />
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
}

export default App;
