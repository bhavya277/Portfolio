import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer({ scrollToSection }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bhavya Modi</h3>
            <p>IT Engineering Student at Birla Vishvakarma Mahavidyalaya.Having a passion for Python and Cyber Security.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Projects</h4>
            <ul className="footer-links">
              <li><a href="https://hrmsth.varcel.app/" target="_blank" rel="noopener noreferrer">HR Management System</a></li>
              <li><a href="https://expensemanager27.great-site.net" target="_blank" rel="noopener noreferrer">Expense Manager</a></li>
              <li><a href="https://particle-tracking.vercel.app/" target="_blank" rel="noopener noreferrer">Particle Tracking</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/bhavya277" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/bhavya-modi-9a9b28312" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="https://instagram.com/bhavya__277" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Bhavya Modi. All rights reserved.</p>
          <p className="footer-credit">Designed & Built by Bhavya Modi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;