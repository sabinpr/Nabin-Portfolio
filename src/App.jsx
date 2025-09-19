import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    setDark(savedDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-16">
        <SectionWrapper parallax speed={0.1}>
          <Hero />
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <Achievements />
        </SectionWrapper>

        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
