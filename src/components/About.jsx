import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

function About({ handleDownloadResume }) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-title">
          About Me
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="about-content">
          <div className="about-main">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="about-photo"
            >
              <img src="profile-photo.jpeg" alt="Bhavya Modi" />
            </motion.div>
            <div className="about-text">
              <h3>I'm Bhavya Modi</h3>
              <p>I am passionate about Python programming & Cyber Security</p>
              <p>My journey in Python programming & Cyber Security has led me to work on various projects that have significantly contributed to my growth as a developer. I love creating solutions that make a difference and continuously learning new technologies.</p>
              <div className="resume-download-btn-wrapper">
                <motion.button 
                  onClick={handleDownloadResume}
                  className="resume-download-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <FaDownload /> Download Resume
                </motion.button>
              </div>
            </div>
          </div>
          <div className="about-details">
            <div className="about-card">
              <h4>Education</h4>
              <ul>
                <li>B.Tech in Information Technology</li>
                <li>Higher Secondary School Certificate</li>
              </ul>
            </div>
            <div className="about-card">
              <h4>Interests</h4>
              <ul>
                <li>Python </li>
                <li>Cyber Security</li>
                <li>Problem Solving</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;