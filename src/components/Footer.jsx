import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='relative bg-white dark:bg-[#1D1D1F] overflow-hidden pt-20 pb-6 px-6 lg:px-16 transition-colors duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.2)]'>
            
            {/* Top Gradient Border/Line separating page from footer */}
            <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#E79418] to-transparent opacity-80'></div>

            {/* Ambient Top Glow */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[400px] h-[100px] bg-[#E79418] blur-[100px] opacity-20 pointer-events-none'></div>

            <div className='max-w-7xl mx-auto flex flex-col items-center text-center relative z-10'>
                {/* Massive CTA Section */}
                <h2 className='text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-[2px] mb-6'>
                    LET'S <span className='text-[#E79418]'>CONNECT</span>
                </h2>
                <p className='text-slate-600 dark:text-slate-400 font-medium tracking-[1px] max-w-lg mb-10 text-sm md:text-base'>
                    Whether you have an exciting project in mind or just want to chat about data, I'd love to hear from you.
                </p>
                
                <Link to='/Contact'>
                    <button className='mb-16 px-10 py-4 bg-[#E79418] text-white dark:text-[#111111] font-bold text-sm md:text-lg tracking-[3px] rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(231,148,24,0.3)] hover:shadow-[0_0_30px_rgba(231,148,24,0.6)]'>
                        SAY HELLO
                    </button>
                </Link>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Gradient Divider inside footer */}
                <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-gray-800 to-transparent mb-10'></div>

                {/* Middle Section: Logo & Socials */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-10'>
                    
                    {/* Logo */}
                    <Link to='/' onClick={scrollToTop} className='font-bold text-slate-900 dark:text-white text-4xl tracking-[4px] hover:scale-105 transition-transform'>
                        KOUSHIK<span className='text-[#E79418]'>.io</span>
                    </Link>

                    {/* Social Links & Back to Top */}
                    <div className='flex gap-5 sm:gap-6 items-center'>
                        <a href='https://linkedin.com/in/koushik-maity' target='_blank' rel='noreferrer' className='flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-gray-800 text-slate-600 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] hover:border-[#E79418] dark:hover:border-[#E79418] transition-all duration-300 hover:scale-110 hover:bg-slate-50 dark:hover:bg-[#1D1D1F] shadow-sm'>
                            <FaLinkedin className='text-xl' />
                        </a>
                        <a href='https://github.com/koushikxy' target='_blank' rel='noreferrer' className='flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-gray-800 text-slate-600 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] hover:border-[#E79418] dark:hover:border-[#E79418] transition-all duration-300 hover:scale-110 hover:bg-slate-50 dark:hover:bg-[#1D1D1F] shadow-sm'>
                            <FaGithub className='text-xl' />
                        </a>
                        <a href='mailto:ksmaity21@gmail.com' className='flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-gray-800 text-slate-600 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] hover:border-[#E79418] dark:hover:border-[#E79418] transition-all duration-300 hover:scale-110 hover:bg-slate-50 dark:hover:bg-[#1D1D1F] shadow-sm'>
                            <FaEnvelope className='text-xl' />
                        </a>
                        
                        {/* Divider before Back to Top */}
                        <div className='w-px h-8 bg-slate-300 dark:bg-gray-800 hidden sm:block mx-2'></div>
                        
                        {/* Back to Top Button */}
                        <button onClick={scrollToTop} className='hidden sm:flex items-center gap-2 text-slate-500 hover:text-[#E79418] font-bold tracking-[2px] text-sm uppercase transition-colors hover:scale-105'>
                            Top <FaArrowUp />
                        </button>
                    </div>
                </div>

                {/* Lower Solid Sub-divider */}
                <div className='w-full h-[1px] bg-slate-200 dark:bg-gray-800 mb-6'></div>

                {/* Bottom Section: Copyright & Credit */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs font-bold tracking-[2px] text-slate-400 dark:text-slate-600 uppercase opacity-80'>
                    <p className='text-center md:text-left'>
                        &copy; {currentYear} KOUSHIK MAITY. ALL RIGHTS RESERVED.
                    </p>
                    <div className='text-center md:text-right'>
                        DESIGNED & DEVELOPED WITH 💜 BY <span className='text-[#E79418] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer'>@KOUSHIK.io</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer