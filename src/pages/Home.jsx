import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { reducedMotion, useReveal } from '../hooks'

const sections = { '/about': 'about', '/project': 'work', '/experience': 'experience', '/skill': 'skills', '/certificate': 'certificates', '/contact': 'contact' }

const firstVisit = () => {
  try {
    if (reducedMotion() || sessionStorage.getItem('seen')) return false
    sessionStorage.setItem('seen', '1')
  } catch (e) {}
  return window.location.pathname === '/'
}

const Home = () => {
  const { pathname, key } = useLocation()
  const [loading, setLoading] = useState(firstVisit)
  const [play, setPlay] = useState(false)
  const done = useCallback(() => setLoading(false), [])
  useReveal()

  useEffect(() => {
    if (!loading) requestAnimationFrame(() => setPlay(true))
  }, [loading])

  useEffect(() => {
    const el = document.getElementById(sections[pathname.toLowerCase()])
    el ? el.scrollIntoView() : window.scrollTo(0, 0)
  }, [pathname, key])

  return (
    <>
      {loading && <Loader onDone={done} />}
      <a href='#main' className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-fg focus:text-bg'>Skip to content</a>
      <Navbar />
      <main id='main'>
        <Hero play={play} />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
