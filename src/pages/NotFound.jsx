import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import Navbar from '../components/Navbar'

const NotFound = () => {
  const { pathname } = useLocation()
  const [play, setPlay] = useState(false)

  useEffect(() => {
    document.title = 'Page not found | Koushik Maity'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    requestAnimationFrame(() => setPlay(true))
    return () => {
      document.title = 'Koushik Maity | Data Analyst'
      meta.remove()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main id='main' className={`relative min-h-[100svh] flex items-center overflow-hidden ${play ? 'play' : ''}`}>
        <div className='absolute inset-0 dots' />
        <svg viewBox='0 0 1040 280' preserveAspectRatio='none' className='absolute inset-x-0 bottom-0 w-full h-1/3 text-accent opacity-60' aria-hidden='true'>
          <path className='chart-line' d='M0 60 L120 80 L240 50 L360 90 L480 70 L560 120 L620 270 L1040 270' pathLength='1' fill='none' stroke='currentColor' strokeWidth='2' vectorEffect='non-scaling-stroke' />
        </svg>

        <div className='relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-28 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center'>
          <div>
            <p className='eyebrow'>Error 404</p>
            <h1 className='mt-4 text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold tracking-[-0.035em] leading-[1.02]'>
              This query returned <span className='text-accent'>0 rows.</span>
            </h1>
            <p className='mt-6 max-w-md text-lg text-muted'>The page you asked for isn't here. The link may be old or have a typo in it.</p>
            <div className='mt-10 flex flex-wrap gap-3'>
              <Link to='/' className='btn-primary'><FiArrowLeft /> Back to home</Link>
              <Link to='/Project' className='btn-ghost'>See my projects <FiArrowUpRight /></Link>
            </div>
          </div>

          <div className='rounded-2xl border border-line bg-card font-mono text-sm overflow-hidden shadow-2xl'>
            <div className='flex items-center gap-1.5 px-4 py-3 border-b border-line'>
              <span className='w-2.5 h-2.5 rounded-full bg-red-500/70' />
              <span className='w-2.5 h-2.5 rounded-full bg-amber-500/70' />
              <span className='w-2.5 h-2.5 rounded-full bg-emerald-500/70' />
              <span className='ml-3 text-sm text-muted'>query.sql</span>
            </div>
            <pre className='p-5 leading-7 whitespace-pre-wrap break-all'>
              <span className='text-accent'>SELECT</span> *{'\n'}
              <span className='text-accent'>FROM</span> pages{'\n'}
              <span className='text-accent'>WHERE</span> url = <span className='text-emerald-600 dark:text-emerald-400'>'{pathname}'</span>;
            </pre>
            <div className='border-t border-line px-5 py-4 text-muted'>
              <span className='text-fg'>0 rows</span> returned
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
