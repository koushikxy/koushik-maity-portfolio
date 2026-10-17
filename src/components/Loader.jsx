import React, { useEffect, useState } from 'react'

const Loader = ({ onDone }) => {
  const [n, setN] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let frame
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min((now - t0) / 650, 1)
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
      else {
        setLeaving(true)
        setTimeout(onDone, 550)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <div aria-hidden='true' className={`fixed inset-0 z-[100] bg-bg flex items-end justify-between gap-6 p-6 sm:p-10 transition-transform duration-[550ms] ease-[cubic-bezier(.7,0,.3,1)] ${leaving ? '-translate-y-full' : ''}`}>
      <p className='text-3xl sm:text-5xl font-bold tracking-tight'>
        Koushik Maity
        <span className='block mt-1 text-lg sm:text-2xl font-medium text-muted'>Data Analyst</span>
      </p>
      <p className='text-6xl sm:text-8xl font-extrabold tabular-nums text-accent'>{n}</p>
      <div className='absolute left-0 bottom-0 h-1 bg-accent' style={{ width: `${n}%` }} />
    </div>
  )
}

export default Loader
