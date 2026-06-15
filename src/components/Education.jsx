import React from 'react';
import { motion } from 'framer-motion';
const edu = [
  { degree:'Master of Science in Computer Science', school:'California State University, Fullerton', period:'2022 - 2024', desc:'Specialized in machine learning, NLP, data analysis, and software engineering. Graduate coursework in deep learning and distributed systems.', icon:'🎓' },
  { degree:'Bachelor of Engineering in Computer Science', school:'Shivaji University', period:'2017 - 2021', desc:'Focused on software development, algorithms, data structures, and computer networks. Strong OOP and system design foundation.', icon:'🏛️' }
];
const Education = () => (
  <section className="education" id="about">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Academic Background</span>
        <h2 className="section-title">Education & <span>Training</span></h2>
      </div>
      <div className="edu-grid">
        {edu.map((e,i) => (
          <motion.div key={i} className="edu-card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.15}} whileHover={{y:-6}}>
            <div className="edu-icon">{e.icon}</div>
            <h3 className="edu-degree">{e.degree}</h3>
            <p className="edu-school">{e.school}</p>
            <p className="edu-period">📅 {e.period}</p>
            <p className="edu-desc">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Education;
