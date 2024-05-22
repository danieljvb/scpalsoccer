import React from 'react'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus' 
import AboutSCPAL from './pages/AboutSCPALpg' 
import BoardMember from './pages/BoardMember' 
import Leagueinfo from './pages/Leagueinfo'
import Signup from './pages/Signup'
import SoccerFields from './pages/SoccerFields'
import Volunteer from './pages/Volunteerpg'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='bg-background'>
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/aboutsc" element={<AboutSCPAL />} />
          <Route path="/board" element={<BoardMember />} />
          <Route path="/leagueinfo" element={<Leagueinfo />} />
          <Route path="/signup" element={<Signup />} />         
          <Route path="/soccerfields" element={<SoccerFields />} />    
          <Route path="/volunteer" element={<Volunteer />} />  
        </Routes>
      </BrowserRouter>
      
    </div>

  )
}

export default App