import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <div className='container'>
            <a className='navbar-brand' href='/'>
              <img src='/assets/images/logo.png' alt='logo' height='24' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='/navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse navv' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/dashboard'}>
                    Creative Software
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/defaults'}>
                    Defaults
                  </Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Process
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link ' href='/'>
                    Articles
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Why us?
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Join
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* <div className='ellipse3'></div>
        <div className='ellipse4'></div> */}
        <Outlet />
      </main>
      <footer className='footer'>footer</footer>
    </>
  );
};

export default MainLayout;
