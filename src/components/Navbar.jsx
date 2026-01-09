import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ scrolled, toggleTheme, isDarkMode, scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Close mobile menu when window is resized to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo"><h2>Bhavya Modi</h2></div>
        <button 
          className="mobile-menu-toggle" 
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div 
          className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => handleNavClick('hero')}>Home</button>
          <button onClick={() => handleNavClick('about')}>About</button>
          <button onClick={() => handleNavClick('skills')}>Skills</button>
          <button onClick={() => handleNavClick('projects')}>Projects</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;