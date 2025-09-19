import doctorImg from "../assets/Doctor.png"; // optional profile image

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-16 transition-colors duration-500 ease-in-out"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-900 dark:text-cyan-300">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Optional profile image */}
        <img
          src={doctorImg}
          alt="Dr. Nabin Prajapati"
          className="w-40 h-40 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
        />

        <p className="text-lg md:text-xl leading-relaxed text-center md:text-left text-gray-800 dark:text-gray-200 max-w-3xl">
          I am{" "}
          <span className="font-semibold text-blue-800 dark:text-cyan-200">
            Dr. Nabin Prajapati
          </span>
          , a Nepali citizen with extensive experience in healthcare. I worked
          in <span className="font-medium">Nepal</span> for 5 years, spent 1
          year practicing medicine in the{" "}
          <span className="font-medium">UK</span>, and am currently working in{" "}
          <span className="font-medium">Australia</span>. My journey across
          different healthcare systems has strengthened my skills and dedication
          to{" "}
          <span className="italic">
            compassionate, patient-centered, evidence-based care
          </span>
          .
        </p>
      </div>
    </section>
  );
}
