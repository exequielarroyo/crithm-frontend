import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    // axios.get(`${process.env.REACT_APP_URL}/refresh`, { withCredentials: true }).then((res) => {
    //   setAuth((prev) => {
    //     console.log(JSON.stringify(prev));
    //     console.log(res.data.accessToken);
    //     return { ...prev, role: res.data.role, accessToken: res.data.accessToken };
    //   });
    //   return res.data.accessToken;
    // });
    const response = await axios.get(`${process.env.REACT_APP_URL}/refresh`, {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
