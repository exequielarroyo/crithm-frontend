import axios from 'axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth(null);
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/logout`, { withCredentials: true });

    } catch (error) {
      console.error(error)
    }
  };

  return logout;
};

export default useLogout;
