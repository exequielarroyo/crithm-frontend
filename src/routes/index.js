import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, Protected } from "../helpers/Protected";
// pages
import Home from "../pages/Home";
import Default from "../pages/Default";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import MainLayout from "../pages/MainLayout";
import SignUp from "../pages/SignUp";
// import SignIn from '../pages/SignIn';
import DashboardLayout from "../pages/DashboardLayout";
import Project from "../pages/Project";
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import PersistLogin from "../pages/PersistLogin";
import Payment from "../pages/Payment";

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

              <Route path="about" element={<About />} />
            </Route>

            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<Login />} />

            <Route element={<PersistLogin />}>
              <Route element={<Protected />}>
                <Route path="dashboard" element={<DashboardLayout />}>
                  <Route index element={<Project />} />
                </Route>
              </Route>
            </Route>

            <Route path="payment" element={<Payment />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Router;
