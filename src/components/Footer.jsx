export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 py-6 transition-colors duration-500 ease-in-out border-t border-gray-700 dark:border-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 space-y-2">
        {/* Copyright */}
        <p className="text-sm md:text-base text-center">
          © {new Date().getFullYear()} Dr. Nabin Prajapati. All rights reserved.
        </p>

        {/* Tagline */}
        <p className="text-gray-400 text-sm md:text-base text-center italic">
          Dedicated to Compassionate, Patient-Centered Healthcare
        </p>
      </div>
    </footer>
  );
}
