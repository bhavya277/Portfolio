import React from 'react';
import { motion } from 'framer-motion';

function Skills({ skills }) {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <div className="skills-container-marquee">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          My Skills
        </motion.h2>

        <div className="marquee-container">
          <div className="marquee-wrapper">
            <div className="marquee-content scroll-left">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.skill}</span>
                  <div className="skill-dot"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-wrapper reverse">
            <div className="marquee-content scroll-right">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.skill}</span>
                  <div className="skill-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;