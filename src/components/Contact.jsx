import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-title">
          Get In Touch
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="contact-description">
          Feel free to contact me for any work opportunities or just to say hello!
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-icon"><FaEnvelope /></div>
            <h4>Email</h4>
            <a href="mailto:modibhavya128@gmail.com">modibhavya128@gmail.com</a>
          </div>
          <div className="contact-info-card">
            <div className="contact-icon"><FaPhone /></div>
            <h4>Phone</h4>
            <a href="tel:+1234567890">+91 9328920490</a>
          </div>
          <div className="contact-info-card">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <h4>Location</h4>
            <p>Gujarat, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;