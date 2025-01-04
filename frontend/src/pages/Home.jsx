import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/UofAlogo.png";
import Mascot from "../assets/Mascot.png";

const Home = () => {
  const [isFilling, setIsFilling] = useState(false);

  const handleClick = () => {
    window.location.href = "/search";
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-700 overflow-x-hidden">

      {/* Navbar */}
      <nav className="w-full bg-green-800 text-yellow-300 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={logo} alt="UofA Logo" className="w-10 h-10 md:w-14 md:h-14 mr-4" />
            <span className="font-bold text-lg md:text-xl">UofA Scheduler</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-2 md:gap-6 font-semibold">
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
            <li>
              <Link to="/contact" className="hover:text-yellow-500 transition duration-200">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://www.ualberta.ca/api/datalist/spreadsheet/1kM0k0LenS9Z9LFH6F9qfbr7lyThRa0phTadDCs_MA-c/Sheet1"
                className="hover:text-yellow-500 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                RawData
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col md:flex-row mx-auto px-4 md:px-8 py-8 md:py-12 items-center justify-center gap-8 max-w-7xl">
          {/* Text Content */}
          <div className="relative z-10 text-center md:text-left w-full md:w-1/2">
            <h1 className="mb-4">
              <span className="block text-2xl md:text-3xl lg:text-3xl font-bold text-yellow-400">
                Welcome to the
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 whitespace-nowrap">
                uAlberta Exam Scheduler!
              </span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-yellow-400 mb-8 max-w-prose">
              Add exams to your calendar and never miss an exam again!
            </p>
            <button
              onClick={handleClick}
              onMouseEnter={() => setIsFilling(true)}
              onMouseLeave={() => setIsFilling(false)}
              className="w-[200px] md:w-[300px] lg:w-[400px] h-10 md:h-14 bg-yellow-400 rounded-lg overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-yellow-500 transition-all duration-500 ease-linear ${
                  isFilling ? 'w-full' : 'w-0'
                }`}
              />
              <span className="relative z-10 font-bold text-green-800">
                Get started
              </span>
            </button>
          </div>

          {/* Mascot Image */}
          <div className="w-full md:w-1/3">
            <img
              src={Mascot}
              alt="Mascot"
              className="w-full max-w-[450px] md:max-w-[600px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;