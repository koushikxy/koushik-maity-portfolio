import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiDownload, FiLink, FiCheck, FiMail, FiEye, FiEyeOff } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoLink } from '../components/Transition'
import { cv, pdf, email, linkedin, github, experience } from '../data'
import { useReveal } from '../hooks'
import { gsap, reduced } from '../motion'

const Block = ({ title, children }) => (
  <section className='reveal py-10 border-t border-line'>
    <h2 className='label mb-6'>{title}</h2>
    {children}
  </section>
)

const Resume = () => {
  const root = useRef(null)
  const [copied, setCopied] = useState(false)
  const [preview, setPreview] = useState(false)
  useReveal('resume')

  useEffect(() => {
    document.title = 'Resume | Koushik Maity'
    if (reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.r-title > span > span', { yPercent: 110, duration: 1.4, ease: 'expo.out', stagger: 0.08, delay: 0.2 })
      gsap.from('.r-fade', { opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.5 })
    }, root)
    return () => ctx.revert()
  }, [])

  const copy = () => navigator.clipboard.writeText('https://koushikmaity.netlify.app/resume').then(() => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  })

  return (
    <div ref={root}>
      <Navbar />
      <main id='main'>
        <header className='wrap pt-40 sm:pt-48 pb-14'>
          <p className='r-fade label'>Resume</p>
          <h1 className='r-title mt-6 font-display text-[clamp(3.2rem,10vw,9rem)] font-semibold tracking-[-0.045em] leading-[0.9]'>
            <span className='word-mask mr-[0.2em]'><span>Koushik</span></span>
            <span className='word-mask'><span>Maity<span className='text-accent'>.</span></span></span>
          </h1>
          <p className='r-fade mt-6 text-2xl sm:text-3xl text-muted'>Data Analyst, Bangalore, India</p>
          <div className='r-fade mt-12 flex flex-wrap gap-3'>
            <a href={pdf} download='Koushik_Maity_Data_Analyst_CV.pdf' className='pill-accent'><FiDownload /> Download PDF</a>
            <a href={pdf} target='_blank' rel='noreferrer' className='pill'>Open PDF <FiArrowUpRight /></a>
            <button onClick={copy} className='pill'>{copied ? <FiCheck className='text-accent' /> : <FiLink />} {copied ? 'Link copied' : 'Copy link'}</button>
            <button onClick={() => setPreview(!preview)} className='pill hidden md:inline-flex'>{preview ? <FiEyeOff /> : <FiEye />} {preview ? 'Hide preview' : 'Preview PDF'}</button>
          </div>
          {preview && (
            <div className='mt-10 rounded-[1.25rem] bg-card p-3 hidden md:block'>
              <iframe src={pdf} title='Koushik Maity resume PDF' className='w-full h-[85vh] rounded-lg bg-white' />
            </div>
          )}
        </header>

        <div className='wrap pb-24 grid lg:grid-cols-[0.42fr_1fr] gap-x-20'>
          <aside className='lg:sticky lg:top-28 self-start'>
            <Block title='Contact'>
              <ul className='space-y-3 text-lg'>
                <li><a href={`mailto:${email}`} className='inline-flex items-center gap-3 hover:text-accent'><FiMail className='text-muted' />{email}</a></li>
                <li><a href={linkedin} target='_blank' rel='noreferrer' className='hover:text-accent'>linkedin.com/in/ksmaity</a></li>
                <li><a href={github} target='_blank' rel='noreferrer' className='hover:text-accent'>github.com/koushikxy</a></li>
              </ul>
            </Block>
            <Block title='Skills'>
              <dl className='space-y-5'>
                {cv.skills.map(([group, list]) => (
                  <div key={group}>
                    <dt className='font-display text-lg font-semibold'>{group}</dt>
                    <dd className='mt-1 text-muted leading-relaxed'>{list}</dd>
                  </div>
                ))}
              </dl>
            </Block>
            <Block title='Education'>
              <p className='font-display text-lg font-semibold'>{cv.education.degree}</p>
              <p className='text-muted'>{cv.education.org}</p>
              <p className='mt-1 text-sm text-muted'>{cv.education.dates}</p>
            </Block>
            <Block title='Certifications'>
              <ul className='space-y-3'>
                {cv.certifications.map(([name, year]) => (
                  <li key={name} className='flex justify-between gap-4'><span>{name}</span><span className='text-muted'>{year}</span></li>
                ))}
              </ul>
            </Block>
          </aside>

          <div>
            <Block title='Summary'>
              <p className='text-2xl sm:text-3xl leading-[1.35]'>{cv.summary}</p>
            </Block>
            <Block title='Experience'>
              <ol className='space-y-12'>
                {experience.filter(e => e.bullets.length).map(e => (
                  <li key={e.org}>
                    <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
                      <h3 className='font-display text-2xl sm:text-3xl font-semibold'>{e.role}</h3>
                      <span className='text-muted'>{e.dates}</span>
                    </div>
                    <p className='mt-1 text-accent font-medium'>{e.org}</p>
                    <ul className='mt-5 space-y-3 text-lg leading-relaxed'>
                      {e.bullets.map(b => <li key={b} className='flex gap-4'><span className='mt-3 w-1.5 h-1.5 shrink-0 rounded-full bg-accent' />{b}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </Block>
            <Block title='Projects'>
              <ol className='space-y-12'>
                {cv.projects.map(p => (
                  <li key={p.name}>
                    <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
                      <h3 className='font-display text-2xl sm:text-3xl font-semibold'>{p.name}</h3>
                      <span className='text-muted'>{p.tech}</span>
                    </div>
                    <ul className='mt-5 space-y-3 text-lg leading-relaxed'>
                      {p.bullets.map(b => <li key={b} className='flex gap-4'><span className='mt-3 w-1.5 h-1.5 shrink-0 rounded-full bg-accent' />{b}</li>)}
                    </ul>
                    <GoLink to={`/work/${p.slug}`} label={p.name} className='mt-5 inline-flex items-center gap-2 font-medium border-b border-fg/30 pb-0.5 hover:text-accent hover:border-accent transition-colors'>Read the case study <FiArrowUpRight /></GoLink>
                  </li>
                ))}
              </ol>
            </Block>
            <div className='reveal pt-10 border-t border-line flex flex-wrap items-center justify-between gap-6'>
              <p className='text-xl'>Want it as a file?</p>
              <a href={pdf} download='Koushik_Maity_Data_Analyst_CV.pdf' className='pill-accent'><FiDownload /> Download PDF</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Resume
