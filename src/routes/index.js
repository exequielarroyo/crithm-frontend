import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Protected, { AuthProvider } from '../helpers/Protected';
// pages
import Home from '../pages/Home';
import Default from '../pages/Default';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import MainLayout from '../pages/MainLayout';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

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
            <Route path='signin' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Router;
