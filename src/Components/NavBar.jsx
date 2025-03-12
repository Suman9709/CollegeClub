import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu
import logo from '../Image/shivalik-logo.png';
import nacc from '../Image/nacc-grade.png';
import excellence from '../Image/excellence.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full h-20 flex items-center justify-between px-6 md:px-8 fixed top-0 z-50 shadow-lg transition-all duration-300 
      ${isScrolled ? 'bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white shadow-md' : 'bg-white text-gray-900 shadow-lg'}`}>
      <div className='flex items-center space-x-0 md:space-x-6'>
        <img src={logo} alt="shivalik-logo" className="h-8 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
        <img src={nacc} alt="nacc-grade" className="h-6 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
      </div>

      <div className='text-md md:text-3xl font-bold tracking-wide'>
        <a href="https://shivalikcollege.edu.in/" target="_blank" rel="noopener noreferrer" className="text-red-800 transition-colors duration-300">
          Shivalik Official
        </a>
      </div>

      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        <li className="relative group">
          <Link to="/" className="hover:text-red-800 transition-colors duration-300">Home</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/clubs" className="hover:text-red-800 transition-colors duration-300">Clubs</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="#Contact us" className="hover:text-red-800 transition-colors duration-300">Contact Us</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md text-gray-900 md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-800 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/clubs" onClick={() => setMenuOpen(false)} className="hover:text-red-800 transition-colors duration-300">Clubs</Link>
            </li>
            <li>
              <Link to="#Contact us" onClick={() => setMenuOpen(false)} className="hover:text-red-800 transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden md:block">
        <img src={excellence} alt="excellence" className='h-12 transition-transform duration-300 hover:scale-105' />
      </div>

    </nav>
  );
};

export default NavBar;
