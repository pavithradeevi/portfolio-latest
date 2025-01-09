import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Work from './pages/Work/Work';

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
      <div className="container">
        {/* Content Area */}
        <div className="content-area">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="work">
            <Work />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>

        {/* Sidebar Navigation */}
        <div className={`side-nav ${menuOpen ? "open" : ""}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰ {/* Hamburger menu icon */}
          </div>
          <ul>
            <li className={activeSection === "home" ? "active" : ""}>
              <a href="#home" onClick={toggleMenu}>TOP</a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about" onClick={toggleMenu}>ABOUT ME</a>
            </li>
            <li className={activeSection === "skills" ? "active" : ""}>
              <a href="#skills" onClick={toggleMenu}>SKILLS</a>
            </li>
            <li className={activeSection === "experience" ? "active" : ""}>
              <a href="#experience" onClick={toggleMenu}>EXPERIENCES</a>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <a href="#projects" onClick={toggleMenu}>PROJECTS</a>
            </li>
            <li className={activeSection === "education" ? "active" : ""}>
              <a href="#education" onClick={toggleMenu}>EDUCATION</a>
            </li>
            <li className={activeSection === "work" ? "active" : ""}>
              <a href="#work" onClick={toggleMenu}>HOW I WORK</a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact" onClick={toggleMenu}>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
