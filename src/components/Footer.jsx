import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiCopy, FiCheck, FiMail, FiLinkedin } from 'react-icons/fi'
import { GoLink } from './Transition'
import { email, github, linkedin, resume } from '../data'
import { gsap, scrollTo, whenIdle } from '../motion'

const time = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })
const field = 'w-full rounded-xl border border-line bg-bg px-4 py-3.5 placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors'

const findings = [
  ['Can do', 'SQL, Python, Power BI and Excel on real data, from cleaning to dashboards'],
  ['Has shown', '4 end-to-end projects, the largest on 33.8M rows'],
  ['Available', 'Now, for Data Analyst or Business Analyst roles in Bangalore or remote']
]

const Footer = () => {
  const root = useRef(null)
  const [now, setNow] = useState(time)
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const t = setInterval(() => setNow(time()), 30000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => whenIdle(root, () => {
    gsap.from('.cta-line > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: root.current, start: 'top 75%' } })
    gsap.from('.cta-row', { opacity: 0, y: 40, duration: 1.1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: '.cta-rows', start: 'top 85%' } })
  }), [])

  const copy = () => navigator.clipboard.writeText(email).then(() => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, () => (window.location.href = `mailto:${email}`))

  const send = async e => {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer id='contact' ref={root} className='relative pt-24 sm:pt-32 pb-8 bg-card'>
      <div className='wrap'>
        <p className='font-mono text-sm text-accent mb-6'>06 / Conclusion</p>
        <h2 className='font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold tracking-[-0.045em] leading-[0.92]'>
          <span className='cta-line word-mask'><span>Ready to join</span></span><br />
          <span className='cta-line word-mask'><span>your data team<span className='text-accent'>.</span></span></span>
        </h2>

        <dl className='cta-rows mt-16 border-t border-line'>
          {findings.map(([k, v]) => (
            <div key={k} className='cta-row grid sm:grid-cols-[12rem_1fr] gap-2 sm:gap-8 py-6 border-b border-line'>
              <dt className='font-mono text-sm text-muted pt-1'>{k}</dt>
              <dd className='text-xl sm:text-2xl'>{v}</dd>
            </div>
          ))}
        </dl>

        <div className='mt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10'>
          <div>
            <p className='font-display text-2xl sm:text-3xl font-semibold'>Next step: get in touch</p>
            <p className='mt-3 text-lg text-muted'>Email is the fastest way to reach me.</p>
            <div className='mt-8 flex flex-col gap-3 max-w-md'>
              <div className='flex gap-2'>
                <a href={`mailto:${email}`} className='pill-accent flex-1 justify-start'><FiMail /> {email}</a>
                <button onClick={copy} aria-label='Copy email address' className='w-14 h-14 shrink-0 rounded-full border border-line grid place-items-center hover:bg-fg hover:text-ink transition-colors'>{copied ? <FiCheck className='text-accent' /> : <FiCopy />}</button>
              </div>
              <a href={linkedin} target='_blank' rel='noreferrer' className='pill justify-start'><FiLinkedin /> linkedin.com/in/ksmaity <FiArrowUpRight className='ml-auto' /></a>
              <GoLink to={resume} label='Resume' className='pill justify-start'>Read my resume <FiArrowUpRight className='ml-auto' /></GoLink>
            </div>
            <p className='mt-3 h-5 text-sm text-accent' aria-live='polite'>{copied && 'Email copied'}</p>
          </div>

          <form onSubmit={send} className='rounded-[1.5rem] border border-line bg-bg/40 p-6 sm:p-8 space-y-4'>
            <p className='font-display text-xl font-semibold'>Or leave a message</p>
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_subject' value='New message from your portfolio' />
            <input type='text' name='_honey' className='hidden' tabIndex='-1' autoComplete='off' />
            <div className='grid sm:grid-cols-2 gap-4'>
              <label className='block'><span className='block mb-2 text-sm text-muted'>Your name</span><input name='name' required autoComplete='name' className={field} /></label>
              <label className='block'><span className='block mb-2 text-sm text-muted'>Your email</span><input name='email' type='email' required autoComplete='email' className={field} /></label>
            </div>
            <label className='block'><span className='block mb-2 text-sm text-muted'>Message</span><textarea name='message' rows='4' required className={`${field} resize-none`} /></label>
            <div className='flex flex-wrap items-center gap-4'>
              <button type='submit' disabled={status === 'sending'} className='pill-accent disabled:opacity-60'>{status === 'sending' ? 'Sending...' : 'Send message'} <FiArrowUpRight /></button>
              <p className='text-sm font-medium' aria-live='polite'>
                {status === 'sent' && <span className='text-accent'>Thanks, your message was sent.</span>}
                {status === 'error' && <span className='text-red-400'>That didn't go through. Please email me instead.</span>}
              </p>
            </div>
          </form>
        </div>

        <div className='mt-24 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm'>
          <div><p className='label mb-2'>Made by</p><p>Koushik Maity, {new Date().getFullYear()}</p></div>
          <div><p className='label mb-2'>Local time</p><p>{now} IST, Bangalore</p></div>
          <div>
            <p className='label mb-2'>Elsewhere</p>
            <div className='flex flex-wrap gap-x-5 gap-y-1'>
              <a href={linkedin} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>LinkedIn</a>
              <a href={github} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>GitHub</a>
            </div>
          </div>
          <div className='md:text-right'>
            <p className='label mb-2'>End of report</p>
            <button onClick={() => scrollTo(0)} className='py-1 hover:text-accent'>Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
