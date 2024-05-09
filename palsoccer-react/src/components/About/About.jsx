import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='text-black py-10'>
      <div className='py-10'>
        <div className=' px-5'>
          <h2 className='md:text-7x1 underline underline-offset-8 decoration-4 text-center py-10 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>About Santa Clara PAL Soccer</h2>
          <p className="text-right text-2xl mb-6 leading-loose">The Santa Clara Police Activities League (SCPAL) was founded by Former Chief of Police Frank Sapena in 1970. 
          The goal was to bring Police, neighborhood volunteers, and kids together in a positive setting. 
          SCPAL is a nonprofit organization dedicated to teaching our youth the values and rewards that can be 
          accomplished through athletics: self-determination, self-belief , goal-setting, teamwork, and respect for others.</p>
        </div>
      </div>
      
      
        <div className='relative py-10 relative' >
          <motion.div 
            initial={{ opacity: 0.5 , y:-40}}
            animate={{ opacity: 1 ,
                        y: 0}}>
            <div className="bg-white h-89 w-full justify-center">                   
                          
              <div className=' px-10 md:absolute relative bg-white bg-opacity-60 py-20  '>
                <h2 className='md:text-2xl py-5 text-3xl font-bold text-sky-800 mb-6 leading-relaxed overline '>Our Mission</h2>
                <p className="text-center text-xl text-gray-600	">The goal of SCPAL is to provide sports activities at a low cost to all 
                  children. Our players will learn to be part of a team, gain self-confidence, and become leaders in their sport and in life.
                  Promoting a respect for the game of soccer through fair play and sportsmanship.
                  The Community looks forward to annual fund-raising events, which benefit these programs.</p>
              </div>
                      <img src="/src/assets/aboutuspic.jpg" className='md:rounded-[10px] md:h-200 h-100'></img> 
        </div></motion.div>
        </div>
    </div>
    
  )
}

export default About