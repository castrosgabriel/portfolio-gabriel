import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './screens/home/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nubank from './screens/nubank/Nubank'
import Meli from './screens/meli/Meli';
import Ugly from './screens/ugly-cash/Ugly';
import BancoPan from './screens/banco-pan/BancoPan';
import Resume from './screens/resume/Resume';
import OtherProject from './screens/other-projects/OtherProjects';
import Contact from './screens/contact/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior:'auto'});
  }, [pathname]);

  return null;
};

root.render(
  <React.StrictMode>
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/nubank' element={Nubank()} />
        <Route path='/meli' element={Meli()} />
        <Route path='/uglycash' element={Ugly()} />
        <Route path='/bancopan' element={BancoPan()} />
        <Route path='/resume' element={Resume()} />
        <Route path='/other' element={OtherProject()} />
        <Route path='/contact' element={Contact()} />
      </Routes>
    </Router>
  </React.StrictMode>
);