import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Magnetic from '../components/Magnetic'
import { GoLink } from '../components/Transition'

const NotFound = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = 'Page not found | Koushik Maity'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <>
      <Navbar />
      <main id='main' className='wrap min-h-[100svh] pt-36 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center'>
        <div>
          <p className='label'>Error 404</p>
          <h1 className='mt-6 text-[clamp(3rem,8vw,7.5rem)] font-medium tracking-[-0.045em] leading-[0.92]'>This query returned <span className='text-accent'>0 rows.</span></h1>
          <p className='mt-8 max-w-md text-xl text-muted'>The page you asked for isn't here. The link may be old or have a typo in it.</p>
          <div className='mt-12 flex flex-wrap gap-3'>
            <Magnetic strength={0.3}><GoLink to='/' label='Home' className='pill-accent'><FiArrowLeft /> Back to home</GoLink></Magnetic>
            <Magnetic strength={0.3}><GoLink to='/Project' label='Work' className='pill'>See my projects <FiArrowUpRight /></GoLink></Magnetic>
          </div>
        </div>
        <div className='rounded-[1.25rem] bg-card font-mono text-[15px] overflow-hidden'>
          <div className='flex items-center gap-2 px-5 py-4 border-b border-line'>
            <span className='w-3 h-3 rounded-full bg-line' />
            <span className='w-3 h-3 rounded-full bg-line' />
            <span className='w-3 h-3 rounded-full bg-accent' />
            <span className='ml-3 text-muted'>query.sql</span>
          </div>
          <pre className='p-6 leading-8 whitespace-pre-wrap break-all'>
            <span className='text-accent'>SELECT</span> *{'\n'}
            <span className='text-accent'>FROM</span> pages{'\n'}
            <span className='text-accent'>WHERE</span> url = <span className='text-fg/70'>'{pathname}'</span>;
          </pre>
          <div className='border-t border-line px-6 py-5 text-muted'><span className='text-fg'>0 rows</span> returned</div>
        </div>
      </main>
    </>
  )
}

export default NotFound
