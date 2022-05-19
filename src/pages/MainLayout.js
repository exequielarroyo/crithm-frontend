import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  document.title = 'Crithm';

  return (
    <>
      <div className="container-fluid mx-auto">
        <nav className="px-4 navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/assets/images/logo.png" alt="logo" height="24" />
            </a>
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#creative-software">
                    Creative Software
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/#articles">
                    Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#process">
                    Process
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#why-us">
                    Why us?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#join">
                    Join
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#terms">
                    Terms
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/team"}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {!auth ? (
                <button
                  onClick={() => {
                    navigate("/signup");
                  }}>
                  Sign up
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/dashboard");
                  }}>
                  Dashboard
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
      <header>
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer className='footer'>footer</footer> */}
    </>
  );
};

export default MainLayout;
