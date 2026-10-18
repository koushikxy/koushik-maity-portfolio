import React, { useEffect, useRef } from 'react'
import { skills } from '../data'
import { gsap, whenIdle } from '../motion'

const names = skills.flatMap(s => s.items.map(([n]) => n))
const rows = [names.slice(0, Math.ceil(names.length / 2)), names.slice(Math.ceil(names.length / 2))]

const Skills = () => {
  const root = useRef(null)

  useEffect(() => whenIdle(root, () => {
    gsap.utils.toArray('.skill-band').forEach((band, i) => {
      gsap.fromTo(band, { xPercent: i ? -30 : 0 }, { xPercent: i ? 0 : -30, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 } })
    })
    gsap.from('.skill-card', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.skill-grid', start: 'top 85%' } })
  }), [])

  return (
    <section id='skills' ref={root} className='py-24 sm:py-32 overflow-hidden'>
      <div aria-hidden='true' className='space-y-4 mb-20 select-none'>
        {rows.map((row, i) => (
          <div key={i} className='skill-band flex gap-4 w-max'>
            {[...row, ...row].map((n, j) => (
              <span key={j} className={`px-8 py-4 rounded-full text-3xl sm:text-5xl font-medium whitespace-nowrap ${j % 3 === 1 ? 'bg-accent text-ink' : 'border border-line'}`}>{n}</span>
            ))}
          </div>
        ))}
      </div>
      <div className='wrap'>
        <div className='flex items-end justify-between gap-6 mb-12'>
          <h2 className='text-[clamp(3rem,7vw,6.5rem)] font-display font-semibold tracking-[-0.04em] leading-[0.95]'>Skills<span className='text-accent'>.</span></h2>
          <span className='hidden sm:block label'>And where I used them</span>
        </div>
        <div className='skill-grid grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line'>
          {skills.map(({ group, note, items }) => (
            <div key={group} className='skill-card border-r border-b border-line p-7 sm:p-9 hover:bg-card transition-colors duration-500'>
              <h3 className='font-display text-2xl font-semibold'>{group}</h3>
              <p className='mt-1 text-muted'>{note}</p>
              <ul className='mt-7 flex flex-wrap gap-2'>
                {items.map(([name, Icon]) => (
                  <li key={name} className='tag gap-2'>{Icon && <Icon className='text-accent' aria-hidden='true' />}{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
