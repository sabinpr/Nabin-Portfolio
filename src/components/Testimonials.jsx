import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Sita Sharma",
    feedback:
      "Dr. Nabin Prajapati is highly professional and compassionate. He explained everything clearly and made me feel at ease.",
  },
  {
    name: "Ramesh Thapa",
    feedback:
      "Thanks to Dr. Prajapati’s guidance, my chronic condition is now well managed. Very knowledgeable and caring.",
  },
  {
    name: "Emily Watson",
    feedback:
      "I consulted Dr. Prajapati while in Australia. He was attentive and provided excellent care. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4 transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900 dark:text-cyan-300">
          What Patients Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md
                         hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <FaUserCircle className="text-6xl text-blue-400 dark:text-cyan-300" />
              </div>

              {/* Quote */}
              <p className="mt-10 italic text-gray-800 dark:text-gray-200 leading-relaxed">
                “{t.feedback}”
              </p>

              {/* Name */}
              <h4 className="mt-6 font-semibold text-blue-700 dark:text-cyan-300">
                - {t.name}
              </h4>

              {/* Speech bubble tail */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white dark:border-t-gray-800"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
