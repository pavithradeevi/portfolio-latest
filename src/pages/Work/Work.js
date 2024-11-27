import React from "react";
import "./Work.css";

const Work = () => {
  const handleMouseEnter = (index) => {
    const circle = document.getElementById(`circle-${index}`);
    circle.classList.add("animate");
    setTimeout(() => {
      circle.classList.remove("animate");
    }, 1000); // Reset animation after 1 second
  };

  const steps = ["1.Plan", "2.Sketch", "3.Design", "4.Develop", "5.Test"];

  return (

    <div className="howIwork-container">
      <p className="howIwork-heading">HOW I WORK</p>
      <div className="howIwork-content">
        <section className="howIwork-section">
          <div className="workline-container">
            <div className="workvertical-line"></div>
            <div className="workline-texts">
              <p className="worktop-phrase">HOW I WORK</p>
              <p className="workknow-more">My Working Process</p>
            </div>
            
          </div>
          <div className="circles-row">
        {steps.map((step, index) => (
          <div
            key={index}
            id={`circle-${index}`}
            className="circles"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="circles-top-line"></div>
            <p className="circles-content">{step}</p>
          </div>
        ))}
      </div>
        </section>
      
      </div>
    </div>
    
  );
};

export default Work;
