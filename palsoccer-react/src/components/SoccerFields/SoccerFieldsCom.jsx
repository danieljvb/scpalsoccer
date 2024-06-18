import React from 'react'

const SoccerFieldsCom = () => {
  return (
    <div className='bg-black py-10 px-1 sm:px-10'>
      <div className='bg-white '>
        <div className='py-10 px-5'>
          <h2 className='py-10 md:text-7x1 underline underline-offset-8 decoration-4 text-center py-10 text-4xl font-bold text-sky-700 mb-6 leading-relaxed overline'>Where we play!</h2>
          
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-1 items-start px-5'>
                <div className='px-2'>
                    <h2 className='md:text-7x1 decoration-4 text-center py-10 text-4xl font-bold text-sky-500 mb-6'>Santa Clara Central Park</h2>
                    <div>
                        <img src="/src/assets/map1.jpg" className='md:rounded-[10px] md:h-200 h-100'></img> 
                    </div>
                    <h2 className='md:text-3x1 decoration-4 text-center py-10 text-xl text-gray-500 mb-6 px-3'>982 White Dr, Santa Clara, CA 95051</h2>
                    <h2 className='md:text-3x1 decoration-2 text-center text-xl text-gray-500 px-3'>Central Park is our primary practice and game location!  With 3 full size soccer fields, thousands of players have started their soccer careers here!</h2>
                                        
                </div >
                <div className='px-2'>
                    <h2 className='md:text-7x1 decoration-4 text-center py-10 text-4xl font-bold text-sky-500 mb-6'>Reed & Grant Sports Park</h2>
                    <div>
                        <img src="/src/assets/map2.jpg" className='md:rounded-[10px] md:h-200 h-100'></img> 
                    </div>
                    <h2 className='md:text-3x1 decoration-4 text-center py-10 text-xl text-gray-500 mb-6 px-3'>Reed St &, Grant St, Santa Clara, CA 95050</h2>

                </div>
                <div className='px-2'>
                    <h2 className='md:text-7x1 decoration-4 text-center py-10 text-4xl font-bold text-sky-500 mb-6'>Santa Clara Youth Soccer Park</h2>
                    <div>
                        <img src="/src/assets/map3.jpg" className='md:rounded-[10px] md:h-200 h-100'></img> 
                    </div>
                    <h2 className='md:text-3x1 decoration-4 text-center py-10 text-xl text-gray-500 mb-6 px-3'>5020 Stars and Stripes Dr, Santa Clara, CA 95054</h2>

                </div>
            </div>
          </div>
      </div>
      
    </div>
    
  )
}

export default SoccerFieldsCom