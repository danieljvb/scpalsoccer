import React, { useState } from "react";

import logo from '../assets/logo.png';
import menuball from '../assets/menuball.png';
import btnclose from '../assets/btnclose.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className="fixed w-full z-10 bg-navbarcolor/95 text-dimWhite py-4">
      {/* desktop navigation section  */}
      <nav id="navbaractive"className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
            
          <NavLink to="/" className=" font-bold text-2xl">
            <img src={logo} alt="logosc" className="h-11 w-auto gap-10 object-contain space-x-11 " />
          </NavLink>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <NavLink
            to="/"
            className=" hover:text-sky-500 transition duration-200 ease-linear"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
          >
            <button onMouseOver={() => setIsOpen((prev) => !prev)} className="focus:bg-navbarcolor hover:text-sky-500 transition duration-200 ease-linear hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-sky-500 before:absolute before:left-0 before:bottom-0 ">
            About Us
            
            </button>
            
              {isOpen && (
                <div className="bg-navbarcolor absolute flex flex-col items-start rounded-lg p-3  ">
                  <NavLink
                    to="/board"
                    className=" hover:text-white transition duration-200 ease-linear font-bold flex w-full justify-between p-3 hover:bg-sky-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                  >
                    Board
                  </NavLink>
                  <NavLink
                    to="/aboutsc"
                    className=" hover:text-white transition duration-200 ease-linear font-bold flex w-full justify-between p-3 hover:bg-sky-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                  >
                    About Santa Clara PAL
                  </NavLink>
                  <NavLink
                    to="/soccerfields"
                    className=" hover:text-white transition duration-200 ease-linear font-bold flex w-full justify-between p-3 hover:bg-sky-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                  >
                    Locations
                  </NavLink>
              </div>
              )}
          </NavLink>
          <NavLink
            to="/leagueinfo"
            className=" hover:text-sky-500 transition duration-200 ease-linear"
          >
            League Info
          </NavLink>
          <NavLink
            to="/volunteer"
            className=" hover:text-sky-500 transition duration-200 ease-linear"
          >
            Volunteers
          </NavLink>
          <NavLink
            to="/signup"
            className="visibility: hidden hover:text-sky-500 transition duration-200 ease-linear"
          >
            Sign up
          </NavLink>
          <NavLink
            to="/soccerfields"
            className=" hover:text-sky-500 transition duration-200 ease-linear"
          >
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-navbarcolor p-4 w-full flex item-center justify-between font-bold text-lg rounded-lg tracking-wider active:border-white duration-300 active:text-white ">
            Soccer Fields
            
            </button>
          </NavLink>
            <div className="visibility: hidden ">
          <button className="visibility:hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
            Sign In
          </button></div>
        </div>
        <div className="md:hidden flex items-center">          
          {menu ? (
            <img src={btnclose} alt="btn-close"  onClick={handleChange}/> 
            ):( 
            <img src={menuball} alt="menuball" onClick={handleChange}/>
            )}
          
        </div>


      </nav>

      {/* responsive section  */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-navbarcolor text-white left-0 top-16 font-semibold text-xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300 `}
      >
        <NavLink
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </NavLink>
        <NavLink
          to="/leagueinfo"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          League Info
        </NavLink>
          <NavLink
            to="/volunteer"
            className=" hover:text-sky-500 transition duration-200 ease-linear"
          >
            Volunteers
          </NavLink>
          <NavLink
            to="/soccerfields"
            className=" hover:text-sky-500 transition duration-200 ease-linear"
          >
            Soccer Fields
          </NavLink>
        <NavLink
          to="/signup"
          className="visibility: hidden hover:text-primary transition duration-200 ease-linear"
        >
          Sign up!
        </NavLink>
        <div>
          <button className="visibility: hidden border-2 border-primary py-1 px-4 rounded-md">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;