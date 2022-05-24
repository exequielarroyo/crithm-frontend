import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { useWindowSize } from "../hooks/useWindowSize";

const data = {
  ease: 0.1,
  curr: 0,
  prev: 0,
  rounded: 0,
}

const MainLayout = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  document.title = 'Crithm';
  const containerRef = useRef(null);
  const size = useWindowSize();
  
  const setBodyHeight = () => {
    document.body.style.height = `${
      containerRef.current?.getBoundingClientRect().height
    }px`;
  };

  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current.style.transform = `translateY(-${data.rounded}px)`;

    requestAnimationFrame(() => smoothScroll());
  }, []);
  
  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, [smoothScroll]);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);
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
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/#home">
                    Home
                  </a>
                  {/* <Link to={'/about'}>Home</Link> */}
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
                <div style={{margin: '0 16px', alignItems: "center", display: "flex", justifyContent: "center" }}>|</div>
                <li className="nav-item">
                  <Link className="nav-link" to={"/product"}>
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/team"}>
                    Team
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to={"/terms"}>
                    Terms
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
      <header></header>
      <main >
      <div className="container" ref={containerRef}>
        <Outlet />
      </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
