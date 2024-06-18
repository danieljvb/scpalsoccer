import React,{ useState }  from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero';
import { motion } from "framer-motion";
import Modal from "../components/Modal";

const Home = () => {
  const [open, setOpen] = useState(false)
  function SubmitMsn(e){
    const formEle = document.querySelector("form")
    e.preventDefault()
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbzIzRONmjRh_DyFWlKYO96miCCEf2akBriR41ICRfHzrgNPXw4Nk8uB-K5Wv8MgYk50Ew/exec",{
      method:"POST",
      body: formData}
    )
  }
  return (
    <>
      <Navbar />
      <Hero />
              
        <div className=''>
          <motion.div 
            initial={{ opacity: 0.5 , y:-50}}
            animate={{ opacity: 1 ,
                        y: 0}}>
            <div className="bg-white py-10 md:py-10 h-89 w-full flex justify-center">            
                      <img src="/src/assets/bgsoccerfieldb2.jpg" className='py-9 md:py-10'></img>        
                          
                  </div></motion.div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-1 items-start '>
            <div className='col-span-2 md:px-10 p-4 max-w-screen-2x1 '>
              <div className=' px-5'>
                <h2 className='md:text-7x1 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>SANTA CLARA PAL SOCCER</h2>
                <p className="text-right text-2xl ">Santa Clara PAL Soccer is the home for recreational soccer (futbol) in Santa Clara!  
                  We offer programs for boys and girls 4 to 15 years old, providing opportunities to learn leadership skills, gain confidence, experience teamwork, and to foster a love
                    for the game of soccer.</p>
              </div>

              <div className='md:px-10 p-4 max-w-screen-2x1 mx-auto mt-20'>
                <div className='gradient_background rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9'>
                  <div className='flex flex-col md:flex-row justifu-between items-center gap-10'>
                      <h1 className='font-bold sz-double text-white'>2024 FALL REC REGISTRATION IS OPEN!</h1>
                      <button className='py-3 px-8 bg-white font-semibold text-black rounded hover:bg-sky-500 transition-all duration-300'>Click Here</button>
                      
                      </div>

                </div>
              </div>
              <div className='w-full lg:w-3/4 px-10 mt-10'>
                <div className='bg-sky-500 rounded-[10px] h-30 shadow-3x1 shadow-lg p-3 items-center flex justify-center items-center hover:translate-x-4 transition-all duration-300'>
                  <div>
                        <h5 className='text-white sz-double text-5x1 font-bold text-primary px-5 text-left mt-5'>UPCOMING EVENTS</h5>
                  </div>
                </div>
                <div className='bg-slate-200 h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                  <div className='flex '>
                        <h5 className='text-2x1 font-semibold text-primary px-5 text-left mt-5'>Regular season starts </h5>
                        <h5 className='text-2x1 font-semibold text-primary px-10 text-right mt-5'>Saturday 08/24/2024 </h5>
                  </div>
                </div>
                <div className='bg-white h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                  <div className='flex '>
                        <h5 className='text-2x1 font-semibold text-primary px-5 text-left mt-5'>Picture day </h5>
                        <h5 className='text-2x1 font-semibold text-primary px-10 text-right mt-5'>Saturday 09/21/2024</h5>
                  </div>
                </div>
                <div className='bg-slate-200 h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                  <div className='flex '>
                        <h5 className='text-2x1 font-semibold text-primary px-5 text-left mt-5'>Regular season ends </h5>
                        <h5 className='text-2x1 font-semibold text-primary px-10 text-right mt-5'>Saturday  11/02/2024</h5>
                  </div>
                </div>
                <div className='bg-white h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                  <div className='flex '>
                        <h5 className='text-2x1 font-semibold text-primary px-5 text-left mt-5'>End of season tournament </h5>
                        <h5 className='text-2x1 font-semibold text-primary px-10 text-right mt-5'>11/9/2024-11/10/2024</h5>
                  </div>
                </div>
              </div>
              
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className='px-10 py-10'>
                <form className="w-full max-w-sm">
                <label className="block mb-2 sz-double font-medium text-sky-500 dark:text-white">Subscribe for Email Updates</label>
                  <div className="flex items-center border-b border-sky-500 py-2">

                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email Address"/>
                    <button className="flex-shrink-0 bg-sky-500 hover:bg-teal-700 border-sky-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                      Sign Up
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-sky-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div > 
              <div className='gradient_background md:p-9 '>
                <div className='py-3'>
                    <h1 className='font-bold sz-double text-white'>FIELD STATUS</h1>
                    <h1 className='font-semibold text-white'>As of today - All Fields are OPEN!</h1>
                    
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className='py-3'>
                <button className='w-full py-3 px-8 bg-sky-500 font-semibold text-white font-bold rounded hover:bg-sky-500 transition-all duration-300' onClick={() => setOpen(true)}>EMAIL US!</button>
                    
              </div>
              <div className='py-3'>
                <button onClick={() => window.location = 'mailto:scpalsoccer@gmail.com'} className='w-full py-3 px-8 bg-sky-500 font-semibold text-white font-bold rounded hover:bg-sky-500 transition-all duration-300'>DONATE -</button>
                    
              </div>

            </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Send us a Message</h3>
            <div className='App'>
              <form className='form' onSubmit={(e)=>SubmitMsn(e)}>
                <input placeholder='Name' name='Name' type='text'></input>
                <input placeholder='Email' name='Email'type='email'/>
                <input placeholder='Message' name='Message' type='text'/>
                <input className='buttom' type='submit'/>

              </form>

            </div>
          </div>
          <div className="flex gap-4">
            
            <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <Footer/>
    </>
  )
}

export default Home