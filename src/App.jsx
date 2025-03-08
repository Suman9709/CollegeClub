import React from 'react'
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import ClubCard from './Components/ClubCard'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/clubcard" element={<ClubCard />} /> */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App