import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiX, FiMaximize2 } from 'react-icons/fi'
import { featuredCert, certs } from '../data'

const Certificates = () => {
  const [open, setOpen] = useState(null)
  const close = useRef(null)

  useEffect(() => {
    if (!open) return
    close.current.focus()
    const esc = e => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id='certificates' className='mx-auto max-w-6xl px-5 sm:px-8 py-24'>
      <p className='eyebrow mb-4'>Certificates</p>
      <h2 className='text-4xl sm:text-6xl font-extrabold tracking-tight mb-12'>Courses I've finished</h2>

      <div className='reveal grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center rounded-[1.75rem] border border-line bg-card p-6 sm:p-10'>
        <div>
          <p className='text-sm font-semibold text-muted'>{featuredCert.issuer}, {featuredCert.year}</p>
          <h3 className='mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight'>{featuredCert.title}</h3>
          <p className='mt-4 text-lg text-muted leading-relaxed'>Cleaning, analysing and visualising data with spreadsheets, SQL, Tableau and R, ending with a case study.</p>
          <a href={featuredCert.link} target='_blank' rel='noreferrer' className='btn-primary mt-8'>Verify on Coursera <FiArrowUpRight /></a>
        </div>
        <button onClick={() => setOpen(featuredCert)} title='View full size' className='group relative rounded-xl overflow-hidden border border-line'>
          <img src={featuredCert.image} width={featuredCert.size[0]} height={featuredCert.size[1]} alt='Google Data Analytics Professional Certificate issued to Koushik Maity' loading='lazy' className='w-full transition-transform duration-700 group-hover:scale-[1.03]' />
          <span className='absolute right-3 bottom-3 w-10 h-10 rounded-full bg-black/70 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity'><FiMaximize2 /></span>
        </button>
      </div>

      <ul className='mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {certs.map((c, i) => (
          <li key={c.title} className='reveal' style={{ '--d': `${(i % 3) * 0.08}s` }}>
            <button onClick={() => c.image && setOpen(c)} disabled={!c.image} className='group w-full h-full text-left flex items-center gap-4 rounded-2xl border border-line bg-card p-4 enabled:hover:border-accent/60 transition-colors'>
              <span className='w-20 h-14 shrink-0 rounded-lg overflow-hidden border border-line bg-soft grid place-items-center'>
                {c.image ? <img src={c.image} width='80' height='56' alt={`${c.title} certificate from ${c.issuer}`} loading='lazy' className='w-full h-full object-cover' /> : <span className='text-sm font-bold text-accent'>{c.year}</span>}
              </span>
              <span className='flex-1'>
                <span className='block font-bold'>{c.title}</span>
                <span className='block text-muted'>{c.issuer}</span>
              </span>
              {c.image && <FiMaximize2 className='text-muted group-hover:text-accent transition-colors' aria-hidden='true' />}
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div role='dialog' aria-modal='true' aria-label={open.title} onClick={() => setOpen(null)} className='fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm grid place-items-center p-4 sm:p-10'>
          <img src={open.image} alt={`${open.title} certificate issued to Koushik Maity`} className='max-h-full max-w-full rounded-lg shadow-2xl' onClick={e => e.stopPropagation()} />
          <button ref={close} onClick={() => setOpen(null)} aria-label='Close' className='absolute top-4 right-4 w-11 h-11 rounded-full bg-white text-black grid place-items-center'><FiX /></button>
        </div>
      )}
    </section>
  )
}

export default Certificates
