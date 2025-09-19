import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 py-16 transition-colors duration-500 ease-in-out"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900 dark:text-cyan-300">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 h-full">
          <FiMail className="text-4xl text-blue-600 dark:text-cyan-300 mb-4" />
          <p className="text-gray-900 dark:text-gray-100 font-medium">Email</p>
          <a
            href="mailto:nabinprajapati14@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline mt-2 transition-colors duration-300"
          >
            nabinprajapati14@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 h-full">
          <FiPhone className="text-4xl text-blue-600 dark:text-cyan-300 mb-4" />
          <p className="text-gray-900 dark:text-gray-100 font-medium">Phone</p>
          <a
            href="tel:+9779841112592"
            className="text-blue-600 dark:text-blue-400 hover:underline mt-2 transition-colors duration-300"
          >
            +977 9841112592
          </a>
        </div>
      </div>
    </section>
  );
}
