import React, { useEffect, useRef } from 'react'
import { tools, alsoKnow } from '../data'
import { gsap, whenIdle } from '../motion'

const names = tools.map(t => t.name).concat(alsoKnow)
const rows = [names.slice(0, Math.ceil(names.length / 2)), names.slice(Math.ceil(names.length / 2))]

const Skills = () => {
  const root = useRef(null)

  useEffect(() => whenIdle(root, () => {
    gsap.utils.toArray('.skill-band').forEach((band, i) => {
      gsap.fromTo(band, { xPercent: i ? -30 : 0 }, { xPercent: i ? 0 : -30, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 } })
    })
    gsap.from('.tool-tile', { y: 50, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.04, scrollTrigger: { trigger: '.tool-grid', start: 'top 85%' } })
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
          <div>
            <p className='font-mono text-sm text-accent mb-6'>04 / Skills</p>
            <h2 className='text-[clamp(3rem,7vw,6.5rem)] font-display font-semibold tracking-[-0.04em] leading-[0.95]'>Skills<span className='text-accent'>.</span></h2>
          </div>
          <span className='hidden sm:block label'>And the projects I used them in</span>
        </div>

        <ul className='tool-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {tools.map(({ name, Icon, mark, used }) => (
            <li key={name} className='tool-tile group rounded-2xl border border-line bg-card/40 p-5 sm:p-6 flex flex-col hover:border-accent/60 hover:bg-card transition-colors duration-500'>
              <span className='w-14 h-14 rounded-2xl bg-bg border border-line grid place-items-center text-3xl group-hover:text-accent transition-colors duration-500'>
                {Icon ? <Icon aria-hidden='true' /> : <span className='font-mono text-sm font-bold'>{mark}</span>}
              </span>
              <h3 className='mt-5 font-display text-xl font-semibold'>{name}</h3>
              <p className='mt-auto pt-3 text-sm text-muted leading-snug'><span className='font-mono text-xs text-accent'>used in</span><br />{used.join(', ')}</p>
            </li>
          ))}
        </ul>

        <div className='mt-8 flex flex-wrap items-center gap-2'>
          <span className='mr-2 font-mono text-sm text-muted'>Also comfortable with</span>
          {alsoKnow.map(n => <span key={n} className='tag'>{n}</span>)}
        </div>
      </div>
    </section>
  )
}

export default Skills
