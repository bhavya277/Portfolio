import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // User should add their resume.pdf to the public folder
    link.download = 'Bhavya_Modi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback: If file doesn't exist, show alert
    link.onerror = () => {
      alert('Resume file not found. Please add resume.pdf to the public folder.');
    };
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
    }
  };

  const skills = [
    {
      skill: 'Python',
      value: 90,
      description: 'Built responsive layouts, forms, and landing pages with semantic HTML5'
    },
    {
      skill: 'PHP',
      value: 80,
      description: 'Created modern UIs with Flexbox, Grid, animations, and responsive design'
    },
    {
      skill: 'JavaScript',
      value: 80,
      description: 'Developed interactive web apps with ES6+, async operations, and DOM manipulation'
    },
    {
      skill: 'C++',
      value: 70,
      description: 'Solved algorithmic problems and built efficient data structures'
    },
    {
      skill: 'Git & Github',
      value: 85,
      description: 'Proficient in Git & GitHub for version control, collaboration, and code management'
    },
    {
      skill: 'Database',
      value: 80,
      description: 'Designed schemas, wrote queries, and optimized database performance'
    }
  ];

  const projects = [
    { id: 1, title: 'Saarthi AI', description: 'An AI-powered platform for personalized learning and skill development.', tech: ['FastAPI', 'Qdrant', 'HTML5', 'CSS3(Glassmorphism)', 'Vanilla JS',], link: 'https://github.com/Sagarkumar1911/EduQuest-AI.git' },
    { id: 2 title: 'HR Management System', description: 'Developed a HR Management System to streamline employee data, attendance, leave management, and role-based access control.', tech: ['React', 'Node', 'MongoDB', 'Express'], link: 'https://github.com/bhavya277/HRMS_TH.git' },
    { id: 3, title: 'Expense Manager', description: 'A full-featured expense manager with budget tracking and financial insights.', tech: ['PHP', 'MYSQL', 'JavaScript'], link: 'https://expensemanager27.great-site.net' },
    { id: 4, title: 'Particle Tracking', description: 'It trackes your hand movement and responds with different shapes', tech: ['HTML', 'Three.js', 'MediaPipe', 'WebGL'], link: 'https://particle-tracking.vercel.app/' },
    // { id: 4, title: 'Portfolio Generator', description: 'SaaS platform that helps developers create beautiful portfolio websites in minutes.', tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'], link: 'https://example.com/portfolio-generator' }
  ];

  return (
    <>
      <Navbar scrolled={scrolled} toggleTheme={toggleTheme} isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
      <Hero />
      <About handleDownloadResume={handleDownloadResume} />
      <Skills skills={skills} isDarkMode={isDarkMode} />
      <Projects projects={projects} />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}