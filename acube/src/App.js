import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/home/home';
import ServicesPage from './pages/services/services';
import DefaultLayout from './layouts/default-layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            exact
            path="/"
            element={<HomePage />}
          />
          <Route path="/services" element={<ServicesPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
