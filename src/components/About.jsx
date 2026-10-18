import React, { useEffect, useRef } from 'react'
import Magnetic from './Magnetic'
import { GoLink } from './Transition'
import photo from '../img/kolkata.webp'
import { resume, stats } from '../data'
import { useCount, useInView } from '../hooks'
import { gsap, whenIdle } from '../motion'

const text = "I'm a data analyst with a B.Tech in Computer Science. I work mostly in SQL, Python, Power BI and Excel, and I like taking messy real-world data and turning it into clear answers someone can act on."

const Stat = ({ value, suffix, label, start }) => {
  const n = useCount(value, start)
  return (
    <div className='border-t border-line pt-6'>
      <p className='font-display text-6xl sm:text-7xl font-semibold tracking-tight tabular-nums'>{n}<span className='text-accent'>{suffix}</span></p>
      <p className='mt-3 text-muted'>{label}</p>
    </div>
  )
}

const About = () => {
  const root = useRef(null)
  const [statsRef, seen] = useInView('-10% 0px')

  useEffect(() => whenIdle(root, () => {
    gsap.from('.about-word > span', { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.012, scrollTrigger: { trigger: '.about-text', start: 'top 80%' } })
    gsap.from('.about-side', { opacity: 0, y: 60, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.about-side', start: 'top 85%' } })
    gsap.fromTo('.about-photo img', { yPercent: -8, scale: 1.15 }, { yPercent: 8, scale: 1.15, ease: 'none', scrollTrigger: { trigger: '.about-photo', start: 'top bottom', end: 'bottom top', scrub: true } })
  }), [])

  return (
    <section id='about' ref={root} className='wrap py-28 sm:py-40'>
      <div className='grid lg:grid-cols-[1.25fr_0.75fr] gap-14 lg:gap-20 items-start'>
        <p className='about-text text-[clamp(1.8rem,3.4vw,3.3rem)] font-medium leading-[1.22] tracking-[-0.01em]'>
          <span className='sr-only'>{text}</span>
          {text.split(' ').map((w, i) => (
            <span key={i} aria-hidden='true' className='about-word word-mask'><span>{w}&nbsp;</span></span>
          ))}
        </p>
        <div className='about-side relative'>
          <div className='about-photo relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-card'>
            <img src={photo} alt='Koushik Maity at the Victoria Memorial in the evening' width='900' height='1200' loading='lazy' className='absolute inset-0 w-full h-full object-cover' />
          </div>
          <div className='absolute -left-6 sm:-left-12 -bottom-10'>
            <Magnetic strength={0.5}>
              <GoLink to={resume} label='Resume' className='w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-accent text-ink grid place-items-center text-lg font-bold hover:scale-105 transition-transform duration-500'>My resume</GoLink>
            </Magnetic>
          </div>
          <p className='mt-20 text-lg text-muted leading-relaxed'>Most recently I was a freelance Business Analyst at Turing, reviewing AI model responses and tracking quality metrics every week.</p>
        </div>
      </div>
      <div ref={statsRef} className='mt-28 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14'>
        {stats.map(([value, suffix, label]) => <Stat key={label} value={value} suffix={suffix} label={label} start={seen} />)}
      </div>
    </section>
  )
}

export default About
