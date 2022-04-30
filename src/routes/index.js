import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from '../pages/Home';
import Default from '../pages/Default';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import MainLayout from '../pages/MainLayout';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='defaults' element={<Default />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;