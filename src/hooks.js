import { useEffect, useRef, useState } from 'react'
import { reduced } from './motion'

export const useReveal = key => {
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }), { rootMargin: '0px 0px -8% 0px' })
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [key])
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

export const useCount = (to, start) => {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    if (reduced()) return setN(to)
    let frame
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min((now - t0) / 1800, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [to, start])
  return n
}
