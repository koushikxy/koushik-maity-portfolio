import React, { useEffect, useRef, useState } from 'react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import portrait from '../img/portrait.webp'
import portraitSm from '../img/portrait-sm.webp'
import LineChart from './LineChart'
import { GoLink } from './Transition'
import { resume, stats } from '../data'
import { upiMonthly } from '../upi'
import { useCount } from '../hooks'
import { gsap, reduced, scrollTo } from '../motion'

const ring = 'BASED IN BANGALORE • INDIA • OPEN TO WORK • '
const time = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })

const Badge = () => {
  const [now, setNow] = useState(time)
  useEffect(() => {
    const t = setInterval(() => setNow(time()), 20000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className='relative w-32 h-32 sm:w-40 sm:h-40'>
      <svg viewBox='0 0 200 200' className='absolute inset-0 w-full h-full spin-slow' aria-hidden='true'>
        <defs><path id='ring' d='M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0' /></defs>
        <text className='fill-fg font-display' textLength='488' lengthAdjust='spacing' style={{ fontSize: 15, fontWeight: 600 }}>
          <textPath href='#ring' textLength='488' lengthAdjust='spacing'>{ring}</textPath>
        </text>
      </svg>
      <div className='absolute inset-[26%] rounded-full bg-accent text-ink grid place-items-center text-center leading-none'>
        <p><span className='block font-display text-xl sm:text-2xl font-semibold tabular-nums'>{now}</span><span className='text-[11px] font-bold tracking-wider'>IST</span></p>
      </div>
      <span className='sr-only'>Based in Bangalore, India. Open to work.</span>
    </div>
  )
}

const Kpi = ({ value, suffix, label, start }) => {
  const n = useCount(value, start)
  return (
    <div className='rounded-2xl border border-line bg-card/60 p-5'>
      <p className='font-display text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums'>{n}<span className='text-accent'>{suffix}</span></p>
      <p className='mt-2 text-sm text-muted leading-snug'>{label}</p>
    </div>
  )
}

const Hero = ({ play }) => {
  const root = useRef(null)
  const [chartOn, setChartOn] = useState(false)

  useEffect(() => {
    if (!play) return
    const t = setTimeout(() => setChartOn(true), 500)
    if (reduced()) return () => clearTimeout(t)
    const ctx = gsap.context(() => {
      gsap.from('.hero-line > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08 })
      gsap.from('.hero-fade', { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.3 })
      gsap.from('.hero-photo', { opacity: 0, y: 60, duration: 1.4, ease: 'expo.out', delay: 0.2 })
      gsap.from('.hero-badge', { scale: 0, rotate: -120, duration: 1.6, ease: 'elastic.out(1, 0.6)', delay: 0.6 })
    }, root)
    return () => { clearTimeout(t); ctx.revert() }
  }, [play])

  return (
    <section id='top' ref={root} className='relative pt-40 lg:pt-32 pb-16 overflow-hidden'>
      <div className='absolute inset-0 grain pointer-events-none' />
      <div className='wrap relative'>
        <div className='hero-fade flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line text-sm'>
          <span className='font-mono text-muted'>Portfolio / Data Analyst</span>
          <span className='inline-flex items-center gap-2'><span className='w-2 h-2 rounded-full bg-accent animate-pulse' /> Open to Data Analyst and Business Analyst roles</span>
        </div>

        <div className='mt-12 grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-end'>
          <div>
            <h1 className='font-display text-[clamp(3.6rem,10vw,9.5rem)] font-semibold tracking-[-0.045em] leading-[0.88]'>
              <span className='hero-line word-mask'><span>Koushik</span></span><br />
              <span className='hero-line word-mask'><span>Maity<span className='text-accent'>.</span></span></span>
            </h1>
            <p className='hero-fade mt-8 max-w-xl text-xl sm:text-2xl text-muted leading-snug'>
              Data analyst in Bangalore. I turn messy data into <span className='text-fg'>answers people can act on</span>, using SQL, Python, Power BI and Excel.
            </p>
            <div className='hero-fade mt-10 flex flex-wrap gap-3'>
              <a href='#work' onClick={e => { e.preventDefault(); scrollTo(document.getElementById('work')) }} className='pill-accent'>See my projects <FiArrowDown /></a>
              <GoLink to={resume} label='Resume' className='pill'>Resume <FiArrowUpRight /></GoLink>
            </div>
          </div>

          <div className='hero-photo relative'>
            <div className='relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-line bg-[radial-gradient(ellipse_at_50%_100%,rgb(var(--fg)/0.16),transparent_70%)]'>
              <div className='absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(var(--line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line))_1px,transparent_1px)] [background-size:40px_40px]' />
              <img src={portrait} srcSet={`${portraitSm} 520w, ${portrait} 777w`} sizes='(min-width: 1024px) 34vw, 90vw' fetchpriority='high' alt='Koushik Maity' width='777' height='955' className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto max-w-none' />
            </div>
            <div className='hero-badge absolute -top-10 -left-8 sm:-left-12'><Badge /></div>
          </div>
        </div>

        <div className='hero-fade mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3'>
          {stats.map(([value, suffix, label]) => <Kpi key={label} value={value} suffix={suffix} label={label} start={chartOn} />)}
        </div>

        <figure className='hero-fade mt-3 rounded-[1.75rem] border border-line bg-card/60 p-5 sm:p-8'>
          <figcaption className='flex flex-wrap items-baseline justify-between gap-3 mb-6'>
            <span><span className='font-mono text-sm text-accent'>Exhibit 1</span><span className='ml-3 font-display text-lg sm:text-xl font-semibold'>Monthly UPI transactions in India, in billions</span></span>
            <GoLink to='/work/upi-payments-dashboard' label='UPI Payments Dashboard' className='text-sm text-muted hover:text-accent'>From my UPI dashboard project <FiArrowUpRight className='inline' /></GoLink>
          </figcaption>
          <LineChart data={upiMonthly} unit='bn' play={chartOn} />
        </figure>
      </div>
    </section>
  )
}

export default Hero
