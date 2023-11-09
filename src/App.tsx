import { useState, useRef, useEffect } from "react";

import Profile from "./sections/Profile";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import "@/styles/app.css";
import { Toaster } from "./components/ui/Toaster";
import { Navbar } from "./components/layout/Navbar";
import Projects from "./sections/Projects";
import Values from "./sections/Values";
import Tech from "./sections/Tech";

function App() {
  const [currentSection, setCurrentSection] = useState("");
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const valuesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (profileRef.current) observer.observe(profileRef.current);
    if (techRef.current) observer.observe(techRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-black">
      <Navbar active={currentSection} />

      <Hero sectionRef={heroRef} />

      <Profile sectionRef={profileRef} />

      <Tech sectionRef={techRef} />

      <Projects sectionRef={projectsRef} />

      <Experience sectionRef={experienceRef} />

      <Values sectionRef={valuesRef} />

      <Contact sectionRef={contactRef} />

      <Toaster />
    </div>
  );
}

export default App;
