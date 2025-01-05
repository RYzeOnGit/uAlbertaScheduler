import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/UofAlogo.png";
import Mascot from "../assets/Mascot.png";

const Home = () => {
  const [isFilling, setIsFilling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-green-700 overflow-x-hidden">

      {/* Navbar */}
      <nav className="w-full bg-green-800 text-yellow-300 px-4 md:px-8 py-4">
        <div className="max-w-full mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="UofA Logo" className="w-10 h-10 md:w-14 md:h-14 mr-4" />
            <span className="font-bold text-lg md:text-xl">UofA Scheduler</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-300 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-10 font-semibold text-xl">
            <li><Link to="/search" className="hover:text-yellow-500 transition duration-200">Search</Link></li>
            <li><Link to="/calendar" className="hover:text-yellow-500 transition duration-200">Calendar</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/search" 
              className="block py-2 text-center text-yellow-300 hover:bg-green-900 rounded transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
            <Link 
              to="/calendar" 
              className="block py-2 text-center text-yellow-300 hover:bg-green-900 rounded transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Calendar
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-center text-yellow-300 hover:bg-green-900 rounded transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Main Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2 pl-4 md:pl-0">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 leading-tight">
              UAlberta Final Exam Schedule
            </h1>
            <p className="text-xl text-white max-w-lg">
              Browse final exam schedules with ease and add them to your calendar!
            </p>
            <Link to="/search" className="w-full md:w-auto">
              <button
                onMouseEnter={() => setIsFilling(true)}
                onMouseLeave={() => setIsFilling(false)}
                className="w-full md:max-w-sm h-14 bg-yellow-400 rounded-lg overflow-hidden relative px-4"
              >
                <div
                  className={`absolute inset-0 bg-yellow-500 transition-all duration-500 ease-linear ${
                    isFilling ? 'w-full' : 'w-0'
                  }`}
                />
                <span className="relative z-10 font-bold text-green-800">
                  Get started🔎
                </span>
              </button>
            </Link>
          </div>

          {/* Mascot Image */}
          <div className="max-w-[80vw] md:max-w-[40vw] mt-8 md:mt-0">
            <img src={Mascot} alt="Mascot" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
