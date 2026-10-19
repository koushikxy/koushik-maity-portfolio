import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { GoLink } from './Transition'
import { projects, otherProjects } from '../data'
import { gsap, stopScroll, whenIdle } from '../motion'

const Gallery = ({ shots, start, onClose }) => {
  const [i, setI] = useState(start)
  const close = useRef(null)
  useEffect(() => {
    close.current.focus()
    stopScroll(true)
    const key = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setI(n => (n + 1) % shots.length)
      if (e.key === 'ArrowLeft') setI(n => (n - 1 + shots.length) % shots.length)
    }
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('keydown', key)
      stopScroll(false)
    }
  }, [shots.length, onClose])
  const [src, , caption] = shots[i]
  const step = d => e => { e.stopPropagation(); setI(n => (n + d + shots.length) % shots.length) }
  return (
    <div role='dialog' aria-modal='true' aria-label={caption} onClick={onClose} className='fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-3 sm:p-8 text-white'>
      <img src={src} alt={caption} onClick={e => e.stopPropagation()} className='w-auto h-auto max-w-[min(94vw,1200px)] max-h-[78vh] object-contain rounded-lg bg-white' />
      <div onClick={e => e.stopPropagation()} className='flex items-center gap-4 text-sm'>
        {shots.length > 1 && <button onClick={step(-1)} aria-label='Previous image' className='w-11 h-11 rounded-full border border-white/25 grid place-items-center hover:bg-white hover:text-black'><FiChevronLeft /></button>}
        <p className='text-center'><span className='font-mono text-white/60'>{i + 1} / {shots.length}</span> <span className='ml-2'>{caption}</span></p>
        {shots.length > 1 && <button onClick={step(1)} aria-label='Next image' className='w-11 h-11 rounded-full border border-white/25 grid place-items-center hover:bg-white hover:text-black'><FiChevronRight /></button>}
      </div>
      <button ref={close} onClick={onClose} aria-label='Close' className='absolute top-5 right-5 w-14 h-14 rounded-full bg-accent text-ink grid place-items-center text-xl'><FiX /></button>
    </div>
  )
}

