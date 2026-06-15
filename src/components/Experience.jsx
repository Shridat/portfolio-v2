import React from 'react';
import { motion } from 'framer-motion';
const exps = [
  { role:'Machine Learning Engineer', company:'Script Build', period:'Jun 2021 – Jul 2022', bullets:['Directed a team to develop an end-to-end ML system achieving 87% accuracy, enhancing model performance by 20% through feature engineering and hyperparameter optimization.','Engineered an automated ML pipeline enabling 35% faster model training and deployment, reducing time-to-production significantly.'] },
  { role:'Teaching Associate — Data Structures', company:'California State University, Fullerton', period:'Aug 2023 – May 2024', bullets:['Led C++ data structure sessions, boosting student problem-solving ability by 70% — enabling 80% of students to independently solve medium-level DSA problems.','Achieved a 95% pass rate across 110 students and earned a 5-star rating on Rate My Professor.'] }
];
const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Work History</span>
        <h2 className="section-title">Professional <span>Experience</span></h2>
      </div>
      <div className="timeline">
        {exps.map((e,i)=>(
          <motion.div key={i} className="timeline-item" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.15}}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <h3 className="timeline-role">{e.role}</h3>
                <span className="timeline-period">{e.period}</span>
              </div>
              <p className="timeline-company">{e.company}</p>
              <ul className="timeline-bullets">{e.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
