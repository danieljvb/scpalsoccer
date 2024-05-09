import React from 'react'
import { motion } from "framer-motion";

const Board = () => {
  return (
    <div className='text-black py-10'>
      <div className='py-10'>
        <div className=' px-5'>
          <h2 className='md:text-7x1 underline underline-offset-8 decoration-4 text-center py-10 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>Board Santa Clara PAL Soccer</h2>
          <p className="text-right text-2xl mb-6 leading-loose">The Santa Clara PAL Softball League is a 100% volunteer run organization.  The Board members below volunteer their time to ensure that our players have the best experience possible while out on the field.</p>
        </div>
        <div className=' px-5'>
            <p className="text-right text-2xl mb-6 leading-loose">If you are interested in joining the Board or volunteering in any capacity, please email us at scpalsoccer@gmail.com</p>
        </div>
      </div>
      
      
        <div className=' py-10 ' >
          <motion.div 
            initial={{ opacity: 0.5 , y:-40}}
            animate={{ opacity: 1 ,
                        y: 0}}>
            <div className="bg-white h-89 w-full justify-center">                   
                          
              <div className=' px-10 md:absolute bg-white bg-opacity-60 py-20  '>
                <h2 className='md:text-2xl py-5 text-3xl font-bold text-sky-800 mb-6 leading-relaxed overline '>Our Mission</h2>
                <p className="text-center text-xl text-gray-600	">The goal of SCPAL is to provide sports activities at a low cost to all 
                  children. Our players will learn to be part of a team, gain self-confidence, and become leaders in their sport and in life.
                  Promoting a respect for the game of soccer through fair play and sportsmanship.
                  The Community looks forward to annual fund-raising events, which benefit these programs.</p>
              </div>
            </div></motion.div>
        </div>
    </div>
    
  )
}

export default Board