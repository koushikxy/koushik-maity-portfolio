import React, { useCallback, useRef } from 'react'
import { stats } from '../data'
import { useCount, useInView, useScroll } from '../hooks'

const text = "I'm a data analyst with a B.Tech in Computer Science. I work mostly in SQL, Python, Power BI and Excel, and I like taking messy real-world data and turning it into clear answers someone can act on."

const Stat = ({ value, suffix, label, start, delay }) => {
  const n = useCount(value, start)
  return (
    <div className='reveal border-t border-line pt-5' style={{ '--d': `${delay}s` }}>
      <p className='text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums'>{n}<span className='text-accent'>{suffix}</span></p>
      <p className='mt-2 text-sm text-muted max-w-[14rem]'>{label}</p>
    </div>
  )
}

const About = () => {
  const box = useRef(null)
  const [statsRef, seen] = useInView('-15% 0px')

  const onScroll = useCallback(() => {
    if (!box.current) return
    const r = box.current.getBoundingClientRect()
    const p = Math.min(Math.max((window.innerHeight * 0.85 - r.top) / (r.height + window.innerHeight * 0.35), 0), 1)
    const words = box.current.children
    const lit = Math.round(p * words.length)
    for (let i = 0; i < words.length; i++) words[i].classList.toggle('dim', i >= lit)
  }, [])
  useScroll(onScroll)

  return (
    <section id='about' className='mx-auto max-w-6xl px-5 sm:px-8 py-28 sm:py-40'>
      <p className='label mb-8'>(01) About</p>
      <p className='text-[clamp(1.6rem,4vw,3.3rem)] font-medium tracking-tight leading-[1.2]'>
        <span className='sr-only'>{text}</span>
        <span ref={box} aria-hidden='true'>
          {text.split(' ').map((w, i) => <span key={i} className='dim transition-opacity duration-300'>{w} </span>)}
        </span>
      </p>
      <div ref={statsRef} className='mt-24 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12'>
        {stats.map(([value, suffix, label], i) => <Stat key={label} value={value} suffix={suffix} label={label} start={seen} delay={i * 0.08} />)}
      </div>
    </section>
  )
}

export default About
