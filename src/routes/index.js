import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, Protected } from '../helpers/Protected';
// pages
// import Home from '../pages/Home';
// import Default from '../pages/Default';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
// import MainLayout from '../pages/MainLayout';
import SignUp from '../pages/SignUp';
// import SignIn from '../pages/SignIn';
// import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Project from '../pages/dashboard/Project';
// import Login from '../pages/Login';
import Unauthorized from '../pages/Unauthorized';
import PersistLogin from '../helpers/PersistLogin';
import Payment from '../pages/Payment';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Loading from '../pages/Loading';

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        // To be replaced with loading
        // <Loading />
        <Loading/>
      }>
      <Component {...props} />
    </Suspense>
  );
};

const Login = Loadable(lazy(() => import('../pages/Login')));
const DashboardLayout = Loadable(lazy(() => import('../pages/dashboard/DashboardLayout')));
const MainLayout = Loadable(lazy(() => import('../pages/MainLayout')));
const Default = Loadable(lazy(() => import('../pages/Default')));
const Home = Loadable(lazy(() => import('../pages/Home')));

const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />

              <Route element={<PersistLogin />}>
                <Route element={<Protected roles={[2]} />}>
                  <Route path='defaults' element={<Default />} />
                </Route>
              </Route>

              <Route path='unauthorized' element={<Unauthorized />} />

              <Route path='about' element={<About />} />
            </Route>

            <Route path='signup' element={<SignUp />} />
            <Route path='signin' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />

            <Route element={<PersistLogin />}>
              <Route element={<Protected />}>
                <Route path='dashboard' element={<DashboardLayout />}>
                  <Route index element={<Project />} />
                </Route>
              </Route>
            </Route>

            <Route path='payment' element={<Payment />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Router;
