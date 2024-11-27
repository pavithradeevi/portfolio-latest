import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React.js', percentage: 90 },
        { name: 'React Native', percentage: 90 },
        { name: 'SQL', percentage: 75 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'HTML/CSS', percentage: 80 },
        { name: 'Redux', percentage: 70 },
        { name: 'Node.js', percentage: 70 },
        { name: 'Python', percentage: 40 },
    ];

    const circleSkills = [
        { name: 'Frontend', percentage: 89 },
        { name: 'Backend', percentage: 65 },
        { name: 'Mobile Apps', percentage: 82 },
        { name: 'Websites', percentage: 75 },
    ];

    // Circle radius and circumference
    const radius = 70; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle

    return (
        <div className="skill-container">
            {/* Top Section */}
            <p className="skill-heading">SKILLS</p>

            {/* Main Content Section */}
            <div className="main-content">
                <section className="skill-section">
                    <div className="about-text">
                        {/* Intro Section */}
                        <div className="top-section">
                            <div className="line-container">
                                <div className="vertical-line"></div>
                                <div className="line-texts">
                                    <p className="know-more">Developer Skills</p>
                                    <p className="top-phrase">Highlight my Expertise in:</p>
                                </div>
                            </div>
                        </div>

                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-name">{skill.name}</div>
                                    <div
                                        className="progress-bar"
                                        style={{
                                            '--progress-width': `${skill.percentage}%`,
                                        }}
                                    >
                                        <div className="progress"></div>
                                    </div>
                                    <div className="percentage-text">{`${skill.percentage}%`}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>



            {/* Circle Progress Bars */}
            <div className="circle-container">
            <div className="top-section">
                            <div className="line-container">
                                <div className="vertical-line"></div>
                                <div className="line-texts">
                                    <p className="know-mores">Design Skills</p>
                                    <p className="top-phrases">Highlight my Expertise in:</p>
                                </div>
                            </div>
                        </div>
                {circleSkills.map((skill, index) => (
                    <div key={index} className="circle-item">
                        <div className="circle">
                            <svg width="150" height="150">
                                <circle
                                    cx="75"
                                    cy="75"
                                    r={radius}
                                    stroke="#eee"
                                    strokeWidth="10"
                                    fill="none"
                                ></circle>
                                <circle
                                    cx="75"
                                    cy="75"
                                    r={radius}
                                    stroke="#00bcd4"
                                    strokeWidth="10"
                                    fill="none"
                                    style={{
                                        strokeDasharray: circumference,
                                        strokeDashoffset: circumference - (circumference * skill.percentage) / 100,
                                        transition: 'stroke-dashoffset 0.5s ease',
                                    }}
                                ></circle>
                            </svg>
                            <div className="circle-inner">
                                <span>{`${skill.percentage}%`}</span>
                            </div>
                        </div>
                        <p className="circle-text">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;