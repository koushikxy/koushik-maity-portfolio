import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Magnetic from './Magnetic'
import { GoLink, useGo } from './Transition'
import { email, github, linkedin, resume } from '../data'
import { scrollTo, stopScroll } from '../motion'

const links = [
  ['Work', 'work', '/Project'],
  ['About', 'about', '/About'],
  ['Experience', 'experience', '/Experience'],
  ['Contact', 'contact', '/Contact']
]

const Roll = ({ children }) => (
  <span className='relative block overflow-hidden'>
    <span className='block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-full'>{children}</span>
    <span aria-hidden='true' className='absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0'>{children}</span>
  </span>
)

const Navbar = () => {
  const { pathname } = useLocation()
  const go = useGo()
  const [open, setOpen] = useState(false)
  const [floating, setFloating] = useState(false)
  const home = !pathname.startsWith('/work/')

  useEffect(() => {
    const check = () => setFloating(window.scrollY > 120)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  useEffect(() => {
    stopScroll(open)
    const esc = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])

  const nav = useCallback((e, id, path, label) => {
    e.preventDefault()
    setOpen(false)
    const el = home && document.getElementById(id)
    if (el) scrollTo(el)
    else go(path, label)
  }, [home, go])

  return (
    <>
      <header className='absolute inset-x-0 top-0 z-40'>
        <nav aria-label='Main' className='wrap h-24 flex items-center justify-between gap-6'>
          <a href='/' onClick={e => nav(e, 'top', '/', 'Home')} className='group flex items-center gap-1.5 font-medium'>
            <span className='inline-block transition-transform duration-700 group-hover:rotate-[360deg]'>©</span>
            <span className='relative overflow-hidden inline-flex'>
              <span className='block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-full'>Koushik Maity</span>
              <span aria-hidden='true' className='absolute left-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 whitespace-nowrap text-accent'>Data Analyst</span>
            </span>
          </a>
          <div className='hidden md:flex items-center gap-1'>
            {links.map(([label, id, path]) => (
              <Magnetic key={id} strength={0.4}>
                <a href={path} onClick={e => nav(e, id, path, label)} className='group relative block px-4 py-2 font-medium'>
                  <Roll>{label}</Roll>
                  <span className='absolute left-1/2 -bottom-0.5 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-accent scale-0 transition-transform duration-300 group-hover:scale-100' />
                </a>
              </Magnetic>
            ))}
            <Magnetic strength={0.3}>
              <GoLink to={resume} label='Resume' className='group ml-3 inline-flex items-center h-11 px-5 rounded-full bg-fg text-ink font-semibold'>
                <Roll>Resume</Roll>
              </GoLink>
            </Magnetic>
          </div>
        </nav>
      </header>

      <div className={`fixed top-5 right-5 sm:top-7 sm:right-8 z-[60] transition-transform duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${floating || open ? 'scale-100' : 'scale-100 md:scale-0'}`}>
        <Magnetic strength={0.4}>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className={`w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full grid place-items-center transition-colors duration-300 ${open ? 'bg-accent' : 'bg-card border border-line'}`}>
            <span className='relative w-6 h-3'>
              <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${open ? 'top-1.5 rotate-45 bg-ink' : 'top-0 bg-fg'}`} />
              <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${open ? 'top-1.5 -rotate-45 bg-ink' : 'top-3 bg-fg'}`} />
            </span>
          </button>
        </Magnetic>
      </div>

      <div onClick={() => setOpen(false)} className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
      <aside aria-hidden={!open} className={`fixed top-0 right-0 bottom-0 z-[55] w-full sm:w-[520px] bg-card border-l border-line transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='h-full flex flex-col justify-between px-8 sm:px-14 pt-32 pb-10'>
          <div>
            <p className='label pb-6 mb-6 border-b border-line'>Navigation</p>
            <ul className='space-y-1'>
              {[['Home', 'top', '/'], ...links].map(([label, id, path], i) => (
                <li key={id} className='transition duration-700' style={{ transitionDelay: open ? `${0.2 + i * 0.06}s` : '0s', transform: open ? 'none' : 'translateX(60px)', opacity: open ? 1 : 0 }}>
                  <a href={path} tabIndex={open ? 0 : -1} onClick={e => nav(e, id, path, label)} className='group flex items-center gap-5 py-1 font-display text-5xl sm:text-6xl font-medium tracking-tight'>
                    <span className='w-3 h-3 shrink-0 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300' />
                    <span className='-ml-8 group-hover:ml-0 transition-[margin] duration-300'>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='label mb-4'>Find me on</p>
            <div className='flex flex-wrap gap-6 font-medium'>
              <a href={linkedin} target='_blank' rel='noreferrer' tabIndex={open ? 0 : -1} className='hover:text-accent'>LinkedIn</a>
              <a href={github} target='_blank' rel='noreferrer' tabIndex={open ? 0 : -1} className='hover:text-accent'>GitHub</a>
              <a href={`mailto:${email}`} tabIndex={open ? 0 : -1} className='hover:text-accent'>Email</a>
              <GoLink to={resume} label='Resume' tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className='hover:text-accent'>Resume</GoLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
