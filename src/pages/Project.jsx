import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaChartBar, FaCode, FaPython, FaCubes } from 'react-icons/fa'

import upiDashboard from '../projects_img/upi-dashboard.jpg'
import groceryReorder from '../projects_img/grocery-reorder.jpg'
import flightFares from '../projects_img/flight-fares.jpg'
import cardPayments from '../projects_img/card-payments-excel.jpg'
import portfolio from '../projects_img/portfolio.jpg'
import apnafashion from '../projects_img/apnafashion.jpg'
import heroCycles from '../projects_img/hero-cycles.jpg'
import messagingApp from '../projects_img/messaging-app.jpg'
import crowdfunding from '../projects_img/crowdfunding.jpg'

const projects = [
  {
    title: 'UPI Payments Dashboard',
    description: 'Power BI dashboard on 76 months of NPCI data. PhonePe and Google Pay handle 78% of UPI transactions, but market concentration is the lowest it has been since 2020 as newer apps like Navi grow.',
    tools: 'Power BI · DAX · Power Query',
    image: upiDashboard,
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/upi-payments-dashboard',
    live: null
  },
  {
    title: 'Grocery Reorder Analysis',
    description: 'SQL analysis of 3.4 million Instacart orders in MySQL. 59% of items bought are repeats, 12% of customers place 30% of orders, and some products are bought together up to 18x more often than chance.',
    tools: 'MySQL · CTEs · Window Functions',
    image: groceryReorder,
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/grocery-reorder-analysis',
    live: null
  },
  {
    title: 'Flight Fare Analysis',
    description: 'Cleaned and analysed 300k domestic flight fares. Booking within 15 days of departure pushes fares up about 1.7x, and the airline you pick changes the price by up to 45% on the same route.',
    tools: 'Python · Pandas · Matplotlib',
    image: flightFares,
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/flight-price-analysis',
    live: null
  },
  {
    title: 'Card Payments Dashboard',
    description: 'Excel dashboard on RBI bank-wise card data. UPI QR codes grew 16.5% in a year while card machines fell 14.7%, and debit cards are now mostly used to withdraw cash.',
    tools: 'Excel · Power Query · XLOOKUP · Pivot Tables',
    image: cardPayments,
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/card-payments-excel-dashboard',
    live: null
  },
  {
    title: 'Hero Cycles Pricing Tool',
    description: 'Pricing tool for the Hero Cycles sales team: pick parts and a date and get the total price broken down by component, with a command-line version and a small web dashboard.',
    tools: 'Python · FastAPI · JavaScript',
    image: heroCycles,
    category: 'Web Development',
    github: 'https://github.com/koushikxy/hero-cycles-pricing',
    live: null
  },
  {
    title: 'ApnaFashion.in',
    description: 'E-commerce frontend for a streetwear brand, designed in Figma and built with React and Tailwind CSS.',
    tools: 'React · Tailwind CSS · Figma',
    image: apnafashion,
    category: 'Web Development',
    github: 'https://github.com/koushikxy/apnafashion.in',
    live: 'https://apnafashion.netlify.app'
  },
  {
    title: 'Portfolio Website',
    description: 'This site. My projects, skills, experience and certificates, with a light and dark mode.',
    tools: 'React · Tailwind CSS',
    image: portfolio,
    category: 'Web Development',
    github: 'https://github.com/koushikxy/koushik-maity-portfolio',
    live: 'https://koushikmaity.netlify.app'
  },
  {
    title: 'Messaging App',
    description: 'Team capstone project. A real-time chat app with login, chat rooms, voice notes and media sharing.',
    tools: 'Next.js · Firebase',
    image: messagingApp,
    category: 'Team Projects',
    github: 'https://github.com/koushikxy/Messaging_app',
    live: null
  },
  {
    title: 'Milestone-Based Crowdfunding',
    description: 'Team project. A Solidity smart contract that releases crowdfunding money to the creator one milestone at a time once approvers sign off, and refunds backers if the goal is not met by the deadline.',
    tools: 'Solidity · Ethereum',
    image: crowdfunding,
    category: 'Team Projects',
    github: 'https://github.com/koushikxy/Milestone-Based-Crowdfunding-using-solidity',
    live: null
  }
];

const categories = ['All', 'Data Analytics', 'Web Development', 'Team Projects'];

