import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen transition-colors duration-700 font-sans selection:bg-[#E79418] selection:text-white flex flex-col'>
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto w-full'>
        
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20'>
          <div>
            <div data-aos='fade-up' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-sm mb-6'>
              <span className='w-2 h-2 rounded-full bg-[#E79418] animate-pulse'></span>
              <span className='text-xs font-bold tracking-[2px] text-slate-600 dark:text-slate-400'>CAREER TIMELINE</span>
            </div>
            <h1 data-aos='fade-up' data-aos-delay='100' className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight'>
              Work <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>Experience.</span>
            </h1>
          </div>
          <Link to='/' data-aos='fade-left' data-aos-delay='200' className='text-slate-500 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] flex items-center gap-2 font-bold tracking-[2px] transition-colors uppercase text-sm'>
            <FaArrowLeft /> BACK TO HOME
          </Link>
        </div>

        {/* Timeline Container */}
        <div className='relative max-w-5xl mx-auto'>
          
          {/* Glowing Vertical Line (Hidden on Mobile, Center on Desktop) */}
          <div className='hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#E79418]/30 to-transparent -translate-x-1/2'></div>

          {/* Job 1: Turing */}
          <div data-aos='fade-up' className='relative flex flex-col md:flex-row justify-between items-center w-full mb-12 md:mb-24 group'>
            {/* Timeline Node (Desktop) */}
            <div className='hidden md:flex absolute left-[50%] w-12 h-12 rounded-full bg-[#111111] border-4 border-[#E79418] -translate-x-1/2 items-center justify-center shadow-[0_0_20px_rgba(231,148,24,0.4)] group-hover:scale-125 group-hover:bg-[#E79418] transition-all duration-300 z-10'>
              <FaBriefcase className='text-[#E79418] group-hover:text-white text-lg transition-colors' />
            </div>

            {/* Content Left (Date on Desktop) */}
            <div className='hidden md:block w-5/12 text-right pr-14'>
              <div className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E79418]/10 text-[#E79418] border border-[#E79418]/30 font-bold tracking-[2px] text-xs uppercase shadow-[0_0_15px_rgba(231,148,24,0.15)] hover:bg-[#E79418]/20 transition-colors'>
                <FaCalendarAlt /> Mar 2026 - Present
              </div>
            </div>

            {/* Content Right (Card) */}
            <div className='w-full md:w-5/12 md:pl-14'>
              <div className='md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E79418]/10 text-[#E79418] border border-[#E79418]/30 font-bold tracking-[2px] text-xs uppercase mb-6 shadow-[0_0_15px_rgba(231,148,24,0.1)]'>
                <FaCalendarAlt /> Mar 2026 - Present
              </div>
              
              <div className='bg-white dark:bg-[#151515] p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 shadow-xl group-hover:border-[#E79418]/50 group-hover:shadow-[0_0_40px_rgba(231,148,24,0.15)] transition-all duration-300 relative overflow-hidden'>
                {/* Accent line on card */}
                <div className='absolute left-0 top-0 bottom-0 w-1 bg-[#E79418]'></div>
                
                <h3 className='text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2'>Business Analyst</h3>
                <h4 className='text-lg md:text-xl font-bold text-[#E79418] mb-8'>@ Turing</h4>
                
                <ul className='space-y-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed list-none text-sm md:text-base'>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#E79418] mt-1 shrink-0'>▹</span>
                    <span>Evaluated 200+ Gemini-generated responses and prompts weekly against structured quality rubrics, achieving <strong className='text-slate-900 dark:text-white'>92% agreement</strong> with senior reviewers to maintain data accuracy.</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#E79418] mt-1 shrink-0'>▹</span>
                    <span>Curated and validated <strong className='text-slate-900 dark:text-white'>40+ data samples weekly</strong> for Gemini model training.</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-[#E79418] mt-1 shrink-0'>▹</span>
                    <span>Tracked and analyzed time spent per evaluation task to identify quality improvement areas.</span>
                  </li>
                </ul>
                
                {/* Tech Pills */}
                <div className='flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-gray-800'>
                  {['Data Quality', 'AI Evaluation', 'Metrics'].map(tech => (
                    <span key={tech} className='px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#1a1a1c] text-slate-600 dark:text-slate-400 text-[10px] font-bold tracking-widest uppercase'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job 2: Distil Ventures */}
          <div data-aos='fade-up' className='relative flex flex-col md:flex-row-reverse justify-between items-center w-full group'>
            {/* Timeline Node (Desktop) */}
            <div className='hidden md:flex absolute left-[50%] w-10 h-10 rounded-full bg-[#111111] border-4 border-slate-700 -translate-x-1/2 items-center justify-center group-hover:border-[#E79418] group-hover:shadow-[0_0_20px_rgba(231,148,24,0.4)] group-hover:scale-125 transition-all duration-300 z-10'>
              <FaBriefcase className='text-slate-500 group-hover:text-[#E79418] text-sm transition-colors' />
            </div>

            {/* Content Left (Date on Desktop) */}
            <div className='hidden md:block w-5/12 text-left pl-14'>
              <div className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200 dark:bg-[#1a1a1c] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-gray-700 font-bold tracking-[2px] text-xs uppercase hover:bg-slate-300 dark:hover:bg-gray-800 transition-colors'>
                <FaCalendarAlt /> Apr 2024 - Jul 2024
              </div>
            </div>

            {/* Content Right (Card) */}
            <div className='w-full md:w-5/12 md:pr-14'>
              <div className='md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-[#1a1a1c] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-gray-700 font-bold tracking-[2px] text-xs uppercase mb-6'>
                <FaCalendarAlt /> Apr 2024 - Jul 2024
              </div>
              
              <div className='bg-white dark:bg-[#151515] p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 shadow-xl group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-all duration-300 relative overflow-hidden md:text-right'>
                {/* Accent line on card */}
                <div className='hidden md:block absolute right-0 top-0 bottom-0 w-1 bg-slate-400 dark:bg-slate-600'></div>
                <div className='md:hidden absolute left-0 top-0 bottom-0 w-1 bg-slate-400 dark:bg-slate-600'></div>
                
                <h3 className='text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2'>Web Developer Intern</h3>
                <h4 className='text-lg md:text-xl font-bold text-slate-500 mb-8'>@ Distil Ventures Limited</h4>
                
                <ul className='space-y-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed list-none text-sm md:text-base md:flex md:flex-col md:items-end'>
                  <li className='flex items-start md:flex-row-reverse gap-3 text-left md:text-right'>
                    <span className='text-slate-500 mt-1 shrink-0'>▹</span>
                    <span>Led a team of 5 interns to build and deploy <strong className='text-slate-900 dark:text-white'>6 websites for 6 clients</strong> using the MERN stack within a 3-month period.</span>
                  </li>
                  <li className='flex items-start md:flex-row-reverse gap-3 text-left md:text-right'>
                    <span className='text-slate-500 mt-1 shrink-0'>▹</span>
                    <span>Resolved <strong className='text-slate-900 dark:text-white'>60+ layout and responsiveness issues</strong> across 6 client sites through daily standups.</span>
                  </li>
                </ul>
                
                {/* Tech Pills */}
                <div className='flex flex-wrap md:justify-end gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-gray-800'>
                  {['React', 'MERN', 'Leadership'].map(tech => (
                    <span key={tech} className='px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#1a1a1c] text-slate-600 dark:text-slate-400 text-[10px] font-bold tracking-widest uppercase'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
      
      <Footer />
    </div>
  )
}

export default Experience
