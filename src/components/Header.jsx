import Logo_img from '../assets/logo/Logo_03.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 sm:px-10 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/50 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <img 
          src={Logo_img} 
          alt="MetisNova Logo" 
          className="h-10 w-10 object-contain rounded-lg"
        />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-yellow-700 to-purple-700 bg-clip-text text-transparent">
          MetisNova
        </h1>
      </div>

      <nav className="hidden sm:flex space-x-8 text-sm font-medium">
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

      {/* Mobile menu button placeholder */}
      <button className="sm:hidden p-2 text-gray-700 hover:text-blue-600 transition duration-200">
        ☰
      </button>
    </header>
  )
}