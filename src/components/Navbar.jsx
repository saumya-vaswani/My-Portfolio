import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"


const Navbar = () => (
  <div className="navbar">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Navbar;