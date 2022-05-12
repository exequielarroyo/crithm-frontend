import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, Protected } from '../helpers/Protected';
// pages
// import Home from '../pages/Home';
// import Default from '../pages/Default';
// import MainLayout from '../pages/MainLayout';
// import SignIn from '../pages/SignIn';
// import DashboardLayout from '../pages/dashboard/DashboardLayout';
// import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Unauthorized from '../pages/Unauthorized';
import PersistLogin from '../helpers/PersistLogin';
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
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Profile = Loadable(lazy(() => import('../pages/Profile')));
const Register = Loadable(lazy(() => import('../pages/Register')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const SignUp = Loadable(lazy(() => import('../pages/SignUp')));
const About = Loadable(lazy(() => import('../pages/About')));
const Project = Loadable(lazy(() => import('../pages/dashboard/Project')));

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
              <Route path='contact' element={<Contact />} />
            </Route>

            <Route path='signup' element={<SignUp />} />
            <Route path='signin' element={<Login />} />

            <Route element={<PersistLogin />}>
              <Route path='register' element={<Register />} />
              <Route path='profile' element={<Profile />} />
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
