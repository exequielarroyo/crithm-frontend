import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
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
                <a className='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Creative Software
                </a>
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
      <div className='ellipse3'></div>
      <div className='ellipse4'></div>
      <Outlet />
    </>
  );
};

export default MainLayout;
