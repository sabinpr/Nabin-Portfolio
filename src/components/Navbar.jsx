import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Name / Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
          Dr. Nabin Prajapati
        </h1>

        {/* Nav Links + Theme Toggle */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <a
                href="#about"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
