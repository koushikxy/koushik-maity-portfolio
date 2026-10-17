import { useEffect, useRef, useState } from 'react'

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }), { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}

export const useInView = (margin = '0px') => {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { rootMargin: margin })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [margin])
  return [ref, seen]
}

export const useScroll = fn => {
  useEffect(() => {
    let frame
    const run = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(fn)
    }
    run()
    window.addEventListener('scroll', run, { passive: true })
    window.addEventListener('resize', run)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', run)
      window.removeEventListener('resize', run)
    }
  }, [fn])
}

export const useCount = (to, start) => {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    if (reducedMotion()) return setN(to)
    let frame
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min((now - t0) / 1600, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [to, start])
  return n
}
