import React from 'react';
import {motion} from 'framer-motion';
const certs=[
  // Add certs here: { name, issuer, date, logo, link }
];
const Certifications=()=>(
  <section className="certifications" id="certifications">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Credentials</span>
        <h2 className="section-title">Certifications & <span>Awards</span></h2>
      </div>
      {certs.length===0?(
        <motion.div className="certs-coming-soon" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="certs-icon">🏆</div>
          <p className="certs-coming-text">Certifications Coming Soon</p>
          <p className="certs-sub">Currently pursuing AWS ML Specialty and Google Professional ML Engineer certifications</p>
        </motion.div>
      ):(
        <div className="certs-grid">
          {certs.map((c,i)=>(
            <motion.a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="cert-card" style={{textDecoration:'none'}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} whileHover={{y:-4}}>
              <img src={c.logo} alt={c.issuer} className="cert-logo"/>
              <div><p className="cert-name">{c.name}</p><p className="cert-issuer">{c.issuer}</p><p className="cert-date">{c.date}</p></div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  </section>
);
export default Certifications;
