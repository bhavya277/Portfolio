import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="geometric-bg">
        <div className="cube cube-1"></div>
        <div className="cube cube-2"></div>
        <div className="cube cube-3"></div>
      </div>
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-greeting">
          Hello, I'm
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
          Bhavya Modi
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-subtitle">
          IT Student
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="hero-description">
          Passionate about Python programming & Cyber Security
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;