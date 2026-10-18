import React, { createContext, useCallback, useContext, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { reduced, scrollTo, ScrollTrigger } from '../motion'

const Ctx = createContext(() => {})
export const useGo = () => useContext(Ctx)

export const GoLink = ({ to, label, children, onClick, ...rest }) => {
  const go = useGo()
  return (
    <a href={to} onClick={e => { onClick && onClick(e); if (e.metaKey || e.ctrlKey) return; e.preventDefault(); go(to, label) }} {...rest}>
      {children}
    </a>
  )
}

export const TransitionProvider = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [phase, setPhase] = useState('idle')
  const [label, setLabel] = useState('')
  const busy = useRef(false)

  const go = useCallback((to, text = '') => {
    if (busy.current) return
    if (to === pathname || reduced()) {
      navigate(to)
      return
    }
    busy.current = true
    setLabel(text)
    setPhase('cover')
    setTimeout(() => {
      navigate(to)
      scrollTo(0, true)
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        setPhase('reveal')
      })
      setTimeout(() => {
        setPhase('idle')
        busy.current = false
      }, 800)
    }, 750)
  }, [navigate, pathname])

  const y = { idle: 'translate-y-[120%] transition-none', cover: 'translate-y-0', reveal: '-translate-y-full' }[phase]

  return (
    <Ctx.Provider value={go}>
      {children}
      <div aria-hidden='true' className={`fixed inset-0 z-[150] pointer-events-none transition-transform duration-[750ms] ease-[cubic-bezier(.76,0,.24,1)] ${y}`}>
        <div className='absolute inset-0 bg-card' />
        <svg viewBox='0 0 100 10' preserveAspectRatio='none' className='absolute left-0 w-full h-[12vh] -top-[12vh] fill-card'>
          <path d={phase === 'cover' ? 'M0 10 Q50 10 100 10 L100 10 L0 10Z' : 'M0 10 Q50 0 100 10 L100 10 L0 10Z'} className='transition-[d] duration-700' />
        </svg>
        <div className='absolute inset-0 grid place-items-center'>
          <p className='flex items-center gap-4 font-display text-4xl sm:text-6xl font-medium tracking-tight'>
            <span className='w-3 h-3 rounded-full bg-accent' />{label}
          </p>
        </div>
      </div>
    </Ctx.Provider>
  )
}
