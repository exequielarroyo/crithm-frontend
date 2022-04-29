import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from '../pages/Home';
import Default from '../pages/Default';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='defaults' element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
