import React, { useEffect, useRef, useState } from 'react'
import { reduced } from '../motion'

const scenes = [
  { shape: 'portrait', move: 2.4, hold: 2.4, caption: 'me, plotted as data points' },
  { shape: 'portrait', move: 0, hold: 3.4, toss: true, caption: 'B.Tech done, class of 2025' },
  { shape: 'think', move: 2.4, hold: 4.2, think: true, caption: 'so, what next?' }
]
const STARS = 700
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

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
    const keep = small ? 2400 : Math.max(data.shapes.portrait.n, data.shapes.think.n)
    let cx = 0, cy = 0, cn = 0
    const pd = data.shapes.portrait.d
    for (let o = 0; o < pd.length; o += 4) if (pd[o + 3] > 2) { cx += pd[o]; cy += pd[o + 1]; cn++ }
    cx /= cn; cy /= cn
    let cloud = null
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
      const by = wide ? H * 0.2 : H * 0.1
      const bw = wide ? W * 0.46 : W * 0.92
      const bh = wide ? H * 0.74 : H * 0.86
      const scale = Math.min(bw / 1000, bh / sh.h)
      const ox = bx + (bw - 1000 * scale) / 2
      const oy = by + bh - sh.h * scale
      return { scale, ox, oy }
    }

    const TX = new Float32Array(N), TY = new Float32Array(N), TR = new Float32Array(N), TA = new Float32Array(N), TC = new Uint8Array(N), DL = new Float32Array(N)

    const compute = (k, u) => {
      const s = scenes[k]
      const sh = data.shapes[s.shape]
      const used = Math.min(sh.n, keep)
      const f = frame(s, sh)
      const grow = Math.sqrt(sh.n / used)
      const fl = Math.min(Math.max((u - 0.08) / 0.8, 0), 1)
      const lift = 4 * fl * (1 - fl) * 940 - Math.sin(Math.min(u / 0.08, 1) * Math.PI) * 25
      const spin = fl * Math.PI * 4, tilt = Math.sin(fl * Math.PI) * 0.5
      const fold = Math.cos(spin), cos = Math.cos(tilt), sin = Math.sin(tilt)
      const wide = W / dpr >= 1024
      if (s.think) cloud = { x: f.ox + data.cloud[0] * f.scale, y: f.oy + data.cloud[1] * f.scale, size: f.scale }
      for (let i = 0; i < N; i++) {
        if (i < used) {
          const o = i * 4
          const c = sh.d[o + 3]
          let px = sh.d[o], py = sh.d[o + 1]
          if (s.toss && c > 2) {
            const dx = px - cx, dy = (py - cy) * fold
            px = cx + dx * cos - dy * sin + fl * 40
            py = cy + dx * sin + dy * cos - lift
          }
          TX[i] = f.ox + px * f.scale
          TY[i] = f.oy + py * f.scale
          const lv = s.toss && c > 2 ? Math.max(sh.d[o + 2], 7 * Math.min(Math.sin(Math.PI * fl) * 4, 1)) : sh.d[o + 2]
          TR[i] = Math.max(0.7 * dpr, (lv / 8) * data.s * 0.55 * f.scale * grow)
          TA[i] = 1
          TC[i] = c === 1 || c === 4 ? 1 : 0
          DL[i] = c === 2 ? 0.5 + (1 - py / 360) * 0.4 : lag[i] * 0.35
        } else if (i < keep) {
          TX[i] = f.ox + sx[i] * 1000 * f.scale
          TY[i] = f.oy + (0.4 + sy[i] * 0.6) * sh.h * f.scale
          TR[i] = 0.5 * dpr
          TA[i] = 0
          TC[i] = 0
          DL[i] = lag[i] * 0.35
        } else if (s.toss && lag[i] > 0.74 && u > 0.3) {
          TX[i] = (wide ? 0.5 + sx[i] * 0.48 : sx[i]) * W
          TY[i] = (sy[i] * 0.75 + (u - 0.3) * 0.25) * H
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
        if (a[i] < 0.03) continue
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
      if (scenes[k].think && phase === 'hold' && cloud) {
        const word = 'open to work'.slice(0, Math.floor((clock - t0 - 0.3) * 12))
        ctx.font = `600 ${Math.round(38 * cloud.size)}px "Clash Display", sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = colors[1]
        ctx.fillText(word, cloud.x, cloud.y)
      }
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
        const p = s.move ? Math.min(e / s.move, 1) : 1
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
      <canvas ref={canvas} role='img' aria-label='Dots that form Koushik Maity in his graduation gown throwing his cap, then thinking, with a thought cloud that says open to work' className='block w-full h-full' />
      <p aria-live='off' className='absolute right-5 bottom-3 sm:right-10 lg:right-16 lg:bottom-8 font-mono text-xs text-muted text-right'>
        <span className='text-accent'>fig. {scene + 1}</span> {scenes[scene].caption}
      </p>
    </div>
  )
}

export default DotShow
