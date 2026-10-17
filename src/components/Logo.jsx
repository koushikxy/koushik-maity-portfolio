import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ onClick }) => (
  <Link to='/' onClick={onClick} className='group relative z-10 flex items-center gap-3'>
    <span className='w-10 h-10 rounded-xl bg-accent grid place-items-center transition-transform duration-500 group-hover:rotate-[-8deg]'>
      <svg viewBox='0 0 24 24' className='w-6 h-6 text-bg' aria-hidden='true'>
        <path d='M3 17 L8 12 L12 14.5 L20 6' pathLength='1' fill='none' stroke='currentColor' strokeWidth='2.6' strokeLinecap='round' strokeLinejoin='round' className='logo-line' />
        <circle cx='20' cy='6' r='2' fill='currentColor' />
      </svg>
    </span>
    <span className='sr-only sm:hidden'>Koushik Maity</span>
    <span className='hidden sm:block leading-tight'>
      <span className='block font-bold tracking-tight'>Koushik Maity</span>
      <span aria-hidden='true' className='relative block h-5 overflow-hidden text-sm text-muted'>
        <span className='block transition-transform duration-500 group-hover:-translate-y-full'>Data Analyst</span>
        <span className='absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-accent'>Home</span>
      </span>
    </span>
  </Link>
)

export default Logo
