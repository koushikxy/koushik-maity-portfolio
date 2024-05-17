import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Typewriter from 'typewriter-effect'

import { FaLinkedin, FaGithub, FaHackerrank, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


import koushik from '../img/koushik.JPG'

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-[#1D1D1F] w-full h-full'>
        <div className='lg:pt-52 lg:px-40 lg:pb-20 md:pt-40 md:px-18 md:pb-12 pt-28 px-6 pb-14 text-center'>
          <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='flex items-center justify-center'><h1 className='text-white font-semibold md:text-5xl text-2xl tracking-[2px] mr-2'><span className=' hover:text-purple-500'>I'M</span> <span className='hover:text-[#0F0FD0]'>A </span></h1>
            <h1 data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='text-[#E79418] font-semibold md:text-5xl text-2xl tracking-[2px]'><Typewriter
              options={{
                strings: ['WEB DEVELOPER', 'UI & UX DESIGNER', 'DATA ANALYST'],
                autoStart: true,
                loop: true,
                cursor: '>'

              }}
            />
            </h1>
          </div>
          <p data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='text-slate-300 md:text-base text-sm tracking-[1px] md:pt-8 mt-2'>At XIM University, I'm now pursuing a Bachelor degree in Computer Science and Engineering. As a computer enthusiast, I've always been interested in the limitless opportunities that technology may provide to improve the world.</p>
          <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='md:mt-14 mt-8 flex justify-center'>
            <button className='border-2 md:text-base text-[10px] border-white rounded-md p-3 text-white font-medium tracking-[1.5px] hover:bg-white hover:text-black mr-2 '><Link target='_blank' to='https://drive.google.com/file/d/1Gx2J29XwALpWlcKkCaq7At1QltQd_jlH/view?usp=sharing'>DOWNLOAD RESUME</Link></button>
            <button className='border-2 md:text-base text-[10px] border-white rounded-md py-3 px-8 text-white font-medium tracking-[1.5px] hover:bg-white hover:text-black ml-2'><Link target='_blank' to='mailto:ksmaity21@gmail.com'>CONTACT ME</Link></button>
          </div>
          <img data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className=' md:mt-14 mt-8 rounded-lg border-white border-2 hover:border-[#E79418] ' src={koushik} alt="koushik" />
          <h1 data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='text-white font-semibold tracking-[1.5px] md:mt-9 mt-5 md:text-5xl text-2xl'><span className='hover:text-[#D218E7]'>MY </span><span className='hover:text-[#DD2B66]'>NAME </span><span className='hover:text-[#2BDD79]'>IS </span><span className='text-[#E79418]'>KOUSHIK MAITY</span></h1>
          <p data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='text-slate-300 md:mt-9 mt-5 md:text-base text-xs tracking-[1px]'>I've become familiar with several programming languages over my academic career, including Python, Java, C, and C++. Through several projects, I have also developed real software development experience. Along with honing my technical talents, these experiences have also taught me the value of teamwork, communication, and problem-solving.<br /><br />

            I have engaged in a variety of extracurricular activities outside of the classroom, such as volunteering at NSS and planning activities for college festivals. These activities have allowed me to grow as a person and have given me valuable life lessons in leadership, teamwork, and time management.<br /><br />

            I am eager for the prospects that will present themselves as my undergraduate studies draw to a close. To use my abilities to create creative solutions that have a positive impact on society, I want to land a difficult job in the software development industry.I appreciate you taking the time to read about me, and I look forward to speaking with industry experts.
          </p>
          <div className='border-2 border-white hover:border-[#E79418] md:mt-16 mt-8 md:p-9 p-4 rounded-lg flex justify-center' data-aos='fade-up' data-aos-delay='100' data-aos-once='false'>
            <Link to='https://www.linkedin.com/in/koushikxy/' target='_blank' ><FaLinkedin className='text-white md:mr-14 mr-8 md:text-4xl hover:text-blue-500' /></Link>
            <Link to='https://github.com/koushikxy' target='_blank'><FaGithub className='text-white md:mr-14 mr-8 md:text-4xl hover:text-black hover:text-black' /></Link>
            <Link to='www.hackerrank.com/koushikxy/' target='_blank'><FaHackerrank className='text-white md:mr-14 mr-8 md:text-4xl hover:text-green-500' /></Link>
            <Link to='https://www.instagram.com/koushik.xy/' target='_blank'><FaInstagram className='text-white md:mr-14 mr-8 md:text-4xl hover:text-purple-500' /></Link>
            <Link to='https://www.twitter.com/koushik_xy' target='_blank'><FaTwitter className='text-white md:mr-14 mr-8 md:text-4xl hover:text-blue-800' /></Link>
            <Link to='https://www.youtube.com/channel/UCcVZGJwlwM5jR4KYDBKEYNA' target='_blank'><FaYoutube className='text-white md:mr-14 md:text-4xl hover:text-red-600' /></Link>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Home