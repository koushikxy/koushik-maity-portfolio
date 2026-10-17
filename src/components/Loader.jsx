import React, { useEffect, useState } from 'react'

const words = ['Hello', 'नमस्ते', 'Hola', 'Bonjour', 'Ciao', 'Hallo', 'こんにちは', 'Hello']

const Loader = ({ onDone }) => {
  const [i, setI] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (i === words.length - 1) {
      const t = setTimeout(() => {
        setLeaving(true)
        setTimeout(onDone, 900)
      }, 350)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setI(i + 1), i === 0 ? 500 : 120)
    return () => clearTimeout(t)
  }, [i, onDone])

  return (
    <div aria-hidden='true' className={`fixed inset-0 z-[160] transition-transform duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)] ${leaving ? '-translate-y-[115%]' : ''}`}>
      <div className='absolute inset-0 bg-card grid place-items-center'>
        <p className='flex items-center gap-4 text-4xl sm:text-6xl font-medium'>
          <span className='w-3 h-3 rounded-full bg-accent' />{words[i]}
        </p>
      </div>
      <svg viewBox='0 0 100 10' preserveAspectRatio='none' className='absolute left-0 top-full w-full h-[15vh] fill-card'>
        <path d={leaving ? 'M0 0 Q50 0 100 0 L100 0 L0 0Z' : 'M0 0 Q50 10 100 0 L100 0 L0 0Z'} className='transition-[d] duration-[900ms]' />
      </svg>
    </div>
  )
}

export default Loader
