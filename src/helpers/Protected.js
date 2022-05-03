import { createContext, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export function Protected({ roles = [1] }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return (
    <div>
      {roles.includes(auth?.role) ? (
        <Outlet />
      ) : auth ? (
        <Navigate to='/unauthorized' state={{ from: location }} replace />
      ) : (
        <Navigate to={'/signin'} state={{ from: location }} replace />
      )}
    </div>
  );
}
