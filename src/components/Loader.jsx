import React, { useEffect, useState } from 'react'

const Loader = ({ onDone }) => {
  const [n, setN] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let frame
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min((now - t0) / 1100, 1)
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
      else {
        setLeaving(true)
        setTimeout(onDone, 700)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <div aria-hidden='true' className={`fixed inset-0 z-[100] bg-bg flex flex-col justify-between p-6 sm:p-10 transition-transform duration-700 ease-[cubic-bezier(.7,0,.3,1)] ${leaving ? '-translate-y-full' : ''}`}>
      <p className='label'>Portfolio 2026</p>
      <div className='flex items-end justify-between gap-6'>
        <p className='text-3xl sm:text-5xl font-semibold tracking-tight'>
          Koushik Maity
          <span className='block font-serif italic font-normal text-muted'>Data Analyst</span>
        </p>
        <p className='font-mono text-6xl sm:text-8xl tabular-nums text-accent'>{n}</p>
      </div>
      <div className='absolute left-0 bottom-0 h-0.5 bg-accent' style={{ width: `${n}%` }} />
    </div>
  )
}

export default Loader
