import React from 'react';
import { motion } from 'framer-motion';

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-title">
          My Projects
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="projects-description">
          Here are some of the projects I've worked on. Each project was a unique challenge and learning experience.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.15 }} className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div 
              key={proj.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.15 }} 
              className="project-card"
              onClick={() => window.open(proj.link, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-stack">
                {proj.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="projects-cta">
          <a href="https://github.com/bhavya277" target="_blank" rel="noopener noreferrer" className="github-link">More on GitHub →</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;