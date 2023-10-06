/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import "@/styles/app.css";
import Nav from "./components/layout/Nav";
import Navigation from "./components/layout/Navigation";
import { Toaster } from "./components/ui/Toaster";
import Project from "./sections/Project";
import { projectData } from "./data/projects";
import { ProjectEnum } from "./enums/projects.enum";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const shiftpointRef = useRef<HTMLDivElement>(null);
  const sparxRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = () => {
      const fadeContainers = document.querySelectorAll(".fade-in");

      const windowHeight = window.innerHeight;
      const fadeInPoint = 150;
      for (let i = 0; i < fadeContainers.length; i++) {
        const containerTop = fadeContainers[i].getBoundingClientRect().top;

        if (containerTop < windowHeight - fadeInPoint) {
          fadeContainers[i].classList.add("active");
        } else {
          fadeContainers[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.8, // Adjust if needed
      }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (shiftpointRef.current) observer.observe(shiftpointRef.current);
    if (sparxRef.current) observer.observe(sparxRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (resumeRef.current) observer.observe(resumeRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      // id="my-scrollbar"
      className="relative flex flex-col items-center bg-background dark overflow-hidden"
    >
      <div className="lg:block hidden">
        <Nav />
        <Navigation
          activeSection={activeSection}
          refs={{
            home: homeRef,
            about: aboutRef,
            skills: skillsRef,
            sparx: sparxRef,
            shiftpoint: shiftpointRef,
            portfolio: portfolioRef,
            resume: resumeRef,
            contact: contactRef,
          }}
        />
      </div>
      <div id="home" ref={homeRef} className="w-full">
        <Hero />
      </div>
      <div id="about" ref={aboutRef} className="w-full max-w-6xl">
        <About />
      </div>

      {projectData.map((project: any) => {
        let ref = undefined;

        if (project.id === ProjectEnum.SPARX) ref = sparxRef;
        if (project.id === ProjectEnum.SHIFTPOINT) ref = shiftpointRef;
        if (project.id === ProjectEnum.PORTFOLIO) ref = portfolioRef;

        return (
          <div key={project.id} id={project.id} ref={ref} className="w-full">
            <Project selectedProject={project} />
          </div>
        );
      })}
      <div id="resume" ref={resumeRef} className="w-full">
        <Resume />
      </div>
      <div id="contact" ref={contactRef} className="w-full max-w-6xl">
        <Contact />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
