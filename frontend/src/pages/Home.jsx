import { Link } from 'react-router-dom';
import logo from '../assets/UofAlogo.png';
import mascot from '../assets/Mascot.png';

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-green-700">
            {/* Navbar */}
            <nav className="w-full bg-green-800 text-yellow-300 flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="UofA Logo" className="w-12 h-12 mr-4" />
          <span className="font-bold text-xl">UofA Scheduler</span>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/home"
              className="hover:text-yellow-500 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-500 transition duration-200"
            >
              About
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
            <Link
              to="/help"
              className="hover:text-yellow-500 transition duration-200"
            >
              Help
            </Link>
          </li>
        </ul>
      </nav>
      {/* Header Section */}
      <h1 className="font-semibold text-4xl text-yellow-500 mb-4">
        University of Alberta final exam scheduler
      </h1>
      
      {/* Paragraph */}
      <p className="text-lg text-yellow-300 text-center px-6 max-w-3xl">
        Kaafi sare options ke saath
      </p>

      {/* Subheading */}
      <p className="text-lg text-yellow-300 text-center mt-6 px-6 max-w-3xl">
        Mast code hai re baba
      </p>
    </div>
  );
}
