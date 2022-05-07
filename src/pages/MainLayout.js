import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import style from '../styles/App.module.css';

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
                  {/* <Link className='nav-link active' to='/'> */}
                  <a className='nav-link' href='/#home'>
                    Home
                  </a>
                  {/* </Link> */}
                </li>
                <li className='nav-item'>
                  {/* <Link className='nav-link' to={'/dashboard'}> */}
                  <a className='nav-link' href='/#creative-software'>
                    Creative Software
                  </a>
                  {/* </Link> */}
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
                  {/* <Link className='nav-link' to={'/#terms'}> */}
                  {/* <Navigate to={`/#terms`}>Terms</Navigate> */}
                  <a className='nav-link' href='/#terms'>
                    Terms
                  </a>
                  {/* </Link> */}
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
