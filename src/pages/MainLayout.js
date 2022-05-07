import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import style from '../styles/App.module.css';

const MainLayout = () => {
  return (
    <>
      <div class='container-fluid mx-auto'>
        <nav class='px-4 navbar navbar-expand-lg navbar-dark bg-transparent fixed-top'>
          <div class='container-fluid'>
            <a className='navbar-brand' href='/'>
              <img src='/assets/images/logo.png' alt='logo' height='24' />
            </a>
            <button
              class='navbar-toggler shadow-none border-0'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                  <a className='nav-link' href='/#home'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#creative-software'>
                    Creative Software
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link ' href='/#articles'>
                    Articles
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#process'>
                    Process
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#pricing'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#why-us'>
                    Why us?
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#join'>
                    Join
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#terms'>
                    Terms
                  </a>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/defaults'}>
                    Defaults
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <header>
        {/* <nav className='navbar navbar-expand-lg navbar-dark'>
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
                  <a className='nav-link' href='/#home'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#creative-software'>
                    Creative Software
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link ' href='/#articles'>
                    Articles
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#process'>
                    Process
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#pricing'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#why-us'>
                    Why us?
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#join'>
                    Join
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/#terms'>
                    Terms
                  </a>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/defaults'}>
                    Defaults
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </header>
      <main>
        {/* <div className='ellipse3'></div>
        <div className='ellipse4'></div> */}
        <Outlet />
      </main>
      {/* <footer className='footer'>footer</footer> */}
    </>
  );
};

export default MainLayout;
