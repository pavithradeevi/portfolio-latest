import React, { useState, useRef } from "react";
import "./Education.css";

const Education = () => {
  const [flipped, setFlipped] = useState([false, false, false]);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = false;
  };

  const handleMouseMove = () => {
    isDragging.current = true;
  };

  const handleMouseUp = (index) => {
    if (!isDragging.current) {
      setFlipped((prev) =>
        prev.map((state, i) => (i === index ? !state : state))
      );
    }
  };

  return (
    <div className="education-container">
      <p className="education-heading">EDUCATION</p>
      <div className="education-content">
        <section className="education-section">
          <div className="educationline-container">
            <div className="educationvertical-line"></div>
            <div className="educationline-texts">
              <p className="educationtop-phrase">Some words about my</p>
              <p className="educationknow-more">Education and Certificates</p>
            </div>
          </div>

          <div className="education-boxes">
            {["BE - ECE", "Full Stack Development", "Python Programming"].map(
              (title, index) => (
                <div
                  key={index}
                  className={`education-box ${flipped[index] ? "flipped" : ""}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={() => handleMouseUp(index)}
                >
                  <div className="education-box-inner">
                  <div className="education-box-front">
  <div>
    <p className="education-box-title">{title}</p>
    <p className="education-box-subtitle">
      {index === 0 ? "(Degree)" : "(Course Completion)"}
    </p>
  </div>
</div>

                    <div className="education-box-back">
                      <p className="education-box-title">
                        {index === 0
                          ? "Anna University,India"
                          : index === 1
                          ? "At GUVI,India"
                          : "Chennai,India"}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
