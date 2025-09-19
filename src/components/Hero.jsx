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
      <div className="relative z-10 bg-white/70 dark:bg-black/60 px-6 py-8 rounded-2xl shadow-lg backdrop-blur-sm">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4
                     bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 
                     dark:from-cyan-200 dark:via-teal-300 dark:to-blue-200 
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          Dr. Nabin Prajapati
        </h2>
        <p
          className="text-lg md:text-xl max-w-2xl leading-relaxed
                     text-gray-800 dark:text-gray-100"
        >
          Internal Medicine Specialist with experience in Nepal, the UK, and
          currently practicing in Australia. Dedicated to providing
          compassionate, patient-centered, and evidence-based healthcare.
        </p>
      </div>
    </section>
  );
}
