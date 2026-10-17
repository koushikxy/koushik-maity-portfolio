import React, { useCallback, useRef, useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { dataProjects, otherProjects } from '../data'
import { useScroll } from '../hooks'

const Card = ({ p, i, cardRef }) => (
  <div className='md:sticky' style={{ top: `${6 + i * 1.25}rem` }}>
    <article ref={cardRef} className='origin-top rounded-[1.75rem] border border-line bg-card overflow-hidden grid md:grid-cols-[0.95fr_1.05fr] md:min-h-[540px] shadow-[0_-24px_60px_-34px_rgb(0_0_0/0.35)]'>
      <div className='p-7 sm:p-10 flex flex-col'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <p className='text-sm font-semibold text-muted'>Project {i + 1} of {dataProjects.length}</p>
            <h3 className='mt-2 text-2xl sm:text-3xl font-bold tracking-tight'>{p.title}</h3>
          </div>
          <a href={p.github} target='_blank' rel='noreferrer' aria-label={`${p.title} on GitHub`} className='group shrink-0 w-12 h-12 rounded-full border border-line grid place-items-center hover:bg-accent hover:border-accent hover:text-bg transition'>
            <FiArrowUpRight className='text-lg transition-transform duration-300 group-hover:rotate-45' />
          </a>
        </div>
        <div className='mt-8 rounded-2xl bg-soft p-6'>
          <p className='text-6xl sm:text-7xl font-extrabold tracking-tight text-accent leading-none'>{p.stat}</p>
          <p className='mt-3 text-lg font-semibold leading-snug'>{p.statLabel}</p>
        </div>
        <p className='mt-6 text-muted leading-relaxed'>{p.description}</p>
        <div className='mt-auto pt-6 flex flex-wrap items-center gap-2'>
          {p.tools.map(t => <span key={t} className='chip'>{t}</span>)}
        </div>
      </div>
      <a href={p.github} target='_blank' rel='noreferrer' tabIndex='-1' aria-hidden='true' className='group relative bg-soft/60 border-t md:border-t-0 md:border-l border-line p-4 sm:p-8 flex flex-col justify-center gap-4'>
        <img src={p.image} width={p.size[0]} height={p.size[1]} alt='' loading='lazy' className='w-full rounded-xl border border-line bg-white shadow-xl transition-transform duration-700 group-hover:scale-[1.02]' />
        <span className='self-center inline-flex items-center gap-2 text-sm font-semibold text-muted group-hover:text-accent transition-colors'><FiGithub /> View code and full write-up</span>
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
      if (!next) return
      const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top
      const p = Math.min(Math.max(1 - gap / card.offsetHeight, 0), 1)
      card.style.transform = `scale(${1 - p * 0.05})`
      card.style.filter = `brightness(${1 - p * 0.3})`
    })
  }, [])
  useScroll(onScroll)

  useScroll(useCallback(() => setHover(null), []))

  const follow = e => {
    if (preview.current) preview.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 90}px)`
  }

  return (
    <section id='work' className='mx-auto max-w-6xl px-5 sm:px-8 py-24'>
      <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12'>
        <div>
          <p className='eyebrow mb-4'>Selected work</p>
          <h2 className='text-4xl sm:text-6xl font-extrabold tracking-tight'>Data projects</h2>
        </div>
        <p className='max-w-sm text-muted'>Real public datasets, cleaned and analysed end to end. Each card starts with the main finding.</p>
      </div>

      <div className='flex flex-col gap-6 md:gap-[14vh]'>
        {dataProjects.map((p, i) => <Card key={p.title} p={p} i={i} cardRef={el => (cards.current[i] = el)} />)}
      </div>

      <div className='mt-28' onMouseMove={follow}>
        <h3 className='text-2xl sm:text-3xl font-bold tracking-tight mb-6'>Other things I've built</h3>
        <ul className='border-t border-line' onMouseLeave={() => setHover(null)}>
          {otherProjects.map((p, i) => (
            <li key={p.title} onMouseEnter={e => { follow(e); setHover(i) }} className='group relative border-b border-line py-6 sm:py-7 flex items-center gap-4 sm:gap-8'>
              <img src={p.image} width={p.size[0]} height={p.size[1]} alt='' loading='lazy' className='[@media(hover:hover)]:hidden w-24 sm:w-32 aspect-[4/3] shrink-0 rounded-lg border border-line object-cover object-top' />
              <div className='flex-1 min-w-0 transition-transform duration-500 [@media(hover:hover)]:group-hover:translate-x-3'>
                <a href={p.github} target='_blank' rel='noreferrer' className='text-xl sm:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors after:absolute after:inset-0'>
                  {p.title}
                </a>
                <p className='mt-1 text-muted'>{p.description}</p>
                <p className='mt-2 text-sm font-medium text-muted sm:hidden'>{p.tools}</p>
              </div>
              <span className='hidden sm:block text-sm font-medium text-muted'>{p.tools}</span>
              {p.live && <a href={p.live} target='_blank' rel='noreferrer' className='relative z-10 hidden sm:inline-flex chip hover:bg-accent hover:text-bg transition-colors'>Live site <FiArrowUpRight /></a>}
              <span className='hidden sm:grid w-11 h-11 shrink-0 rounded-full border border-line place-items-center transition duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-bg'><FiArrowUpRight /></span>
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
