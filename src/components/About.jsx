import React, { useEffect, useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { GoLink } from './Transition'
import photo from '../img/kolkata.webp'
import { resume, stats } from '../data'
import { useCount, useInView } from '../hooks'
import { gsap, whenIdle } from '../motion'

const text = "I'm a data analyst with a B.Tech in Computer Science. I work mostly in SQL, Python, Power BI and Excel, and I like taking messy real-world data and turning it into clear answers someone can act on."

const Kpi = ({ value, suffix, label, start }) => {
  const n = useCount(value, start)
  return (
    <div className='rounded-2xl border border-line p-6'>
      <p className='font-display text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums'>{n}<span className='text-accent'>{suffix}</span></p>
      <p className='mt-2 text-muted leading-snug'>{label}</p>
    </div>
  )
}

const About = () => {
  const root = useRef(null)
  const [kpiRef, seen] = useInView('-10% 0px')

  useEffect(() => whenIdle(root, () => {
    gsap.from('.about-word > span', { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.012, scrollTrigger: { trigger: '.about-text', start: 'top 80%' } })
    gsap.from('.about-side', { opacity: 0, y: 60, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.about-side', start: 'top 85%' } })
    gsap.fromTo('.about-photo img', { yPercent: -4, scale: 1.1 }, { yPercent: 4, scale: 1.1, ease: 'none', scrollTrigger: { trigger: '.about-photo', start: 'top bottom', end: 'bottom top', scrub: true } })
  }), [])

  return (
    <section id='about' ref={root} className='wrap py-24 sm:py-36'>
      <p className='font-mono text-sm text-accent mb-10'>01 / Summary</p>
      <div className='grid lg:grid-cols-[1.25fr_0.75fr] gap-14 lg:gap-20 items-start'>
        <div>
          <p className='about-text text-[clamp(1.8rem,3.4vw,3.3rem)] font-medium leading-[1.22] tracking-[-0.01em]'>
            <span className='sr-only'>{text}</span>
            {text.split(' ').map((w, i) => (
              <span key={i} aria-hidden='true' className='about-word word-mask'><span>{w}&nbsp;</span></span>
            ))}
          </p>
          <p className='mt-10 max-w-xl text-lg text-muted leading-relaxed'>Most recently I was a freelance Business Analyst at Turing, reviewing AI model responses and tracking quality metrics every week.</p>
          <GoLink to={resume} label='Resume' className='pill mt-8'>Read my resume <FiArrowUpRight /></GoLink>
        </div>
        <div className='about-side about-photo relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-card'>
          <img src={photo} alt='Koushik Maity at the Victoria Memorial in the evening' width='1200' height='1600' loading='lazy' className='absolute inset-0 w-full h-full object-cover object-[50%_20%]' />
        </div>
      </div>
      <div ref={kpiRef} className='mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3'>
        {stats.map(([value, suffix, label]) => <Kpi key={label} value={value} suffix={suffix} label={label} start={seen} />)}
      </div>
    </section>
  )
}

export default About
