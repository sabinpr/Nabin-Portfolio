import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["about", "services", "achievements", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-transform duration-300 ease-out">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="flex items-center h-10 font-bold text-xl hover:scale-105 transition-transform duration-300"
        >
          <img src="/logo.png" alt="Logo" className="h-full w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 md:hidden transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden origin-top transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        } bg-white dark:bg-gray-800`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
