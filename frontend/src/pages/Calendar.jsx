import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
    <div className='p-4'>
      <h1 className='font-semibold text-2xl mb-4'>Calendar Page</h1>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">Go to Home</Link>

      {/* Scrollable table container */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Course</th>
              <th className="border border-gray-200 px-4 py-2">Section</th>
              <th className="border border-gray-200 px-4 py-2">Date</th>
              <th className="border border-gray-200 px-4 py-2">Time</th>
              <th className="border border-gray-200 px-4 py-2">Length</th>
              <th className="border border-gray-200 px-4 py-2">Completion Window</th>
              <th className="border border-gray-200 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {savedExams.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{row[0]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[1]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[2]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[3]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[4]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[5]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[6]}</td>
                <td className="border border-gray-200 px-4 py-2">
                  <button
                    onClick={() => handleToggleExam(row)}
                    className={`px-3 py-1 rounded ${
                      savedExams.some(saved => saved[0] === row[0] && saved[1] === row[1])
                        ? 'bg-green-500 text-white hover:bg-red-500'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {savedExams.some(saved => saved[0] === row[0] && saved[1] === row[1])
                      ? 'Added'
                      : 'Add Exam'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}