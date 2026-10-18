import React, { useEffect, useState } from 'react'

const words = [
  ['Hello', 'english'],
  ['नमस्ते', 'hindi'],
  ['ನಮಸ್ಕಾರ', 'kannada'],
  ['নমস্কার', 'bengali'],
  ['வணக்கம்', 'tamil'],
  ['నమస్కారం', 'telugu'],
  ['ନମସ୍କାର', 'odia'],
  ["Hello, I'm Koushik", 'portfolio']
]

const Loader = ({ onDone }) => {
  const [i, setI] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const last = i === words.length - 1

  useEffect(() => {
    if (last) {
      const t = setTimeout(() => {
        setLeaving(true)
        setTimeout(onDone, 700)
      }, 650)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setI(i + 1), i ? 170 : 450)
    return () => clearTimeout(t)
  }, [i, last, onDone])

  return (
    <div aria-hidden='true' className={`fixed inset-0 z-[160] bg-card transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${leaving ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]'}`}>
      <div className='wrap h-full flex flex-col justify-center'>
        <p className='font-mono text-sm text-muted'>lang: <span className='text-accent'>{words[i][1]}</span></p>
        <p key={i} className={`mt-4 font-display font-semibold tracking-tight leading-[1.1] animate-[rise_.35s_ease-out] ${last ? 'text-[clamp(2.6rem,7vw,6rem)]' : 'text-[clamp(3rem,9vw,8rem)]'}`}>
          {words[i][0]}{last && <span className='text-accent'>.</span>}
        </p>
        <div className='mt-12 flex items-center gap-4'>
          <div className='flex-1 h-1 rounded-full bg-line overflow-hidden'>
            <div className='h-full bg-accent transition-[width] duration-200' style={{ width: `${((i + 1) / words.length) * 100}%` }} />
          </div>
          <span className='font-mono text-sm tabular-nums text-muted w-10 text-right'>{Math.round(((i + 1) / words.length) * 100)}%</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
