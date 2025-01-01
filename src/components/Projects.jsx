import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsRef = useRef();
  const projectRefs = useRef([]);

  useEffect(() => {
    // Fade-in animation for the section
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Stagger animation for project cards
    gsap.fromTo(
      projectRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive portfolio built with React and GSAP animations to showcase my skills and projects.",
      link: "/",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description:
        "An e-commerce application with features like product filtering, shopping cart, and API integration.",
      link: "github.com/saumya-vaswani/ShopSavvy",
    },
    {
      id: 3,
      title: "Blog Website",
      description:
        "A blog platform featuring search, filtering, and infinite scrolling using React and REST APIs.",
      link: "github.com/saumya-vaswani/CodeBlog",
    },
  ];

  return (
    <section ref={projectsRef} className="projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
