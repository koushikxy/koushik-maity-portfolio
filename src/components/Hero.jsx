import React, { useEffect, useRef } from 'react'
import { FiArrowDownRight, FiGlobe } from 'react-icons/fi'
import portrait from '../img/portrait.webp'
import portraitSm from '../img/portrait-sm.webp'
import { gsap, onVelocity, reduced } from '../motion'

const Hero = ({ play }) => {
  const root = useRef(null)
  const track = useRef(null)

  useEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      const loop = gsap.to(track.current, { xPercent: -50, duration: 22, ease: 'none', repeat: -1 })
      let dir = 1
      const off = onVelocity((v, d) => {
        if (d) dir = d
        gsap.to(loop, { timeScale: dir * (1 + Math.min(Math.abs(v), 40) * 0.08), duration: 0.3, overwrite: true })
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.3, overwrite: false })
      })
      gsap.to('.hero-photo', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-name', { yPercent: 60, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      return off
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!play || reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-photo', { y: 120, opacity: 0, duration: 1.6, ease: 'expo.out' })
      gsap.from('.hero-name', { yPercent: 100, duration: 1.6, ease: 'expo.out', delay: 0.1 })
      gsap.from('.hero-fade', { opacity: 0, y: 20, duration: 1.2, ease: 'power3.out', delay: 0.5, stagger: 0.1 })
    }, root)
    return () => ctx.revert()
  }, [play])

  return (
    <section id='top' ref={root} className='relative h-[100svh] min-h-[640px] overflow-hidden'>
      <div className='absolute inset-0 spotlight' />
      <div className='absolute inset-0 grain pointer-events-none' />

      <h1 className='sr-only'>Koushik Maity, Data Analyst in Bangalore</h1>
      <div className='hero-photo absolute inset-x-0 bottom-0 h-[64%] sm:h-[86%] flex justify-center'>
        <img src={portrait} srcSet={`${portraitSm} 620w, ${portrait} 1100w`} sizes='(min-width: 640px) 60vh, 50vh' fetchpriority='high' alt='Koushik Maity at graduation' width='1100' height='1487' className='h-full w-auto max-w-none select-none' draggable='false' />
      </div>

      <div className='hero-fade absolute left-0 top-[44%] hidden lg:flex items-center gap-8 pl-16 pr-3 py-3 rounded-r-full bg-fg text-ink'>
        <p className='font-medium leading-snug'>Based in<br />Bangalore,<br />India</p>
        <span className='w-[72px] h-[72px] rounded-full bg-ink text-fg grid place-items-center text-3xl'><FiGlobe className='spin-slow' /></span>
      </div>

      <div className='hero-fade absolute right-5 sm:right-10 lg:right-[9%] top-28 lg:top-[30%] text-right lg:text-left'>
        <FiArrowDownRight className='hidden lg:block text-3xl mb-8' />
        <p className='text-2xl sm:text-4xl font-medium leading-tight'>Data Analyst</p>
        <p className='text-2xl sm:text-4xl font-medium leading-tight text-muted'>SQL, Python, Power BI</p>
        <p className='mt-4 inline-flex items-center gap-2 text-sm font-medium'>
          <span className='w-2 h-2 rounded-full bg-accent animate-pulse' /> Open to work, can join now
        </p>
      </div>

      <div className='absolute inset-x-0 bottom-[6%] sm:bottom-[4%] overflow-hidden pointer-events-none'>
        <div className='hero-name'>
          <div ref={track} className='flex w-max whitespace-nowrap'>
            {[0, 1].map(i => (
              <p key={i} aria-hidden={i === 1} className='text-[clamp(5.5rem,17vw,16rem)] font-medium tracking-[-0.04em] leading-[0.9] pr-[0.35em]'>
                Koushik Maity <span className='inline-block w-[0.16em] h-[0.16em] mx-[0.2em] rounded-full bg-accent align-middle' /> Data Analyst <span className='inline-block w-[0.16em] h-[0.16em] mx-[0.2em] rounded-full bg-accent align-middle' />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
