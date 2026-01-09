import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

function Skills({ skills, isDarkMode }) {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="section-title"
          style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="skills-description"
        >
          Here are some of the technologies and tools I am proficient in. I continuously learn and improve my skills to stay updated with the latest trends.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="skills-radar-wrapper"
        >
          <div className="radar-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skills} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                <PolarGrid 
                  stroke={isDarkMode ? 'rgba(79, 70, 229, 0.3)' : 'rgba(79, 70, 229, 0.5)'} 
                  strokeWidth={1}
                  gridType="polygon"
                />
                <PolarAngleAxis 
                  dataKey="skill" 
                  tick={{ fill: isDarkMode ? '#cbd5e1' : '#1a1a1a', fontSize: 14, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  tickLine={{ stroke: isDarkMode ? 'rgba(79, 70, 229, 0.5)' : 'rgba(79, 70, 229, 0.7)' }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="url(#colorGradient)"
                  fill="url(#colorGradient)"
                  fillOpacity={0.6}
                  strokeWidth={3}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity={1} />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload[0]) {
                      const skillData = skills.find(s => s.skill === payload[0].payload.skill);
                      const value = payload[0].value;
                      return (
                        <div className="skill-tooltip">
                          <h4>{skillData?.skill} - {value}%</h4>
                          <p>{skillData?.description}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                  cursor={{ stroke: '#4f46e5', strokeWidth: 2, strokeDasharray: '5 5' }}
                  wrapperStyle={{ zIndex: 1000 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;