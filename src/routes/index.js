import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from '../pages/Home';
import Default from '../pages/Default';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='defaults' element={<Default />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
