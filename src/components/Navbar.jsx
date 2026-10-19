import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FiArrowUpRight, FiMail, FiMoon, FiSun } from 'react-icons/fi'
import { GoLink, useGo } from './Transition'
import { email, resume } from '../data'
import { scrollTo, stopScroll } from '../motion'

const filters = [
  ['Overview', 'top', '/', '00'],
  ['Summary', 'about', '/About', '01'],
  ['Projects', 'work', '/Project', '02'],
  ['Experience', 'experience', '/Experience', '03'],
  ['Skills', 'skills', '/Skill', '04'],
  ['Contact', 'contact', '/Contact', '06']
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
  const [open, setOpen] = useState(false)
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

  useEffect(() => {
    if (!open) return
    stopScroll(true)
    document.body.style.overflow = 'hidden'
    const key = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', key)
    return () => {
      stopScroll(false)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', key)
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  const pick = useCallback((e, id, path, label) => {
    e.preventDefault()
    setOpen(false)
    const el = home && document.getElementById(id)
    if (el) scrollTo(id === 'top' ? 0 : el)
    else go(path, label)
  }, [home, go])

  const bar = (
    <div className='hidden lg:flex relative items-center gap-1 p-1 rounded-full border border-line bg-card/80 overflow-x-auto no-scrollbar text-sm font-medium'>
      {pill && <span className='absolute top-1 bottom-1 rounded-full bg-accent transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]' style={pill} />}
      {filters.map(([label, id, path]) => (
        <a key={id} href={path} ref={el => (refs.current[id] = el)} onClick={e => pick(e, id, path, label)} aria-current={active === id ? 'true' : undefined} className={`relative shrink-0 px-4 py-2 rounded-full transition-colors duration-300 ${active === id ? 'text-ink' : 'text-muted hover:text-fg'}`}>
          {label}
        </a>
      ))}
    </div>
  )

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled || open ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'}`}>
        <nav aria-label='Main' className='wrap'>
          <div className='flex items-center justify-between gap-6 py-4'>
            <a href='/' onClick={e => pick(e, 'top', '/', 'Home')} className='leading-tight'>
              <span className='block font-display text-xl sm:text-2xl font-semibold tracking-tight'>Koushik Maity<span className='text-accent'>.</span></span>
            </a>
            {bar}
            <div className='flex items-center gap-2'>
              <Theme />
              <GoLink to={resume} label='Resume' className='hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-fg text-bg text-sm font-semibold hover:bg-accent hover:text-ink transition-colors'>Resume <FiArrowUpRight /></GoLink>
              <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls='menu' aria-label={open ? 'Close menu' : 'Open menu'} className='lg:hidden relative w-11 h-11 rounded-full bg-fg text-bg'>
                <span className={`absolute left-1/2 top-1/2 w-4 h-0.5 -ml-2 rounded-full bg-current transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
                <span className={`absolute left-1/2 top-1/2 w-4 h-0.5 -ml-2 rounded-full bg-current transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div id='menu' hidden={!open} className='lg:hidden fixed z-40 inset-x-0 top-[76px] bottom-0 bg-bg border-t border-line overflow-y-auto'>
        <div className='wrap min-h-full flex flex-col py-8'>
          <p className='font-mono text-xs text-muted'>Contents</p>
          <ol className='mt-4'>
            {filters.map(([label, id, path, no], i) => (
              <li key={id} className='border-b border-line animate-[rise_0.5s_cubic-bezier(.16,1,.3,1)_both]' style={{ animationDelay: `${i * 0.04}s` }}>
                <a href={path} onClick={e => pick(e, id, path, label)} aria-current={active === id ? 'true' : undefined} className='flex items-baseline gap-4 py-4'>
                  <span className='w-6 font-mono text-xs text-muted'>{no}</span>
                  <span className={`font-display text-4xl font-semibold tracking-tight ${active === id ? 'text-accent' : ''}`}>{label}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className='mt-auto pt-10 flex flex-wrap gap-3'>
            <GoLink to={resume} label='Resume' className='pill-accent'>Resume <FiArrowUpRight /></GoLink>
            <a href={`mailto:${email}`} className='pill'><FiMail /> Email me</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
