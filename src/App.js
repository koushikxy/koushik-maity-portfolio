import React, { Component, Suspense, lazy, useEffect } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { TransitionProvider } from './components/Transition'
import { startScroll } from './motion'

const Project = lazy(() => import('./pages/Project'))
const Resume = lazy(() => import('./pages/Resume'))

class Safe extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (!this.state.failed) return this.props.children
    return (
      <main className='min-h-[100svh] grid place-items-center px-5 text-center'>
        <div>
          <p className='label'>Something went wrong</p>
          <h1 className='mt-4 text-4xl sm:text-6xl font-medium tracking-tight'>This page didn't load properly.</h1>
          <p className='mt-4 text-muted'>Please reload, or email me at ksmaity21@gmail.com.</p>
          <button onClick={() => window.location.reload()} className='pill-accent mt-8'>Reload the page</button>
        </div>
      </main>
    )
  }
}

const App = () => {
  useEffect(startScroll, [])

  return (
    <Safe>
      <TransitionProvider>
        <Routes>
          {['/', '/About', '/Project', '/Experience', '/Skill', '/Certificate', '/Contact'].map(path => (
            <Route key={path} path={path} element={<Home />} />
          ))}
          <Route path='/resume' element={<Suspense fallback={<div className='min-h-[100svh]' />}><Resume /></Suspense>} />
          <Route path='/work/:slug' element={<Suspense fallback={<div className='min-h-[100svh]' />}><Project /></Suspense>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </TransitionProvider>
    </Safe>
  )
}

export default App
