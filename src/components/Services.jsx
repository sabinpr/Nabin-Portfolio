import {
  FaStethoscope,
  FaHeartbeat,
  FaAppleAlt,
  FaPlane,
  FaVials,
  FaBookMedical,
} from "react-icons/fa";

const services = [
  {
    icon: <FaStethoscope />,
    title: "General Health Check-ups & Consultations",
  },
  {
    icon: <FaHeartbeat />,
    title: "Chronic Disease Management (Diabetes, Hypertension, etc.)",
  },
  { icon: <FaAppleAlt />, title: "Preventive & Lifestyle Medicine" },
  { icon: <FaPlane />, title: "Travel & Occupational Health Advice" },
  { icon: <FaVials />, title: "Diagnostic & Laboratory Services" },
  {
    icon: <FaBookMedical />,
    title: "Patient Education & Health Awareness Programs",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-blue-50 dark:bg-gray-900 py-16 px-4 transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900 dark:text-cyan-300">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md 
                         hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <span className="text-4xl text-blue-600 dark:text-cyan-300 mb-4">
                {service.icon}
              </span>
              <h3 className="text-lg md:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
