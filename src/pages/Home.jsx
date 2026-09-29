import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import Typewriter from 'typewriter-effect'
import { FaFileDownload, FaArrowRight, FaChartPie, FaDatabase, FaCheckCircle, FaEnvelope, FaGoogle } from "react-icons/fa";

import koushik from '../img/koushik_new.jpeg'

const Home = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ksmaity21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen transition-colors duration-700 w-full font-sans overflow-x-hidden'>
        
        {/* HERO SECTION */}
        <div className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16'>
          
          {/* Left Content */}
          <div className='flex-1 z-10 w-full'>
            <div data-aos='fade-up' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-sm mb-6'>
              <span className='w-2 h-2 rounded-full bg-[#E79418] animate-pulse'></span>
              <span className='text-xs font-bold tracking-[2px] text-slate-600 dark:text-slate-400'>GOOGLE DATA ANALYTICS CERTIFIED</span>
            </div>

            <h1 data-aos='fade-up' data-aos-delay='100' className='text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6'>
              Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>Koushik.</span>
            </h1>
            
            <div data-aos='fade-up' data-aos-delay='200' className='mb-10'>
              <div className='inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white dark:bg-[#111111] border border-slate-200 dark:border-gray-800 shadow-xl relative overflow-hidden group hover:border-[#E79418]/50 transition-colors duration-300'>
                
                {/* Blinking radar dot */}
                <div className='relative flex h-4 w-4 md:h-5 md:w-5 shrink-0'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E79418] opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-[#E79418] shadow-[0_0_10px_rgba(231,148,24,0.8)]'></span>
                </div>
                
                {/* Terminal Text */}
                <div className='font-mono text-[13px] md:text-lg font-bold tracking-[2px] md:tracking-[4px] text-slate-900 dark:text-white flex items-center gap-2 md:gap-3 relative z-10 uppercase whitespace-nowrap'>
                  <span className='text-slate-400 dark:text-slate-600 hidden sm:inline-block'>SYS.ROLE //</span>
                  <span className='text-[#E79418]'>
                    <Typewriter
                      options={{
                        strings: ['BUSINESS_ANALYST', 'DATA_ANALYST'],
                        autoStart: true,
                        loop: true,
                        cursor: '█',
                        cursorClassName: 'text-[#E79418] animate-pulse',
                        delay: 70,
                        deleteSpeed: 40
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <p data-aos='fade-up' data-aos-delay='300' className='text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 font-medium'>
              I’m a Business Analyst with a deep technical root in Computer Science. While I have the coding chops Python, my true expertise lies in analytics, SQL, Power BI, and Tableau. At Turing, I specialize in ensuring AI data quality and architecting business intelligence models. Beyond the screen, I’m a natural leader who enjoys collaborating with teams to turn complex numbers into simple, strategic decisions.
            </p>

            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap items-center gap-6'>
              <a href='https://drive.google.com/file/d/13kx61CnCnyX0Nulokdjsgtx21eV50PH4/view?usp=sharing' target='_blank' rel='noreferrer' className='flex items-center gap-3 bg-[#E79418] text-white px-8 py-4 rounded-full font-bold tracking-[1.5px] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(231,148,24,0.3)] hover:shadow-[0_0_30px_rgba(231,148,24,0.6)]'>
                <FaFileDownload /> RESUME
              </a>
              <Link to='/Project' className='flex items-center gap-3 bg-white dark:bg-[#151515] text-slate-900 dark:text-white border-2 border-slate-200 dark:border-gray-800 px-8 py-4 rounded-full font-bold tracking-[1.5px] hover:border-[#E79418] dark:hover:border-[#E79418] hover:text-[#E79418] dark:hover:text-[#E79418] transition-all duration-300'>
                PROJECTS <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Content / Image */}
          <div data-aos='fade-left' data-aos-delay='300' className='flex-1 relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end'>
            {/* Ambient Background Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E79418] blur-[120px] opacity-20 dark:opacity-30 rounded-full pointer-events-none'></div>
            
            {/* Image Container */}
            <div className='relative z-10 p-2 rounded-[3rem] bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden'>
              <img src={koushik} alt="Koushik Maity" className='w-full max-w-[350px] lg:max-w-[420px] rounded-[2.5rem] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500' />
              
              {/* Floating Stat Badge */}
              <div className='absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-gray-800 p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce' style={{animationDuration: '3s'}}>
                <div className='w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]'></div>
                <div>
                  <p className='text-[10px] md:text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400'>STATUS</p>
                  <p className='text-sm md:text-base font-extrabold text-slate-900 dark:text-white'>Open to Roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className='max-w-[1920px] mx-auto px-6 md:px-16 lg:px-40 -mt-10 mb-16 relative z-20'>
          <div data-aos='fade-up' data-aos-delay='600' className='grid grid-cols-2 md:grid-cols-4 gap-0 bg-white dark:bg-[#151515] rounded-3xl border border-slate-200 dark:border-gray-800 shadow-2xl overflow-hidden'>
            
            <div className='flex flex-col items-center justify-center p-8 border-b md:border-b-0 border-r border-slate-200 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-[#111111] transition-colors group'>
              <h3 className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform'>20<span className='text-[#E79418]'>+</span></h3>
              <p className='text-[10px] md:text-xs font-bold tracking-[2px] text-slate-500 uppercase text-center'>Projects Completed</p>
            </div>
            
            <div className='flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-[#111111] transition-colors group'>
              <h3 className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform'>5<span className='text-[#E79418]'>+</span></h3>
              <p className='text-[10px] md:text-xs font-bold tracking-[2px] text-slate-500 uppercase text-center'>Certifications</p>
            </div>
            
            <div className='flex flex-col items-center justify-center p-8 border-r border-slate-200 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-[#111111] transition-colors group'>
              <h3 className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform'>1<span className='text-[#E79418]'>M+</span></h3>
              <p className='text-[10px] md:text-xs font-bold tracking-[2px] text-slate-500 uppercase text-center'>Rows Analyzed</p>
            </div>
            
            <div className='flex flex-col items-center justify-center p-8 hover:bg-slate-50 dark:hover:bg-[#111111] transition-colors group'>
              <h3 className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform'>∞</h3>
              <p className='text-[10px] md:text-xs font-bold tracking-[2px] text-slate-500 uppercase text-center'>Lines of Code</p>
            </div>

          </div>
        </div>

        {/* INFINITE SCROLLING TECH TICKER */}
        <div className='py-6 bg-[#E79418] border-y border-[#E79418] overflow-hidden relative flex w-full shadow-inner'>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 15s linear infinite;
              display: flex;
              white-space: nowrap;
            }
          `}</style>
          
          <div className='animate-marquee items-center gap-8 md:gap-16 px-4 text-white/90 text-xl md:text-2xl font-black tracking-[4px] uppercase'>
            <span>PYTHON</span>
            <span className='opacity-50'>•</span>
            <span>POWER BI</span>
            <span className='opacity-50'>•</span>
            <span>TABLEAU</span>
            <span className='opacity-50'>•</span>
            <span>SQL</span>
            <span className='opacity-50'>•</span>
            <span>EXCEL</span>
            <span className='opacity-50'>•</span>
            <span>DATA STRATEGY</span>
            <span className='opacity-50'>•</span>
            <span>PREDICTIVE MODELING</span>
            <span className='opacity-50'>•</span>
            
            {/* Duplicated for infinite loop effect */}
            <span>PYTHON</span>
            <span className='opacity-50'>•</span>
            <span>POWER BI</span>
            <span className='opacity-50'>•</span>
            <span>TABLEAU</span>
            <span className='opacity-50'>•</span>
            <span>SQL</span>
            <span className='opacity-50'>•</span>
            <span>EXCEL</span>
            <span className='opacity-50'>•</span>
            <span>DATA STRATEGY</span>
            <span className='opacity-50'>•</span>
            <span>PREDICTIVE MODELING</span>
            <span className='opacity-50'>•</span>

            {/* Duplicated again for large screens */}
            <span>PYTHON</span>
            <span className='opacity-50'>•</span>
            <span>POWER BI</span>
            <span className='opacity-50'>•</span>
            <span>SQL</span>
            <span className='opacity-50'>•</span>
            <span>EXCEL</span>
            <span className='opacity-50'>•</span>
            <span>DATA STRATEGY</span>
            <span className='opacity-50'>•</span>
            <span>PREDICTIVE MODELING</span>
            <span className='opacity-50'>•</span>
          </div>
        </div>

        {/* FEATURED CERTIFICATE BANNER */}
        <div className='px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto mt-10 md:mt-20'>
          <div data-aos='fade-up' className='relative w-full rounded-[2.5rem] bg-gradient-to-r from-blue-700 to-blue-900 overflow-hidden shadow-[0_20px_50px_rgba(29,78,216,0.3)] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 group'>
             
             {/* Google Background Accent */}
             <div className='absolute -right-20 -top-20 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none'>
                <FaGoogle className='text-[300px] text-white' />
             </div>

             <div className='relative z-10 max-w-2xl text-center lg:text-left'>
               <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6'>
                 <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
                 <span className='text-[10px] md:text-xs font-bold tracking-[3px] text-white'>OFFICIALLY CERTIFIED</span>
               </div>
               <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide mb-4'>Google Data Analytics Professional</h2>
               <p className='text-blue-100 font-medium text-base md:text-lg max-w-xl mx-auto lg:mx-0'>Rigorous, hands-on training in SQL, R Programming, Tableau, and data visualization directly from Google experts.</p>
             </div>

             <div className='relative z-10 shrink-0'>
               <Link to='/Certificate' className='px-8 py-5 rounded-2xl bg-white text-blue-900 font-extrabold tracking-[2px] hover:bg-[#E79418] hover:text-white hover:shadow-[0_0_30px_rgba(231,148,24,0.6)] transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-2 group/btn'>
                 VIEW CREDENTIAL <FaArrowRight className='group-hover/btn:translate-x-1 transition-transform' />
               </Link>
             </div>

          </div>
        </div>

        {/* BEYOND THE DATA - 3 Column Grid */}
        <div className='py-24 lg:py-32 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto relative'>
          
          {/* Header */}
          <div className='text-center mb-16 md:mb-24'>
            <h2 data-aos='fade-up' className='text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[2px] mb-6'>
              Beyond the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>Data.</span>
            </h2>
            <p data-aos='fade-up' data-aos-delay='100' className='text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium'>
              I'm always looking for the next big challenge—whether that means diving into a messy database, exploring new statistical models, or helping a business scale.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className='grid md:grid-cols-3 gap-8 relative z-10'>
            
            {/* Block 1 */}
            <div data-aos='fade-up' data-aos-delay='100' className='bg-white dark:bg-[#151515] p-10 rounded-[2rem] border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-[0_0_40px_rgba(231,148,24,0.05)] hover:-translate-y-2 transition-all duration-500 group'>
              <div className='w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#1a1a1c] border border-slate-200 dark:border-gray-800 flex items-center justify-center group-hover:border-[#E79418]/50 group-hover:shadow-[0_0_20px_rgba(231,148,24,0.2)] transition-all duration-300 mb-8'>
                <FaDatabase className='text-2xl text-slate-400 dark:text-slate-500 group-hover:text-[#E79418] transition-colors' />
              </div>
              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-wide group-hover:text-[#E79418] transition-colors'>Data Strategy</h4>
              <p className='text-slate-600 dark:text-slate-400 font-medium leading-relaxed'>
                I specialize in transforming complex, unstructured data into clean, scalable models. By leveraging SQL and advanced querying techniques, I build the foundation necessary for accurate and rapid business reporting.
              </p>
            </div>

            {/* Block 2 */}
            <div data-aos='fade-up' data-aos-delay='200' className='bg-white dark:bg-[#151515] p-10 rounded-[2rem] border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-[0_0_40px_rgba(231,148,24,0.05)] hover:-translate-y-2 transition-all duration-500 group'>
              <div className='w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#1a1a1c] border border-slate-200 dark:border-gray-800 flex items-center justify-center group-hover:border-[#E79418]/50 group-hover:shadow-[0_0_20px_rgba(231,148,24,0.2)] transition-all duration-300 mb-8'>
                <FaChartPie className='text-2xl text-slate-400 dark:text-slate-500 group-hover:text-[#E79418] transition-colors' />
              </div>
              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-wide group-hover:text-[#E79418] transition-colors'>Business Intelligence</h4>
              <p className='text-slate-600 dark:text-slate-400 font-medium leading-relaxed'>
                Data is only as valuable as the decisions it drives. I design dynamic, interactive Power BI and Tableau dashboards that highlight key performance indicators, enabling stakeholders to visualize trends and make strategic choices.
              </p>
            </div>

            {/* Block 3 */}
            <div data-aos='fade-up' data-aos-delay='300' className='bg-white dark:bg-[#151515] p-10 rounded-[2rem] border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-[0_0_40px_rgba(231,148,24,0.05)] hover:-translate-y-2 transition-all duration-500 group'>
              <div className='w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#1a1a1c] border border-slate-200 dark:border-gray-800 flex items-center justify-center group-hover:border-[#E79418]/50 group-hover:shadow-[0_0_20px_rgba(231,148,24,0.2)] transition-all duration-300 mb-8'>
                <FaCheckCircle className='text-2xl text-slate-400 dark:text-slate-500 group-hover:text-[#E79418] transition-colors' />
              </div>
              <h4 className='text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-wide group-hover:text-[#E79418] transition-colors'>Quality & Evaluation</h4>
              <p className='text-slate-600 dark:text-slate-400 font-medium leading-relaxed'>
                Currently at Turing, I rigorously evaluate AI-generated outputs for data quality and accuracy. I ensure that analytical models meet the highest standards, bridging the gap between raw information and reliable intelligence.
              </p>
            </div>

          </div>

          {/* Creative Copy Email Banner */}
          <div className='mt-24 max-w-4xl mx-auto relative group cursor-pointer' data-aos='fade-up' onClick={handleCopyEmail}>
             {/* Glowing border effect */}
             <div className='absolute -inset-1 bg-gradient-to-r from-[#E79418] via-yellow-500 to-[#E79418] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-500'></div>
             
             <div className='relative w-full bg-white dark:bg-[#111111] p-3 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between border border-slate-200 dark:border-gray-800'>
                <div className='flex items-center gap-6 px-6 py-4'>
                  <div className='w-14 h-14 rounded-full bg-[#E79418]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <FaEnvelope className='text-2xl text-[#E79418]' />
                  </div>
                  <div className='text-left'>
                    <p className='text-[10px] md:text-xs font-bold tracking-[3px] text-slate-500 dark:text-slate-400 mb-1 uppercase'>Drop me a line</p>
                    <p className='text-lg md:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#E79418] transition-colors'>ksmaity21@gmail.com</p>
                  </div>
                </div>
                
                <div className={`mt-4 md:mt-0 w-full md:w-auto flex items-center justify-center px-8 py-4 md:py-0 md:h-16 rounded-2xl md:rounded-none md:border-l border-slate-200 dark:border-gray-800 transition-colors duration-300 ${copied ? 'bg-green-500/10' : 'bg-transparent'}`}>
                  <span className={`text-sm font-extrabold tracking-[2px] transition-colors ${copied ? 'text-green-500' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {copied ? '✓ COPIED TO CLIPBOARD' : 'CLICK TO COPY'}
                  </span>
                </div>
             </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home
