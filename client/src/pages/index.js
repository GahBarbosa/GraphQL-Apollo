import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './users';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Users />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
