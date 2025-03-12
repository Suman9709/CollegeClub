import React from 'react'
import ClubCard from './ClubCard'
import ClubData from './ClubData'

const CardContainer = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-auto mt-24 overflow-x-hidden'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    ClubData.map((clubs, index) => (
                        <ClubCard
                            key={index}
                            clubname={clubs.clubname}
                            imageSrc={clubs.imageSrc}
                            clubdesc={clubs.clubdesc}
                            
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CardContainer