const Story = () => {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(null)
  const closeGallery = useCallback(() => setOpen(null), [])
  const steps = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) setActive(Number(e.target.dataset.i))
    }), { rootMargin: '-45% 0px -45% 0px' })
    steps.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const n = projects.length
  return (
    <div className='grid lg:grid-cols-[0.55fr_0.45fr] gap-12 lg:gap-16'>
      <div className='hidden lg:block'>
        <div className='sticky top-28 h-[calc(100vh-9rem)] min-h-[520px] rounded-[1.75rem] border border-line bg-card p-8 flex flex-col'>
          <div className='flex items-center justify-between font-mono text-sm text-muted'>
            <span>Finding <span className='text-fg'>{String(active + 1).padStart(2, '0')}</span> of {String(n).padStart(2, '0')}</span>
            <span>{projects[active].type}</span>
          </div>
          <div className='relative mt-8 h-44'>
            {projects.map((p, i) => (
              <div key={p.slug} aria-hidden={i !== active} className={`absolute inset-0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${i === active ? 'opacity-100 translate-y-0' : i < active ? 'opacity-0 -translate-y-8' : 'opacity-0 translate-y-8'}`}>
                <p className='font-display text-[clamp(4rem,7vw,7rem)] font-semibold tracking-tight leading-none text-accent'>{p.stat}</p>
                <p className='mt-4 max-w-md text-xl leading-snug'>{p.statLabel}</p>
              </div>
            ))}
          </div>
          <div className='relative flex-1 mt-6 rounded-2xl bg-bg/60 overflow-hidden'>
            {projects.map((p, i) => (
              <img key={p.slug} src={p.cover} alt='' loading='lazy' className={`absolute inset-0 w-full h-full object-contain p-5 transition duration-700 ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
            ))}
          </div>
          <div className='mt-6 grid gap-2' style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
            {projects.map((p, i) => <span key={p.slug} className={`h-1 rounded-full transition-colors duration-500 ${i <= active ? 'bg-accent' : 'bg-line'}`} />)}
          </div>
        </div>
      </div>

      <ol>
        {projects.map((p, i) => (
          <li key={p.slug} ref={el => (steps.current[i] = el)} data-i={i} className={`lg:min-h-[78vh] flex items-center py-14 lg:py-28 border-line first:pt-0 [&+&]:border-t transition-opacity duration-500 ${active === i ? 'lg:opacity-100' : 'lg:opacity-[0.8]'}`}>
            <div>
              <p className='font-mono text-sm text-muted'>{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')} <span className='text-accent'>{p.type}</span></p>
              <h3 className='mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.02]'>{p.title}</h3>
              <p className='mt-4 text-xl sm:text-2xl text-muted'>{p.question}</p>
              <div className='lg:hidden mt-8 rounded-2xl bg-card p-5'>
                <p className='font-display text-6xl font-semibold text-accent leading-none'>{p.stat}</p>
                <p className='mt-3 text-lg'>{p.statLabel}</p>
                <img src={p.cover} width={p.size[0]} height={p.size[1]} alt='' loading='lazy' className='mt-5 w-full rounded-lg' />
              </div>
              <p className='mt-6 text-lg leading-relaxed text-fg/85'>{p.intro}</p>
              <div className={`mt-6 grid gap-2 ${p.shots.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {p.shots.slice(0, 3).map(([src, size, caption], j) => (
                  <button key={caption} onClick={() => setOpen({ shots: p.shots, start: j })} aria-label={`View ${caption}`} className='group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-line'>
                    <img src={src} width={size[0]} height={size[1]} alt='' loading='lazy' className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105' />
                    {j === 2 && p.shots.length > 3 && <span className='absolute inset-0 bg-black/60 grid place-items-center font-display text-xl font-semibold text-white'>+{p.shots.length - 3}</span>}
                  </button>
                ))}
              </div>
              <p className='mt-2 font-mono text-xs text-muted'>{p.shots.length} {p.shots.length > 1 ? 'images' : 'image'} from the project. Click to enlarge.</p>
              <div className='mt-6 flex flex-wrap gap-2'>{p.tools.map(t => <span key={t} className='tag'>{t}</span>)}</div>
              <div className='mt-8 flex flex-wrap gap-3'>
                <GoLink to={`/work/${p.slug}`} label={p.title} className='pill-accent'>Open the case study <FiArrowUpRight /></GoLink>
                <a href={p.links[0][1]} target='_blank' rel='noreferrer' className='pill'>Code</a>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {open && <Gallery shots={open.shots} start={open.start} onClose={closeGallery} />}
    </div>
  )
}

const Work = () => {
  const root = useRef(null)

  useEffect(() => whenIdle(root, () => {
    gsap.from('.work-title > span > span', { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.work-title', start: 'top 85%' } })
    gsap.from('.other-row', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.other-list', start: 'top 85%' } })
  }), [])

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
        <p className='max-w-sm text-lg text-muted'>Four end-to-end analyses on real public data. Scroll through the main finding of each, then open the full case study.</p>
      </div>

      <Story />

      <div className='mt-36 sm:mt-48'>
        <div className='flex items-end justify-between gap-6 mb-8'>
          <h3 className='font-display text-3xl sm:text-5xl font-semibold tracking-tight'>Other things I've built</h3>
          <span className='hidden sm:block label'>Web and team projects</span>
        </div>
        <ul className='other-list border-t border-line'>
          {otherProjects.map(p => (
            <li key={p.title} className='other-row group relative border-b border-line py-8 sm:py-12 flex items-center gap-5 sm:gap-10'>
              <img src={p.image} width={p.size[0]} height={p.size[1]} alt='' loading='lazy' className='w-24 sm:w-40 lg:w-48 aspect-[4/3] shrink-0 rounded-lg object-cover object-top border border-line transition-transform duration-500 group-hover:scale-[1.03]' />
              <div className='flex-1 min-w-0 transition-colors duration-300 group-hover:text-accent'>
                <a href={p.github} target='_blank' rel='noreferrer' className='font-display text-2xl sm:text-5xl font-semibold tracking-tight after:absolute after:inset-0'>{p.title}</a>
                <p className='mt-2 text-muted'>{p.description}</p>
              </div>
              <span className='hidden md:block text-muted'>{p.tools}</span>
              {p.live && <a href={p.live} target='_blank' rel='noreferrer' className='relative z-10 hidden sm:inline-flex tag hover:bg-accent hover:text-ink hover:border-accent transition-colors'>Live site <FiArrowUpRight /></a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Work
