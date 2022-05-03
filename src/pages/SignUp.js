import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || '/';

  // useEffect(() => {
  //   console.log(from);
  //   console.log(location.state);
  // }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('registered');
    navigate('/dashboard', { replace: true });
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
