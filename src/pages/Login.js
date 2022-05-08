import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from '../styles/Login.module.css';

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_URL}/auth`, { email, password }, { withCredentials: true }).then((res) => {
      if (!res.data.error) {
        setAuth(res.data);
        setEmail('');
        setPassword('');
        navigate(from, { replace: true });
      } else {
        setErrorMessage(res.data.error);
      }
    });
  }

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  function togglePersist() {
    setPersist((prev) => !prev);
  }

  return (
    <>
      <section>
        <h1 style={{ fontFamily: 'korataki', fontSize: '64px' }}>CRITHM</h1>
        <p ref={errorRef} className={errorMessage ? 'on' : 'off'}>
          {errorMessage}
        </p>
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            ref={userRef}
            type='email'
            id='email'
            value={email}
            autoComplete='off'
            required
            placeholder='sample@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            id='password'
            value={password}
            autoComplete='off'
            required
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Sign in</button>
          <div className={style.trust}>
            <input type={'checkbox'} id='persist' onChange={togglePersist} checked={persist} />
            <label htmlFor='persist'>Trust this device</label>
          </div>
          <div>
            <p>
              Don't have an account? <Link to={'/signup'}>Sign up</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
