import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/home/home';
import DefaultLayout from './layouts/default-layout';
import HireTeam from './pages/hire-team/hire-team';
import ContactUs from './pages/contact-us/contact-us';
import Portfolio from './pages/portfolio/portfolio';
import Services from './pages/services/services';
import ScrollToTopNav from './components/scroll-to-top/scroll-to-top-nav';
import BaseLayout from './pages/services/subpages/base-layout';
import { ScrollProvider } from './context/scroll-context';
import PortfolioBaseLayout from './pages/portfolio/subpages/base-layout';
import HireTeamBaseLayout from './pages/hire-team/subpages/base-layout';


function App() {


  return (

    <BrowserRouter>
      <ScrollProvider>
        <ScrollToTopNav />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route
              exact
              path="/"
              element={<HomePage />}
            />
            <Route path="/services" element={<Services />} />
            {/* service pages */}
            <Route element={<BaseLayout />}>
              <Route path="/services/artificial-intelligence" element />
              <Route path="/services/web-app" element />
              <Route path="/services/blockchain-app" element />
              <Route path="/services/cloud-strategy" element />
              <Route path="/services/robotic-process-automation" element />
              <Route path="/services/devops" element />
            </Route>
            <Route path="/hire-team" element={<HireTeam />} />
            {/* hireTeam pages */}
            <Route path="/hire-team/hire-reactjs-developer" element={<HireTeamBaseLayout />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* portfolio pages */}
            <Route element={<PortfolioBaseLayout />}>
              <Route path="/portfolio/rxnt" element />
              <Route path="/portfolio/frank" element />
              <Route path="/portfolio/svhs" element />
              <Route path="/portfolio/tds" element />
              <Route path="/portfolio/tynax" element />
              <Route path="/portfolio/anatomie" element />
              <Route path="/portfolio/vacsewcenter" element />
              <Route path="/portfolio/wbes" element />
              <Route path="/portfolio/openn" element />
              <Route path="/portfolio/willship" element />
            </Route>
          </Route>

        </Routes>
      </ScrollProvider>
    </BrowserRouter>
  );
}

export default App;
