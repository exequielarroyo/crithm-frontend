import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider, Protected } from '../helpers/Protected';
// pages
import Home from '../pages/Home';
import Default from '../pages/Default';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import MainLayout from '../pages/MainLayout';
import SignUp from '../pages/SignUp';
// import SignIn from '../pages/SignIn';
import DashboardLayout from '../pages/DashboardLayout';
import Project from '../pages/Project';
import Login from '../pages/Login';

const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route
                path='defaults'
                element={
                  <Protected>
                    <Default />
                  </Protected>
                }
              />
              <Route path='about' element={<About />} />
            </Route>

            <Route path='signup' element={<SignUp />} />
            <Route path='signin' element={<Login />} />

            <Route
              path='dashboard'
              element={
                <Protected>
                  <DashboardLayout />
                </Protected>
              }>
              <Route path='project' element={<Project />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Router;
