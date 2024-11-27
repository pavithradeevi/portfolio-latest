import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const experiences = [
    {
        duration: "Oct/2024 - Present",
        role: "Freelance Web Developer:",
        // company: "TechCorp",
        description: "Designing and developing dynamic, user-friendly websites using React.js for the frontend and Node.js for the backend. Specializing in crafting custom e-commerce mobile applications tailored to the unique needs of clients in the electrical and industrial sectors. Adept at adapting solutions to align with diverse client requirements, ensuring seamless functionality and exceptional user experiences."
    },
    {
        duration: "Jul/2023 - Sep/2024",
        role: "Junior Software Developer",
        company: "PreFlight Aviation Services Pvt.Ltd",
        description: "Specialized in developing cross-platform mobile applications using React Native for both iOS and Android. Designed intuitive user interfaces and ensured seamless performance, leveraging SQL for efficient database management. Successfully developed two mobile apps, including one with robust functionality in both online and offline modes, delivering high-quality solutions tailored to user needs."
    },
    {
        duration: "Nov/2021 - Nov/2022",
        role: "Freelance Application Engineer",
        // company: "WebWorks",
        description: "Expertly managed database connectivity using MySQL and SQLite3, ensuring efficient data handling and integration. Developed scalable and maintainable code using Python, delivering robust application solutions tailored to client requirements. Focused on performance optimization and seamless functionality across projects."
    },
    {
        duration: "Jul/2016 - Oct/2019",
        role: "Creative Designer/Mentor",
        company: "LIVEWIRE(A Division of CADD Centre)",
        description: "Managed and maintained a professional blog, curating content and driving engagement. Delivered technical training sessions for industrial professionals, sharing expertise in design tools and principles. Designed impactful advertisements and promotional materials for Facebook and Instagram, creating visually compelling posters to enhance brand visibility and outreach."
    }
];

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0); // To track the active experience
    const sectionRefs = useRef([]); // Refs for each experience item

    useEffect(() => {
        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.indexOf(entry.target);
                    setActiveIndex(index); // Update active index when a section is visible
                }
            });
        }, observerOptions);

        // Observe all experience items
        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <div className="experience-container">
            {/* Top Section */}
            <p className="experience-heading">EXPERIENCES</p>
            <div className="main-content">
                <section className="experience-section">
                    <div className="about-text">
                        <div className="top-section">
                            <div className="line-container">
                                <div className="vertical-line"></div>
                                <div className="line-texts">
                                    <p className="top-phrase">Highlight my Experiences</p>
                                    <p className="know-more">My Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience List with Sidebar */}
                        <div className="experience-list">
                            <div className="sidebar-line">
                                {experiences.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`sidebar-indicator ${
                                            activeIndex === index ? 'active' : ''
                                        }`}
                                    ></div>
                                ))}
                            </div>

                            <div className="experience-items">
                                {experiences.map((exp, index) => (
                                    <div
                                        ref={(el) => (sectionRefs.current[index] = el)}
                                        className="experience-item"
                                        key={index}
                                    >
                                        <p className="experience-duration">{exp.duration}</p>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                        <p className="experience-description">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Experience;
