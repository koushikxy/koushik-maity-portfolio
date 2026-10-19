import React, { useEffect, useRef, useState } from 'react'
import { experience } from '../data'
import { useInView } from '../hooks'
import { gsap, whenIdle } from '../motion'

const toM = ym => +ym.slice(0, 4) * 12 + +ym.slice(5) - 1
const from = toM('2021-06')
const to = toM('2026-10')
const pos = ym => ((toM(ym) - from) / (to - from)) * 100
const years = [2022, 2023, 2024, 2025, 2026]
const length = ([a, b]) => {
  const m = toM(b) - toM(a) + 1
  const y = Math.floor(m / 12)
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m % 12 && `${m % 12} month${m % 12 > 1 ? 's' : ''}`].filter(Boolean).join(' ')
}

const Logo = ({ e }) => (
  <span className={`shrink-0 flex items-center justify-center overflow-hidden ${e.round ? 'w-20 h-20 rounded-full bg-white p-0.5' : `w-28 h-16 rounded-2xl ${e.light ? 'bg-white p-2' : 'bg-[#171716] border border-line px-3'}`}`}>
    <img src={e.logo} alt={`${e.org} logo`} loading='lazy' className='max-w-full max-h-full object-contain' />
  </span>
)

const Timeline = () => {
  const [ref, seen] = useInView('-10% 0px')
  const [hot, setHot] = useState(null)
  const rows = [...experience].reverse()
  return (
    <figure ref={ref} className='rounded-[1.5rem] border border-line bg-card/60 p-5 sm:p-8'>
      <figcaption className='flex flex-wrap items-baseline justify-between gap-3 mb-14'>
        <span><span className='font-display text-xl font-semibold'>Timeline, 2021 to now</span><span className='block mt-1 font-mono text-xs text-muted'>Hover or tap a bar for dates</span></span>
        <span className='flex gap-5 font-mono text-xs text-muted'>
          {[['work', 'Work', 'bg-accent'], ['edu', 'Education', 'bg-fg/70']].map(([k, label, c]) => (
            <button key={k} onMouseEnter={() => setHot(k)} onMouseLeave={() => setHot(null)} onFocus={() => setHot(k)} onBlur={() => setHot(null)} onClick={() => setHot(hot === k ? null : k)} className={`inline-flex items-center gap-2 transition-colors ${hot === k ? 'text-fg' : ''}`}>
              <span className={`w-3 h-3 rounded-sm ${c}`} /> {label}
            </button>
          ))}
        </span>
      </figcaption>
      <div className='relative'>
        {years.map(y => (
          <span key={y} className='absolute top-0 bottom-6 w-px bg-line' style={{ left: `${pos(`${y}-01`)}%` }} />
        ))}
        <ul className='relative space-y-4'>
          {rows.map((e, i) => {
            const left = pos(e.span[0])
            const width = pos(e.span[1]) - left
            const work = e.bullets.length > 0
            const on = hot === i || hot === (work ? 'work' : 'edu')
            const dim = hot !== null && !on
            const mid = left + Math.max(width, 2.5) / 2
            return (
              <li key={e.org} className={`relative h-12 ${on ? 'z-10' : ''}`}>
                <button onMouseEnter={() => setHot(i)} onMouseLeave={() => setHot(null)} onFocus={() => setHot(i)} onBlur={() => setHot(null)} onClick={() => setHot(hot === i ? null : i)} aria-label={`${e.org}, ${e.role}, ${e.dates}`} className={`absolute top-0 h-full rounded-xl transition-[width,opacity,box-shadow] duration-[1.4s,0.3s,0.3s] ease-[cubic-bezier(.16,1,.3,1)] ${work ? 'bg-accent' : 'bg-fg/70'} ${dim ? 'opacity-30' : ''} ${on ? 'shadow-[0_0_0_3px_rgb(var(--fg)/0.35)]' : ''}`} style={{ left: `${left}%`, width: seen ? `${Math.max(width, 2.5)}%` : 0, transitionDelay: seen && hot === null ? `${i * 0.15}s, 0s, 0s` : '0s' }} />
                <span role='tooltip' className={`absolute bottom-full mb-2 pointer-events-none rounded-xl bg-fg text-ink px-3.5 py-2.5 text-sm whitespace-nowrap shadow-xl transition duration-200 ${on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={mid > 75 ? { right: `${100 - left - Math.max(width, 2.5)}%` } : mid < 25 ? { left: `${left}%` } : { left: `${mid}%`, transform: `translateX(-50%) translateY(${on ? 0 : 4}px)` }}>
                  <span className='block font-semibold'>{e.role}</span>
                  <span className='block text-ink/70'>{e.dates} <span className='ml-1 font-mono text-xs'>({length(e.span)})</span></span>
                </span>
                <span className={`absolute top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap text-sm font-semibold transition-opacity duration-700 ${seen && !dim ? 'opacity-100' : dim ? 'opacity-30' : 'opacity-0'} ${width > 25 ? 'text-ink' : ''}`} style={width > 25 ? { left: `calc(${left}% + 16px)` } : left + width > 70 ? { right: `calc(${100 - left}% + 10px)` } : { left: `calc(${left + Math.max(width, 2.5)}% + 10px)` }}>
                  {e.short}
                </span>
              </li>
            )
          })}
        </ul>
        <div className='relative h-6 mt-3 font-mono text-xs text-muted'>
          {years.map(y => <span key={y} className='absolute -translate-x-1/2' style={{ left: `${pos(`${y}-01`)}%` }}>{y}</span>)}
        </div>
      </div>
    </figure>
  )
}

const Experience = () => {
  const root = useRef(null)

  useEffect(() => whenIdle(root, () => {
    gsap.utils.toArray('.exp-row').forEach(row => {
      gsap.from(row, { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: row, start: 'top 88%' } })
    })
  }), [])

  return (
    <section id='experience' ref={root} className='wrap py-24 sm:py-32'>
      <div className='flex items-end justify-between gap-6 mb-12'>
        <div>
          <p className='font-mono text-sm text-accent mb-6'>03 / Experience</p>
          <h2 className='text-[clamp(3rem,7vw,6.5rem)] font-display font-semibold tracking-[-0.04em] leading-[0.95]'>Experience<span className='text-accent'>.</span></h2>
        </div>
        <span className='hidden sm:block label'>Work and education</span>
      </div>

      <Timeline />

      <ol className='mt-6 grid gap-4'>
        {experience.map(e => (
          <li key={e.org} className='exp-row rounded-[1.5rem] border border-line p-6 sm:p-8 grid md:grid-cols-[0.85fr_1.15fr] gap-6 md:gap-12'>
            <div className='flex items-start gap-5'>
              <Logo e={e} />
              <div>
                <p className='font-mono text-xs text-muted'>{e.dates}</p>
                <h3 className='mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight'>{e.org}</h3>
                <p className='mt-1 text-muted'>{e.role}</p>
              </div>
            </div>
            {e.bullets.length > 0 && (
              <ul className='space-y-3 text-lg text-fg/85 leading-relaxed'>
                {e.bullets.map(b => <li key={b} className='flex gap-4'><span className='mt-3 w-1.5 h-1.5 shrink-0 rounded-full bg-accent' />{b}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
