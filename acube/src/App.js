import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/home/home';
import DefaultLayout from './layouts/default-layout';
import HireTeam from './pages/hire-team/hire-team';
import ContactUs from './pages/contact-us/contact-us';
import Portfolio from './pages/portfolio/portfolio';
import Services from './pages/services/services';

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
          <Route path="/services" element={<Services />} />
          <Route path="/hire-team" element={<HireTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
