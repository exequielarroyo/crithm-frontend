import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    axios.get('/refresh', { withCredentials: true }).then((res) => {
      setAuth((prev) => {
        return { ...prev, accessToken: res.data.accessToken };
      });
      return res.data.accessToken;
    });
  };
  return refresh;
};

export default useRefreshToken;
