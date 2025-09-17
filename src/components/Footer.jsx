export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 py-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Copyright */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Dr. Nabin Prajapati. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm">
          <a
            href="#about"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
