import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import { FaFilm } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-indigo-600 dark:bg-indigo-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <FaFilm className="text-white" />
          MovieExplorer
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'text-white border-b-2 border-white' : 'hover:text-indigo-200'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/watchlist" 
            className={({ isActive }) => 
              isActive ? 'text-white border-b-2 border-white' : 'hover:text-indigo-200'
            }
          >
            Watchlist
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'text-white border-b-2 border-white' : 'hover:text-indigo-200'
            }
          >
            About
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
