import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FiArrowUpRight, FiX, FiArrowLeft } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Magnetic from '../components/Magnetic'
import { GoLink } from '../components/Transition'
import NotFound from './NotFound'
import { projects } from '../data'
import { useInView, useReveal } from '../hooks'
import { gsap, reduced, stopScroll } from '../motion'

const Bars = ({ chart }) => {
  const [ref, seen] = useInView('-15% 0px')
  const max = Math.max(...chart.rows.map(r => r[1]))
  return (
    <div ref={ref} className='rounded-[1.25rem] bg-card p-6 sm:p-10'>
      <p className='text-xl font-medium mb-8'>{chart.title}</p>
      <ul className='space-y-5'>
        {chart.rows.map(([name, value], i) => (
          <li key={name} className='grid grid-cols-[8.5rem_1fr_3.5rem] sm:grid-cols-[10rem_1fr_4rem] items-center gap-4'>
            <span className='text-muted'>{name}</span>
            <span className='h-3 rounded-full bg-line overflow-hidden'>
              <span className='block h-full rounded-full bg-accent transition-[width] duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)]' style={{ width: seen ? `${(value / max) * 100}%` : 0, transitionDelay: `${i * 0.08}s` }} />
            </span>
            <span className='text-right font-medium tabular-nums'>{value}{chart.unit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Zoomable = ({ src, size, alt, caption, onZoom }) => (
  <figure className='reveal'>
    <button onClick={() => onZoom({ src, alt })} data-cursor='view' className='block w-full rounded-[1.25rem] bg-card p-3 sm:p-6 overflow-hidden'>
      <img src={src} width={size[0]} height={size[1]} alt={alt} loading='lazy' className='w-full rounded-lg' />
    </button>
    {caption && <figcaption className='mt-4 text-muted'>{caption}</figcaption>}
  </figure>
)

const Section = ({ title, children }) => (
  <section className='wrap py-16 sm:py-24 grid lg:grid-cols-[0.35fr_1fr] gap-8 lg:gap-16 border-t border-line'>
    <h2 className='reveal label text-base'>{title}</h2>
    <div>{children}</div>
  </section>
)

const Project = () => {
  const { slug } = useParams()
  const index = projects.findIndex(p => p.slug === slug)
  const p = projects[index]
  const next = projects[(index + 1) % projects.length]
  const root = useRef(null)
  const [zoom, setZoom] = useState(null)
  useReveal(slug)

  useEffect(() => {
    if (p) document.title = `${p.title} | Koushik Maity`
  }, [p])

  useEffect(() => {
    if (!p || reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.p-title > span > span', { yPercent: 110, duration: 1.4, ease: 'expo.out', stagger: 0.06, delay: 0.2 })
      gsap.from('.p-fade', { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.5 })
      gsap.fromTo('.p-cover img', { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.p-cover', start: 'top bottom', end: 'bottom top', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [p])

  useEffect(() => {
    if (!zoom) return
    stopScroll(true)
    const esc = e => e.key === 'Escape' && setZoom(null)
    window.addEventListener('keydown', esc)
    return () => {
      window.removeEventListener('keydown', esc)
      stopScroll(false)
    }
  }, [zoom])

  if (!p) return <NotFound />

  return (
    <div ref={root}>
      <Navbar />
      <main id='main'>
        <header className='wrap pt-40 sm:pt-48 pb-16'>
          <GoLink to='/Project' label='Work' className='p-fade inline-flex items-center gap-2 label hover:text-fg transition-colors'><FiArrowLeft /> All work</GoLink>
          <h1 className='p-title mt-8 text-[clamp(3rem,9vw,8.5rem)] font-medium tracking-[-0.045em] leading-[0.92]'>
            {p.title.split(' ').map((w, i) => <span key={i} className='word-mask mr-[0.22em]'><span>{w}</span></span>)}
          </h1>
          <p className='p-fade mt-8 max-w-3xl text-2xl sm:text-3xl text-muted'>{p.question}</p>
          <dl className='p-fade mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-line pt-8'>
            <div><dt className='label'>Type</dt><dd className='mt-2 text-lg'>{p.type}</dd></div>
            <div><dt className='label'>Tools</dt><dd className='mt-2 text-lg'>{p.tools.join(', ')}</dd></div>
            <div className='lg:col-span-2'><dt className='label'>Data</dt><dd className='mt-2 text-lg'>{p.data}</dd></div>
          </dl>
        </header>

        <div className='wrap'>
          <button onClick={() => setZoom({ src: p.cover, alt: `${p.title} main chart` })} data-cursor='view' className='p-cover block w-full rounded-[1.5rem] bg-card p-4 sm:p-14 overflow-hidden'>
            <img src={p.cover} width={p.size[0]} height={p.size[1]} alt={`${p.title} main chart`} className='w-full rounded-lg' />
          </button>
        </div>

        <Section title='Overview'>
          <p className='reveal text-2xl sm:text-3xl font-medium leading-[1.35]'>{p.intro}</p>
          <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='reveal rounded-[1.25rem] bg-accent text-ink p-7'>
              <p className='text-5xl sm:text-6xl font-bold tracking-tight'>{p.stat}</p>
              <p className='mt-3 font-medium'>{p.statLabel}</p>
            </div>
            {p.numbers.map(([n, l], i) => (
              <div key={l} className='reveal rounded-[1.25rem] bg-card p-7' style={{ '--d': `${(i + 1) * 0.08}s` }}>
                <p className='text-5xl sm:text-6xl font-bold tracking-tight'>{n}</p>
                <p className='mt-3 text-muted'>{l}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title='What I found'>
          <ol className='border-t border-line'>
            {p.findings.map((f, i) => (
              <li key={i} className='reveal py-7 grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr] gap-4 border-b border-line'>
                <span className='text-accent font-medium tabular-nums'>{String(i + 1).padStart(2, '0')}</span>
                <p className='text-lg sm:text-xl leading-relaxed'>{f}</p>
              </li>
            ))}
          </ol>
        </Section>

        {(p.gallery || p.charts) && (
          <Section title='Charts'>
            <div className='space-y-10'>
              {p.charts && p.charts.map(c => <Bars key={c.title} chart={c} />)}
              {p.gallery && p.gallery.map(([src, size, caption]) => <Zoomable key={caption} src={src} size={size} alt={caption} caption={caption} onZoom={setZoom} />)}
            </div>
          </Section>
        )}

        {p.recommendations && (
          <Section title='What I would suggest'>
            <ul className='grid sm:grid-cols-2 gap-6'>
              {p.recommendations.map((r, i) => (
                <li key={i} className='reveal rounded-[1.25rem] border border-line p-7 text-lg leading-relaxed' style={{ '--d': `${(i % 2) * 0.08}s` }}>{r}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section title='How I built it'>
          <ul className='space-y-5'>
            {p.process.map((s, i) => (
              <li key={i} className='reveal flex gap-5 text-lg leading-relaxed'><span className='mt-3 w-2 h-2 shrink-0 rounded-full bg-accent' />{s}</li>
            ))}
          </ul>
          <div className='reveal mt-14 flex flex-wrap gap-3'>
            {p.links.map(([label, url], i) => (
              <Magnetic key={label} strength={0.25}>
                <a href={url} target='_blank' rel='noreferrer' className={i ? 'pill' : 'pill-accent'}>{label} <FiArrowUpRight /></a>
              </Magnetic>
            ))}
          </div>
        </Section>

        <GoLink to={`/work/${next.slug}`} label={next.title} data-cursor='view' className='group block border-t border-line'>
          <div className='wrap py-24 sm:py-36 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center'>
            <div>
              <p className='label'>Next project</p>
              <p className='mt-6 text-[clamp(2.8rem,7vw,7rem)] font-medium tracking-[-0.045em] leading-[0.95] group-hover:text-accent transition-colors duration-500'>{next.title}</p>
              <p className='mt-6 text-xl text-muted'>{next.question}</p>
            </div>
            <div className='rounded-[1.25rem] bg-card p-6 overflow-hidden'>
              <img src={next.cover} width={next.size[0]} height={next.size[1]} alt='' loading='lazy' className='w-full rounded-lg transition-transform duration-[1.2s] group-hover:scale-105' />
            </div>
          </div>
        </GoLink>
      </main>
      <Footer />

      {zoom && (
        <div role='dialog' aria-modal='true' aria-label={zoom.alt} onClick={() => setZoom(null)} className='fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm grid place-items-center p-3 sm:p-10'>
          <img src={zoom.src} alt={zoom.alt} className='w-full max-w-6xl max-h-full object-contain rounded-lg bg-white' onClick={e => e.stopPropagation()} />
          <button onClick={() => setZoom(null)} autoFocus aria-label='Close' className='absolute top-5 right-5 w-14 h-14 rounded-full bg-accent text-ink grid place-items-center text-xl'><FiX /></button>
        </div>
      )}
    </div>
  )
}

export default Project
