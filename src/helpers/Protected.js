import { createContext, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export function Protected({ children, roles }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return <div>{auth ? children : <Navigate to={'/'} state={{ from: location }} replace />}</div>;
}
