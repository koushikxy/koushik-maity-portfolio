import React, { Component } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

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
          <p className='eyebrow'>Something went wrong</p>
          <h1 className='mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight'>This page didn't load properly.</h1>
          <p className='mt-4 text-muted'>Please reload, or email me at ksmaity21@gmail.com.</p>
          <button onClick={() => window.location.reload()} className='btn-primary mt-8'>Reload the page</button>
        </div>
      </main>
    )
  }
}

const App = () => (
  <Safe>
    <Routes>
      {['/', '/About', '/Project', '/Experience', '/Skill', '/Certificate', '/Contact'].map(path => (
        <Route key={path} path={path} element={<Home />} />
      ))}
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Safe>
)

export default App
