import React, { useCallback, useRef, useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { dataProjects, otherProjects } from '../data'
import { useScroll } from '../hooks'

const Card = ({ p, i, cardRef }) => (
  <div className='md:sticky md:h-[calc(100svh-8rem)] md:max-h-[640px]' style={{ top: `${6 + i * 1.25}rem` }}>
    <article ref={cardRef} className='h-full origin-top rounded-[1.75rem] border border-line bg-card overflow-hidden grid md:grid-cols-[0.9fr_1.1fr] shadow-[0_-20px_60px_-30px_rgb(0_0_0/0.25)]'>
      <div className='p-7 sm:p-10 flex flex-col'>
        <p className='label'>{String(i + 1).padStart(2, '0')} / {String(dataProjects.length).padStart(2, '0')}</p>
        <h3 className='mt-4 text-2xl sm:text-3xl font-semibold tracking-tight'>{p.title}</h3>
        <div className='mt-8 md:mt-auto'>
          <p className='font-serif italic text-7xl sm:text-8xl text-accent leading-none'>{p.stat}</p>
          <p className='mt-3 text-lg leading-snug max-w-sm'>{p.statLabel}</p>
        </div>
        <p className='mt-6 text-sm text-muted leading-relaxed max-w-md'>{p.description}</p>
        <div className='mt-6 flex flex-wrap items-center gap-2'>
          {p.tools.map(t => <span key={t} className='chip'>{t}</span>)}
        </div>
        <a href={p.github} target='_blank' rel='noreferrer' className='mt-8 self-start inline-flex items-center gap-2 text-sm font-medium border-b border-fg/30 pb-0.5 hover:border-accent hover:text-accent transition-colors'>
          <FiGithub /> Code and full write-up <FiArrowUpRight />
        </a>
      </div>
      <a href={p.github} target='_blank' rel='noreferrer' tabIndex='-1' className='group relative bg-fg/[0.04] border-t md:border-t-0 md:border-l border-line p-4 sm:p-8 flex items-center'>
        <img src={p.image} width={p.size[0]} height={p.size[1]} alt={`Screenshot of the ${p.title}`} loading='lazy' className='w-full max-h-full object-contain rounded-xl border border-line bg-white shadow-xl transition-transform duration-700 group-hover:scale-[1.02]' />
      </a>
    </article>
  </div>
)

const Work = () => {
  const cards = useRef([])
  const [hover, setHover] = useState(null)
  const preview = useRef(null)

  const onScroll = useCallback(() => {
    if (window.innerWidth < 768) return
    cards.current.forEach((card, i) => {
      const next = cards.current[i + 1]
      if (!card) return
      if (!next) return (card.style.transform = '')
      const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top
      const p = Math.min(Math.max(1 - gap / card.offsetHeight, 0), 1)
      card.style.transform = `scale(${1 - p * 0.06})`
      card.style.filter = `brightness(${1 - p * 0.35})`
    })
  }, [])
  useScroll(onScroll)

  const follow = e => {
    if (preview.current) preview.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 90}px)`
  }

  return (
    <section id='work' className='mx-auto max-w-6xl px-5 sm:px-8 py-28'>
      <div className='flex items-end justify-between gap-6 mb-12'>
        <div>
          <p className='label mb-4'>(02) Selected work</p>
          <h2 className='text-4xl sm:text-6xl font-semibold tracking-tight'>Data projects</h2>
        </div>
        <p className='hidden sm:block max-w-xs text-sm text-muted'>Real public datasets, cleaned and analysed end to end. Each card leads with the main finding.</p>
      </div>

      <div className='flex flex-col gap-6 md:gap-[12vh]'>
        {dataProjects.map((p, i) => <Card key={p.title} p={p} i={i} cardRef={el => (cards.current[i] = el)} />)}
      </div>

      <div className='mt-32' onMouseMove={follow}>
        <p className='label mb-6'>Other things I've built</p>
        <ul className='border-t border-line' onMouseLeave={() => setHover(null)}>
          {otherProjects.map((p, i) => (
            <li key={p.title} onMouseEnter={() => setHover(i)} className='group relative border-b border-line py-6 sm:py-8 grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 items-center'>
              <div className='transition-transform duration-500 group-hover:sm:translate-x-3'>
                <a href={p.github} target='_blank' rel='noreferrer' className='text-2xl sm:text-4xl font-semibold tracking-tight after:absolute after:inset-0'>
                  {p.title}
                </a>
                <p className='mt-2 text-muted'>{p.description}</p>
              </div>
              <div className='flex items-center gap-4 text-sm'>
                <span className='font-mono text-xs text-muted'>{p.tools}</span>
                {p.live && <a href={p.live} target='_blank' rel='noreferrer' className='relative z-10 chip hover:border-accent hover:text-accent'>Live site <FiArrowUpRight /></a>}
                <span className='w-10 h-10 shrink-0 rounded-full border border-line grid place-items-center transition duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-bg'><FiArrowUpRight /></span>
              </div>
            </li>
          ))}
        </ul>
        <div ref={preview} aria-hidden='true' className='hidden [@media(hover:hover)]:block fixed left-0 top-0 z-40 pointer-events-none'>
          <div className={`relative w-72 aspect-[16/10] rounded-xl overflow-hidden border border-line shadow-2xl bg-card transition duration-300 ${hover === null ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            {otherProjects.map((p, i) => (
              <img key={p.title} src={p.image} width={p.size[0]} height={p.size[1]} alt='' loading='lazy' className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${hover === i ? 'opacity-100' : 'opacity-0'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
