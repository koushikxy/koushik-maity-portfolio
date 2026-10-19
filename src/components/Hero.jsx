import React, { useEffect, useRef, useState } from 'react'
import { FiArrowDown, FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import { GoLink } from './Transition'
import { resume } from '../data'
import { upiMonthly } from '../upi'
import { gsap, reduced, scrollTo } from '../motion'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const label = ym => `${months[+ym.slice(5) - 1]} ${ym.slice(0, 4)}`
const top = 26
const ticks = [5, 10, 15, 20, 25]
const last = upiMonthly.length - 1

const Hero = ({ play }) => {
  const root = useRef(null)
  const box = useRef(null)
  const [size, setSize] = useState({ w: 1440, h: 900 })
  const [at, setAt] = useState(null)
  const hovering = useRef(false)

  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }))
    ro.observe(box.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!play) return
    if (reduced()) { setAt(last); return }
    const ctx = gsap.context(() => {
      gsap.from('.hero-line > span', { yPercent: 110, duration: 1.4, ease: 'expo.out', stagger: 0.08, delay: 0.2 })
      gsap.from('.hero-fade', { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.4 })
      gsap.fromTo('.hero-path', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.6, ease: 'power2.inOut' })
      gsap.from('.hero-area', { opacity: 0, duration: 1.6, delay: 1.4 })
      const run = { i: 0 }
      gsap.to(run, { i: last, duration: 2.6, ease: 'power2.inOut', onUpdate: () => !hovering.current && setAt(Math.round(run.i)) })
    }, root)
    return () => ctx.revert()
  }, [play])

  const { w, h } = size
  const wide = w >= 1024
  const x = i => (i / last) * w * (wide ? 0.94 : 0.9)
  const y = v => h * 0.9 - (v / top) * h * (wide ? 0.72 : 0.36)
  const pts = upiMonthly.map(([, v], i) => [x(i), y(v)])
  const line = pts.map(([px, py], i) => `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`).join('')
  const area = `${line}L${x(last).toFixed(1)},${h}L0,${h}Z`

  const move = e => {
    if (e.pointerType !== 'mouse') return
    const r = box.current.getBoundingClientRect()
    const i = Math.round(((e.clientX - r.left) / (w * (wide ? 0.94 : 0.9))) * last)
    hovering.current = true
    setAt(Math.min(Math.max(i, 0), last))
  }
  const leave = () => { hovering.current = false; setAt(last) }

  const p = at === null ? null : pts[at]
  const flip = p && p[0] > w - 220

  return (
    <section id='top' ref={root} onPointerMove={move} onPointerLeave={leave} className='relative min-h-[100svh] flex flex-col overflow-hidden'>
      <div ref={box} aria-hidden='true' className='absolute inset-0'>
        <svg width={w} height={h} className='absolute inset-0'>
          <defs>
            <linearGradient id='hero-fill' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0' stopColor='rgb(var(--accent))' stopOpacity='0.22' />
              <stop offset='1' stopColor='rgb(var(--accent))' stopOpacity='0' />
            </linearGradient>
          </defs>
          {ticks.map(t => (
            <g key={t}>
              <line x1='0' x2={w} y1={y(t)} y2={y(t)} stroke='rgb(var(--line))' strokeDasharray='2 6' />
              <text x={w - 16} y={y(t) - 8} textAnchor='end' className='fill-muted font-mono text-[11px]'>{t} bn</text>
            </g>
          ))}
          <path className='hero-area' d={area} fill='url(#hero-fill)' />
          <path className='hero-path' d={line} pathLength='1' strokeDasharray='1' fill='none' stroke='rgb(var(--accent))' strokeWidth='2.5' strokeLinejoin='round' />
          {p && (
            <g>
              <line x1={p[0]} x2={p[0]} y1={p[1]} y2={h} stroke='rgb(var(--accent))' strokeOpacity='0.5' strokeDasharray='3 5' />
              <circle cx={p[0]} cy={p[1]} r='14' fill='rgb(var(--accent))' fillOpacity='0.18' className={at === last ? 'animate-pulse' : ''} />
              <circle cx={p[0]} cy={p[1]} r='5' fill='rgb(var(--accent))' />
            </g>
          )}
        </svg>
        {p && (
          <div className='absolute pointer-events-none rounded-xl border border-line bg-bg/85 backdrop-blur px-3.5 py-2.5 font-mono text-xs whitespace-nowrap' style={{ left: p[0], top: p[1], transform: `translate(${flip ? 'calc(-100% - 22px)' : '22px'}, -50%)` }}>
            <span className='block text-muted'>{label(upiMonthly[at][0])}</span>
            <span className='block mt-0.5 text-fg text-sm'>{upiMonthly[at][1].toFixed(2)} bn UPI payments</span>
          </div>
        )}
      </div>

      <div className='wrap relative z-10 pt-40 lg:pt-36 pointer-events-none [&_a]:pointer-events-auto'>
        <p className='hero-fade flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted'><span className='inline-flex items-center gap-1.5'><FiMapPin className='text-accent' /> Bangalore, India</span><span className='text-accent'>/</span><span className='inline-flex items-center gap-2'><span className='w-2 h-2 rounded-full bg-accent animate-pulse' />open to work</span></p>
        <p className='hero-fade mt-6 max-w-xl text-2xl sm:text-4xl font-medium leading-tight tracking-tight'>
          I find the story in messy data and turn it into <span className='text-accent'>answers people can act on</span>.
        </p>
        <div className='hero-fade mt-8 flex flex-wrap items-center gap-3'>
          <a href='#work' onClick={e => { e.preventDefault(); scrollTo(document.getElementById('work')) }} className='pill-accent'>See my projects <FiArrowDown /></a>
          <GoLink to={resume} label='Resume' className='pill bg-bg/60 backdrop-blur-sm'>Resume <FiArrowUpRight /></GoLink>
        </div>
      </div>

      <div className='relative z-10 mt-auto pb-6 lg:pb-8 pointer-events-none [&_a]:pointer-events-auto'>
        <h1 className='wrap font-display font-semibold text-[clamp(4rem,13vw,15rem)] tracking-[-0.055em] leading-[0.8]'>
          <span className='hero-line word-mask'><span>Koushik</span></span>{' '}
          <span className='hero-line word-mask'><span>Maity<span className='text-accent'>.</span></span></span>
        </h1>
        <p className='hero-fade wrap mt-5 flex flex-wrap justify-between gap-x-6 gap-y-1 font-mono text-xs text-muted'>
          <span><span className='text-accent'>fig. 0</span> Monthly UPI payments in India, Jun 2020 to Sep 2026.<span className='hidden lg:inline'> Hover the chart.</span></span>
          <GoLink to='/work/upi-payments-dashboard' label='UPI Payments Dashboard' className='text-fg hover:text-accent transition-colors'>From my UPI dashboard project <FiArrowUpRight className='inline' /></GoLink>
        </p>
      </div>
    </section>
  )
}

export default Hero
