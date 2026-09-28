import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Skill = () => {
  return (
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] w-full min-h-screen flex flex-col font-sans selection:bg-[#E79418] selection:text-white'>
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto w-full'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20'>
          <div>
            <div data-aos='fade-up' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-sm mb-6'>
              <span className='w-2 h-2 rounded-full bg-[#E79418] animate-pulse'></span>
              <span className='text-xs font-bold tracking-[2px] text-slate-600 dark:text-slate-400'>TECHNICAL ARSENAL</span>
            </div>
            <h1 data-aos='fade-up' data-aos-delay='100' className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight'>
              Core <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>Skills.</span>
            </h1>
          </div>
          <Link to='/' data-aos='fade-left' data-aos-delay='200' className='text-slate-500 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] flex items-center gap-2 font-bold tracking-[2px] transition-colors uppercase text-sm'>
            <FaArrowLeft /> BACK TO HOME
          </Link>
        </div>

        {/* Skills Vertical List */}
        <div className='flex flex-col gap-12 mt-8 max-w-5xl relative z-10'>
          
          {/* Analytics */}
          <div data-aos='fade-up' data-aos-delay='100' className='border-b border-slate-200 dark:border-slate-800 pb-10 relative'>
            <h1 className='text-slate-900 dark:text-white font-extrabold text-2xl tracking-[2px] mb-8 uppercase flex items-center gap-4'>
              <span className='w-3 h-3 rounded-full bg-[#E79418] shadow-[0_0_10px_rgba(231,148,24,0.6)]'></span>
              Analytics & Data Science
            </h1>
            <div className='flex flex-wrap gap-4'>
              {['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Data Validation', 'Statistics & Probability', 'KPI Analysis', 'Dashboard Development'].map(skill => (
                <span key={skill} className='bg-white dark:bg-[#151515] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold tracking-[1px] border border-slate-200 dark:border-gray-800 hover:border-[#E79418] hover:text-[#E79418] hover:shadow-[0_0_20px_rgba(231,148,24,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software & Tools */}
          <div data-aos='fade-up' data-aos-delay='150' className='border-b border-slate-200 dark:border-slate-800 pb-10 relative'>
            <h1 className='text-slate-900 dark:text-white font-extrabold text-2xl tracking-[2px] mb-8 uppercase flex items-center gap-4'>
              <span className='w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]'></span>
              Software & Tools
            </h1>
            <div className='flex flex-wrap gap-4'>
              {['Power BI', 'Tableau', 'Excel', 'Git / GitHub', 'Jira', 'Figma'].map(skill => (
                <span key={skill} className='bg-white dark:bg-[#151515] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold tracking-[1px] border border-slate-200 dark:border-gray-800 hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming */}
          <div data-aos='fade-up' data-aos-delay='200' className='border-b border-slate-200 dark:border-slate-800 pb-10 relative'>
            <h1 className='text-slate-900 dark:text-white font-extrabold text-2xl tracking-[2px] mb-8 uppercase flex items-center gap-4'>
              <span className='w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]'></span>
              Programming & Databases
            </h1>
            <div className='flex flex-wrap gap-4'>
              {['Python', 'SQL', 'MySQL', 'MongoDB', 'JavaScript'].map(skill => (
                <span key={skill} className='bg-white dark:bg-[#151515] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold tracking-[1px] border border-slate-200 dark:border-gray-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Tech */}
          <div data-aos='fade-up' data-aos-delay='250' className='pb-10 relative'>
            <h1 className='text-slate-900 dark:text-white font-extrabold text-2xl tracking-[2px] mb-8 uppercase flex items-center gap-4'>
              <span className='w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]'></span>
              Web Technologies
            </h1>
            <div className='flex flex-wrap gap-4'>
              {['React.js', 'Tailwind CSS', 'HTML & CSS', 'Node.js'].map(skill => (
                <span key={skill} className='bg-white dark:bg-[#151515] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold tracking-[1px] border border-slate-200 dark:border-gray-800 hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </main>
      
      <Footer />
    </div>
  )
}

export default Skill