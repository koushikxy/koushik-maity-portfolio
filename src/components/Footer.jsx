import React, { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { email, github, linkedin } from '../data'

const time = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })

const Footer = () => {
  const [now, setNow] = useState(time)
  useEffect(() => {
    const t = setInterval(() => setNow(time()), 30000)
    return () => clearInterval(t)
  }, [])

  return (
    <footer className='mx-auto max-w-6xl px-5 sm:px-8 pb-8'>
      <div className='border-t border-line pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8'>
        <div>
          <p className='mb-2 text-sm font-semibold'>Local time</p>
          <p className='text-muted'>Bangalore, {now} IST</p>
        </div>
        <div>
          <p className='mb-2 text-sm font-semibold'>Find me on</p>
          <div className='flex flex-col text-muted'>
            <a href={linkedin} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>LinkedIn</a>
            <a href={github} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>GitHub</a>
            <a href={`mailto:${email}`} className='py-1 hover:text-accent'>Email</a>
          </div>
        </div>
        <div>
          <p className='mb-2 text-sm font-semibold'>Made by</p>
          <p className='text-muted'>Koushik Maity, {new Date().getFullYear()}</p>
        </div>
        <div className='sm:text-right'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='inline-flex items-center gap-2 font-semibold hover:text-accent'>Back to top <FiArrowUp /></button>
        </div>
      </div>
      <svg viewBox='0 0 1000 200' aria-hidden='true' className='mt-16 w-full fill-fg/[0.05] select-none'>
        <text x='0' y='185' fontSize='250' fontWeight='800' textLength='1000' lengthAdjust='spacingAndGlyphs'>Koushik</text>
      </svg>
    </footer>
  )
}

export default Footer