const getCategoryIcon = (category) => {
    switch(category) {
        case 'Data Analytics': return <FaChartBar className='text-6xl text-slate-300 dark:text-gray-700 mb-2 group-hover:text-[#E79418] transition-colors' />;
        case 'Python': return <FaPython className='text-6xl text-slate-300 dark:text-gray-700 mb-2 group-hover:text-[#E79418] transition-colors' />;
        case 'Web Development': return <FaCode className='text-6xl text-slate-300 dark:text-gray-700 mb-2 group-hover:text-[#E79418] transition-colors' />;
        default: return <FaCubes className='text-6xl text-slate-300 dark:text-gray-700 mb-2 group-hover:text-[#E79418] transition-colors' />;
    }
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.category === 'Data Analytics' && b.category !== 'Data Analytics') return -1;
    if (a.category !== 'Data Analytics' && b.category === 'Data Analytics') return 1;
    return 0;
  });

  const filteredProjects = activeFilter === 'All' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.category === activeFilter);

  return (
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen transition-colors duration-700 font-sans selection:bg-[#E79418] selection:text-white flex flex-col'>
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto w-full'>
        
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16'>
          <div>
            <div data-aos='fade-up' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-sm mb-6'>
              <span className='w-2 h-2 rounded-full bg-[#E79418] animate-pulse'></span>
              <span className='text-xs font-bold tracking-[2px] text-slate-600 dark:text-slate-400'>PORTFOLIO</span>
            </div>
            <h1 data-aos='fade-up' data-aos-delay='100' className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight'>
              Projects <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>.</span>
            </h1>
          </div>
          <Link to='/' data-aos='fade-left' data-aos-delay='200' className='text-slate-500 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] flex items-center gap-2 font-bold tracking-[2px] transition-colors uppercase text-sm mb-2'>
            <FaArrowLeft /> BACK TO HOME
          </Link>
        </div>

          <div data-aos='fade-up' data-aos-delay='200' className='flex flex-wrap items-center gap-4 mb-16'>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-[1px] transition-all duration-300 border-2 ${
                  activeFilter === cat 
                    ? 'bg-[#E79418] border-[#E79418] text-white shadow-[0_0_15px_rgba(231,148,24,0.4)] scale-105'
                    : 'bg-transparent border-slate-300 dark:border-gray-700 text-slate-600 dark:text-slate-400 hover:border-[#E79418] hover:text-[#E79418] dark:hover:border-[#E79418] dark:hover:text-[#E79418]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                data-aos='fade-up' 
                data-aos-delay={(index % 3) * 100} 
                data-aos-once='false'
                className='group relative bg-white dark:bg-[#151515] rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-800 hover:border-[#E79418] dark:hover:border-[#E79418] shadow-sm hover:shadow-[0_0_30px_rgba(231,148,24,0.15)] transition-all duration-500 hover:-translate-y-3 flex flex-col'
              >
                <div className='w-full h-52 bg-slate-100 dark:bg-[#111111] overflow-hidden relative border-b border-slate-200 dark:border-gray-800'>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100' />
                  ) : (
                    <div className='w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#111111] dark:to-[#1a1a1a]'>
                      {getCategoryIcon(project.category)}
                    </div>
                  )}
                  <div className='absolute top-4 left-4 bg-slate-900/80 dark:bg-black/60 backdrop-blur-md border border-[#E79418]/50 text-[#E79418] text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[2px] shadow-lg'>
                    {project.category.toUpperCase()}
                  </div>
                </div>
                
                <div className='p-8 flex flex-col flex-grow'>
                  <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#E79418] transition-colors leading-tight'>
                    {project.title}
                  </h2>
                  <p className='text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium tracking-wide flex-grow leading-relaxed'>
                    {project.description}
                  </p>
                  <p className='text-xs font-bold tracking-[1px] text-[#E79418] mb-8'>{project.tools}</p>
                  
                  <div className='flex items-center gap-4 mt-auto'>
                    {project.github && (
                      <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex-1 flex justify-center items-center gap-2 text-xs font-bold bg-slate-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-slate-300 hover:bg-[#E79418] hover:text-white dark:hover:bg-[#E79418] dark:hover:text-white py-3 rounded-xl transition-all duration-300 shadow-sm relative z-20'>
                        <FaGithub className='text-lg' /> CODE
                      </a>
                    )}
                    
                    {project.live && (
                      <a href={project.live} target='_blank' rel='noopener noreferrer' className='flex-1 flex justify-center items-center gap-2 text-xs font-bold bg-[#E79418] text-white py-3 rounded-xl hover:shadow-[0_0_15px_rgba(231,148,24,0.5)] transition-all duration-300 scale-100 hover:scale-105 relative z-20'>
                        LIVE <FaExternalLinkAlt className='text-sm' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
      </main>
      <Footer />
    </div>
  )
}

export default Project
