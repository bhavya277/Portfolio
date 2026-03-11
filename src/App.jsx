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

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Bhavya_Modi_Resume.pdf';
    link.click();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
    }
  };

  const skills = [
    { skill: 'Python', value: 90 },
    { skill: 'PHP', value: 80 },
    { skill: 'JavaScript', value: 80 },
    { skill: 'C++', value: 70 },
    { skill: 'Git & Github', value: 85 },
    { skill: 'Database', value: 80 },
    { skill: 'NumPy', value: 80 },
    { skill: 'Pandas', value: 80 },
    { skill: 'Cyber Security', value: 75 },
    { skill: 'Blockchain', value: 75 },
    { skill: 'FastAPI', value: 70 },
    { skill: 'React', value: 75 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Blockchain Based Voting System',
      description: 'A decentralized voting system built on blockchain technology.',
      tech: ['React', 'FastAPI', 'Web3.js', 'Ethereum','Solidity','Firebase'],
      link: 'https://github.com/bhavya277/blockchain-based-Voting-System.git'
    },
    {
      id: 2,
      title: 'Saarthi AI',
      description: 'An AI-powered platform for personalized learning and skill development.',
      tech: ['FastAPI', 'Qdrant', 'React', 'Three.js'],
      link: 'https://github.com/Sagarkumar1911/EduQuest-AI.git'
    },
    {
      id: 3,
      title: 'HR Management System',
      description: 'Streamlined employee data, attendance, and role-based access control system.',
      tech: ['React', 'Node', 'MongoDB', 'Express'],
      link: 'https://github.com/bhavya277/HRMS_TH.git'
    },
    {
      id: 4,
      title: 'Expense Manager',
      description: 'A full-featured expense manager with budget tracking and financial insights.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      link: 'https://github.com/bhavya277/Expense-Manager.git'
    },
    {
      id: 5,
      title: 'Particle Tracking',
      description: 'Experimental 3D hand movement tracking using WebGL and MediaPipe.',
      tech: ['Three.js', 'MediaPipe', 'WebGL'],
      link: 'https://particle-tracking.vercel.app/'
    }
  ];

  return (
    <>
      <Navbar
        scrolled={scrolled}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />
      <Hero />
      <About handleDownloadResume={handleDownloadResume} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}