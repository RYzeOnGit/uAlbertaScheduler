import { Link } from 'react-router-dom'
import { useState } from 'react'
import examData from '../../../constants/Fall24FinalSchedule.json'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter data based on search term
  const filteredData = examData.data.slice(1).filter(row => {
    return row[0]?.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className='p-4'>
      <h1 className='font-semibold text-2xl'>Search Page</h1>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by course name..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Scrollable table container */}
      <div className="overflow-x-auto">
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
            {filteredData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{row[0]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[1]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[2]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[3]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[4]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[5]}</td>
                <td className="border border-gray-200 px-4 py-2">{row[6]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}