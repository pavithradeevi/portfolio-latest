import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
        setIsDragging(true); // Add the dragging class when dragging starts
    };

    const handleDragEnd = () => {
        setIsDragging(false); // Remove the dragging class when dragging ends
    };

    return (
        <div className="about-container">
            {/* Top Section */}
            <p className="about-heading">About ME</p>

            {/* Main Content Section */}
            <div className="main-content">
                {/* Left Section: About Text */}
                <section className="about-section">
                    <div className="about-text">
                    <div className="top-section">
        <div className="line-container">
            <div className="vertical-line"></div>
            <div className="line-texts">
                <p className="top-phrase">Some words about me</p>
                <p className="know-more">Know Me More</p>
            </div>
        </div>
    </div>

                        <h2 class="styled-heading">I'm Pavithra, Full Stack Developer</h2>
                        <p className="detailed-text">
  Passionate Full Stack Developer with 3 years of hands-on experience in software development, 
  specializing in developing scalable mobile applications and websites. 
  Skilled in a wide range of frontend and backend technologies, including 
  React Native, Redux, SQL, HTML & CSS, ReactJS, NodeJS, and more.<br/><br/></p>
                        {/* Email and Phone Section */}
                        <div className="contact-info">
                            <div className="contact-item">
                                <p><strong>Email:</strong> pavithradeevi@gmail.com</p>
                            </div>
                            <div className="contact-item">
                                <p><strong>Phone:</strong> +420 793980803</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Section: Experience Box */}
                <section className="images-section">
                    <div
                        className={`experience-box ${isDragging ? 'dragging' : ''}`}
                        draggable="true"
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <h1>3</h1>
                        <p>Years of Experience</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
