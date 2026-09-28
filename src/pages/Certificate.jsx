import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt, FaAward } from 'react-icons/fa'

import reactcert from '../certificate/Koushik Maity Reactjs.jpg'
import jscert from '../certificate/The Complete introduction to js_page-0001.jpg'
import sqlcert from '../certificate/Introduction to SQL programming_page-0001.jpg'
import csscert from '../certificate/css certificate_page-0001.jpg'
import pentopixelcert from '../certificate/pen to pixel.png'
import courseracert from '../certificate/coursera.png'

const certs = [
  {
    title: 'React JS',
    description: 'Successfully completed the comprehensive React.js course from Infosys. 🚀📚',
    image: reactcert,
    issuer: 'Infosys'
  },
  {
    title: 'JavaScript',
    description: 'Mastered core JavaScript programming concepts through an extensive Udemy course.',
    image: jscert,
    issuer: 'Udemy'
  },
  {
    title: 'MySQL',
    description: 'Completed in-depth MySQL course from Udemy, ready for backend data management.',
    image: sqlcert,
    issuer: 'Udemy'
  },
  {
    title: 'CSS',
    description: 'Achieved CSS certification from HackerRank, validating styling and layout skills.',
    image: csscert,
    issuer: 'HackerRank'
  },
  {
    title: 'Pen To Pixel',
    description: 'Participated in the PEN TO PIXEL event exploring AI/ML and the Internet of Things (IoT).',
    image: pentopixelcert,
    issuer: 'Tech Event'
  }
];

const Certificate = () => {
  return (
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen font-sans selection:bg-[#E79418] selection:text-white flex flex-col'>
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto w-full'>
          
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16'>
          <div>
            <div data-aos='fade-up' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-sm mb-6'>
              <span className='w-2 h-2 rounded-full bg-[#E79418] animate-pulse'></span>
              <span className='text-xs font-bold tracking-[2px] text-slate-600 dark:text-slate-400'>ACHIEVEMENTS</span>
            </div>
            <h1 data-aos='fade-up' data-aos-delay='100' className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight'>
              Certifications <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>.</span>
            </h1>
          </div>
          <Link to='/' data-aos='fade-left' data-aos-delay='200' className='text-slate-500 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] flex items-center gap-2 font-bold tracking-[2px] transition-colors uppercase text-sm mb-2'>
            <FaArrowLeft /> BACK TO HOME
          </Link>
        </div>

          {/* Featured Certificate (Google Data Analytics) */}
          <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='mb-16 bg-white dark:bg-[#151515] rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-gray-800 shadow-sm hover:border-[#E79418] dark:hover:border-[#E79418] hover:shadow-[0_0_30px_rgba(231,148,24,0.15)] transition-all duration-500 flex flex-col lg:flex-row items-center gap-10 group relative overflow-hidden'>
            <div className='flex-1 text-center lg:text-left z-10'>
              <div className='flex items-center justify-center lg:justify-start gap-3 mb-4'>
                <FaAward className='text-4xl text-[#E79418]' />
                <h1 className='font-bold tracking-[2px] text-3xl md:text-4xl text-slate-900 dark:text-white'>
                  <span className='text-[#E79418]'>Google</span> Data Analytics
                </h1>
              </div>
              <h2 className='text-lg md:text-xl text-slate-500 dark:text-slate-400 font-bold mb-6 tracking-widest uppercase'>Professional Certificate</h2>
              <p className='text-sm md:text-base text-slate-600 dark:text-slate-400 tracking-wide mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium'>
                Successfully completed the rigorous Google Data Analytics Professional Certificate on Coursera, equipping me with in-demand skills in data cleaning, analysis, visualization, and making data-driven decisions.
              </p>
              <Link target='_blank' to='https://coursera.org/share/5d84b1c7f96be454d508f13c20306564' className='inline-flex items-center justify-center gap-2 bg-[#E79418] text-white dark:text-white px-10 py-4 rounded-full font-bold tracking-[2px] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(231,148,24,0.3)] hover:shadow-[0_0_30px_rgba(231,148,24,0.6)]'>
                VIEW CERTIFICATE <FaExternalLinkAlt className='text-sm' />
              </Link>
            </div>
            <div className='lg:w-5/12 flex-shrink-0 z-10'>
              <img src={courseracert} alt='Google Data Analytics Certificate' className='w-full rounded-xl border border-slate-200 dark:border-gray-700 shadow-lg object-contain group-hover:scale-105 transition-transform duration-500' />
            </div>
            
            {/* Background ambient glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E79418] blur-[150px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none'></div>
          </div>

          {/* Standard Certificates Grid */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
            {certs.map((cert, index) => (
              <div 
                key={cert.title} 
                data-aos='fade-up' 
                data-aos-delay={(index % 3) * 100} 
                data-aos-once='false'
                className='group relative bg-white dark:bg-[#151515] rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-800 hover:border-[#E79418] dark:hover:border-[#E79418] shadow-sm hover:shadow-[0_0_30px_rgba(231,148,24,0.15)] transition-all duration-500 hover:-translate-y-3 flex flex-col'
              >
                {/* Image container */}
                <div className='w-full h-56 bg-slate-100 dark:bg-[#111111] overflow-hidden relative border-b border-slate-200 dark:border-gray-800 p-2'>
                  <img src={cert.image} alt={cert.title} className='w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100' />
                  
                  {/* Issuer Badge */}
                  <div className='absolute top-4 left-4 bg-slate-900/80 dark:bg-black/60 backdrop-blur-md border border-[#E79418]/50 text-[#E79418] text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[2px] shadow-lg'>
                    {cert.issuer.toUpperCase()}
                  </div>
                </div>
                
                {/* Content container */}
                <div className='p-8 flex flex-col flex-grow'>
                  <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#E79418] transition-colors leading-tight'>
                    {cert.title}
                  </h2>
                  <p className='text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-grow leading-relaxed'>
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
      </main>
      <Footer />
    </div>
  )
}

export default Certificate