import React from 'react'
import { skills } from '../data'

const spot = e => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}

const Skills = () => (
  <section id='skills' className='mx-auto max-w-6xl px-5 sm:px-8 py-24'>
    <p className='eyebrow mb-4'>Skills</p>
    <h2 className='text-4xl sm:text-6xl font-extrabold tracking-tight mb-12'>What I work with</h2>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {skills.map(({ group, note, items, wide }, i) => (
        <div key={group} onMouseMove={spot} className={`reveal group relative overflow-hidden rounded-2xl border border-line bg-card p-6 sm:p-7 flex flex-col hover:border-accent/50 transition-colors ${wide ? 'lg:col-span-2' : ''}`} style={{ '--d': `${(i % 3) * 0.08}s` }}>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 spot' />
          <h3 className='relative text-xl font-bold tracking-tight'>{group}</h3>
          <ul className='relative mt-5 flex flex-wrap gap-2.5'>
            {items.map(([name, Icon]) => (
              <li key={name} className='inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-line bg-bg font-medium'>
                {Icon && <Icon className='text-lg text-accent' aria-hidden='true' />}{name}
              </li>
            ))}
          </ul>
          <p className='relative mt-auto pt-6 text-muted'>{note}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
