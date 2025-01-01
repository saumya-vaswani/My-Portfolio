import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/contact.css";

const Contact = () => {
  const formRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    // Fade-in animation for heading and form
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 ref={headingRef}>Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
