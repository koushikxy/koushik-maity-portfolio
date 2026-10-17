import React, { useEffect, useRef } from 'react'
import { gsap, finePointer } from '../motion'

const Magnetic = ({ children, strength = 0.35, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!finePointer()) return
    const x = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.35)' })
    const y = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.35)' })
    const move = e => {
      const r = el.getBoundingClientRect()
      x((e.clientX - r.left - r.width / 2) * strength)
      y((e.clientY - r.top - r.height / 2) * strength)
    }
    const leave = () => { x(0); y(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [strength])

  return <div ref={ref} className={`inline-block ${className}`}>{children}</div>
}

export default Magnetic
