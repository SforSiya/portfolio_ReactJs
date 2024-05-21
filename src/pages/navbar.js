import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <button className="nav-toggle" onClick={() => setExpanded(!expanded)}>
        ☰
      </button>
      <ul className={`navbar-menu ${expanded ? 'expanded' : ''}`}>
        <li><NavLink exact to="/" activeClassName="active" onClick={() => setExpanded(false)}>Home</NavLink></li>
        <li><NavLink to="/skills" activeClassName="active" onClick={() => setExpanded(false)}>Skills</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active" onClick={() => setExpanded(false)}>Projects</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active" onClick={() => setExpanded(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
