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
import Footer from '../components/Footer'
import { useReveal } from '../hooks'
import { reduced, scrollTo, ScrollTrigger } from '../motion'

const sections = { '/about': 'about', '/project': 'work', '/experience': 'experience', '/skill': 'skills', '/certificate': 'certificates', '/contact': 'contact' }

const firstVisit = () => {
  try {
    if (reduced() || sessionStorage.getItem('seen')) return false
    sessionStorage.setItem('seen', '1')
  } catch (e) {}
  return window.location.pathname === '/'
}

const Home = () => {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(firstVisit)
  const done = useCallback(() => setLoading(false), [])

  useEffect(() => {
    if (loading) window.scrollTo(0, 0)
  }, [loading])
  useReveal('home')

  useEffect(() => {
    document.title = 'KOUSHIK MAITY | PORTFOLIO'
    const id = sections[pathname.toLowerCase()]
    const t = setTimeout(() => {
      ScrollTrigger.refresh()
      const el = id && document.getElementById(id)
      if (el) scrollTo(el, true)
    }, 60)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <>
      {loading && <Loader onDone={done} />}
      <Navbar />
      <main id='main'>
        <Hero play={!loading} />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Certificates />
      </main>
      <Footer />
    </>
  )
}

export default Home
