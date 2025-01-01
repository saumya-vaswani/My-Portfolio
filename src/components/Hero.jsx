import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/hero.css";

const Hero = () => {
  const heroRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    // Fade-in effect for the hero section
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Slide-in animation for heading and subheading
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      subHeadingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1 }
    );

    // Button pop-in effect
    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.7, delay: 1.5, ease: "bounce.out" }
    );
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-content">
        <h1 ref={headingRef}>Welcome to My Portfolio</h1>
        <p ref={subHeadingRef}>
          I’m a Frontend Developer passionate about crafting interactive
          websites.
        </p>
        <button ref={buttonRef} className="hero-button">
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
