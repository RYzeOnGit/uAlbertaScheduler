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
      <nav className="w-full bg-green-800 text-yellow-300 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
    <div className="flex items-center">
      <img src={logo} alt="UofA Logo" className="w-10 h-10 md:w-14 md:h-14 mr-4" />
      <div className="font-bold text-lg md:text- 3xl">UofA Scheduler</div>
    </div>
    <ul className="flex flex-wrap justify-center gap-2 md:gap-10 font-semibold text-xl">
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
    </ul>
  </div>
</nav>

      {/* Main Content */}
<div className="flex-1 relative">
  <div className="container mx-auto px-4 md:px-8 py-8 lg:py-48 flex flex-wrap justify-center items-center">
    {/* Text Content */}
    <div className="relative z-10 max-w-lg text-left flex flex-col md: -ml-12 ">
      <h1 className="text-3xl md:text-6xl font-bold text-yellow-400 mb-4">
        Welcome to
        <br />
        The uAlberta
        <br />
        Exam Scheduler!
      </h1>
      <p className="text-lg md:text-xl font-bold text-yellow-400 mb-8">
        Add exams to your calendar and never miss an exam again!
      </p>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsFilling(true)}
        onMouseLeave={() => setIsFilling(false)}
        className="w-full max-w-sm h-14 bg-yellow-400 rounded-lg overflow-hidden relative"
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
    <div className="max-w-[80vw] md:max-w-[40vw] mt-8 md:mt-0">
      <img
        src={Mascot}
        alt="Mascot"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</div>
</div>
  );
};
export default Home;