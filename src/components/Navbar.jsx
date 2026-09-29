import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const location = useLocation();
    
    // Use localStorage to persist theme across page navigation
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved !== null) {
            return saved === 'dark';
        }
        return true; // default dark
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [click]);

    const handelClick = () => setClick(!click);
    const toggleTheme = () => setIsDark(!isDark);

    return (
        <nav className='flex justify-between items-center py-5 px-6 lg:px-16 bg-[#F5F5F7] dark:bg-[#1D1D1F] fixed w-full z-50 border-b border-slate-300 dark:border-gray-700 shadow-sm transition-colors duration-300'>
            
            {/* Left: Logo */}
            <div>
                <Link to='/' onClick={() => setClick(false)}>
                    <h1 className='font-bold text-slate-900 dark:text-white text-3xl tracking-[3px] hover:scale-105 transition-transform'>
                        KOUSHIK<span className='text-[#E79418]'>.io</span>
                    </h1>
                </Link>
            </div>

            {/* Right: Nav Links & Controls (Desktop) */}
            <div className='hidden lg:flex items-center gap-10'>
                <ul className='flex gap-10 items-center text-slate-900 dark:text-white text-lg font-semibold tracking-[2px]'>
                    <Link to='/' onClick={() => setClick(false)}>
                        <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>HOME</li>
                    </Link>
                    <Link to='/Project' onClick={() => setClick(false)}>
                        <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Project' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>PROJECTS</li>
                    </Link>
                    <Link to='/Skill' onClick={() => setClick(false)}>
                        <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Skill' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>SKILL</li>
                    </Link>
                    <Link to='/Certificate' onClick={() => setClick(false)}>
                        <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Certificate' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>CERTIFICATIONS</li>
                    </Link>
                    <Link to='/Experience' onClick={() => setClick(false)}>
                        <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Experience' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>EXPERIENCE</li>
                    </Link>
                    <Link to='/Contact' onClick={() => setClick(false)}>
                        <li className={`border-2 border-[#E79418] px-6 py-2 rounded-md transition-all duration-300 font-bold hover:scale-105 ${location.pathname === '/Contact' ? 'bg-[#E79418] text-white dark:text-[#1D1D1F] shadow-[0_0_15px_rgba(231,148,24,0.5)]' : 'text-[#E79418] hover:bg-[#E79418] hover:text-white dark:hover:text-[#1D1D1F] shadow-[0_0_10px_rgba(231,148,24,0.2)] hover:shadow-[0_0_15px_rgba(231,148,24,0.5)]'}`}>CONTACT ME</li>
                    </Link>
                </ul>
                
                {/* Vertical Divider */}
                <div className='w-px h-8 bg-slate-300 dark:bg-slate-700'></div>

                {/* Desktop Theme Toggle */}
                <button 
                    onClick={toggleTheme} 
                    className='relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-[#252528] text-slate-600 dark:text-slate-300 hover:text-[#E79418] dark:hover:text-[#E79418] border border-slate-300 dark:border-slate-700 hover:border-[#E79418] dark:hover:border-[#E79418] transition-all duration-300 shadow-sm hover:scale-110 hover:shadow-[0_0_10px_rgba(231,148,24,0.2)] overflow-hidden'
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    <div className={`absolute transition-all duration-500 transform ${isDark ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-50'}`}>
                        <FaSun className='text-xl' />
                    </div>
                    <div className={`absolute transition-all duration-500 transform ${!isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
                        <FaMoon className='text-xl' />
                    </div>
                </button>
            </div>

            {/* Mobile Controls */}
            <div className='flex items-center gap-4 lg:hidden'>
                <button 
                    onClick={toggleTheme} 
                    className='relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-[#252528] text-slate-600 dark:text-slate-300 hover:text-[#E79418] dark:hover:text-[#E79418] border border-slate-300 dark:border-slate-700 transition-all duration-300 shadow-sm overflow-hidden'
                >
                    <div className={`absolute transition-all duration-500 transform ${isDark ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-50'}`}>
                        <FaSun />
                    </div>
                    <div className={`absolute transition-all duration-500 transform ${!isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
                        <FaMoon />
                    </div>
                </button>
                <div className={`text-3xl cursor-pointer transition-transform duration-300 ${click ? 'rotate-90' : 'rotate-0'}`} onClick={handelClick}>
                    {!click ? <FaBars className='text-slate-900 dark:text-white hover:text-[#E79418] transition-colors' /> : <FaTimes className='text-[#E79418] transition-colors' />}
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <ul className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] pt-16 pb-10 overflow-y-auto z-20 flex flex-col items-center gap-10 text-2xl font-bold tracking-[3px] bg-[#F5F5F7]/95 dark:bg-[#1D1D1F]/95 backdrop-blur-lg text-slate-900 dark:text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${click ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <Link to='/' onClick={() => setClick(false)}>
                    <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>HOME</li>
                </Link>
                <Link to='/Project' onClick={() => setClick(false)}>
                    <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Project' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>PROJECTS</li>
                </Link>
                <Link to='/Skill' onClick={() => setClick(false)}>
                    <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Skill' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>SKILL</li>
                </Link>
                <Link to='/Certificate' onClick={() => setClick(false)}>
                    <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Certificate' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>CERTIFICATIONS</li>
                </Link>
                <Link to='/Experience' onClick={() => setClick(false)}>
                    <li className={`hover:scale-110 transition-all duration-200 ${location.pathname === '/Experience' ? 'text-[#E79418]' : 'hover:text-[#E79418]'}`}>EXPERIENCE</li>
                </Link>
                <Link to='/Contact' onClick={() => setClick(false)}>
                    <li className={`border-2 border-[#E79418] px-6 py-2 rounded-md transition-all duration-300 font-bold hover:scale-105 ${location.pathname === '/Contact' ? 'bg-[#E79418] text-white dark:text-[#1D1D1F] shadow-[0_0_15px_rgba(231,148,24,0.5)]' : 'text-[#E79418] hover:bg-[#E79418] hover:text-white dark:hover:text-[#1D1D1F] shadow-[0_0_10px_rgba(231,148,24,0.2)]'}`}>CONTACT ME</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default Navbar