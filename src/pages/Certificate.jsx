import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import reactcert from '../certificate/Koushik Maity Reactjs.jpg'
import jscert from '../certificate/The Complete introduction to js_page-0001.jpg'
import sqlcert from '../certificate/Introduction to SQL programming_page-0001.jpg'
import csscert from '../certificate/css certificate_page-0001.jpg'
import pentopixelcert from '../certificate/pen to pixel.png'

const certificate = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#1D1D1F] w-full scroll-smooth'>
        <div className='lg:pt-52 lg:px-40 lg:pb-20 md:pt-40 md:px-18 md:pb-12 pt-36 px-6 pb-14'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <img className='hover:border-2 hover:border-[#E79418] rounded-md border-[#1D1D1F] border-2' src={reactcert} alt="react certificate" />
              <h1 className='font-semibold tracking-[1px] text-center text-2xl my-7 border-y-2 p-1 border-slate-300 text-[#E79418] hover:border-[#E79418]'>React JS</h1>
              <p className='text-center font-medium tracking-[1px]'>I am thrilled to announce that I have successfully completed the React.js course from Infosys! 🚀📚</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <img className='hover:border-2 hover:border-[#E79418] rounded-md border-[#1D1D1F] border-2' src={jscert} alt="react certificate" />
              <h1 className='font-semibold tracking-[1px] text-center text-2xl my-5 border-y-2 p-1 border-slate-300 text-[#E79418] hover:border-[#E79418]'>JavaScript</h1>
              <p className='text-center font-medium tracking-[1px]'>I wanted to let you all know that I just finished taking a JavaScript course on Udemy.</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <img className='hover:border-2 hover:border-[#E79418] rounded-md border-[#1D1D1F] border-2' src={sqlcert} alt="react certificate" />
              <h1 className='font-semibold tracking-[1px] text-center text-2xl my-5 border-y-2 p-1 border-slate-300 text-[#E79418] hover:border-[#E79418]'>MySQL</h1>
              <p className='text-center font-medium tracking-[1px]'>Finally! I completed the MySQL course from Udemy, I'm looking forward to use it in development.</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <img className='hover:border-2 hover:border-[#E79418] rounded-md border-[#1D1D1F] border-2' src={csscert} alt="react certificate" />
              <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 border-slate-300 text-[#E79418] hover:border-[#E79418]'>CSS</h1>
              <p className='text-center font-medium tracking-[1px]'>I've been learning for a year, but I'm unsure of my CSS skill level since I want to take a test to see how well I do.
For me, receiving my CSS certification from HackerRank has been a major accomplishment</p>

            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='m-2 border-2 border-slate-300 text-slate-300 hover:border-[#E79418] rounded-md p-2'>
              <img className='hover:border-2 hover:border-[#E79418] rounded-md border-[#1D1D1F] border-2' src={pentopixelcert} alt="react certificate" />
              <h1 className='font-semibold tracking-[1px] text-center text-2xl my-4 border-y-2 p-1 border-slate-300 text-[#E79418] hover:border-[#E79418]'>Pen To Pixel</h1>
              <p className='text-center font-medium tracking-[1px]'>I recently had the honour of participating in the PEN TO PIXEL event, that explored the realms of Artificial Intelligence/Machine Learning (AL/ML) and the Internet of Things (IoT).</p>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default certificate