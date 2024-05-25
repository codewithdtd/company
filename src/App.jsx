import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { ParallaxProvider } from 'react-scroll-parallax';

import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import LangdingPage from "./components/landingPage";
import { CaseStudiesDetail } from "./components/caseStudiesDetail";
import { useLocation } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      console.log(hash);
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
};
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <ParallaxProvider>
      <Navigation />
      <ScrollToSection />
      <Routes>
        <Route path='/' element={<LangdingPage />} />
        <Route path='/detail/:id' element={<CaseStudiesDetail />}></Route>
      </Routes>
      <Outlet />
      <Contact data={landingPageData.Contact} />
    </ParallaxProvider>
  );
};

export default App;
