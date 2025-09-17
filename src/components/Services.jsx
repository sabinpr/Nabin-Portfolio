const services = [
  "General Health Check-ups & Consultations",
  "Chronic Disease Management (Diabetes, Hypertension, etc.)",
  "Preventive & Lifestyle Medicine",
  "Travel & Occupational Health Advice",
  "Diagnostic & Laboratory Services",
  "Patient Education & Health Awareness Programs",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-blue-50 dark:bg-gray-800 py-16 px-4 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
