import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [clubname, setClubName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, contact, email, course, year, clubname });

    const formData = {
      name, contact, email, course, year, clubname
    };
    const API_URL = "https://script.google.com/macros/s/AKfycbzUfsZKCIqUPXl5D2NDHRegp16hCN2IZ9A9ltPqMAy7wovfhGI4ZUEw5onFrSFtKJOBbQ/exec"
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting data.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-cyan-300 p-4 sm:p-6 md:p-8 mt-16">
      <form
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Registration Form</h2>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your name"
            required
            autoFocus
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col mt-4">
          <label htmlFor="contact" className="font-semibold text-lg">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your contact"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Course */}
        <div className="flex flex-col mt-4">
          <label htmlFor="course" className="font-semibold text-lg">
            Course
          </label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B Pharma">B Pharma</option>
            <option value="Agriculture">Agriculture</option>
            <option value="BBA">BBA</option>
          </select>
        </div>

        {/* Year */}
        <div className="flex flex-col mt-4">
          <label htmlFor="year" className="font-semibold text-lg">
            Year
          </label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Year</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>

        {/* Club Name */}
        <div className="flex flex-col mt-4">
          <label htmlFor="club" className="font-semibold text-lg">
            Club Name
          </label>
          <select
            id="club"
            value={clubname}
            onChange={(e) => setClubName(e.target.value)}
            required
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Club</option>
            <option value="coding club">Coding Club</option>
            <option value="cultural club">Cultural Club</option>
            <option value="chitra club">Chitra Club</option>
            <option value="craft nexes">Craft Nexes</option>
            <option value="kalam club">Kalam Club</option>
            <option value="national day celebration">
              National Day Celebration
            </option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
