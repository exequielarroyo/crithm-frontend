import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../helpers/Protected';
import axios from 'axios';

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('awdawdwad');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_URL}/auth`, { email, password }).then((res) => {
      if (!res.data.error) setAuth(res.data);
      else {
        setErrorMessage(res.data.error);
      }
    });
  }

  return (
    <>
      {auth ? (
        <p>You are now logged in </p>
      ) : (
        <section>
          <p ref={errorRef} className={errorMessage ? 'on' : 'off'}>
            {errorMessage}
          </p>
          <form onSubmit={handleSubmit}>
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
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
