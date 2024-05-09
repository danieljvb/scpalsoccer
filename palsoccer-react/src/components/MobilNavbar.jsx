import React from 'react'
import logo from '../assets/logo.png';

const MobilNavbar = ({setIsMenuOpen}) => {
  return (
    <div className='w-screen fixed top-0 z-20'>
        <div className='w-1/2 h-screen flex flex-col p-8 bg-black-gradient sidebar'>                    
            <img src={logo} alt="logosc" className="h-11 w-auto object-contain" />
            <ul>
                <li className='hover:underline mb-5'>
                    <a  >Home</a>
                </li>
                <li className='mb-5'>
                    <a className='menu-item'>Calendar</a>
                </li>
                <li className='mb-5'>
                    <a className='menu-item'>About Us</a>
                </li>
                <li className="hover:before:scale-x-100 hover:before:origin-left text-4xl relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-red-500 before:absolute before:left-0 before:bottom-0 ">
                <a href="#" >
                    Hover me
                </a>
                </li>
            </ul>
        </div>
        <div onClick={() => {
            setIsMenuOpen(false)
        }} className='w-screen h-screen bg-overlayBg fixed top-0 -z-10'/>
    </div>
  )
}

export default MobilNavbar