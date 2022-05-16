import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, Protected } from "../helpers/Protected";

import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";
import Loading from "../pages/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Loading />
      }>
      <Component {...props} />
    </Suspense>
  );
};

const PersistLogin = Loadable(lazy(() => import("../helpers/PersistLogin")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const DashboardLayout = Loadable(lazy(() => import("../pages/dashboard/DashboardLayout")));
const MainLayout = Loadable(lazy(() => import("../pages/MainLayout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Profile = Loadable(lazy(() => import("../pages/dashboard/Profile")));
const Register = Loadable(lazy(() => import("../pages/dashboard/Register")));
const Payment = Loadable(lazy(() => import("../pages/dashboard/payment/Payment")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));
const Team = Loadable(lazy(() => import("../pages/Team")));
const Project = Loadable(lazy(() => import("../pages/dashboard/Project")));
const CreditCard = Loadable(lazy(() => import("../pages/dashboard/payment/CreditCard")));
const GCash = Loadable(lazy(() => import("../pages/dashboard/payment/GCash")));
const PaymentLayout = Loadable(lazy(() => import("../pages/dashboard/payment/Layout")));
const Review = Loadable(lazy(() => import("../pages/dashboard/Review")));
const RegisterLayout = Loadable(lazy(() => import("../pages/dashboard/RegisterLayout")));
const Paypal = Loadable(lazy(() => import("../pages/dashboard/payment/Paypal")));

const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="unauthorized" element={<Unauthorized />} />
              <Route path="team" element={<Team />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            <Route element={<PersistLogin />}>
              <Route element={<Protected />}>
                <Route path="dashboard" element={<DashboardLayout />}>
                  <Route index element={<Project />} />
                  <Route path="register/:id" element={<RegisterLayout />}>
                    <Route index element={<Register />} />
                    <Route path="review" element={<Review />} />
                  </Route>
                  <Route path="profile" element={<Profile />} />

                  <Route path="payment" element={<PaymentLayout />}>
                    <Route index element={<Payment />} />
                    <Route path="credit" element={<CreditCard />} />
                    <Route path="gcash" element={<GCash />} />
                    <Route path="paypal" element={<Paypal />} />
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
