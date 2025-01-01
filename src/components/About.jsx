import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/about.css";

const About = () => {
  const aboutRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Animation for the entire section
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animation for the title
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Animation for the paragraph
    gsap.fromTo(
      textRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={aboutRef} className="about-section">
      <div className="about-content">
        <h2 ref={titleRef}>About Me</h2>
        <p ref={textRef}>
          Hi, I’m a passionate Frontend Developer with a keen eye for detail
          and a love for creating dynamic, user-friendly websites. With
          experience in modern technologies like React and GSAP, I aim to craft
          seamless and engaging digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
