import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

function Hero() {
  return (
    <section id="hero" className="hero">
      <ThreeBackground />
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-greeting"
          >
            Hello, I'm
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              translateZ: 50,
              rotateX: -10,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.8 }}
            className="hero-title"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Bhavya Modi
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-subtitle">
            IT Student
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="hero-description">
            Passionate about Python programming & Data Science
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;