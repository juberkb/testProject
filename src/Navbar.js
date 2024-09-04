import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <header className="navbar">
      <div className="navbar-container">
      
        <div className="logo">
          <Link to="/">YourLogo</Link>
        </div>
        <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'show' : 'hide'}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>

          {/* <Link to="/studentform" onClick={toggleMenu}>studentForm</Link> */}
        
        </nav>
      </div>
    
    </header>
  );
};

export default Navbar;