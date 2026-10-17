import React, { useCallback, useRef } from 'react'
import { stats } from '../data'
import { useCount, useInView, useScroll } from '../hooks'

const text = "I'm a data analyst with a B.Tech in Computer Science. I work mostly in SQL, Python, Power BI and Excel, and I like taking messy real-world data and turning it into clear answers someone can act on."

const Stat = ({ value, suffix, label, start, delay }) => {
  const n = useCount(value, start)
  return (
    <div className='reveal rounded-2xl border border-line bg-card p-6' style={{ '--d': `${delay}s` }}>
      <p className='text-5xl font-extrabold tracking-tight tabular-nums'>{n}<span className='text-accent'>{suffix}</span></p>
      <p className='mt-3 text-muted leading-snug'>{label}</p>
    </div>
  )
}

const About = () => {
  const box = useRef(null)
  const [statsRef, seen] = useInView('-15% 0px')

  const onScroll = useCallback(() => {
    if (!box.current) return
    const r = box.current.getBoundingClientRect()
    const p = Math.min(Math.max((window.innerHeight * 0.9 - r.top) / (r.height + window.innerHeight * 0.2), 0), 1)
    const words = box.current.children
    const lit = Math.round(p * words.length)
    for (let i = 0; i < words.length; i++) words[i].classList.toggle('dim', i >= lit)
  }, [])
  useScroll(onScroll)

  return (
    <section id='about' className='mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32'>
      <p className='eyebrow mb-8'>About me</p>
      <p className='text-[clamp(1.6rem,3.6vw,3rem)] font-semibold tracking-tight leading-[1.3]'>
        <span className='sr-only'>{text}</span>
        <span ref={box} aria-hidden='true'>
          {text.split(' ').map((w, i) => <span key={i} className='word dim'>{w} </span>)}
        </span>
      </p>
      <div ref={statsRef} className='mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {stats.map(([value, suffix, label], i) => <Stat key={label} value={value} suffix={suffix} label={label} start={seen} delay={i * 0.08} />)}
      </div>
    </section>
  )
}

export default About
