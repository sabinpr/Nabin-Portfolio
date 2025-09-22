import {
  FaGraduationCap,
  FaHospitalUser,
  FaUserMd,
  FaGlobe,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      text: "Received 100% medical scholarship for medical studies",
    },
    { icon: <FaHospitalUser />, text: "5 years of medical service in Nepal" },
    { icon: <FaUserMd />, text: "1 year of clinical experience in the UK" },
    { icon: <FaGlobe />, text: "Currently practicing in Australia" },
    {
      icon: <FaHandsHelping />,
      text: "Participated in multiple healthcare awareness programs",
    },
    {
      icon: <FaUsers />,
      text: "Active member of international medical associations",
    },
  ];

  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-4 py-16 transition-colors duration-500 ease-in-out"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900 dark:text-cyan-300 animate-fadeSlideUp">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md 
                       hover:shadow-xl transform hover:-translate-y-1 transition duration-300 animate-floatUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="text-3xl text-blue-600 dark:text-cyan-300 mr-4">
              {item.icon}
            </span>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
