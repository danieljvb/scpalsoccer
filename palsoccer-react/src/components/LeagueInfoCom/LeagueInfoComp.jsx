import React from 'react'
import AgeAccordian, { AgeAccordianItem } from './AgeAccordian';
import arrowdown from './assetsInfo/arrowdown.png';
import kickstickman from './assetsInfo/kickstickman.png';

const LeagueInfoComp = () => {
  return (
    <div className='text-black py-10'>
      <div className='pt-5'>
        <h2 className='md:text-7x1 underline underline-offset-8 decoration-4 text-center py-10 text-4xl font-bold text-sky-500 leading-relaxed'>Santa Clara PAL Soccer Information</h2>
      </div>
      <div className="py-1 ">
        
        <div className='w-full lg:w-3/4 px-10 mt-10 divide-y divide-slate-500'>
        
          <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8'>
                  <div className='bg-sky-500 rounded-[10px] h-30 shadow-3x1 shadow-lg p-3 items-center flex justify-center items-center hover:translate-x-2 transition-all duration-300'>
                    <div>
                          <img src={kickstickman} alt=''/>
                          <h5 className='text-white text-2xl font-semibold text-primary px-5 text-left mt-5'>PAL will provide a jersey, shorts, and socks for each player. Please indicate size needed when registering your player.</h5>
                    </div>
                  </div>
                  <div className='bg-slate-200  rounded-[10px] h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                    <div className='items-start '>
                          <img src={kickstickman} alt=''/>
                          <h5 className='text-xl font-semibold text-primary px-10 text-right mt-5'>Practice attire – comfortable athletic type clothes (shirts, sweats, socks), cleats, and shin guards</h5>
                    </div>
                  </div>
                  
                  <div className='bg-slate-200 rounded-[10px] h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                    <div className=' '>
                          <img src={kickstickman} alt=''/>
                          <h5 className='text-xl font-semibold text-primary px-10 text-right mt-5'>All participants play and practice</h5>
                    </div>
                  </div>
                  <div className='bg-white rounded-[10px] h-30 shadow-3x1 shadow-lg p-8 items-center flex justify-left items-left hover:translate-x-2 transition-all duration-300'>
                    <div className=' '>
                          <img src={kickstickman} alt=''/>
                          <h5 className='text-xl font-semibold text-primary px-10 text-right mt-5'>Teams will be created and practices will begin prior to 08/24 (Please keep an eye out for communication from Coaches regarding practices)</h5>
                    </div>
                  </div>
          </div>
        </div>
        
      </div>

      <div className=" container pt-5 px-10">
        <div className='grid md:grid-cols-3 gap-3'>
          <div className='shadow-3x1 shadow-lg'>
            <AgeAccordian className="max-w-lg">
              <AgeAccordianItem className="text-black bg-slate-200 rounded-[10px] sz-double text-5x1 font-bold text-primary px-5 mt-5 shadow-3x1 shadow-lg" value="1" trigger="KIDS U6 →">
                <div className='font-semibold text-gray-600 text-xl'>                  
                  <ul role="list" className="p-6 divide-y divide-slate-350">
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Ages - 6 years and under (as of January 1 of the season year)</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Current Birth Years - 2019 or 2020 </p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Practice Schedule - 1 or 2 Practice per week, around 60 minutes long</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Schedule - 1 Game per week on Saturday morning/early afternoon.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Duration - Four Quarters wuth 7.5 minute each.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Size 3 ball.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Locations - Central Park - U6</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Repeat of throw-in allowed once only.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">No offside penalties (except for camping at goal)</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Heading of the ball should not be taught nor will it be allowed in competition.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">NO SLIDE TACKLING!</p>
                        </div>
                      </li>
                  </ul>
                 
                </div>
              </AgeAccordianItem>
            </AgeAccordian>
          </div>
          <div className='shadow-3x1 shadow-lg'>
            <AgeAccordian className="max-w-lg">
              <AgeAccordianItem className="text-black rounded-[10px] sz-double text-5x1 font-bold text-primary px-5 mt-5 shadow-3x1 shadow-lg" value="1" trigger="KIDS U8 →">
                <div className='font-semibold text-gray-600 text-xl'>                  
                  <ul role="list" className="p-6 divide-y divide-slate-350">
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Ages - 7 years and under (as of January 1 of the season year)</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Current Birth Years - 2016 or 2017 </p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Practice Schedule - 1 or 2 Practice per week, around 60 minutes long</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Schedule - 1 Game per week on Saturday morning/early afternoon.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Duration - Four Quarters wuth 10 minute each.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Size 3 ball.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Locations - Central Park - U8</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Repeat of throw-in allowed once only.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">No offside penalties (except for camping at goal)</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Heading of the ball should not be taught nor will it be allowed in competition.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">NO SLIDE TACKLING!</p>
                        </div>
                      </li>
                  </ul>
                 
                </div>
          
                </AgeAccordianItem>
            </AgeAccordian>
          </div>
          
          <div className='shadow-3x1 shadow-lg'>
            <AgeAccordian className="max-w-lg">
              <AgeAccordianItem className="text-black rounded-[10px] sz-double text-5x1 font-bold text-primary px-5 mt-5 shadow-3x1 shadow-lg" value="1" trigger="KIDS U10 →">
                <div className='font-semibold text-gray-600 text-xl'>                  
                  <ul role="list" className="p-6 divide-y divide-slate-350">
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Ages - 9 years and under (as of January 1 of the season year)</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Current Birth Years - 2014 or 2015 </p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Practice Schedule - 1 or 2 Practice per week, around 60 minutes long</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Schedule - 1 Game per week on Saturday morning/early afternoon.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Duration - two 25 minutes halves.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Size 4 ball.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Game Locations - Central Park - U10</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Unlimited substitutions. Can be made.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">OFFSIDE rules apply</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">Heading of the ball should not be taught nor will it be allowed in competition.</p>
                        </div>
                      </li>
                      <li className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 overflow-hidden">
                          <p className="font-semibold text-gray-600 text-xl text-slate-900">NO SLIDE TACKLING!</p>
                        </div>
                      </li>
                  </ul>
                 
                </div>
              </AgeAccordianItem>
            </AgeAccordian>
          </div>
          </div>
        </div>
      </div>
    
    
  )
}

export default LeagueInfoComp