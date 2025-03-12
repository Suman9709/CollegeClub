import React, { useEffect, useState } from 'react';
import img1 from '../Image/img13.webp';
import img2 from '../Image/img12.jpg';

const images = [img1, img2];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen mt-24 flex justify-center items-center overflow-hidden">

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-red-800 px-6 py-4 backdrop-blur-sm bg-white/10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to Shivalik Clubs
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Discover exciting opportunities and experiences with us.
        </p>
      </div>

      {/* Sliding Images Background */}
      <div className="absolute w-full h-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default LandingPage;
