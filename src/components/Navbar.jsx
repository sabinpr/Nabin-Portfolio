import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Desktop Nav */}
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            e.currentTarget.blur();
          }}
          className="text-xl font-bold flex items-center h-8 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full pointer-events-none"
          />
        </a>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-blue-500 transition"
              >
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
