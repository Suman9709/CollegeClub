import React, { useState } from 'react'
import ClubCard from './ClubCard'
import Footer from './Footer'
import chitraclub from '../Image/ChitraClub.jpg'


const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-auto'>

      <h1>Welcome to the shivalik club page</h1>
      <div className='grid grid-cols-4  gap-5'>
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
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage