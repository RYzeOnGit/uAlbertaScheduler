import { Link } from 'react-router-dom'
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
</div>)}
