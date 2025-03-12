import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClubData from "./ClubData";
import Button from "./Button";
import img1 from "../Image/img13.webp";
import img2 from "../Image/img12.jpg";

const images = [img1, img2];

const ClubPage = () => {
    const { clubname } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const club = ClubData.find((club) => club.clubname === decodeURIComponent(clubname));
    const navigate = useNavigate();

    if (!club) {
        return <h1 className="text-3xl font-bold mt-24 text-center text-red-600">Club Not Found</h1>;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen min-h-screen flex flex-col items-center relative mt-24">

           
            <div className="relative w-full h-[500px] overflow-hidden">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>

            <div className="mt-8 bg-white/80  rounded-2xl p-8 max-w-1/2 text-center flex flex-col items-center ">
                <h1 className="text-4xl font-extrabold text-red-800">{club.clubname}</h1>

                <img
                    src={club.imageSrc}
                    alt={club.clubname}
                    className="w-40 h-40 mt-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
                />

                <p className="text-md text-gray-700 mt-4 max-w-lg">{club.clubdesc}</p>

                <Button
                    label="Register Now"
                    onClick={() => navigate('/form')}
                    className="mt-6 px-6 py-3 text-lg font-semibold bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-300"
                />
            </div>

        </div>
    );
};

export default ClubPage;
