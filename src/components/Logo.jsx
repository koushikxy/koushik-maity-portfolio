import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ onClick }) => (
  <Link to='/' onClick={onClick} aria-label='Koushik Maity, home' className='group relative z-10 flex items-center gap-3'>
    <span className='relative w-10 h-10 rounded-xl bg-fg grid place-items-center overflow-hidden transition-transform duration-500 group-hover:rotate-[-6deg]'>
      <svg viewBox='0 0 24 24' className='w-6 h-6 text-accent' aria-hidden='true'>
        <path d='M3 17 L8 12 L12 14.5 L20 6' pathLength='1' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' className='logo-line' />
        <circle cx='20' cy='6' r='1.8' fill='currentColor' />
      </svg>
    </span>
    <span className='hidden sm:block leading-tight'>
      <span className='block font-semibold tracking-tight'>Koushik Maity</span>
      <span className='relative block h-4 overflow-hidden font-mono text-[11px] text-muted'>
        <span className='block transition-transform duration-500 group-hover:-translate-y-full'>Data Analyst</span>
        <span className='absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-accent'>Home</span>
      </span>
    </span>
  </Link>
)

export default Logo
