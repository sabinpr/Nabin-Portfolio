export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-16 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Contact
      </h2>
      <div className="text-center space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          Email:{" "}
          <a
            href="mailto:nabinprajapati14@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
          >
            nabinprajapati14@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href="tel:+9779841112592"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
          >
            +977 9841112592
          </a>
        </p>
      </div>
    </section>
  );
}
