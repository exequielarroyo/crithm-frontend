import { createContext, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);

  return <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>{children}</AuthContext.Provider>;
};

export function Protected({ roles = [1] }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  let role = [auth?.role];
  if (auth?.role) {
    role.push(1);
  }

  return (
    <div>
      {role.find((r) => roles.includes(r)) ? (
        <Outlet />
      ) : auth ? (
        <Navigate to='/unauthorized' state={{ from: location }} replace />
      ) : (
        <Navigate to={'/signin'} state={{ from: location }} replace />
      )}
    </div>
  );
}
