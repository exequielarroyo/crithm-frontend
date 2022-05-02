import { createContext, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export function Protected({ roles }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return <div>{auth ? <Outlet /> : <Navigate to={'/signin'} state={{ from: location }} replace />}</div>;
}
