import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/search">Go to Search</Link>
      <Link to="/calendar">Go to Calendar</Link>
      <Link to="/contact">Go to Contact</Link>
    </div>
  )
}