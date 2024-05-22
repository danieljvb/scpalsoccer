import React from 'react'
import { motion } from "framer-motion";

const Volunteer = () => {

  return (
    
    <div className='bg-white text-black object-center py-10 px-8'>
      
        <motion.div 
            initial={{ opacity: 0.5 , y:-40}}
            animate={{ opacity: 1 ,
                        y: 0}}>
                            
            <div className='py-10'>
                <div className=' px-5'>
                    <h2 className='md:text-7x1 underline underline-offset-8 decoration-4 text-right py-10 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>Volunteer with SC PAL Soccer!</h2>
                    <h2 className='md:text-7x1 decoration-4 text-left py-10 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>HOW TO VOLUNTEER!</h2>
                    <p className="text-right text-2xl mb-6 leading-loose">
                        We are a 100% volunteer run organization, we cannot exist without the help of everyone!  If you are interested in volunteering in any capacity, from coach to board member to just helping out as needed, please email us at scpalsoccer@gmail.com and we will be in touch!!</p>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className=' px-5'>
                     <h2 className='md:text-7x1 decoration-4 text-left py-5 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>FALL 2024 VOLUNTEER INFORMATION</h2>
                    <p className="text-right text-2xl mb-6 leading-loose">
                    To register as an assistant coach or Team Parent please click on the link below to be taken to our volunteer application form.  After your form has been received you will be sent information on the next steps.</p>
                </div>
                
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
        
        </motion.div>

        
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

export default Volunteer