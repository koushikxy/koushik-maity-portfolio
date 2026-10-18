import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { GoLink } from './Transition'
import { projects, otherProjects } from '../data'
import { finePointer, gsap, whenIdle } from '../motion'

const Card = ({ p, i }) => (
  <GoLink to={`/work/${p.slug}`} label={p.title} className={`work-card group block ${i % 2 ? 'md:mt-40' : ''}`}>
    <div className='relative aspect-[4/3] rounded-[1.25rem] bg-card overflow-hidden'>
      <div className='absolute inset-0 bg-fg/[0.07] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]' />
      <div className='absolute inset-0 grid place-items-center p-6 sm:p-12'>
        <img src={p.cover} width={p.size[0]} height={p.size[1]} alt={`${p.title} preview`} loading='lazy' className='work-img w-full rounded-lg shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]' />
      </div>
      <span className='absolute left-5 top-5 px-3 py-1 rounded-full bg-bg/80 text-sm font-medium backdrop-blur'>{p.type}</span>
    </div>
    <div className='mt-7 flex items-start justify-between gap-6 pb-6 border-b border-line'>
      <h3 className='font-display text-3xl sm:text-4xl font-semibold tracking-tight'>{p.title}</h3>
      <span className='mt-1 w-12 h-12 shrink-0 rounded-full border border-line grid place-items-center transition duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-ink group-hover:rotate-45'><FiArrowUpRight className='text-xl' /></span>
    </div>
    <p className='mt-5 text-lg text-muted'><span className='text-accent font-bold'>{p.stat}</span> {p.statLabel}</p>
    <div className='mt-5 flex flex-wrap gap-2'>{p.tools.map(t => <span key={t} className='tag'>{t}</span>)}</div>
  </GoLink>
)

const Work = () => {
  const root = useRef(null)
  const preview = useRef(null)
  const [hover, setHover] = useState(null)
  const [fine] = useState(finePointer)

  useEffect(() => whenIdle(root, () => {
    gsap.utils.toArray('.work-card').forEach(card => {
      gsap.from(card, { y: 120, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 90%' } })
    })
    gsap.from('.work-title > span > span', { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.work-title', start: 'top 85%' } })
    gsap.from('.other-row', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.other-list', start: 'top 85%' } })
  }), [])

  useEffect(() => {
    if (!finePointer()) return
    const x = gsap.quickTo(preview.current, 'x', { duration: 0.6, ease: 'power3' })
    const y = gsap.quickTo(preview.current, 'y', { duration: 0.6, ease: 'power3' })
    const move = e => { x(e.clientX); y(e.clientY) }
    const hide = () => setHover(null)
    window.addEventListener('mousemove', move)
    window.addEventListener('scroll', hide, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', hide)
    }
  }, [])

  return (
    <section id='work' ref={root} className='wrap py-24 sm:py-32'>
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24'>
        <div>
          <p className='font-mono text-sm text-accent mb-6'>02 / Projects</p>
          <h2 className='work-title text-[clamp(3.5rem,9vw,8.5rem)] font-display font-semibold tracking-[-0.04em] leading-[0.92]'>
            <span className='word-mask'><span>Selected</span></span><br />
            <span className='word-mask'><span>work<span className='text-accent'>.</span></span></span>
          </h2>
        </div>
        <p className='max-w-sm text-lg text-muted'>Four end-to-end analyses on real public data. Open one to see the full story, the charts, and the code behind it.</p>
      </div>

      <div className='grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-20'>
        {projects.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
      </div>

      <div className='mt-36 sm:mt-48'>
        <div className='flex items-end justify-between gap-6 mb-8'>
          <h3 className='font-display text-3xl sm:text-5xl font-semibold tracking-tight'>Other things I've built</h3>
          <span className='hidden sm:block label'>Web and team projects</span>
        </div>
        <ul className='other-list border-t border-line' onMouseLeave={() => setHover(null)}>
          {otherProjects.map((p, i) => (
            <li key={p.title} onMouseEnter={() => setHover(i)} className='other-row group relative border-b border-line py-8 sm:py-12 flex items-center gap-5 sm:gap-10'>
              <img src={p.image} width={p.size[0]} height={p.size[1]} alt='' loading='lazy' className='[@media(hover:hover)]:hidden w-24 sm:w-32 aspect-[4/3] shrink-0 rounded-lg object-cover object-top' />
              <div className='flex-1 min-w-0 transition duration-500 [@media(hover:hover)]:group-hover:translate-x-4 [@media(hover:hover)]:group-hover:opacity-60'>
                <a href={p.github} target='_blank' rel='noreferrer' className='font-display text-2xl sm:text-5xl font-semibold tracking-tight after:absolute after:inset-0'>{p.title}</a>
                <p className='mt-2 text-muted'>{p.description}</p>
              </div>
              <span className='hidden md:block text-muted'>{p.tools}</span>
              {p.live && <a href={p.live} target='_blank' rel='noreferrer' className='relative z-10 hidden sm:inline-flex tag hover:bg-accent hover:text-ink hover:border-accent transition-colors'>Live site <FiArrowUpRight /></a>}
            </li>
          ))}
        </ul>
        {fine && <div ref={preview} aria-hidden='true' className='fixed left-0 top-0 z-40 pointer-events-none'>
          <div className={`-translate-x-1/2 -translate-y-1/2 w-[380px] aspect-[4/3] rounded-xl overflow-hidden bg-card transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${hover === null ? 'scale-0' : 'scale-100'}`}>
            <div className='transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]' style={{ transform: `translateY(-${(hover || 0) * 100}%)` }}>
              {otherProjects.map(p => (
                <div key={p.title} className='w-full aspect-[4/3] p-6 grid place-items-center'>
                  <img src={p.image} alt='' loading='lazy' className='w-full max-h-full object-cover object-top rounded-md' />
                </div>
              ))}
            </div>
          </div>
        </div>}
      </div>
    </section>
  )
}

export default Work
