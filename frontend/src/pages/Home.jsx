import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/UofAlogo.png";
import Mascot from "../assets/Mascot.png";
export default function Home() {
  const [isFilling, setIsFilling] = useState(false); // State to track if the bar is actively filling

  const handleClick = () => {
    // Redirect on click
    window.location.href = "/search"; // Redirecting to the search page
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-green-700">
      {/* Navbar */}
      <nav className="w-full bg-green-800 text-yellow-300 flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="UofA Logo" className="w-16 h-16 mr-4" />
          <span className="font-bold text-xl">UofA Scheduler</span>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-6 font-semibold">
          <li>
            <Link
              to="/search"
              className="hover:text-yellow-500 transition duration-200"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="hover:text-yellow-500 transition duration-200"
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-500 transition duration-200"
            >
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
      </nav>

      {/* Text zone */}
      <div className="w-full px-8 py-4">
        <div className="font-bold text-7xl text-yellow-400 mb-4 translate-x-[200px] translate-y-[200px]">
          Welcome to
        </div>
      </div>
      <div className="w-full px-8 py-4">
        <div className="font-bold text-7xl text-yellow-400 mb-4 translate-x-[200px] translate-y-[170px]">
          The uAlberta 
        </div>
        <div className="font-bold text-7xl text-yellow-400 mb-4 translate-x-[200px] translate-y-[170px]">
          Exam Scheduler!
        </div>
        <div className="font-bold text-2xl text-yellow-400 mb-4 translate-x-[200px] translate-y-[170px]">
          Add exams to your calendar and never miss an exam again!
        </div>

        {/* Button as Health Bar */}
        <div
          onClick={handleClick}
          onMouseEnter={() => setIsFilling(true)}
          onMouseLeave={() => setIsFilling(false)}
          className="translate-x-[200px] translate-y-[170px] w-96 h-16 bg-yellow-400 rounded-lg overflow-hidden cursor-pointer relative"
        >
          {/* Filler */}
          <div
            className={`absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-500 ease-linear ${
              isFilling ? "w-full" : "w-0"
            }`}
          ></div>

          {/* Text */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-bold text-green-800">
            Get started
          </div>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <img src={Mascot} alt="Mascot" className="w-[1080px] h-[720px] translate-x-[-30px]" />
        </div>

      </div>
    </div>
  );
}
