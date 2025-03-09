import React from 'react'
import logo from '../Image/shivalik-logo.png'
import nacc from '../Image/nacc-grade.png'
import linkedin from '../Image/linkedin.svg'
import fb from '../Image/fb.svg'
import insta from '../Image/insta.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="h-auto p-4 w-full bg-cyan-500 flex justify-center bottom-0">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex space-x-4 w-1/2 justify-center">
                    <img src={logo} alt="shivalik-logo" className="h-12 w-auto" />
                    <img src={nacc} alt="nacc-grade" className="h-12 w-auto" />
                </div>
                <p className="text-white w-1/2 text-center mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime, commodi dolorem tenetur quod culpa cumque sequi? Veritatis delectus
                </p>
                <div className="flex items-center gap-2">
                    <Link to={''}> <img src={linkedin} alt="" className="w-12 h-12" /></Link>
                    <Link to={''}> <img src={fb} alt="" className="w-10 h-10" /></Link>
                    <Link to={''}> <img src={insta} alt="" className="w-12 h-12" /></Link>
                </div>
                <p className="text-white m-2 text-center">
                    ©2025 All Rights Reserve Suman
                </p>
            </div>
        </div>
    );
};


export default Footer