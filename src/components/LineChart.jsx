import React, { useMemo, useRef, useState } from 'react'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const label = ym => `${months[+ym.slice(5) - 1]} ${ym.slice(0, 4)}`

const LineChart = ({ data, unit, play = true, height = 260 }) => {
  const W = 1000
  const H = height
  const pad = { l: 8, r: 8, t: 20, b: 30 }
  const box = useRef(null)
  const [hover, setHover] = useState(null)
  const max = Math.ceil(Math.max(...data.map(d => d[1])) / 5) * 5

  const pts = useMemo(() => data.map(([m, v], i) => [
    pad.l + (i / (data.length - 1)) * (W - pad.l - pad.r),
    pad.t + (1 - v / max) * (H - pad.t - pad.b)
  ]), [data, max, H, pad.l, pad.r, pad.t, pad.b])

  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const years = data.map(([m], i) => [m, i]).filter(([m]) => m.endsWith('-01'))
  const grid = [0, 0.25, 0.5, 0.75, 1].map(f => pad.t + f * (H - pad.t - pad.b))

  const move = e => {
    const r = box.current.getBoundingClientRect()
    const i = Math.round(((e.clientX - r.left) / r.width) * (data.length - 1))
    setHover(Math.max(0, Math.min(data.length - 1, i)))
  }

  const i = hover ?? data.length - 1
  const [hx, hy] = pts[i]

  return (
    <div ref={box} onMouseMove={move} onMouseLeave={() => setHover(null)} onTouchMove={e => move(e.touches[0])} className='relative select-none'>
      <svg viewBox={`0 0 ${W} ${H}`} className='w-full h-auto overflow-visible' role='img' aria-label={`Line chart from ${label(data[0][0])} to ${label(data[data.length - 1][0])}`}>
        <defs>
          <linearGradient id='fill' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0' stopColor='rgb(var(--accent))' stopOpacity='0.28' />
            <stop offset='1' stopColor='rgb(var(--accent))' stopOpacity='0' />
          </linearGradient>
        </defs>
        {grid.map(y => <line key={y} x1={pad.l} x2={W - pad.r} y1={y} y2={y} className='stroke-line' strokeDasharray='3 6' />)}
        <path d={`${line} L${pts[pts.length - 1][0]} ${H - pad.b} L${pts[0][0]} ${H - pad.b} Z`} fill='url(#fill)' className={`transition-opacity duration-1000 delay-700 ${play ? 'opacity-100' : 'opacity-0'}`} />
        <path d={line} pathLength='1' fill='none' className='stroke-accent' strokeWidth='2.5' strokeLinejoin='round' vectorEffect='non-scaling-stroke' style={{ strokeDasharray: 1, strokeDashoffset: play ? 0 : 1, transition: 'stroke-dashoffset 2.2s cubic-bezier(.4,0,.2,1)' }} />
        {years.map(([m, idx]) => (
          <text key={m} x={pts[idx][0]} y={H - 6} textAnchor='middle' className='fill-muted text-[13px]'>{m.slice(0, 4)}</text>
        ))}
        <line x1={hx} x2={hx} y1={pad.t} y2={H - pad.b} className={`stroke-fg/30 transition-opacity ${play ? 'opacity-100' : 'opacity-0'}`} strokeDasharray='2 4' />
        <circle cx={hx} cy={hy} r='6' className={`fill-accent stroke-bg transition-opacity duration-500 ${play ? 'opacity-100' : 'opacity-0'}`} strokeWidth='3' />
      </svg>
      <div className={`absolute top-0 pointer-events-none rounded-lg bg-fg text-ink px-3 py-2 text-sm whitespace-nowrap transition-opacity duration-500 ${play ? 'opacity-100' : 'opacity-0'}`} style={{ left: `${(hx / W) * 100}%`, transform: `translate(${hx / W > 0.75 ? '-100%' : '0'}, 0)`, marginLeft: hx / W > 0.75 ? -12 : 12 }}>
        <span className='block text-xs text-ink/60'>{label(data[i][0])}</span>
        <span className='font-display text-lg font-semibold'>{data[i][1].toFixed(1)} {unit}</span>
      </div>
    </div>
  )
}

export default LineChart
