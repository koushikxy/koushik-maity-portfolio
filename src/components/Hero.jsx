import React, { useEffect, useRef } from 'react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import DotShow from './DotShow'
import { GoLink } from './Transition'
import { resume } from '../data'
import { gsap, reduced, scrollTo } from '../motion'

const Hero = ({ play }) => {
  const root = useRef(null)

  useEffect(() => {
    if (!play || reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08 })
      gsap.from('.hero-fade', { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.3 })
    }, root)
    return () => ctx.revert()
  }, [play])

  return (
    <section id='top' ref={root} className='relative lg:min-h-[100svh] pt-40 lg:pt-32 pb-6 lg:pb-16 flex flex-col lg:justify-center overflow-hidden'>
      <div className='absolute inset-0 grain pointer-events-none' />
      <div className='wrap relative z-10'>
        <div className='lg:max-w-[52%]'>
          <p className='hero-fade font-mono text-sm text-muted'>Data Analyst <span className='text-accent'>/</span> Bangalore, India <span className='text-accent'>/</span> open to work</p>
          <h1 className='mt-6 font-display text-[clamp(3.8rem,10vw,9.5rem)] font-semibold tracking-[-0.045em] leading-[0.86]'>
            <span className='hero-line word-mask'><span>Koushik</span></span><br />
            <span className='hero-line word-mask'><span>Maity<span className='text-accent'>.</span></span></span>
          </h1>
          <p className='hero-fade mt-8 max-w-lg text-xl sm:text-2xl text-muted leading-snug'>
            I find the story in messy data and turn it into <span className='text-fg'>answers people can act on</span>.
          </p>
          <div className='hero-fade mt-10 flex flex-wrap items-center gap-3'>
            <a href='#work' onClick={e => { e.preventDefault(); scrollTo(document.getElementById('work')) }} className='pill-accent'>See my projects <FiArrowDown /></a>
            <GoLink to={resume} label='Resume' className='pill bg-bg/60 backdrop-blur-sm'>Resume <FiArrowUpRight /></GoLink>
          </div>
          <p className='hero-fade mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted'>
            <span>SQL</span><span>Python</span><span>Power BI</span><span>Excel</span>
          </p>
        </div>
      </div>
      <div className='relative mt-10 lg:mt-0 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0'>
        <DotShow play={play} />
      </div>
    </section>
  )
}

export default Hero
