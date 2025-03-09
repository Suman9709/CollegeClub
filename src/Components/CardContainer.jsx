import React from 'react'
import chitraclub from '../Image/ChitraClub.jpg'
import ClubCard from './ClubCard'
import Footer from './Footer'
const CardContainer = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-auto mt-24 overflow-x-hidden'>
            <div className='grid grid-cols-4  gap-5  '>
                <ClubCard clubname='Chitra Club' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />
                <ClubCard clubname='Club Name' imageSrc={chitraclub} clubdesc='This Club aims to hone the photograph and cinematography skills of the students, and to cover all events Digital Marketing of the Shivalik College. This club organized activities like expert session, field trips and regular competition, etc to enhance the skills.' />

            </div>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default CardContainer