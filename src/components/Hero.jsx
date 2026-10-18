import React, { useEffect, useRef, useState } from 'react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import DotPortrait from './DotPortrait'
import { GoLink } from './Transition'
import { resume } from '../data'
import { gsap, reduced, scrollTo } from '../motion'

const ring = 'BASED IN BANGALORE • INDIA • OPEN TO WORK • '
const time = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })

const Badge = () => {
  const [now, setNow] = useState(time)
  useEffect(() => {
    const t = setInterval(() => setNow(time()), 20000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className='relative w-28 h-28 sm:w-36 sm:h-36'>
      <svg viewBox='0 0 200 200' className='absolute inset-0 w-full h-full spin-slow' aria-hidden='true'>
        <defs><path id='ring' d='M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0' /></defs>
        <text className='fill-fg font-display' textLength='488' lengthAdjust='spacing' style={{ fontSize: 15, fontWeight: 600 }}>
          <textPath href='#ring' textLength='488' lengthAdjust='spacing'>{ring}</textPath>
        </text>
      </svg>
      <div className='absolute inset-[26%] rounded-full bg-accent text-ink grid place-items-center text-center leading-none'>
        <p><span className='block font-display text-lg sm:text-xl font-semibold tabular-nums'>{now}</span><span className='text-[10px] font-bold tracking-wider'>IST</span></p>
      </div>
      <span className='sr-only'>Based in Bangalore, India. Open to work.</span>
    </div>
  )
}

const Hero = ({ play }) => {
  const root = useRef(null)

  useEffect(() => {
    if (!play || reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08 })
      gsap.from('.hero-fade', { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.3 })
      gsap.from('.hero-badge', { scale: 0, rotate: -120, duration: 1.6, ease: 'elastic.out(1, 0.6)', delay: 1.4 })
    }, root)
    return () => ctx.revert()
  }, [play])

  return (
    <section id='top' ref={root} className='relative min-h-[100svh] pt-40 lg:pt-32 pb-16 flex items-center overflow-hidden'>
      <div className='absolute inset-0 grain pointer-events-none' />
      <div className='wrap relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-12 items-center'>
        <div>
          <p className='hero-fade font-mono text-sm text-muted'>Data Analyst <span className='text-accent'>/</span> Bangalore, India</p>
          <h1 className='mt-6 font-display text-[clamp(3.8rem,10.5vw,10rem)] font-semibold tracking-[-0.045em] leading-[0.86]'>
            <span className='hero-line word-mask'><span>Koushik</span></span><br />
            <span className='hero-line word-mask'><span>Maity<span className='text-accent'>.</span></span></span>
          </h1>
          <p className='hero-fade mt-8 max-w-lg text-xl sm:text-2xl text-muted leading-snug'>
            I find the story in messy data and turn it into <span className='text-fg'>answers people can act on</span>.
          </p>
          <div className='hero-fade mt-10 flex flex-wrap items-center gap-3'>
            <a href='#work' onClick={e => { e.preventDefault(); scrollTo(document.getElementById('work')) }} className='pill-accent'>See my projects <FiArrowDown /></a>
            <GoLink to={resume} label='Resume' className='pill'>Resume <FiArrowUpRight /></GoLink>
          </div>
          <p className='hero-fade mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted'>
            <span>SQL</span><span>Python</span><span>Power BI</span><span>Excel</span>
          </p>
        </div>

        <div className='relative max-w-[560px] w-full mx-auto lg:ml-auto'>
          <DotPortrait play={play} />
          <div className='hero-badge absolute -top-6 -right-2 sm:-right-6'><Badge /></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
