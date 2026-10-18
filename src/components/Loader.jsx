import React, { useEffect, useState } from 'react'

const steps = [
  ['projects', '4'],
  ['experience', '2 roles'],
  ['largest dataset', '33.8M rows'],
  ['certificates', '6']
]

const Loader = ({ onDone }) => {
  const [n, setN] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (n > steps.length) {
      const t = setTimeout(() => {
        setLeaving(true)
        setTimeout(onDone, 700)
      }, 250)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setN(n + 1), n ? 190 : 300)
    return () => clearTimeout(t)
  }, [n, onDone])

  return (
    <div aria-hidden='true' className={`fixed inset-0 z-[160] bg-card transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${leaving ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]'}`}>
      <div className='wrap h-full flex flex-col justify-end pb-14 sm:pb-20'>
        <p className='font-mono text-sm text-muted'><span className='text-accent'>SELECT</span> * <span className='text-accent'>FROM</span> koushik_maity;</p>
        <ul className='mt-6 font-mono text-sm sm:text-base space-y-2 min-h-[8.5rem]'>
          {steps.slice(0, n).map(([k, v]) => (
            <li key={k} className='flex gap-3 max-w-md'>
              <span className='text-muted'>{k}</span>
              <span className='flex-1 border-b border-dotted border-line mb-1.5' />
              <span>{v}</span>
            </li>
          ))}
        </ul>
        <div className='mt-8 flex items-end justify-between gap-6'>
          <p className='font-display text-4xl sm:text-6xl font-semibold'>Koushik Maity</p>
          <p className='font-display text-4xl sm:text-6xl font-semibold text-accent tabular-nums'>{Math.round(Math.min(n, steps.length) / steps.length * 100)}%</p>
        </div>
        <div className='mt-6 h-1 rounded-full bg-line overflow-hidden'>
          <div className='h-full bg-accent transition-[width] duration-300' style={{ width: `${Math.min(n, steps.length) / steps.length * 100}%` }} />
        </div>
      </div>
    </div>
  )
}

export default Loader
