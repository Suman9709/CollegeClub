import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import CardContainer from "./Components/CardContainer";
import Form from "./Components/Form";
import ClubPage from "./Components/ClubPage";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/clubs" element={<CardContainer />} />
          <Route path="/form" element={<Form />} />
          <Route path="/clubpage/:clubname" element={<ClubPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
