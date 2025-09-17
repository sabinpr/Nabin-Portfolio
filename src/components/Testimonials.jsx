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
      className="bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16 px-4 transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Patients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="italic text-gray-800 dark:text-gray-200">
                “{t.feedback}”
              </p>
              <h4 className="mt-4 font-semibold text-blue-600 dark:text-blue-300">
                - {t.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
