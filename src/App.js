import React, { useEffect } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import CustomCursor from './components/CustomCursor'

import Home from './pages/Home'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Certificate from './pages/Certificate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import ScrollToTop from './components/ScrollToTop'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Skill' element={<Skill />} />
        <Route exact path='/Project' element={<Project />} />
        <Route exact path='/Experience' element={<Experience />} />
        <Route exact path='/Certificate' element={<Certificate />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
};

export default App