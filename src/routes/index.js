import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, Protected } from "../helpers/Protected";
// pages
// import Home from '../pages/Home';
// import Default from '../pages/Default';
// import MainLayout from '../pages/MainLayout';
// import SignIn from '../pages/SignIn';
// import DashboardLayout from '../pages/dashboard/DashboardLayout';
// import Login from '../pages/Login';
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";
import PersistLogin from "../helpers/PersistLogin";
import Loading from "../pages/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        // To be replaced with loading
        // <Loading />
        <Loading />
      }>
      <Component {...props} />
    </Suspense>
  );
};

const Login = Loadable(lazy(() => import("../pages/Login")));
const DashboardLayout = Loadable(lazy(() => import("../pages/dashboard/DashboardLayout")));
const MainLayout = Loadable(lazy(() => import("../pages/MainLayout")));
const Default = Loadable(lazy(() => import("../pages/Default")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Profile = Loadable(lazy(() => import("../pages/Profile")));
const Register = Loadable(lazy(() => import("../pages/dashboard/Register")));
const Payment = Loadable(lazy(() => import("../pages/dashboard/payment/Payment")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));
const Team = Loadable(lazy(() => import("../pages/Team")));
const Project = Loadable(lazy(() => import("../pages/dashboard/Project")));
const CreditCard = Loadable(lazy(() => import("../pages/dashboard/payment/CreditCard")));
const GCash = Loadable(lazy(() => import("../pages/dashboard/payment/GCash")));
const Layout = Loadable(lazy(() => import("../pages/dashboard/payment/Layout")));

const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />

              <Route element={<PersistLogin />}>
                <Route element={<Protected roles={[2]} />}>
                  <Route path="defaults" element={<Default />} />
                </Route>
              </Route>

              <Route path="unauthorized" element={<Unauthorized />} />
              <Route path="team" element={<Team />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            <Route element={<PersistLogin />}>
              <Route element={<Protected />}>
                <Route path="dashboard" element={<DashboardLayout />}>
                  <Route index element={<Project />} />
                  <Route path="register" element={<Register />} />
                  <Route path="profile" element={<Profile />} />

                  <Route path="payment" element={<Layout />}>
                    <Route index element={<Payment />} />
                    <Route path="credit" element={<CreditCard />} />
                    <Route path="gcash" element={<GCash />} />
                  </Route>
                </Route>
              </Route>
            </Route>

            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Router;
