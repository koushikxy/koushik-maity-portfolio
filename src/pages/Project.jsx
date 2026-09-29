import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaChartBar, FaCode, FaPython, FaCubes } from 'react-icons/fa'

import apnafashion from '../projects_img/apnafashion.png'
import pdftoword from '../projects_img/pdf to word converter.png'
import wordandcharcounter from '../projects_img/word and character counter.png'
import qrcodescanner from '../projects_img/QR code Scanner.png'
import qrcodegenerator from '../projects_img/QR code Generator.png'

const projects = [
  {
    title: 'Credit Card Financial Dashboard',
    description: 'Comprehensive dashboard using Power BI & SQL providing real-time insights into revenue and customer transactions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/Credit-Card-Financial-Dashboard',
    live: null
  },
  {
    title: 'Flight Ticket Sell Analysis',
    description: 'In-depth analysis of flight ticket sales data to uncover purchasing trends and metrics using Excel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/Flight-Ticket-Sell-Analysis',
    live: null
  },
  {
    title: 'ApnaFashion.in',
    description: 'Ongoing e-commerce frontend project built using Figma, React.js and Tailwind CSS.',
    image: apnafashion,
    category: 'Web Development',
    github: 'https://github.com/koushikxy/apnafashion.in',
    live: 'https://apnafashion.netlify.app'
  },
  {
    title: 'Hero Cycles Pricing Tool',
    description: 'Cycle pricing tool for Hero Cycles — select parts, pick a date, get the total price broken down by component.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=800',
    category: 'Web Development',
    github: 'https://github.com/koushikxy/hero-cycles-pricing',
    live: null
  },
  {
    title: 'PDF to WORD Converter',
    description: 'Web-based tool designed to convert PDF documents into editable Word files using HTML, CSS and PHP.',
    image: pdftoword,
    category: 'Other',
    github: 'https://github.com/koushikxy/CodeClause-PDF-to-WORD-Converter',
    live: null
  },
  {
    title: 'Blood Bank System',
    description: 'Blood bank repository responsible for collecting, processing, and storing blood products.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    category: 'Other',
    github: 'https://github.com/koushikxy/Bloodstock-Depot-Blood-Bank-',
  },
  {
    title: 'Word and Character Counter',
    description: 'A handy utility to instantly count words and characters in your text.',
    image: wordandcharcounter,
    category: 'Web Development',
    github: null,
    live: null
  },
  {
    title: 'QR Code Scanner',
    description: 'A fast and reliable QR code scanner built for the web.',
    image: qrcodescanner,
    category: 'Web Development',
    github: null,
    live: null
  },
  {
    title: 'QR Code Generator',
    description: 'Instantly generate scannable QR codes for links and text.',
    image: qrcodegenerator,
    category: 'Web Development',
    github: null,
    live: null
  },
  {
    title: `Hospital-Management-System`,
    description: `This is a Hospital Management System using MySQL in terminal.`,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Other',
    github: 'https://github.com/koushikxy/Hospital-Management-System-using-MySQL',
    live: null
  },
  {
    title: `IPL Analysis`,
    description: `This project analyzes Indian Premier League (IPL) data from 2008 to 2020 using Pandas, NumPy, Matplotlib, and Seaborn.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/IPL_Analysis',
    live: null
  },
  {
    title: `Messaging App`,
    description: `Capstone project for a messaging application.`,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Other',
    github: 'https://github.com/koushikxy/Messaging_app',
    live: null
  },
  {
    title: `Milestone-Based Crowdfunding`,
    description: `Crowdfunding smart contract using Solidity.`,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    category: 'Other',
    github: 'https://github.com/koushikxy/Milestone-Based-Crowdfunding-using-solidity',
    live: null
  },
  {
    title: `Project Management Dashboard`,
    description: `An Excel-based tool designed to help teams manage and track the progress of multiple projects efficiently.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/Project_Management_Dashboard',
    live: null
  },
  {
    title: `Resume Analyzer`,
    description: `Automated Resume Analyzer using Python & NLP. Extracts skills, experience & education info for recruiters.`,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    category: 'Python',
    github: 'https://github.com/koushikxy/Resume-Analyzer',
    live: null
  },
  {
    title: `Sales Dashboard`,
    description: `Analysis and visualization of sales data, with a focus on displaying key sales figures through Excel charts.`,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/Sales_Dashbaord',
    live: null
  },
  {
    title: `SynChronize-XIM`,
    description: `Website made for XIM University's Testfest event.`,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    category: 'Web Development',
    github: 'https://github.com/koushikxy/SynChronize-XIM',
    live: null
  },
  {
    title: `Voting System`,
    description: `A digital voting system application.`,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=800',
    category: 'Web Development',
    github: 'https://github.com/koushikxy/voting_system',
    live: null
  },
  {
    title: `YouTube Analysis`,
    description: `Python script for analyzing YouTube comments, sentiment analysis, word clouds, and emoji frequencies.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/Youtube_Analysis',
    live: null
  },
  {
    title: `Zamp Invoice Processor`,
    description: `Invoice processing tool.`,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Other',
    github: 'https://github.com/koushikxy/zamp-invoice-processor',
    live: null
  },
  {
    title: `Zomato Analysis`,
    description: `Analyzes Zomato restaurant data from Bengaluru using Pandas, NumPy, Matplotlib, and SQLite.`,
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analytics',
    github: 'https://github.com/koushikxy/Zomato_Analysis',
    live: null
  }
];

const categories = ['All', 'Data Analytics', 'Web Development', 'Python', 'Other'];

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
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen font-sans selection:bg-[#E79418] selection:text-white flex flex-col'>
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto w-full'>
        
        {/* Header Section */}
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

          {/* Category Filters */}
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

          {/* Projects Grid */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                data-aos='fade-up' 
                data-aos-delay={(index % 3) * 100} 
                data-aos-once='false'
                className='group relative bg-white dark:bg-[#151515] rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-800 hover:border-[#E79418] dark:hover:border-[#E79418] shadow-sm hover:shadow-[0_0_30px_rgba(231,148,24,0.15)] transition-all duration-500 hover:-translate-y-3 flex flex-col'
              >
                {/* Image / Fallback container */}
                <div className='w-full h-52 bg-slate-100 dark:bg-[#111111] overflow-hidden relative border-b border-slate-200 dark:border-gray-800'>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100' />
                  ) : (
                    <div className='w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#111111] dark:to-[#1a1a1a]'>
                      {getCategoryIcon(project.category)}
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className='absolute top-4 left-4 bg-slate-900/80 dark:bg-black/60 backdrop-blur-md border border-[#E79418]/50 text-[#E79418] text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[2px] shadow-lg'>
                    {project.category.toUpperCase()}
                  </div>
                </div>
                
                {/* Content container */}
                <div className='p-8 flex flex-col flex-grow'>
                  <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#E79418] transition-colors leading-tight'>
                    {project.title}
                  </h2>
                  <p className='text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium tracking-wide flex-grow leading-relaxed'>
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
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