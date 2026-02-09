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
              whileHover={{
                rotateY: 15,
                rotateX: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-photo"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <img src="profile-photo.jpeg" alt="Bhavya Modi" style={{ borderRadius: '20px' }} />
            </motion.div>
            <div className="about-text">
              <h3>I'm Bhavya Modi</h3>
              <p>A second-year IT undergraduate with a strong interest in Python programming and Data Science & Analytics, focused on building a solid foundation in problem-solving and data-driven insights.</p>
              <p>I'm always eager to learn, collaborate, and connect with like-minded data and tech professionals and I love creating solutions that make a difference and continuously learning new technologies.</p>
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
                <li>B.Tech in Information Technology with Honors in Data Science & Analytics</li>
                <li>Higher Secondary School Certificate</li>
              </ul>
            </div>
            <div className="about-card">
              <h4>Interests</h4>
              <ul>
                <li>Python </li>
                <li>Data Science</li>
                <li>Data Analytics</li>
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