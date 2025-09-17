import doctorBg from "../assets/Doctor.png";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-4 transition-colors duration-500 ease-in-out
                 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900
                 bg-cover bg-center"
      style={{
        backgroundImage: `url(${doctorBg})`,
      }}
    >
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-cyan-200 drop-shadow-lg">
          Dr. Nabin Prajapati
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl text-blue-800 dark:text-cyan-100 drop-shadow-md">
          Internal Medicine Specialist with experience in Nepal, the UK, and
          currently practicing in Australia. Dedicated to providing
          compassionate, patient-centered, and evidence-based healthcare.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
