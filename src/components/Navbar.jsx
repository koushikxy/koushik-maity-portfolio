import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FiArrowUpRight, FiMoon, FiSun } from 'react-icons/fi'
import { GoLink, useGo } from './Transition'
import { resume } from '../data'
import { scrollTo } from '../motion'

const filters = [
  ['Overview', 'top', '/'],
  ['Summary', 'about', '/About'],
  ['Projects', 'work', '/Project'],
  ['Experience', 'experience', '/Experience'],
  ['Skills', 'skills', '/Skill'],
  ['Contact', 'contact', '/Contact']
]

const Theme = () => {
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === 'light')
  const flip = () => {
    const next = light ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch (e) {}
    setLight(!light)
  }
  return (
    <button onClick={flip} aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'} className='w-11 h-11 rounded-full border border-line grid place-items-center text-lg hover:bg-fg hover:text-bg transition-colors'>
      {light ? <FiMoon /> : <FiSun />}
    </button>
  )
}

const Navbar = () => {
  const { pathname } = useLocation()
  const go = useGo()
  const home = !pathname.startsWith('/work/') && pathname !== '/resume'
  const [active, setActive] = useState(home ? 'top' : '')
  const [scrolled, setScrolled] = useState(false)
  const [pill, setPill] = useState(null)
  const refs = useRef({})

  useEffect(() => {
    const check = () => {
      setScrolled(window.scrollY > 20)
      if (!home) return
      let current = 'top'
      filters.forEach(([, id]) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = id
      })
      setActive(current)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [home])

  useEffect(() => {
    const place = () => {
      const el = refs.current[active]
      setPill(el && el.offsetWidth ? { left: el.offsetLeft, width: el.offsetWidth } : null)
    }
    place()
    document.fonts && document.fonts.ready.then(place)
    window.addEventListener('resize', place)
    const el = refs.current[active]
    if (el && el.parentElement.scrollWidth > el.parentElement.clientWidth) el.parentElement.scrollTo({ left: el.offsetLeft - 20, behavior: 'smooth' })
    return () => window.removeEventListener('resize', place)
  }, [active])

  const pick = useCallback((e, id, path, label) => {
    e.preventDefault()
    const el = home && document.getElementById(id)
    if (el) scrollTo(id === 'top' ? 0 : el)
    else go(path, label)
  }, [home, go])

  const bar = (
    <div className='relative flex items-center gap-1 p-1 rounded-full border border-line bg-card/80 overflow-x-auto no-scrollbar text-sm font-medium'>
      {pill && <span className='absolute top-1 bottom-1 rounded-full bg-accent transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]' style={pill} />}
      {filters.map(([label, id, path]) => (
        <a key={id} href={path} ref={el => (refs.current[id] = el)} onClick={e => pick(e, id, path, label)} aria-current={active === id ? 'true' : undefined} className={`relative shrink-0 px-4 py-2 rounded-full transition-colors duration-300 ${active === id ? 'text-ink' : 'text-muted hover:text-fg'}`}>
          {label}
        </a>
      ))}
    </div>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'}`}>
      <nav aria-label='Main' className='wrap'>
        <div className='flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-6 gap-y-3 py-4'>
          <a href='/' onClick={e => pick(e, 'top', '/', 'Home')} className='leading-tight'>
            <span className='block font-display text-lg font-semibold'>Koushik Maity</span>
            <span className='block font-mono text-xs text-muted'>data_analyst</span>
          </a>
          <div className='order-last lg:order-none w-full lg:w-auto min-w-0'>{bar}</div>
          <div className='flex items-center gap-2'>
            <Theme />
            <GoLink to={resume} label='Resume' className='inline-flex items-center gap-2 h-11 px-5 rounded-full bg-fg text-bg text-sm font-semibold hover:bg-accent hover:text-ink transition-colors'>Resume <FiArrowUpRight /></GoLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
