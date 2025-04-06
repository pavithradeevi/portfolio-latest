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
        <div className="button-container">
  <button
    className="view-cv-button"
    onClick={() => window.open("https://drive.google.com/file/d/1zcDGnRhXL23YzpYTJbcZ7Ld7HGOOqLZ0/view?usp=sharing", "_blank")}
  >
    View CV
  </button>
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
