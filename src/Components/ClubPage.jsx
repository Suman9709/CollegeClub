import React, { useState, useEffect, useRef } from "react";
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
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

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

            <div className="mt-8">
                <h1 className="font-semibold text-xl">Club Activities</h1>
                <p>some instagram post or some youtube video in the form of card with the event name</p>
            </div>

            <div ref={ref} className={`mt-8 bg-white/80 rounded-2xl p-8 max-w-full sm:w-full md:w-full lg:w-full text-center flex flex-col items-center transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                />
            </div>

            <div className="flex flex-col w-1/2">
                <h1 className="w-full text-4xl font-semibold mt-8">Club Members</h1>
                <div className="flex flex-col mt-8">
                    <table>
                        <tbody className="text-xl w-full">
                            <tr><td className="font-semibold">Club Faculty Coordinator:</td><td>{club.facultyCoordinator}</td></tr>
                            <tr><td className="font-semibold">Club Faculty Coordinator Contact:</td><td>{club.facultyCoordinatorContact}</td></tr>
                            <tr><td className="font-semibold">Club President:</td><td>{club.clubPresident}</td></tr>
                            <tr><td className="font-semibold">Club President Contact:</td><td>{club.clubPresidentContact}</td></tr>
                            <tr><td className="font-semibold">Club Vice President:</td><td>{club.clubVicePresident}</td></tr>
                            <tr><td className="font-semibold">Club Vice President Contact:</td><td>{club.clubVicePresidentContact}</td></tr>
                            <tr><td className="font-semibold">Club Email:</td><td>{club.clubEmail}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 flex items-center">
                <p className="font-semibold text-lg">Visit us: </p>
                <div className="flex">
                    <a href={club.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <img src={club.clubSocialMedia.instagram} alt="instagram" width="50" className="p-2 transition-transform duration-300 ease-in-out hover:scale-110" />
                    </a>
                    <a href={club.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <img src={club.clubSocialMedia.facebook} alt="facebook" width="50" className="p-2 transition-transform duration-300 ease-in-out hover:scale-110" />
                    </a>
                    <a href={club.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={club.clubSocialMedia.linkedin} alt="Linkedin" width="50" className="p-1 transition-transform duration-300 ease-in-out hover:scale-110" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClubPage;
