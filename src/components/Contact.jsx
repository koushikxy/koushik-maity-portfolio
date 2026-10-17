import React, { useState } from 'react'
import { FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi'
import { email, linkedin, github, resume } from '../data'

const field = 'peer w-full bg-transparent border-b border-line py-3 text-lg placeholder-transparent focus:outline-none focus:border-accent transition-colors'
const floating = 'absolute left-0 -top-3 text-xs text-muted transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')

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
    <section id='contact' className='mx-auto max-w-6xl px-5 sm:px-8 pt-28 pb-20'>
      <p className='label mb-6'>(06) Contact</p>
      <h2 className='text-[clamp(2.8rem,9vw,8rem)] font-semibold tracking-[-0.04em] leading-[0.95]'>
        Hiring a <span className='font-serif italic font-normal text-accent'>data analyst?</span>
      </h2>
      <p className='mt-6 max-w-xl text-lg text-muted'>I'm looking for a Data Analyst or Business Analyst role in Bangalore or remote and can join right away. Email is the fastest way to reach me.</p>

      <div className='mt-14 grid lg:grid-cols-2 gap-14'>
        <div>
          <button onClick={copy} className='group flex items-center gap-4 text-2xl sm:text-4xl font-medium tracking-tight text-left break-all'>
            <span className='border-b-2 border-line group-hover:border-accent transition-colors'>{email}</span>
            <span className='shrink-0 w-11 h-11 rounded-full border border-line grid place-items-center text-base group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition'>
              {copied ? <FiCheck /> : <FiCopy />}
            </span>
          </button>
          <p className='mt-3 h-5 text-sm text-emerald-600 dark:text-emerald-400' aria-live='polite'>{copied && 'Copied to clipboard'}</p>
          <div className='mt-10 flex flex-wrap gap-3'>
            <a href={linkedin} target='_blank' rel='noreferrer' className='btn-ghost'>LinkedIn <FiArrowUpRight /></a>
            <a href={github} target='_blank' rel='noreferrer' className='btn-ghost'>GitHub <FiArrowUpRight /></a>
            <a href={resume} target='_blank' rel='noreferrer' className='btn-ghost'>Resume <FiArrowUpRight /></a>
          </div>
        </div>

        <form onSubmit={send} className='space-y-8'>
          <input type='hidden' name='_captcha' value='false' />
          <input type='hidden' name='_subject' value='New message from your portfolio' />
          <input type='text' name='_honey' className='hidden' tabIndex='-1' autoComplete='off' />
          <div className='grid sm:grid-cols-2 gap-8'>
            <label className='relative block'>
              <input name='name' required placeholder='Name' autoComplete='name' className={field} />
              <span className={floating}>Name</span>
            </label>
            <label className='relative block'>
              <input name='email' type='email' required placeholder='Email' autoComplete='email' className={field} />
              <span className={floating}>Email</span>
            </label>
          </div>
          <label className='relative block'>
            <textarea name='message' rows='4' required placeholder='Message' className={`${field} resize-none`} />
            <span className={floating}>Message</span>
          </label>
          <div className='flex flex-wrap items-center gap-4'>
            <button type='submit' disabled={status === 'sending'} className='btn-primary disabled:opacity-50'>
              {status === 'sending' ? 'Sending...' : 'Send message'} <FiArrowUpRight />
            </button>
            <p className='text-sm' aria-live='polite'>
              {status === 'sent' && <span className='text-emerald-600 dark:text-emerald-400'>Thanks, I'll get back to you soon.</span>}
              {status === 'error' && <span className='text-red-600 dark:text-red-400'>That didn't go through. Please email me instead.</span>}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
