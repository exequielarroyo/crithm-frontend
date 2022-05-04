import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}/refresh`, { withCredentials: true });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(res.data.accessToken);
      return { ...prev, role: res.data.role, accessToken: res.data.accessToken };
    });
    return res.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
