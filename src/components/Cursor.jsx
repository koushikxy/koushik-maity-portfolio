import React, { useEffect, useRef, useState } from 'react'
import { gsap, finePointer } from '../motion'

const sizes = { view: 'w-24 h-24', link: 'w-12 h-12 opacity-40', text: 'w-1 h-7 rounded-sm', hidden: 'w-0 h-0' }

const Cursor = () => {
  const dot = useRef(null)
  const [mode, setMode] = useState('hidden')
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (!finePointer()) return
    setOn(true)
    document.documentElement.classList.add('has-cursor')
    const x = gsap.quickTo(dot.current, 'x', { duration: 0.45, ease: 'power3' })
    const y = gsap.quickTo(dot.current, 'y', { duration: 0.45, ease: 'power3' })
    let px = -1
    let py = -1
    const pick = target => {
      const el = target && target.closest && target.closest('[data-cursor], a, button, input, textarea')
      if (!el) return setMode(null)
      setMode(el.dataset.cursor || (el.matches('input, textarea') ? 'text' : 'link'))
    }
    const move = e => { px = e.clientX; py = e.clientY; x(px); y(py) }
    const over = e => pick(e.target)
    const scroll = () => px >= 0 && pick(document.elementFromPoint(px, py))
    const leave = () => setMode('hidden')
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('scroll', scroll, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('scroll', scroll)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <div ref={dot} aria-hidden='true' className={`fixed left-0 top-0 z-[200] pointer-events-none ${on ? '' : 'hidden'}`}>
      <div className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent text-ink grid place-items-center overflow-hidden text-sm font-bold transition-[width,height,opacity,border-radius] duration-300 ease-out ${sizes[mode] || 'w-3 h-3'}`}>
        <span className={`transition-opacity duration-200 ${mode === 'view' ? 'opacity-100' : 'opacity-0'}`}>View</span>
      </div>
    </div>
  )
}

export default Cursor
