import React from 'react';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log('registered');
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input
          type='password'
          id='password'
          // value={password}
          autoComplete='off'
          required
          placeholder='password'
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
