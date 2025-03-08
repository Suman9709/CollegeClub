import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/shivalik-logo.png';
import nacc from '../Image/nacc-grade.png';
import excellence from '../Image/excellence.png';

const NavBar = () => {
  return (
    <nav className=" w-full flex items-center justify-between p-4 z-10 border-b-2">
      
      <div className='flex space-x-4'>
        <img src={logo} alt="shivalik-logo" className="h-12 w-auto" />
        <img src={nacc} alt="nacc-grade" className="h-12 w-auto" />
      </div>

      <div className='text-3xl font-semibold font-sans'>
        <Link to="/">Shivalik Official</Link>
      </div>

      <div>
        <ul className="flex space-x-6 text-xl">
          <li className="relative group">
            <Link to="/">Home</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="#Clubs">Clubs</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="#Contact us">Contact Us</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      <div>
        <img src={excellence} alt="excellence" className='h-12' />
      </div>
    </nav>
  );
};

export default NavBar;
