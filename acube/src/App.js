import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/home/home';
import DefaultLayout from './layouts/default-layout';
import ContactUs from './pages/contact-us/contact-us';
import Portfolio from './pages/portfolio/portfolio';
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
            {/* service pages */}
            <Route element={<BaseLayout />}>
              <Route path="/artificial-intelligence" element />
              <Route path="/web-app" element />
              <Route path="/blockchain-app" element />
              <Route path="/cloud-strategy" element />
              <Route path="/robotic-process-automation" element />
              <Route path="/devops" element />
              <Route path="/uxui-services" element />
              <Route path="/mobility" element />
              <Route path="/analytics" element />
              <Route path="/software-testing" element />
            </Route>
            {/* hireTeam pages */}
            <Route element={<HireTeamBaseLayout />} >
              <Route path="/hire-reactjs-developer" element />
              <Route path="/hire-angularjs-developer" element />
              <Route path="/hire-nodejs-developer" element />
              <Route path="/hire-vuejs-developer" element />
              <Route path="/hire-uiux-developer" element />
              <Route path="/hire-golang-developer" element />
              <Route path="/hire-aspnet-developer" element />
              <Route path="/hire-java-developer" element />
              <Route path="/hire-python-developer" element />
              <Route path="/hire-php-developer" element />
              <Route path="/hire-flutter-developer" element />
              <Route path="/hire-ionic-developer" element />
              <Route path="/hire-ios-developer" element />
              <Route path="/hire-android-developer" element />
              <Route path="/hire-rpa-developer" element />
              <Route path="/hire-ml-developer" element />
              <Route path="/hire-devops-developer" element />
              <Route path="/hire-powerbi-developer" element />
              <Route path="/hire-awscloud-developer" element />
              <Route path="/hire-azurecloud-developer" element />
              <Route path="/hire-htmlcss-developer" element />
              <Route path="/hire-django-developer" element />
              <Route path="/hire-csharp-developer" element />
              <Route path="/hire-laravel-developer" element />
              <Route path="/hire-dotnetcore-developer" element />
              <Route path="/hire-data-scientist" element />
              <Route path="/hire-data-engineer" element />
              <Route path="/hire-ai-developer" element />
              <Route path="/hire-chatgpt-developer" element />
              <Route path="/hire-openai-developer" element />
              <Route path="/hire-prompt-engineer" element />
              <Route path="/hire-aiops-engineer" element />

            </Route>
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
