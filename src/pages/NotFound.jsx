import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen font-sans selection:bg-[#E79418] selection:text-white flex flex-col'>
      <Navbar />
      
      <main className='flex-grow flex flex-col items-center justify-center px-6 text-center pt-32 pb-20'>
        
        <div className='relative mb-10 group'>
          <div className='absolute inset-0 bg-[#E79418] blur-[100px] opacity-20 dark:opacity-30 rounded-full group-hover:opacity-40 transition-opacity duration-700 pointer-events-none'></div>
          <h1 className='text-9xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x tracking-tighter drop-shadow-2xl relative z-10'>
            404
          </h1>
        </div>

        <div className='flex items-center gap-4 mb-6'>
          <FaExclamationTriangle className='text-3xl text-red-500 animate-pulse' />
          <h2 className='text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-[2px] uppercase'>
            System Error
          </h2>
        </div>

        <p className='text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-lg md:text-xl font-medium mb-12 leading-relaxed'>
          It looks like the data you're looking for doesn't exist. The page might have been moved, deleted, or never existed in the first place.
        </p>

        <Link to='/' className='inline-flex items-center gap-3 bg-[#E79418] text-white px-10 py-5 rounded-full font-bold tracking-[2px] hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(231,148,24,0.3)] hover:shadow-[0_0_40px_rgba(231,148,24,0.6)] group'>
          <FaHome className='text-xl group-hover:-translate-y-1 transition-transform' /> 
          RETURN TO BASE
        </Link>
        
      </main>
      
      <Footer />
    </div>
  )
}

export default NotFound
