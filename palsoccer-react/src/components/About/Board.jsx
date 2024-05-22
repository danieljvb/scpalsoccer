import React from 'react'
import { motion } from "framer-motion";

const Board = () => {
  return (
    <div className='text-black py-10'>
      <div className='py-10'>
        <div className=' px-5'>
          <h2 className='md:text-7x1 underline underline-offset-8 decoration-4 text-right py-10 text-4xl font-bold text-sky-500 mb-6 leading-relaxed'>Board Santa Clara PAL Soccer</h2>
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
            <div className="bg-white h-89 w-full justify-center mb-6 pl-8 px-10">                   
                          
            <table className="table-auto w-full text-center text-xl text-gray-800">
                <thead>
                    <tr>
                    <th>2022-2023 Board</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td className='py-3'>President </td>
                    
                    <td className='text-left'>Mike</td>
                    </tr>
                    <tr>
                    <td className='py-3'>Vice President</td>
                    <td className='text-left'>1972</td>
                    </tr>
                    <tr>
                    <td className='py-3'>Player Agents</td>
                    <td className='text-left'>1975</td>
                    </tr>
                    <tr>
                    <td className='py-3'>Player and Coach Development</td>
                    <td className='text-left'>1975</td>
                    </tr>
                    <tr>
                    <td className='py-3'>Special Events and Communications</td>
                    <td className='text-left'>1975</td>
                    </tr>
                    <tr>
                    <td className='py-3'>Volunteer Coordinator</td>
                    <td className='text-left'>1975</td>
                    </tr>
                    <tr>
                    <td className='py-3'>Uniform Coordinator</td>
                    <td className='text-left'>1975</td>
                    </tr>
                </tbody>
                </table>
            </div></motion.div>
        </div>
    </div>
    
  )
}

export default Board