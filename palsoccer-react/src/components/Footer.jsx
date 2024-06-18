import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-14 bg-navbarcolor text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">Santa Clara PAL Soccer</h1>
          <p className=" mb-2 text-sm">
          If you have any questions about registration, please e-mail scpalsoccer@gmail.com. Santa Clara PAL Soccer is managed by a volunteer board. Please allow us time to respond to your inquiry.
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/aboutus"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/leagueinfo"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              League Information
            </Link>
            
          </div>
        </div>

        

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Other Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            
            <a href="https://santaclarapal.org/donate/" target="_blank" className=" hover:translate-x-3 transition duration-200 ease-linear">Donate</a>
            
            <a href="https://santaclarapal.org/contact/" target="_blank" className=" hover:translate-x-3 transition duration-200 ease-linear">Contact</a>
            
            <a href="https://registration.bluesombrero.com/3883/program-questions/preview/172891" target="_blank" className=" hover:translate-x-3 transition duration-200 ease-linear">Registration</a>
            
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-primary font-semibold mx-2">
            dvillar
          </span>
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;