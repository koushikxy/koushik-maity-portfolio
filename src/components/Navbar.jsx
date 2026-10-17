import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiMoon, FiArrowUpRight } from 'react-icons/fi'
import Logo from './Logo'
import { resume, email, linkedin, github } from '../data'
import { useScroll } from '../hooks'

const links = [
  ['About', '/About', 'about'],
  ['Work', '/Project', 'work'],
  ['Experience', '/Experience', 'experience'],
  ['Skills', '/Skill', 'skills'],
  ['Certificates', '/Certificate', 'certificates'],
  ['Contact', '/Contact', 'contact']
]

const Roll = ({ children }) => (
  <span className='relative block overflow-hidden'>
    <span className='block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-full'>{children}</span>
    <span aria-hidden='true' className='absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0'>{children}</span>
  </span>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [active, setActive] = useState('')
  const [pill, setPill] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const bar = useRef(null)
  const refs = useRef({})
  const lastY = useRef(0)

  const onScroll = useCallback(() => {
    const y = window.scrollY
    const max = document.documentElement.scrollHeight - window.innerHeight
    if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
    let current = ''
    links.forEach(([, , id]) => {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id
    })
    setActive(current)
    setScrolled(y > 40)
    if (Math.abs(y - lastY.current) > 8) {
      setHidden(y > lastY.current && y > 400)
      lastY.current = y
    }
  }, [])
  useScroll(onScroll)

  useEffect(() => {
    const el = refs.current[active]
    setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
  }, [active])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark', !dark)
    try { localStorage.setItem('theme', dark ? 'light' : 'dark') } catch (e) {}
    setDark(!dark)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${hidden && !open ? '-translate-y-full' : ''} ${scrolled && !open ? 'bg-bg/70 backdrop-blur-xl border-b border-line/60' : 'border-b border-transparent'}`}>
      <nav aria-label='Main' className='mx-auto max-w-6xl px-5 sm:px-8 h-[4.5rem] flex items-center justify-between gap-4'>
        <Logo onClick={() => setOpen(false)} />

        <div className='hidden lg:flex relative items-center p-1 rounded-full border border-line bg-card/60 text-sm shadow-[0_8px_30px_-12px_rgb(0_0_0/0.35)]'>
          {pill && <span className='absolute top-1 bottom-1 rounded-full bg-fg transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]' style={pill} />}
          {links.map(([label, to, id], i) => (
            <Link key={id} to={to} ref={el => (refs.current[id] = el)} className={`group relative flex items-start gap-1 px-3.5 py-1.5 rounded-full transition-colors duration-300 ${active === id ? 'text-bg' : 'text-muted hover:text-fg'}`}>
              <Roll>{label}</Roll>
              <span className='font-mono text-[9px] leading-none mt-0.5 opacity-60'>0{i + 1}</span>
            </Link>
          ))}
        </div>

        <div className='relative z-10 flex items-center gap-2'>
          <span className='hidden xl:inline-flex items-center gap-2 mr-2 text-xs text-muted'>
            <span className='relative flex w-2 h-2'>
              <span className='absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70' />
              <span className='relative w-2 h-2 rounded-full bg-emerald-500' />
            </span>
            Available
          </span>
          <button onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className='group w-10 h-10 grid place-items-center rounded-full border border-line bg-card/60 hover:border-accent hover:text-accent transition-colors'>
            <span className='transition-transform duration-700 group-hover:rotate-[180deg]'>{dark ? <FiSun /> : <FiMoon />}</span>
          </button>
          <a href={resume} target='_blank' rel='noreferrer' className='group hidden sm:inline-flex items-center gap-1.5 h-10 pl-4 pr-1.5 rounded-full bg-fg text-bg text-sm font-medium'>
            <Roll>Resume</Roll>
            <span className='w-7 h-7 rounded-full bg-accent text-bg grid place-items-center transition-transform duration-500 group-hover:rotate-45'><FiArrowUpRight /></span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label='Menu' aria-expanded={open} className='lg:hidden w-10 h-10 grid place-items-center rounded-full border border-line bg-card/60'>
            <span className='relative w-4 h-3'>
              <span className={`absolute left-0 w-4 h-px bg-fg transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 w-4 h-px bg-fg transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>
      <div ref={bar} className='h-px bg-accent origin-left scale-x-0' />

      <div className={`lg:hidden fixed inset-0 -z-10 bg-bg transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.3,1)] ${open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)] pointer-events-none'}`}>
        <div className='h-full flex flex-col justify-between px-5 pt-28 pb-10'>
          <div className='flex flex-col'>
            {links.map(([label, to, id], i) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className={`flex items-start gap-2 py-1.5 text-5xl font-semibold tracking-tight transition duration-700 ${active === id ? 'text-accent' : ''}`} style={{ transitionDelay: open ? `${0.15 + i * 0.05}s` : '0s', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(20px)' }}>
                {label}<span className='font-mono text-xs text-muted mt-1'>0{i + 1}</span>
              </Link>
            ))}
          </div>
          <div className='space-y-6'>
            <div className='flex gap-5 text-sm text-muted'>
              <a href={linkedin} target='_blank' rel='noreferrer' tabIndex={open ? 0 : -1}>LinkedIn</a>
              <a href={github} target='_blank' rel='noreferrer' tabIndex={open ? 0 : -1}>GitHub</a>
              <a href={`mailto:${email}`} tabIndex={open ? 0 : -1}>Email</a>
            </div>
            <a href={resume} target='_blank' rel='noreferrer' tabIndex={open ? 0 : -1} className='btn-primary w-full'>Download resume</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
