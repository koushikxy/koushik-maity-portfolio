import React, { useState } from 'react'
import { FiArrowUpRight, FiCopy, FiCheck, FiSend } from 'react-icons/fi'
import { email, linkedin, github, resume } from '../data'

const field = 'w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-base placeholder:text-muted/70 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition'

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
    <section id='contact' className='mx-auto max-w-6xl px-5 sm:px-8 pt-24 pb-20'>
      <div className='rounded-[2rem] border border-line bg-card p-6 sm:p-12 grid lg:grid-cols-2 gap-12'>
        <div>
          <p className='eyebrow mb-6'>Contact</p>
          <h2 className='text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[1.02]'>
            Hiring a <span className='text-accent'>data analyst?</span>
          </h2>
          <p className='mt-6 max-w-md text-lg text-muted'>I'm looking for a Data Analyst or Business Analyst role in Bangalore or remote and can join right away. Email is the fastest way to reach me.</p>
          <button onClick={copy} className='group mt-10 w-full sm:w-auto flex items-center justify-between gap-4 rounded-2xl border border-line bg-bg pl-5 pr-2 py-2 hover:border-accent transition-colors'>
            <span className='text-left'>
              <span className='block text-sm font-semibold text-muted'>{copied ? 'Copied to clipboard' : 'Click to copy'}</span>
              <span className='block text-base sm:text-xl font-bold'>{email}</span>
            </span>
            <span className='shrink-0 w-11 h-11 rounded-xl bg-soft text-accent grid place-items-center group-hover:bg-accent group-hover:text-bg transition'>
              {copied ? <FiCheck /> : <FiCopy />}
            </span>
          </button>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a href={linkedin} target='_blank' rel='noreferrer' className='btn-ghost'>LinkedIn <FiArrowUpRight /></a>
            <a href={github} target='_blank' rel='noreferrer' className='btn-ghost'>GitHub <FiArrowUpRight /></a>
            <a href={resume} target='_blank' rel='noreferrer' className='btn-ghost'>Resume <FiArrowUpRight /></a>
          </div>
        </div>

        <form onSubmit={send} className='space-y-5'>
          <input type='hidden' name='_captcha' value='false' />
          <input type='hidden' name='_subject' value='New message from your portfolio' />
          <input type='text' name='_honey' className='hidden' tabIndex='-1' autoComplete='off' />
          <div className='grid sm:grid-cols-2 gap-5'>
            <label className='block'>
              <span className='block mb-2 text-sm font-semibold'>Your name</span>
              <input name='name' required autoComplete='name' placeholder='Priya Sharma' className={field} />
            </label>
            <label className='block'>
              <span className='block mb-2 text-sm font-semibold'>Your email</span>
              <input name='email' type='email' required autoComplete='email' placeholder='priya@company.com' className={field} />
            </label>
          </div>
          <label className='block'>
            <span className='block mb-2 text-sm font-semibold'>Message</span>
            <textarea name='message' rows='6' required placeholder='Tell me about the role or project' className={`${field} resize-none`} />
          </label>
          <button type='submit' disabled={status === 'sending'} className='btn-primary w-full disabled:opacity-60'>
            {status === 'sending' ? 'Sending...' : 'Send message'} <FiSend />
          </button>
          <p className='text-sm font-medium min-h-[1.25rem]' aria-live='polite'>
            {status === 'sent' && <span className='text-emerald-600 dark:text-emerald-400'>Thanks, your message was sent. I'll get back to you soon.</span>}
            {status === 'error' && <span className='text-red-600 dark:text-red-400'>That didn't go through. Please email me instead.</span>}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
