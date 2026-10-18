import React, { useEffect, useRef } from 'react'
import { experience } from '../data'
import { gsap, whenIdle } from '../motion'

const Experience = () => {
  const root = useRef(null)

  useEffect(() => whenIdle(root, () => {
    gsap.utils.toArray('.exp-row').forEach(row => {
      gsap.from(row, { y: 80, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: row, start: 'top 88%' } })
      gsap.from(row.querySelector('.exp-line'), { scaleX: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: row, start: 'top 88%' } })
    })
  }), [])

  return (
    <section id='experience' ref={root} className='wrap py-24 sm:py-32'>
      <div className='flex items-end justify-between gap-6 mb-14'>
        <h2 className='text-[clamp(3rem,7vw,6.5rem)] font-display font-semibold tracking-[-0.04em] leading-[0.95]'>Experience<span className='text-accent'>.</span></h2>
        <span className='hidden sm:block label'>Work and education</span>
      </div>
      <ol>
        {experience.map(e => (
          <li key={e.org} className='exp-row group relative py-10 sm:py-14 grid md:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-16'>
            <span className='exp-line absolute top-0 inset-x-0 h-px bg-line origin-left' />
            <div>
              <p className='label'>{e.dates}</p>
              <h3 className='mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-500'>{e.org}</h3>
              <p className='mt-2 text-lg text-muted'>{e.role}</p>
            </div>
            {e.bullets.length > 0 && (
              <ul className='space-y-4 text-lg text-fg/85 leading-relaxed md:pt-8'>
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
