import React, { useEffect, useRef, useState } from 'react'
import me from '../img/me.webp'
import { reduced } from '../motion'

const queries = [
  {
    tab: 'whoami',
    sql: "SELECT name, role, city\nFROM people\nWHERE name = 'Koushik Maity';",
    cols: ['name', 'role', 'city'],
    rows: [['Koushik Maity', 'Data Analyst', 'Bangalore']]
  },
  {
    tab: 'education',
    sql: 'SELECT degree, school, year\nFROM education;',
    cols: ['degree', 'school', 'year'],
    rows: [['B.Tech CSE (Hons.)', 'XIM University', '2025']]
  },
  {
    tab: 'projects',
    sql: 'SELECT project, headline\nFROM projects\nLIMIT 3;',
    cols: ['project', 'headline'],
    rows: [['UPI Payments', '78% of UPI goes through 2 apps'], ['Grocery Reorders', '59% of buys are repeats'], ['Flight Fares', '2.4x fare in the last 3 days']]
  },
  {
    tab: 'status',
    sql: "SELECT status\nFROM job_search\nWHERE role IN ('Data Analyst',\n  'Business Analyst');",
    cols: ['status'],
    rows: [['open_to_work']]
  }
]

const words = /('[^']*'|\b(?:SELECT|FROM|WHERE|IN|LIMIT)\b|\d+)/g

const Code = ({ text }) => text.split(words).map((part, i) =>
  /^'/.test(part) ? <span key={i} className='text-fg'>{part}</span>
    : /^[A-Z]+$/.test(part) ? <span key={i} className='text-accent'>{part}</span>
      : /^\d+$/.test(part) ? <span key={i} className='text-fg'>{part}</span>
        : <span key={i}>{part}</span>
)

const QueryCard = ({ play }) => {
  const [q, setQ] = useState(0)
  const [typed, setTyped] = useState(0)
  const [stage, setStage] = useState('idle')
  const [run, setRun] = useState(0)
  const auto = useRef(true)

  useEffect(() => {
    if (!play) return
    const sql = queries[q].sql
    if (reduced()) { setTyped(sql.length); setStage('done'); return }
    setTyped(0)
    setStage('typing')
    let n = 0
    const timers = []
    const speed = auto.current ? 38 : 16
    const tick = setInterval(() => {
      n += 1
      setTyped(n)
      if (n >= sql.length) {
        clearInterval(tick)
        setStage('running')
        timers.push(setTimeout(() => setStage('done'), 650))
        if (auto.current) timers.push(setTimeout(() => setQ((q + 1) % queries.length), 5200))
      }
    }, speed)
    return () => { clearInterval(tick); timers.forEach(clearTimeout) }
  }, [q, run, play])

  const pick = i => {
    auto.current = false
    setQ(i)
    setRun(r => r + 1)
  }

  const cur = queries[q]
  const open = stage === 'done' && cur.tab === 'status'

  return (
    <div className='relative h-full'>
      <figure className='relative h-[min(72svh,640px)] lg:h-full rounded-[2rem] border border-line bg-card overflow-hidden'>
        <div aria-hidden='true' className='absolute inset-0 opacity-60 [background-image:linear-gradient(rgb(var(--line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line))_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_60%_45%,black,transparent_75%)]' />
        <div aria-hidden='true' className={`absolute left-1/2 top-[38%] -translate-x-1/2 w-[70%] aspect-square rounded-full bg-accent/25 blur-[90px] transition-opacity duration-700 ${open ? 'opacity-100' : 'opacity-40'}`} />
        <img src={me} alt='Koushik Maity in his graduation gown, holding his cap' width='900' height='1094' fetchpriority='high' className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[94%] w-auto max-w-none object-contain object-bottom lg:left-[55%] lg:h-[90%]' />
        <figcaption className='hidden sm:block absolute top-5 left-5 font-mono text-xs text-muted'><span className='text-accent'>fig. 1</span> me, on graduation day</figcaption>
        <span className={`absolute top-5 right-5 rounded-full px-3 py-1 font-mono text-xs transition-colors duration-500 ${open ? 'bg-accent text-ink' : 'border border-line text-muted'}`}>status: open_to_work</span>
      </figure>

      <div className='relative -mt-28 mx-3 sm:mx-6 lg:absolute lg:mt-0 lg:mx-0 lg:-left-24 lg:bottom-8 lg:w-[min(27rem,78%)] rounded-2xl border border-line bg-bg/90 backdrop-blur-md shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]'>
        <div role='tablist' aria-label='Queries about me' className='no-scrollbar flex gap-1 overflow-x-auto border-b border-line p-2'>
          {queries.map((x, i) => (
            <button key={x.tab} role='tab' aria-selected={q === i} onClick={() => pick(i)} className={`shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${q === i ? 'bg-accent text-ink' : 'text-muted hover:text-fg'}`}>
              {x.tab}.sql
            </button>
          ))}
        </div>
        <pre className='h-[6.75rem] whitespace-pre-wrap px-5 pt-4 pb-3 font-mono text-[13px] leading-relaxed text-muted'>
          <Code text={cur.sql.slice(0, typed)} />
          {stage === 'typing' && <span className='inline-block w-2 h-4 -mb-0.5 bg-accent animate-pulse' />}
        </pre>
        <div className='border-t border-line px-5 py-4 h-[9.5rem] overflow-hidden' aria-live='polite'>
          {stage === 'running' && <p className='font-mono text-xs text-muted'>running<span className='animate-pulse'>...</span></p>}
          {stage === 'done' && (
            <div className='animate-[rise_0.5s_cubic-bezier(.16,1,.3,1)]'>
              <table className='w-full text-left text-sm'>
                <thead>
                  <tr>{cur.cols.map(c => <th key={c} className='pb-2 pr-4 font-mono text-[11px] font-normal text-muted'>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {cur.rows.map(r => (
                    <tr key={r[0]}>{r.map((v, j) => (
                      <td key={j} className='py-1 pr-4 align-top'>
                        {v === 'open_to_work' ? <span className='inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-ink'><span className='w-1.5 h-1.5 rounded-full bg-ink animate-pulse' />open_to_work</span> : <span className={j ? 'text-fg/80' : 'font-medium'}>{v}</span>}
                      </td>
                    ))}</tr>
                  ))}
                </tbody>
              </table>
              <p className='mt-3 font-mono text-[11px] text-muted'>{cur.rows.length} row{cur.rows.length > 1 ? 's' : ''} returned</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QueryCard
