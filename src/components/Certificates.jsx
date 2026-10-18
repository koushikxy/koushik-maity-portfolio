import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiX, FiPlus } from 'react-icons/fi'
import { featuredCert, certs } from '../data'
import { stopScroll } from '../motion'

const Certificates = () => {
  const [open, setOpen] = useState(null)
  const close = useRef(null)

  useEffect(() => {
    if (!open) return
    close.current.focus()
    stopScroll(true)
    const esc = e => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', esc)
    return () => {
      window.removeEventListener('keydown', esc)
      stopScroll(false)
    }
  }, [open])

  return (
    <section id='certificates' className='wrap py-24 sm:py-32'>
      <div className='flex items-end justify-between gap-6 mb-14'>
        <h2 className='text-[clamp(3rem,7vw,6.5rem)] font-display font-semibold tracking-[-0.04em] leading-[0.95]'>Certificates<span className='text-accent'>.</span></h2>
        <span className='hidden sm:block label'>Click one to view it</span>
      </div>

      <div className='reveal grid lg:grid-cols-[1fr_1fr] gap-10 items-center rounded-[1.5rem] bg-card p-6 sm:p-12'>
        <div>
          <p className='label'>{featuredCert.issuer}, {featuredCert.year}</p>
          <h3 className='mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]'>{featuredCert.title}</h3>
          <p className='mt-5 text-lg text-muted'>Cleaning, analysing and visualising data with spreadsheets, SQL, Tableau and R, ending with a case study.</p>
          <a href={featuredCert.link} target='_blank' rel='noreferrer' className='pill-accent mt-9'>Verify on Coursera <FiArrowUpRight /></a>
        </div>
        <button onClick={() => setOpen(featuredCert)} data-cursor='view' className='block rounded-xl overflow-hidden'>
          <img src={featuredCert.image} width={featuredCert.size[0]} height={featuredCert.size[1]} alt='Google Data Analytics Professional Certificate issued to Koushik Maity' loading='lazy' className='w-full hover:scale-[1.03] transition-transform duration-700' />
        </button>
      </div>

      <ul className='mt-6 border-t border-line'>
        {certs.map(c => (
          <li key={c.title} className='reveal border-b border-line'>
            <button onClick={() => c.image && setOpen(c)} disabled={!c.image} data-cursor={c.image ? 'view' : undefined} className='group w-full py-7 flex items-center justify-between gap-6 text-left'>
              <span className='text-2xl sm:text-3xl font-medium tracking-tight transition-transform duration-500 group-enabled:group-hover:translate-x-3'>{c.title}</span>
              <span className='flex items-center gap-6 text-muted'>
                <span>{c.issuer}{c.year && `, ${c.year}`}</span>
                {c.image && <span className='w-10 h-10 rounded-full border border-line grid place-items-center group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition'><FiPlus /></span>}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div role='dialog' aria-modal='true' aria-label={open.title} onClick={() => setOpen(null)} className='fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4'>
          <img src={open.image} alt={`${open.title} certificate issued to Koushik Maity`} className='w-auto h-auto max-w-[min(92vw,1100px)] max-h-[86vh] object-contain rounded-lg shadow-2xl' onClick={e => e.stopPropagation()} />
          <button ref={close} onClick={() => setOpen(null)} aria-label='Close' className='absolute top-5 right-5 w-14 h-14 rounded-full bg-accent text-ink grid place-items-center text-xl'><FiX /></button>
        </div>
      )}
    </section>
  )
}

export default Certificates
