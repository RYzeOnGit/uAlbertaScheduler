import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Calendar from './pages/Calendar'
import Contact from './pages/Contact'
import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
