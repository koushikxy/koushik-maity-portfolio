import React, { useRef } from 'react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import photo from '../img/koushik.webp'
import { resume } from '../data'

const points = [[0, 250], [80, 232], [160, 240], [240, 205], [320, 214], [400, 170], [480, 182], [560, 132], [640, 146], [720, 98], [800, 108], [880, 62], [960, 74], [1040, 40]]
const path = points.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')

const Hero = ({ play }) => {
  const ref = useRef(null)
  const move = e => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <section ref={ref} onMouseMove={move} className={`relative min-h-[100svh] flex flex-col justify-end overflow-hidden ${play ? 'play' : ''}`}>
      <div className='absolute inset-0 dots' />
      <div className='absolute inset-0 spot' />
      <svg viewBox='0 0 1040 280' preserveAspectRatio='none' className='absolute inset-x-0 bottom-0 w-full h-[34%] text-accent opacity-60' aria-hidden='true'>
        <defs>
          <linearGradient id='area' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0' stopColor='currentColor' stopOpacity='0.18' />
            <stop offset='1' stopColor='currentColor' stopOpacity='0' />
          </linearGradient>
        </defs>
        <path className='chart-area' d={`${path} L1040 280 L0 280 Z`} fill='url(#area)' />
        <path className='chart-line' d={path} pathLength='1' fill='none' stroke='currentColor' strokeWidth='2' vectorEffect='non-scaling-stroke' />
      </svg>

      <div className='relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-28 pb-12 sm:pb-16'>
        <div className='flex items-center gap-3 mb-8 fade' style={{ '--d': '0.2s' }}>
          <img src={photo} alt='Koushik Maity at graduation' width='48' height='48' className='w-12 h-12 rounded-full object-cover border border-line' />
          <p className='text-sm leading-tight'>
            <span className='flex items-center gap-2 font-medium'>
              <span className='relative flex w-2 h-2'>
                <span className='absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70' />
                <span className='relative w-2 h-2 rounded-full bg-emerald-500' />
              </span>
              Open to work
            </span>
            <span className='text-muted'>Bangalore or remote, can join now</span>
          </p>
        </div>

        <h1 className='text-[clamp(2.8rem,min(9vw,13vh),8.5rem)] font-semibold tracking-[-0.04em] leading-[0.95]'>
          <span className='line-mask'><span style={{ '--d': '0.1s' }}>Hi, I'm Koushik.</span></span>
          <span className='line-mask'><span style={{ '--d': '0.22s' }}>I make data</span></span>
          <span className='line-mask'><span style={{ '--d': '0.34s' }} className='font-serif italic font-normal tracking-[-0.02em] text-accent'>easy to act on.</span></span>
        </h1>

        <div className='mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end fade' style={{ '--d': '0.8s' }}>
          <p className='max-w-lg text-lg text-muted leading-relaxed'>
            Data analyst working in <span className='text-fg'>SQL, Python, Power BI and Excel</span>. B.Tech in Computer Science, most recently a freelance Business Analyst at Turing.
          </p>
          <div className='flex flex-wrap items-center gap-3'>
            <a href='#work' className='btn-primary'>See my work <FiArrowDown /></a>
            <a href={resume} target='_blank' rel='noreferrer' className='btn-ghost'>Resume <FiArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
