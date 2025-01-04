import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import logo from "../assets/UofAlogo.png" 

const setCookie = (name, value, days) => {
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${JSON.stringify(value)};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
    return true;
  } catch (error) {
    console.error('Error setting cookie:', error);
    return false;
  }
};

export default function Calendar() {
  const [savedExams, setSavedExams] = useState([])

  // Load saved exams from cookies on component mount
  useEffect(() => {
    const getCookie = (name) => {
      try {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) {
          const cookieValue = parts.pop().split(';').shift()
          return JSON.parse(cookieValue)
        }
        return null
      } catch (error) {
        console.error('Error getting cookie:', error)
        return null
      }
    }

    const savedExamsData = getCookie('savedExams')
      if (savedExamsData) {
        setSavedExams(savedExamsData)
      }
    }, [])

    const handleToggleExam = (exam) => {
      const isExamSaved = savedExams.some(
        saved => saved[0] === exam[0] && saved[1] === exam[1]
      )
      
      if (isExamSaved) {
        setSavedExams(savedExams.filter(
          saved => !(saved[0] === exam[0] && saved[1] === exam[1])
        ))
      } else {
        setSavedExams([...savedExams, exam])
      }
    }

    
  useEffect(() => {
    if (savedExams.length > 0) {
      setCookie('savedExams', savedExams, 30);
    } else {
      document.cookie = 'savedExams=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }, [savedExams]);

  return (
    <div className="min-h-screen flex flex-col bg-green-700 overflow-x-hidden">
        {/* Navbar */}
                  <nav className="w-full bg-green-800 text-yellow-300 px-4 md:px-8 py-4">
                    <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
                      <div className="flex items-center">
                        <img src={logo} alt="UofA Logo" className="w-10 h-10 md:w-14 md:h-14 mr-4" />
                        <span className="font-bold text-lg md:text-xl">UofA Scheduler</span>
                      </div>
                      <ul className="flex flex-wrap justify-center gap-2 md:gap-10 font-semibold text-xl">
                        <li>
                          <Link to="/" className="hover:text-yellow-500 transition duration-200">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/search" className="hover:text-yellow-500 transition duration-200">
                            Search
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" className="hover:text-yellow-500 transition duration-200">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>

    <div className='p-4'>
      <h1 className='font-bold text-2xl mb-4 text-yellow-300'>Add to your Google calendar, remove and compare courses! Your very own final schedule 😎😏🔥🔥</h1>
      {/* Scrollable table container */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-green-700 text-white font-bold text-left">
          <thead>
            <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 bg-green-700">Course</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Section</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Date</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Time</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Length</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Completion Window</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Location</th>
              <th className="border border-gray-200 px-4 py-2 bg-green-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {savedExams.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 text-white hover:text-yellow-300 hover:font-bold hover:bg-lime-800">
                <td className="border border-gray-200 px-4 py-2">{row[0]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[1]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[2]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[3]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[4]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[5]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[6]}</td>
                <td className="border border-gray-200 px-4 py-2">
                <div className="flex items-center gap-10">
                  <button
                    onClick={() => handleToggleExam(row)}
                    className={`px-3 py-1 rounded ${
                      savedExams.some(saved => saved[0] === row[0] && saved[1] === row[1])
                        ? 'bg-red-500 text-white  hover:bg-red-900'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {savedExams.some(saved => saved[0] === row[0] && saved[1] === row[1])
                      ? 'Remove'
                      : 'Add Exam'}
                  </button>
                  
                  <AddToCalendarButton 
                    name= {row[0]}
                    startDate= {row[2].split("/")[2]+"-"+row[2].split("/")[0]+"-"+row[2].split("/")[1]}
                    location = {row[6]}
                    options= "'Google'"
                    description= {"Section: " + row[1]}
                  ></AddToCalendarButton>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}