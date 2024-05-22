import React from 'react'
import { motion } from "framer-motion";

const AboutSCPAL = () => {

  return (
    
    <div className='bg-white text-black object-center py-10 px-8'>
      
        <motion.div 
            initial={{ opacity: 0.5 , y:-40}}
            animate={{ opacity: 1 ,
                        y: 0}}>
            <div className="bg-white text-center mb-6 pl-8 px-10 py-10">                   
            <img src="/src/assets/PAL-Logoforweb.jpg" className='py-10 md:rounded-[10px] md:h-200 h-100'></img> 
            </div></motion.div>

        
      <div className='py-10'>
        <div className=' px-5'>
          <h2 className='md:text-7x1 underline underline-offset-8 decoration-4 text-right py-10 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>ABOUT SANTA CLARA POLICE ACTIVITIES LEAGUE</h2>
          <p className="text-right text-2xl mb-6 leading-loose">The Santa Clara Police Activities League (SCPAL) was founded by Former Chief of Police Frank Sapena in 1970. The goal was to bring Police, neighborhood volunteers, and kids together in a positive setting. SCPAL is a nonprofit organization dedicated to teaching our youth the values and rewards that can be accomplished through athletics: self-determination, self-belief , goal-setting, teamwork, and respect for others.

Competent community volunteers lead SCPAL programs. The programs include Soccer, Boxing, Bicycle Moto-Cross (BMX), Girl’s Softball, Judo, Wrestling, Flag Football, Fishing and Police Explorers.

To make donations or to get more information, please call the SCPAL Office Monday through Friday at (408) 615-4879, or write us at 601 El Camino Real, Santa Clara, CA 95050 (inside of the Santa Clara Police Department). Santa Clara P.A.L. is a nonprofit organization.</p>
        </div>
        
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className=' px-5'>
            <h2 className='text-3xl '>LOCATION & OFFICE HOURS:</h2>
            <p className="text-left text-2xl mb-6 leading-loose py-10">Santa Clara Police Administration Building
                601 El Camino Real
                Santa Clara, CA 95050</p>
            <h3 className='text-2xl py-5 '>Office #: (408) 615-4879</h3>
            <h3 className='text-2xl py-10'>www.santaclarapal.org</h3>
            
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h2 className='text-3xl py-1'>SANTA CLARA POLICE ACTIVITIES LEAGUE:</h2>
            <h3 className='text-2xl py-5'>CHIEF OF POLICE - Pat Nikolai</h3>
            <h3 className='text-2xl py-10'>PAL ADMINISTRATION - Catalina Rangel</h3>
        </div>
      </div>
      
      
        <div className=' py-10 ' >
          <motion.div 
            initial={{ opacity: 0.5 , y:-40}}
            animate={{ opacity: 1 ,
                        y: 0}}>
            <div className="bg-white h-89 w-full justify-center mb-6 pl-8 px-10">                   
                          
            </div></motion.div>
        </div>
    </div>
    
  )
}

export default AboutSCPAL