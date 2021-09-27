import React from 'react';
import { FaReact, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <Router>
      <nav className="nav">
          <h2 id="icon">
            Countries In Asia
          </h2>
      </nav>
    </Router>
  );
};

export default NavBar;
