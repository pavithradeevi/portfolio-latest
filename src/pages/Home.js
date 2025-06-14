import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import "./Home.css";

const Home = () => {
  const text1 = "Hi, I am Pavithra";
  const text3 = "Based in Olomouc, Czech Republic";

  const [displayText1, setDisplayText1] = useState("");
  const [displayText3] = useState(text3); // Static third line
  const [index1, setIndex1] = useState(0);

  // Typewriter effect for the first line
  useEffect(() => {
    if (index1 < text1.length) {
      const timeout = setTimeout(() => {
        setDisplayText1(displayText1 + text1[index1]);
        setIndex1(index1 + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index1, displayText1]);

  const iconAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-30px)" },
    delay: 800,
  });

  return (
    <section className="home-section">
      <div className="home-text">
        <animated.h1>{displayText1}</animated.h1>

        {/* "FULL STACK DEVELOPER" animated text */}
        <div className="big-text">
          <span className="scrolling-text">FULL STACK DEVELOPER</span>
        </div>

        {/* Static third line */}
        <h3>{displayText3}</h3>

        {/* View CV Button */}
        <div className="button-container" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
  <button
    className="view-cv-button"
    onClick={() => window.open("https://drive.google.com/file/d/1peH2nRq1s0XDZk6ouj6eHrWXMMHoBe2g/view?usp=sharing", "_blank")}
  >
    View CV
  </button>

  <a href="https://github.com/pavithradeevi" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{ width: '32px', height: '32px' }} />
  </a>

  <a href="https://www.linkedin.com/in/pavithra-v-148533263/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
  </a>
</div>


      </div>

      {/* Icon on the right side */}
      <animated.div style={iconAnimation} className="home-icon">
        <img
          src="https://icon2.cleanpng.com/20240301/cjb/transparent-business-woman-cartoon-businesswoman-black-suit-re-woman-in-business-suit-with-red-1710856272189.webp"
          alt="Businesswoman illustration"
          className="home-image"
        />
      </animated.div>
    </section>
  );
};

export default Home;
