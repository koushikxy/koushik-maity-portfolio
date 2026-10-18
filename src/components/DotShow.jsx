import React, { useEffect, useRef, useState } from 'react'
import { reduced } from '../motion'

const scenes = [
  { shape: 'portrait', move: 2.4, hold: 3.6, caption: 'me, plotted as 5,548 data points' },
  { shape: 'cap', move: 1.5, hold: 2.6, toss: true, caption: 'B.Tech, class of 2025' },
  { shape: 'bars', move: 1.8, hold: 3.2, grow: true, caption: 'UPI transactions each September, 2020 to 2026' },
  { shape: 'text', move: 1.6, hold: 3, caption: 'open to Data Analyst and Business Analyst roles' }
]
const STARS = 700
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const out = t => 1 - Math.pow(1 - t, 3)

const DotShow = ({ play }) => {
  const wrap = useRef(null)
  const canvas = useRef(null)
  const [data, setData] = useState(null)
  const [scene, setScene] = useState(0)

  useEffect(() => {
    fetch('/show.json').then(r => r.json()).then(setData).catch(() => {})
  }, [])

  useEffect(() => {
    if (!data || !play) return
    const cv = canvas.current
    const ctx = cv.getContext('2d')
    const css = getComputedStyle(document.documentElement)
    const rgb = v => `rgb(${css.getPropertyValue(v).trim().split(' ').join(',')})`
    const colors = [rgb('--fg'), rgb('--accent')]
    const small = window.innerWidth < 1024
    const full = data.shapes.portrait.n
    const keep = small ? 2400 : full
    const N = keep + (small ? 250 : STARS)
    const x = new Float32Array(N), y = new Float32Array(N), r = new Float32Array(N), a = new Float32Array(N)
    const fx = new Float32Array(N), fy = new Float32Array(N), fr = new Float32Array(N), fa = new Float32Array(N)
    const col = new Uint8Array(N), fcol = new Uint8Array(N)
    const sx = new Float32Array(N), sy = new Float32Array(N), tw = new Float32Array(N), bend = new Float32Array(N), lag = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      sx[i] = Math.random()
      sy[i] = Math.random()
      tw[i] = Math.random() * Math.PI * 2
      bend[i] = (Math.random() - 0.5) * 2
      lag[i] = Math.random()
    }
    let W = 0, H = 0, dpr = 1

    const fit = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = wrap.current.clientWidth * dpr
      H = wrap.current.clientHeight * dpr
      cv.width = W
      cv.height = H
    }

    const frame = (s, sh) => {
      const wide = W / dpr >= 1024
      const bx = wide ? W * 0.5 : W * 0.04
      const by = wide ? H * 0.12 : H * 0.04
      const bw = wide ? W * 0.46 : W * 0.92
      const bh = wide ? H * 0.8 : H * 0.92
      const scale = Math.min(bw / 1000, bh / sh.h)
      const ox = bx + (bw - 1000 * scale) / 2
      const oy = s.shape === 'portrait' ? by + bh - sh.h * scale : by + (bh - sh.h * scale) / 2
      return { scale, ox, oy, bh }
    }

    const TX = new Float32Array(N), TY = new Float32Array(N), TR = new Float32Array(N), TA = new Float32Array(N), TC = new Uint8Array(N), DL = new Float32Array(N)

    const compute = (k, u) => {
      const s = scenes[k]
      const sh = data.shapes[s.shape]
      const used = Math.min(sh.n, keep)
      const f = frame(s, sh)
      const grow = Math.sqrt(sh.n / used)
      const p = out(u)
      const cos = Math.cos(-0.35 * p), sin = Math.sin(-0.35 * p)
      const wide = W / dpr >= 1024
      for (let i = 0; i < N; i++) {
        if (i < used) {
          const o = i * 4
          let px = sh.d[o], py = sh.d[o + 1]
          if (s.toss) {
            const dx = px - 500, dy = py - 560
            px = 500 + dx * cos - dy * sin
            py = 560 + dx * sin + dy * cos - p * 260
          }
          TX[i] = f.ox + px * f.scale
          TY[i] = f.oy + py * f.scale
          TR[i] = Math.max(0.7 * dpr, (sh.d[o + 2] / 8) * data.s * 0.55 * f.scale * grow)
          TA[i] = 1
          TC[i] = sh.d[o + 3]
          DL[i] = s.grow ? (1 - sh.d[o + 1] / 1000) * 0.45 : lag[i] * 0.35
        } else if (s.toss && lag[i] > 0.74) {
          TX[i] = (wide ? 0.5 + sx[i] * 0.48 : sx[i]) * W
          TY[i] = (sy[i] * 0.75 + u * 0.18) * H
          TR[i] = 1.7 * dpr
          TA[i] = 0.9
          TC[i] = tw[i] > 3 ? 1 : 0
          DL[i] = lag[i] * 0.35
        } else {
          TX[i] = sx[i] * W
          TY[i] = sy[i] * H
          TR[i] = (0.6 + lag[i] * 0.9) * dpr
          TA[i] = 0.18 + lag[i] * 0.35
          TC[i] = lag[i] > 0.92 ? 1 : 0
          DL[i] = lag[i] * 0.35
        }
      }
    }

    let k = 0, phase = 'move', t0 = null, last = 0, clock = 0, raf = null, visible = true

    const snapshot = () => {
      fx.set(x); fy.set(y); fr.set(r); fa.set(a); fcol.set(col)
    }

    const alphas = [0.3, 0.6, 1]
    const draw = time => {
      ctx.clearRect(0, 0, W, H)
      const paths = [new Path2D(), new Path2D(), new Path2D(), new Path2D(), new Path2D(), new Path2D()]
      for (let i = 0; i < N; i++) {
        const al = a[i] < 0.6 ? a[i] * (0.65 + 0.35 * Math.sin(time * 1.6 + tw[i])) : a[i]
        const band = al < 0.45 ? 0 : al < 0.8 ? 1 : 2
        const path = paths[col[i] * 3 + band]
        path.moveTo(x[i] + r[i], y[i])
        path.arc(x[i], y[i], r[i], 0, 6.2832)
      }
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = colors[j < 3 ? 0 : 1]
        ctx.globalAlpha = alphas[j % 3]
        ctx.fill(paths[j])
      }
      ctx.globalAlpha = 1
    }

    const step = now => {
      raf = requestAnimationFrame(step)
      if (!visible) { last = now; return }
      clock += Math.min((now - (last || now)) / 1000, 0.05)
      last = now
      if (t0 === null) t0 = clock
      const s = scenes[k]
      const e = clock - t0
      if (phase === 'move') {
        const p = Math.min(e / s.move, 1)
        for (let i = 0; i < N; i++) {
          const d = DL[i]
          const q = ease(Math.min(Math.max((p - d) / (1 - d), 0), 1))
          x[i] = fx[i] + (TX[i] - fx[i]) * q + Math.sin(Math.PI * q) * bend[i] * 60 * dpr
          y[i] = fy[i] + (TY[i] - fy[i]) * q
          r[i] = fr[i] + (TR[i] - fr[i]) * q
          a[i] = fa[i] + (TA[i] - fa[i]) * q
          col[i] = q > 0.5 ? TC[i] : fcol[i]
        }
        if (p >= 1) { phase = 'hold'; t0 = clock }
      } else {
        const u = Math.min(e / s.hold, 1)
        if (s.toss) {
          compute(k, u)
          x.set(TX); y.set(TY); r.set(TR); a.set(TA); col.set(TC)
        }
        if (u >= 1) {
          k = (k + 1) % scenes.length
          setScene(k)
          snapshot()
          compute(k, 0)
          phase = 'move'
          t0 = clock
        }
      }
      draw(clock)
    }

    fit()
    for (let i = 0; i < N; i++) { x[i] = sx[i] * W; y[i] = sy[i] * H; r[i] = 0.8 * dpr; a[i] = 0.3; col[i] = 0 }
    snapshot()
    compute(0, 0)

    if (reduced()) {
      x.set(TX); y.set(TY); r.set(TR); a.set(TA); col.set(TC)
      draw(0)
    } else {
      raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting })
    io.observe(wrap.current)
    const resize = () => {
      fit()
      compute(k, phase === 'hold' && scenes[k].toss ? 1 : 0)
      if (phase === 'hold' || reduced()) { x.set(TX); y.set(TY); r.set(TR); a.set(TA); col.set(TC); draw(clock) }
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [data, play])

  return (
    <div ref={wrap} className='absolute inset-0'>
      <canvas ref={canvas} role='img' aria-label='Dots that form a portrait of Koushik Maity, a graduation cap, a bar chart and the words open to work' className='block w-full h-full' />
      <p aria-live='off' className='absolute right-5 bottom-3 sm:right-10 lg:right-16 lg:bottom-8 font-mono text-xs text-muted text-right'>
        <span className='text-accent'>fig. {scene + 1}</span> {scenes[scene].caption}
      </p>
    </div>
  )
}

export default DotShow
