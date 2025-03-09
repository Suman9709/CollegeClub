import React, { useEffect, useState } from 'react'
import img1 from '../Image/img13.webp'
import img2 from '../Image/img12.jpg'

const images = [img1, img2]
const LandingPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000);
    return () => clearInterval(interval)

  }, [])
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen mt-16 overflow-hidden">
      {/* <h1 className="text-2xl font-bold">Welcome to the Shivalik Club Page</h1> */}
      <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;