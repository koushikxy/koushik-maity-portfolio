import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi'
import Magnetic from './Magnetic'
import { GoLink } from './Transition'
import avatar from '../img/avatar.webp'
import { email, github, linkedin, resume } from '../data'
import { gsap, scrollTo, whenIdle } from '../motion'

const time = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })
const field = 'w-full bg-transparent border-b border-line py-4 text-lg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors'

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
    gsap.from('.cta-button', { scale: 0, rotate: -40, duration: 1.4, ease: 'elastic.out(1, 0.6)', scrollTrigger: { trigger: root.current, start: 'top 60%' } })
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
    <footer id='contact' ref={root} className='relative pt-28 sm:pt-40 pb-8 bg-card'>
      <div className='wrap'>
        <div className='flex items-center gap-5 sm:gap-8'>
          <img src={avatar} alt='Koushik Maity' width='200' height='200' loading='lazy' className='w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover shrink-0' />
          <h2 className='text-[clamp(3rem,8.5vw,8.5rem)] font-display font-semibold tracking-[-0.045em] leading-[0.92]'>
            <span className='sr-only'>Let's work together</span>
            <span aria-hidden='true' className='cta-line word-mask'><span>Let's work</span></span>
          </h2>
        </div>
        <h2 aria-hidden='true' className='text-[clamp(3rem,8.5vw,8.5rem)] font-display font-semibold tracking-[-0.045em] leading-[0.92]'>
          <span className='cta-line word-mask'><span>together<span className='text-accent'>.</span></span></span>
        </h2>

        <div className='relative mt-32 sm:mt-20 h-px bg-line'>
          <div className='cta-button absolute right-0 sm:right-[8%] top-0 -translate-y-1/2'>
            <Magnetic strength={0.5}>
              <a href={`mailto:${email}`} className='w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-accent text-ink grid place-items-center text-lg sm:text-xl font-bold hover:scale-105 transition-transform duration-500'>Get in touch</a>
            </Magnetic>
          </div>
        </div>

        <div className='mt-28 sm:mt-20 flex flex-wrap gap-3'>
          <Magnetic strength={0.25}>
            <button onClick={copy} className='pill text-lg'>{copied ? <FiCheck className='text-accent' /> : <FiCopy />} {copied ? 'Email copied' : email}</button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a href={linkedin} target='_blank' rel='noreferrer' className='pill text-lg'>LinkedIn <FiArrowUpRight /></a>
          </Magnetic>
        </div>

        <div className='mt-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-16'>
          <dl className='space-y-7 text-lg'>
            <div><dt className='label'>Email</dt><dd className='mt-1'><a href={`mailto:${email}`} className='hover:text-accent'>{email}</a></dd></div>
            <div><dt className='label'>LinkedIn</dt><dd className='mt-1'><a href={linkedin} target='_blank' rel='noreferrer' className='hover:text-accent'>linkedin.com/in/ksmaity</a></dd></div>
            <div><dt className='label'>Based in</dt><dd className='mt-1'>Bangalore, India</dd></div>
            <div><dt className='label'>Looking for</dt><dd className='mt-1'>Data Analyst or Business Analyst roles, on-site or remote. I can join right away.</dd></div>
          </dl>
          <form onSubmit={send} className='space-y-2'>
            <p className='label mb-4'>Or send me a message here</p>
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_subject' value='New message from your portfolio' />
            <input type='text' name='_honey' className='hidden' tabIndex='-1' autoComplete='off' />
            <label className='block'><span className='sr-only'>Your name</span><input name='name' required autoComplete='name' placeholder='Your name' className={field} /></label>
            <label className='block'><span className='sr-only'>Your email</span><input name='email' type='email' required autoComplete='email' placeholder='Your email' className={field} /></label>
            <label className='block'><span className='sr-only'>Message</span><textarea name='message' rows='3' required placeholder='Tell me about the role' className={`${field} resize-none`} /></label>
            <div className='pt-6 flex flex-wrap items-center gap-5'>
              <Magnetic strength={0.3}>
                <button type='submit' disabled={status === 'sending'} className='pill-accent disabled:opacity-60'>{status === 'sending' ? 'Sending...' : 'Send message'} <FiArrowUpRight /></button>
              </Magnetic>
              <p className='font-medium' aria-live='polite'>
                {status === 'sent' && <span className='text-accent'>Thanks, your message was sent.</span>}
                {status === 'error' && <span className='text-red-400'>That didn't go through. Please email me instead.</span>}
              </p>
            </div>
          </form>
        </div>

        <div className='mt-32 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm'>
          <div><p className='label mb-2'>Version</p><p>{new Date().getFullYear()} © Koushik Maity</p></div>
          <div><p className='label mb-2'>Local time</p><p>{now} IST, Bangalore</p></div>
          <div>
            <p className='label mb-2'>Socials</p>
            <div className='flex flex-wrap gap-x-5 gap-y-1'>
              <a href={linkedin} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>LinkedIn</a>
              <a href={github} target='_blank' rel='noreferrer' className='py-1 hover:text-accent'>GitHub</a>
              <GoLink to={resume} label='Resume' className='py-1 hover:text-accent'>Resume</GoLink>
            </div>
          </div>
          <div className='md:text-right'>
            <p className='label mb-2'>Back up</p>
            <button onClick={() => scrollTo(0)} className='py-1 hover:text-accent'>Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
