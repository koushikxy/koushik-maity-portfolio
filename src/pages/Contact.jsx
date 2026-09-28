import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ksmaity21@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className='bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-screen font-sans selection:bg-[#E79418] selection:text-white flex flex-col'>
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 md:px-16 lg:px-40 max-w-[1920px] mx-auto w-full'>
        
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20'>
          <div>
            <div data-aos='fade-up' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151515] border border-slate-200 dark:border-gray-800 shadow-sm mb-6'>
              <span className='w-2 h-2 rounded-full bg-[#E79418] animate-pulse'></span>
              <span className='text-xs font-bold tracking-[2px] text-slate-600 dark:text-slate-400'>LET'S CONNECT</span>
            </div>
            <h1 data-aos='fade-up' data-aos-delay='100' className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight'>
              Contact <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E79418] via-yellow-400 to-[#E79418] animate-gradient-x'>Me.</span>
            </h1>
          </div>
          <Link to='/' data-aos='fade-left' data-aos-delay='200' className='text-slate-500 dark:text-slate-400 hover:text-[#E79418] dark:hover:text-[#E79418] flex items-center gap-2 font-bold tracking-[2px] transition-colors uppercase text-sm'>
            <FaArrowLeft /> BACK TO HOME
          </Link>
        </div>

        <div className='flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 max-w-6xl mx-auto'>
          
          {/* Contact Info (Left Side) */}
          <div data-aos='fade-right' data-aos-delay='100' className='lg:w-5/12 flex flex-col gap-10'>
            <div>
              <h2 className='text-slate-900 dark:text-white text-3xl md:text-4xl font-extrabold tracking-wide mb-6'>Let's build something <span className='text-[#E79418]'>great.</span></h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium'>
                I'm currently open to new opportunities, collaborations, and data challenges. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className='flex flex-col gap-6 mt-4'>
              <a href='mailto:ksmaity21@gmail.com' className='group flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-[#151515] border border-transparent hover:border-slate-200 dark:hover:border-gray-800 transition-all duration-300'>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-[#E79418]/10 flex items-center justify-center group-hover:bg-[#E79418] transition-colors duration-300'>
                  <FaEnvelope className='text-2xl text-[#E79418] group-hover:text-white' />
                </div>
                <div>
                  <p className='text-xs font-bold tracking-[2px] text-slate-500 mb-1 uppercase'>Email</p>
                  <p className='text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#E79418] transition-colors'>ksmaity21@gmail.com</p>
                </div>
              </a>

              <a href='https://linkedin.com/in/koushik-maity' target='_blank' rel='noreferrer' className='group flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-[#151515] border border-transparent hover:border-slate-200 dark:hover:border-gray-800 transition-all duration-300'>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300'>
                  <FaLinkedin className='text-2xl text-blue-500 group-hover:text-white' />
                </div>
                <div>
                  <p className='text-xs font-bold tracking-[2px] text-slate-500 mb-1 uppercase'>Network</p>
                  <p className='text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors'>LinkedIn</p>
                </div>
              </a>

              <a href='https://github.com/koushikxy' target='_blank' rel='noreferrer' className='group flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-[#151515] border border-transparent hover:border-slate-200 dark:hover:border-gray-800 transition-all duration-300'>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300'>
                  <FaGithub className='text-2xl text-slate-700 dark:text-slate-300 group-hover:text-white dark:group-hover:text-slate-900' />
                </div>
                <div>
                  <p className='text-xs font-bold tracking-[2px] text-slate-500 mb-1 uppercase'>Code</p>
                  <p className='text-lg font-bold text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors'>GitHub</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div data-aos='fade-up' data-aos-delay='200' className='lg:w-7/12'>
            <div className='relative bg-white dark:bg-[#151515] p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 shadow-xl overflow-hidden group'>
              {/* Background ambient glow */}
              <div className='absolute right-0 top-0 w-64 h-64 bg-[#E79418]/5 blur-[80px] rounded-full pointer-events-none'></div>

              <form className='flex flex-col gap-8 relative z-10' onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-3 flex-1'>
                    <label className='text-xs font-bold tracking-[2px] text-slate-500 uppercase'>Your Name</label>
                    <input type='text' name='name' required className='bg-slate-50 dark:bg-[#1a1a1c] border-b-2 border-slate-200 dark:border-gray-800 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#E79418] dark:focus:border-[#E79418] transition-colors rounded-t-xl font-medium placeholder-slate-400 dark:placeholder-slate-600' placeholder='John Doe' />
                  </div>
                  <div className='flex flex-col gap-3 flex-1'>
                    <label className='text-xs font-bold tracking-[2px] text-slate-500 uppercase'>Your Email</label>
                    <input type='email' name='email' required className='bg-slate-50 dark:bg-[#1a1a1c] border-b-2 border-slate-200 dark:border-gray-800 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#E79418] dark:focus:border-[#E79418] transition-colors rounded-t-xl font-medium placeholder-slate-400 dark:placeholder-slate-600' placeholder='john@company.com' />
                  </div>
                </div>

                <div className='flex flex-col gap-3'>
                  <label className='text-xs font-bold tracking-[2px] text-slate-500 uppercase'>Your Message</label>
                  <textarea name='message' required rows='6' className='bg-slate-50 dark:bg-[#1a1a1c] border-b-2 border-slate-200 dark:border-gray-800 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#E79418] dark:focus:border-[#E79418] transition-colors rounded-t-xl font-medium resize-none placeholder-slate-400 dark:placeholder-slate-600' placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button type='submit' disabled={status === 'sending'} className='group mt-4 bg-[#E79418] text-white font-bold tracking-[2px] py-5 rounded-xl hover:shadow-[0_0_30px_rgba(231,148,24,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                  <FaPaperPlane className={status === 'sending' ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
                </button>

                {status === 'success' && (
                  <div className='bg-green-500/10 border border-green-500/30 p-4 rounded-xl text-green-500 font-medium text-center text-sm'>
                    Message transmitted successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className='bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-500 font-medium text-center text-sm'>
                    System error. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact
