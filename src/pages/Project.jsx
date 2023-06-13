import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'



import portfolio from '../projects_img/Potfolio website.png'
import pdftoword from '../projects_img/pdf to word converter.png'
import wordandcharcounter from '../projects_img/word and character counter.png'
import qrcodescanner from '../projects_img/QR code Scanner.png'
import qrcodegenerator from '../projects_img/QR code Generator.png'

const project = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#1D1D1F] h-fit w-full scroll-smooth'>
        <div className='lg:pt-52 lg:px-40 lg:pb-20 md:pt-40 md:px-18 md:pb-12 pt-36 px-6 pb-14'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>

            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <div className='lg:h-[50vh] md:h-[40vh] h-[55vh]'>
                <img className='hover:border-2 hover:border-[#E79418] rounded-md' src={portfolio} alt="react certificate" />
                <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 text-[#E79418] hover:border-[#E79418]'>PORTFOLIO WEBSITE</h1>
                <p className='text-center font-medium tracking-[1px]'>My Portfolio website using Figma, React.js and Tailwind CSS</p>
              </div>
              <div className='flex justify-around mb-2'>
                <button className='text-slate-300 border-2 p-2  rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://github.com/koushikxy/koushikMaity'>SOURCE CODE</Link></button>
                <button className='text-slate-300 border-2 py-2 px-5 rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://koushikmaity.netlify.app/'>LIVE VIEW</Link></button>
              </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <div className='lg:h-[50vh] md:h-[40vh] h-[55vh]'>
                <img className='hover:border-2 hover:border-[#E79418] rounded-md' src={pdftoword} alt="react certificate" />
                <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 text-[#E79418] hover:border-[#E79418]'>PDF to WORD</h1>
                <p className='text-center font-medium tracking-[1px]'>Created a PDF to Word file converter as part of my internship at CodeClause! 🎉 This project allowed me to combine my skills in HTML, CSS, and PHP.</p>
              </div>
              <div className='flex justify-around mb-2'>
                <button className='text-slate-300 border-2 p-2  rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://github.com/koushikxy/CodeClause-PDF-to-WORD-Converter'>SOURCE CODE</Link></button>
                <button className='text-slate-300 border-2 py-2 px-5 rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://koushikxy.github.io/CodeClause-PDF-to-WORD-Converter/'>LIVE VIEW</Link></button>
              </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <div className='lg:h-[50vh] md:h-[40vh] h-[55vh]'>
                <img className='hover:border-2 hover:border-[#E79418] rounded-md' src={wordandcharcounter} alt="react certificate" />
                <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 text-[#E79418] hover:border-[#E79418]'>Word & Char Counter</h1>
                <p className='text-center font-medium tracking-[1px]'>The "Words and Characters Counter," a new web development project that I recently completed using HTML, CSS, and JavaScript.</p>
              </div>
              <div className='flex justify-around mb-2'>
                <button className='text-slate-300 border-2 p-2  rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://github.com/koushikxy/Words-and-Characters-counter'>SOURCE CODE</Link></button>
                <button className='text-slate-300 border-2 py-2 px-5 rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://koushikxy.github.io/Words-and-Characters-counter/'>LIVE VIEW</Link></button>
              </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <div className='lg:h-[50vh] md:h-[40vh] h-[55vh]'>
                <img className='hover:border-2 hover:border-[#E79418] rounded-md' src={qrcodescanner} alt="react certificate" />
                <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 text-[#E79418] hover:border-[#E79418]'>QR Code Scanner</h1>
                <p className='text-center font-medium tracking-[1px]'>This is a QR Code Scanner/Reader that Scan/Read QR Code.</p>
              </div>
              <div className='flex justify-around mb-2'>
                <button className='text-slate-300 border-2 p-2  rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://github.com/koushikxy/QR-Code-Scanner-Reader'>SOURCE CODE</Link></button>
                <button className='text-slate-300 border-2 py-2 px-5 rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://koushikxy.github.io/QR-Code-Scanner-Reader/'>LIVE VIEW</Link></button>
              </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <div className='lg:h-[50vh] md:h-[40vh] h-[55vh]'>
                <img className='hover:border-2 hover:border-[#E79418] rounded-md' src={qrcodegenerator} alt="react certificate" />
                <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 text-[#E79418] hover:border-[#E79418]'>QR Code Generator</h1>
                <p className='text-center font-medium tracking-[1px]'>This is a QR Code Generator that Generate QR Code with any kind of link and text.</p>
              </div>
              <div className='flex justify-around mb-2'>
                <button className='text-slate-300 border-2 p-2  rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://github.com/koushikxy/QR-Code-Generator'>SOURCE CODE</Link></button>
                <button className='text-slate-300 border-2 py-2 px-5 rounded-md font-medium text-sm tracking-[1px] hover:text-black hover:bg-white'><Link target='_blank' to='https://koushikxy.github.io/QR-Code-Generator/'>LIVE VIEW</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default project