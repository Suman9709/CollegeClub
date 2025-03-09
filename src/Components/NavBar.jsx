import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/shivalik-logo.png';
import nacc from '../Image/nacc-grade.png';
import excellence from '../Image/excellence.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-[100%] h-16 flex items-center justify-between p-4 fixed top-0 z-50 shadow-lg transition-all duration-300 
      ${isScrolled ? 'bg-cyan-500 text-white' : 'bg-white text-black'}`}>

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
            <Link to="/clubs">Clubs</Link>
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
