import React from 'react';
import logo from '../Image/shivalik-logo.png';
import nacc from '../Image/nacc-grade.png';
import linkedin from '../Image/linkedIn.svg';
import fb from '../Image/fb.svg';
import insta from '../Image/insta.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white py-2 mt-8">
            <div className="container mx-auto flex flex-col items-center space-y-6 px-4">
                <div className="flex space-x-6 items-center">
                    <img src={logo} alt="shivalik-logo" className="h-16 w-auto" />
                    <img src={nacc} alt="nacc-grade" className="h-16 w-auto" />
                </div>

                <p className="text-center text-lg max-w-xl leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime, commodi dolorem tenetur quod culpa cumque sequi? Veritatis delectus.
                </p>

                <div className="flex space-x-4 items-center justify-center mt-4">
                    <Link to="/Linked.com" className="p-1 border border-white rounded-lg hover:scale-110 transition-transform duration-300">
                        <img src={linkedin} alt="LinkedIn" className="w-10 h-10 filter hover:brightness-90" />
                    </Link>
                    <Link to="/facebook.com" className="p-1 border border-white rounded-lg hover:scale-110 transition-transform duration-300">
                        <img src={fb} alt="Facebook" className="w-10 h-10 filter hover:brightness-90" />
                    </Link>
                    <Link to="/instagram.com" className="p-1 border border-white rounded-lg hover:scale-110 transition-transform duration-300">
                        <img src={insta} alt="Instagram" className="w-10 h-10 filter hover:brightness-90" />
                    </Link>
                </div>

                <p className="text-center text-sm border-t border-white w-full pt-4">
                    ©2025 All Rights Reserved | Designed by Suman
                </p>
            </div>
        </footer>
    );
};

export default Footer;