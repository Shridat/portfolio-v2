import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);
  const opts = {
    background: { color: { value: 'transparent' } }, fpsLimit: 60,
    interactivity: { events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } }, modes: { grab: { distance: 140 }, push: { quantity: 2 } } },
    particles: { color: { value: ['#00d4ff','#7c3aed','#10b981'] }, links: { color: '#00d4ff', distance: 150, enable: true, opacity: 0.15, width: 1 }, move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } }, number: { density: { enable: true, area: 900 }, value: 60 }, opacity: { value: { min: 0.1, max: 0.4 } }, size: { value: { min: 1, max: 3 } } },
    detectRetina: true
  };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i=1) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i*0.1, ease: 'easeOut' } }) };
  return (
    <section className="hero" id="about">
      <div className="hero-particles"><Particles id="tsparticles" init={particlesInit} options={opts} /></div>
      <div className="hero-content">
        <div className="hero-text">
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
            <p className="hero-greeting">Available for opportunities</p>
          </motion.div>
          <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible">
            <h1 className="hero-name">
              <span style={{color:'var(--text-primary)'}}>Shrinivas </span>
              <span className="hero-name-gradient">Patil</span>
            </h1>
          </motion.div>
          <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible">
            <p className="hero-role">
              <span className="hero-role-prefix">I build&nbsp;</span>
              <TypeAnimation sequence={['LLM & GenAI Systems',2200,'RAG Pipelines',2000,'ML Models',2000,'Full-Stack Apps',2000,'NLP Solutions',2000]} wrapper="span" speed={55} repeat={Infinity} style={{color:'var(--accent-cyan)',fontWeight:700}} />
            </p>
          </motion.div>
          <motion.p className="hero-bio" variants={fadeUp} custom={4} initial="hidden" animate="visible">
            MS Computer Science from CSUF. I specialize in building intelligent systems — RAG pipelines, LLM applications, end-to-end ML platforms, and full-stack products. Actively seeking ML Engineer & LLM/GenAI roles.
          </motion.p>
          <motion.div className="hero-cta" variants={fadeUp} custom={5} initial="hidden" animate="visible">
            <a href="/static/media/shrinivas-AIML.pdf" className="btn-primary" download><FiDownload /> Download Resume</a>
            <a href="#contact" className="btn-secondary"><FiMail /> Get in touch</a>
          </motion.div>
          <motion.div className="hero-socials" variants={fadeUp} custom={6} initial="hidden" animate="visible">
            <a href="https://github.com/shridat" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/in/shrinivas-patil-70536720b" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:shrinivaspatil@csufullerton.edu" className="hero-social-link" aria-label="Email"><FiMail /></a>
          </motion.div>
          <motion.div className="hero-stats" variants={fadeUp} custom={7} initial="hidden" animate="visible">
            <div className="hero-stat"><div className="hero-stat-number">87%</div><div className="hero-stat-label">ML Accuracy</div></div>
            <div className="hero-stat"><div className="hero-stat-number">35%</div><div className="hero-stat-label">Faster Deploy</div></div>
            <div className="hero-stat"><div className="hero-stat-number">110+</div><div className="hero-stat-label">Students Mentored</div></div>
            <div className="hero-stat"><div className="hero-stat-number">10+</div><div className="hero-stat-label">ML Projects</div></div>
          </motion.div>
        </div>
        <motion.div className="hero-avatar-container" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.8}}>
          <div className="hero-avatar-floating badge-top"><span className="badge-dot"></span> Open to Work</div>
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar-inner">
              <img src="/avatar.png" alt="Shrinivas Patil" className="hero-avatar-img" onError={e=>{e.target.style.display='none';e.target.parentNode.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;">👨‍💻</div>';}} />
            </div>
          </div>
          <div className="hero-avatar-floating badge-bottom">🤖 LLM / GenAI Engineer</div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
