import React, { useEffect, useRef, useState } from 'react'
import { reduced } from '../motion'

const ease = t => 1 - Math.pow(1 - t, 4)

const DotPortrait = ({ play }) => {
  const wrap = useRef(null)
  const canvas = useRef(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/dots.json').then(r => r.json()).then(setData).catch(() => {})
  }, [])

  useEffect(() => {
    if (!data || !play) return
    const cv = canvas.current
    const ctx = cv.getContext('2d')
    const css = getComputedStyle(document.documentElement)
    const fg = `rgb(${css.getPropertyValue('--fg').trim().split(' ').join(',')})`
    const accent = `rgb(${css.getPropertyValue('--accent').trim().split(' ').join(',')})`
    const n = data.n
    const start = new Float32Array(n * 2)
    for (let i = 0; i < n; i++) {
      start[i * 2] = Math.random() * 1000
      start[i * 2 + 1] = 200 + Math.random() * (data.h - 200)
    }
    let frame
    let t0
    let size = 0

    const fit = () => {
      const w = wrap.current.clientWidth
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      cv.width = w * dpr
      cv.height = (w * data.h / 1000) * dpr
      cv.style.height = `${w * data.h / 1000}px`
      size = (w / 1000) * dpr
    }

    const draw = p => {
      ctx.clearRect(0, 0, cv.width, cv.height)
      for (let c = 0; c < 2; c++) {
        ctx.fillStyle = c ? accent : fg
        ctx.beginPath()
        for (let i = 0; i < n; i++) {
          const o = i * 4
          if (data.d[o + 3] !== c) continue
          const tx = data.d[o]
          const ty = data.d[o + 1]
          const local = Math.min(Math.max((p * 1.35) - (ty / data.h) * 0.35, 0), 1)
          const k = ease(local)
          const x = (start[i * 2] + (tx - start[i * 2]) * k) * size
          const y = (start[i * 2 + 1] + (ty - start[i * 2 + 1]) * k) * size
          const r = Math.max(0.6, (data.d[o + 2] / 8) * data.s * 0.55 * (0.35 + 0.65 * k)) * size
          ctx.moveTo(x + r, y)
          ctx.arc(x, y, r, 0, Math.PI * 2)
        }
        ctx.fill()
      }
    }

    const tick = now => {
      if (!t0) t0 = now
      const p = Math.min((now - t0) / 2200, 1)
      draw(p)
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    fit()
    if (reduced()) draw(1)
    else frame = requestAnimationFrame(tick)
    const resize = () => { fit(); draw(1) }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [data, play])

  return (
    <figure ref={wrap} className='relative'>
      <canvas ref={canvas} role='img' aria-label='Portrait of Koushik Maity drawn with dots' className='block w-full' style={{ aspectRatio: data ? `1000 / ${data.h}` : '1000 / 979' }} />
      <figcaption className='mt-4 flex items-center justify-between gap-4 font-mono text-xs text-muted'>
        <span><span className='text-accent'>fig. 1</span> me, plotted as {data ? data.n.toLocaleString('en-IN') : '...'} data points</span>
        <span className='hidden sm:inline'>source: graduation photo</span>
      </figcaption>
    </figure>
  )
}

export default DotPortrait
