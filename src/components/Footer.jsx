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
      <div className='border-t border-line pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm'>
        <div>
          <p className='label mb-2'>Local time</p>
          <p>Bangalore, {now} IST</p>
        </div>
        <div>
          <p className='label mb-2'>Social</p>
          <div className='flex flex-col'>
            <a href={linkedin} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>LinkedIn</a>
            <a href={github} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>GitHub</a>
            <a href={`mailto:${email}`} className='py-1 hover:text-accent'>Email</a>
          </div>
        </div>
        <div>
          <p className='label mb-2'>Made by</p>
          <p>Koushik Maity, {new Date().getFullYear()}</p>
        </div>
        <div className='sm:text-right'>
          <button onClick={() => window.scrollTo({ top: 0 })} className='inline-flex items-center gap-2 hover:text-accent'>Back to top <FiArrowUp /></button>
        </div>
      </div>
      <svg viewBox='0 0 1000 200' aria-hidden='true' className='mt-16 w-full fill-fg/[0.06] select-none'>
        <text x='0' y='185' fontSize='250' fontWeight='600' textLength='1000' lengthAdjust='spacingAndGlyphs'>Koushik</text>
      </svg>
    </footer>
  )
}

export default Footer
