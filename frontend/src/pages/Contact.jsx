import { Link } from 'react-router-dom'
import logo from "../assets/UofAlogo.png"

export default function Contact() {
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
              <Link to="/calendar" className="hover:text-yellow-500 transition duration-200">
                Calendar
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <h1 className="text-3xl font-bold text-yellow-300 p-4">Contact Us</h1>
        <div className="p-4">
          <p className="text-lg text-yellow-300">If you have any questions or concerns, please contact us at:</p>
          <p className="text-lg text-yellow-300">Email: Mighty_Mayoo@example.com or Raymond_Choco@example.com</p>
        </div>
      </div>
    </div>
  );
}