export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-center px-4 transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Dr. Nabin Prajapati
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-700 dark:text-gray-300">
        Internal Medicine Specialist with experience in Nepal, the UK, and
        currently practicing in Australia. Dedicated to providing compassionate,
        patient-centered, and evidence-based healthcare.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
      >
        Book Appointment
      </a>
    </section>
  );
}
