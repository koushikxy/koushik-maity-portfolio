import React, { useEffect, useRef, useState } from 'react'
import { FiArrowDownRight } from 'react-icons/fi'
import portrait from '../img/portrait.webp'
import portraitSm from '../img/portrait-sm.webp'
import t1 from '../img/trail-1.webp'
import t2 from '../img/trail-2.webp'
import t3 from '../img/trail-3.webp'
import t4 from '../img/trail-4.webp'
import { gsap, onVelocity, reduced, finePointer } from '../motion'

const trail = [t1, t2, t3, t4]
const ring = 'BASED IN BANGALORE • INDIA • OPEN TO WORK • '
const time = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })

const Badge = () => {
  const [now, setNow] = useState(time)
  useEffect(() => {
    const t = setInterval(() => setNow(time()), 20000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className='relative w-36 h-36 sm:w-44 sm:h-44'>
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

const Hero = ({ play }) => {
  const root = useRef(null)
  const track = useRef(null)
  const pool = useRef([])

  useEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      const loop = gsap.to(track.current, { xPercent: -50, duration: 24, ease: 'none', repeat: -1 })
      let dir = 1
      const off = onVelocity((v, d) => {
        if (d) dir = d
        gsap.to(loop, { timeScale: dir * (1 + Math.min(Math.abs(v), 40) * 0.08), duration: 0.3, overwrite: true })
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.3, overwrite: false })
      })
      gsap.to('.hero-photo', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-name', { yPercent: 60, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      return off
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (reduced() || !finePointer()) return
    const el = root.current
    let last = null
    let i = 0
    let z = 1
    const move = e => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      if (last && Math.hypot(x - last[0], y - last[1]) < 110) return
      last = [x, y]
      const img = pool.current[i % pool.current.length]
      img.src = trail[i % trail.length]
      i++
      gsap.killTweensOf(img)
      gsap.set(img, { x, y, xPercent: -50, yPercent: -50, zIndex: z++, opacity: 1, scale: 0.6, rotate: gsap.utils.random(-10, 10) })
      gsap.to(img, { scale: 1, duration: 0.5, ease: 'expo.out' })
      gsap.to(img, { opacity: 0, scale: 0.85, duration: 0.6, delay: 0.55, ease: 'power2.in' })
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    if (!play || reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-photo', { y: 140, opacity: 0, duration: 1.6, ease: 'expo.out' })
      gsap.from('.hero-name', { yPercent: 100, duration: 1.6, ease: 'expo.out', delay: 0.1 })
      gsap.from('.hero-fade', { opacity: 0, y: 24, duration: 1.2, ease: 'power3.out', delay: 0.5, stagger: 0.1 })
      gsap.from('.hero-badge', { scale: 0, rotate: -120, duration: 1.6, ease: 'elastic.out(1, 0.6)', delay: 0.7 })
    }, root)
    return () => ctx.revert()
  }, [play])

  return (
    <section id='top' ref={root} className='relative h-[100svh] min-h-[640px] overflow-hidden'>
      <div className='absolute inset-0 spotlight' />
      <div className='absolute inset-0 grain pointer-events-none' />
      <h1 className='sr-only'>Koushik Maity, Data Analyst in Bangalore</h1>

      <div className='hero-photo absolute inset-x-0 bottom-0 h-[62%] sm:h-[80%] flex justify-center'>
        <img src={portrait} srcSet={`${portraitSm} 520w, ${portrait} 777w`} sizes='(min-width: 640px) 52vh, 45vh' fetchpriority='high' alt='Koushik Maity' width='777' height='955' className='h-full w-auto max-w-none select-none' draggable='false' />
      </div>

      <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(n => (
          <img key={n} ref={el => (pool.current[n] = el)} alt='' className='absolute left-0 top-0 w-36 sm:w-44 aspect-[3/4] object-cover rounded-xl opacity-0 shadow-[0_20px_50px_rgb(0_0_0/0.5)]' />
        ))}
      </div>

      <div className='absolute left-5 sm:left-10 lg:left-16 top-28 lg:top-[30%]'>
        <div className='hero-badge'><Badge /></div>
        <p className='hero-fade hidden lg:flex mt-6 items-center gap-2 text-sm text-muted'>
          <span className='w-1.5 h-1.5 rounded-full bg-accent' /> Move your cursor around
        </p>
      </div>

      <div className='hero-fade absolute right-5 sm:right-10 lg:right-[8%] top-28 lg:top-[30%] text-right lg:text-left'>
        <FiArrowDownRight className='hidden lg:block text-3xl mb-8' />
        <p className='font-display text-2xl sm:text-4xl font-semibold leading-tight'>Data Analyst</p>
        <p className='font-display text-2xl sm:text-4xl font-medium leading-tight text-muted'>SQL, Python,<br className='sm:hidden' /> Power BI</p>
      </div>

      <div className='absolute inset-x-0 bottom-[5%] sm:bottom-[3%] overflow-hidden pointer-events-none'>
        <div className='hero-name'>
          <div ref={track} className='flex w-max whitespace-nowrap'>
            {[0, 1].map(i => (
              <p key={i} aria-hidden='true' className='font-display text-[clamp(5.5rem,17vw,16rem)] font-semibold tracking-[-0.03em] leading-[0.9] pr-[0.3em]'>
                Koushik Maity <span className='inline-block w-[0.16em] h-[0.16em] mx-[0.2em] rounded-full bg-accent align-middle' /> Data Analyst <span className='inline-block w-[0.16em] h-[0.16em] mx-[0.2em] rounded-full bg-accent align-middle' />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
