import { useState } from 'react';
import Logo_img from '../assets/logo/Logo_03.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/50 transition-colors duration-300">
      <div className="flex justify-between items-center px-3 xs:px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="flex items-center gap-2 min-w-0">
          <img 
            src={Logo_img} 
            alt="MetisNova Logo" 
            className="h-8 xs:h-9 sm:h-10 w-8 xs:w-9 sm:w-10 object-contain rounded-lg flex-shrink-0"
          />
          <h1 className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-700 via-yellow-700 to-purple-700 bg-clip-text text-transparent truncate">
            MetisNova
          </h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-sm font-medium">
          <a 
            href="#vision" 
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Vision
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Services
          </a>
          <a 
            href="#approach" 
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Approach
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="sm:hidden p-2 text-gray-700 hover:text-blue-600 transition duration-200"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown navigation */}
      {isMenuOpen && (
        <nav className="sm:hidden px-3 xs:px-4 pb-3 bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col gap-2 text-sm font-medium">
            <li>
              <a
                href="#vision"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Vision
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#approach"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Approach
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}