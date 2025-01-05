import { Link } from 'react-router-dom'
import logo from "../assets/UofAlogo.png"
import Github from "../assets/githubpng.png"
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-green-700 overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full bg-green-800 text-yellow-300 px-4 md:px-8 py-4">
        <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
          <div className="flex items-center">

             <Link to="/" className="flex items-center">
              <img src={logo} alt="UofA Logo" className="w-10 h-10 md:w-14 md:h-14 mr-4" />
              <span className="font-bold text-lg md:text-xl">UofA Scheduler</span>
              </Link>
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

  <div className="flex flex-col p-4">
    <h1 className="text-3xl font-bold text-yellow-300 p-4">
      Please don't hesitate 🙅‍♂️ to email us with suggestions for improvements 📈 or to report a bug 🐞
    </h1>

    <div className="flex flex-row items-center">
      {/* GitHub Logo */}
      <a href="https://github.com/RYzeOnGit/uAlbertaScheduler" className="flex items-center">
        <img
          src={Github}
          alt="Github Logo"
          className="w-10 h-10 md:w-24 md:h-24 mr-4"
        />
      </a>

      {/* Pointing Finger */}
      <span className="text-4xl inline-block ml-2 relative top-2">👈</span>
    </div>
  </div>

      <div>
        <div className='text-lg  p-4 font-semibold'>
          <p className="text-xl text-white">If you have any questions or concerns, please contact us at:</p>
          <p className="text-xl text-white">Email: ryan.chattopadhyay1@gmail.com or imayankhandewal@gmail.com</p>
        </div>
      </div>
    </div>
  );
}