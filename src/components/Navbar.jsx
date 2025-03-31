import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-gray-100 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-xl tracking-wide text-indigo-400">Jakrarin Srimakut</span>
        <div className="space-x-6 text-sm font-medium">
          <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-indigo-400">Home</Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-indigo-400">About</Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-indigo-400">Projects</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-indigo-400">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
