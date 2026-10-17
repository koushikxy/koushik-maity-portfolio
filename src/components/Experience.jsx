import React, { useCallback, useRef } from 'react'
import { experience } from '../data'
import { useScroll } from '../hooks'

const Experience = () => {
  const list = useRef(null)
  const fill = useRef(null)

  const onScroll = useCallback(() => {
    if (!list.current) return
    const r = list.current.getBoundingClientRect()
    const p = Math.min(Math.max((window.innerHeight * 0.6 - r.top) / r.height, 0), 1)
    fill.current.style.transform = `scaleY(${p})`
  }, [])
  useScroll(onScroll)

  return (
    <section id='experience' className='mx-auto max-w-6xl px-5 sm:px-8 py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20'>
      <div className='lg:sticky lg:top-28 self-start'>
        <p className='label mb-4'>(03) Experience</p>
        <h2 className='text-4xl sm:text-6xl font-semibold tracking-tight'>Where I've <span className='font-serif italic font-normal'>worked</span> and studied</h2>
      </div>
      <div className='relative'>
        <span className='absolute left-0 top-2 bottom-2 w-px bg-line' />
        <span ref={fill} className='absolute left-0 top-2 bottom-2 w-px bg-accent origin-top scale-y-0' />
        <ol ref={list} className='relative pl-8 sm:pl-10'>
          {experience.map((e, i) => (
            <li key={e.org} className={`reveal relative ${i ? 'pt-14' : ''}`}>
              <span className={`absolute -left-8 sm:-left-10 -translate-x-1/2 ${i ? 'top-[3.9rem]' : 'top-1.5'} w-3 h-3 rounded-full border-2 border-accent bg-bg`} />
              <p className='font-mono text-xs text-muted'>{e.dates}</p>
              <h3 className='mt-2 text-xl sm:text-2xl font-semibold tracking-tight'>{e.role}</h3>
              <p className='text-accent'>{e.org}</p>
              {e.bullets.length > 0 && (
                <ul className='mt-4 space-y-3 text-muted leading-relaxed'>
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
