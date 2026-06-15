import React,{useState,useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {FiMail,FiMapPin,FiLinkedin,FiGithub,FiSend} from 'react-icons/fi';
const SVC='YOUR_SERVICE_ID',TMP='YOUR_TEMPLATE_ID',KEY='YOUR_PUBLIC_KEY';
const Contact=()=>{
  const ref=useRef();
  const [f,sf]=useState({name:'',email:'',subject:'',message:''});
  const [st,ss]=useState(null);
  const hc=e=>sf(p=>({...p,[e.target.name]:e.target.value}));
  const hs=async e=>{
    e.preventDefault();ss('sending');
    try{await emailjs.sendForm(SVC,TMP,ref.current,KEY);ss('success');sf({name:'',email:'',subject:'',message:''});}
    catch{ss('error');}
  };
  return(
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle">Open to ML Engineer, LLM/GenAI, and Full-Stack roles</p>
        </div>
        <div className="contact-grid">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <h3 className="contact-info-title">Ready to build something great?</h3>
            <p className="contact-info-sub">Actively looking for ML Engineer, LLM/GenAI, and Full-Stack opportunities. Whether you have a role in mind or want to collaborate — my inbox is open.</p>
            <div className="contact-detail"><div className="contact-detail-icon"><FiMail/></div><div><div className="contact-detail-label">Email</div><div className="contact-detail-value">shrinivasp9421@gmail.com</div></div></div>
            <div className="contact-detail"><div className="contact-detail-icon"><FiMapPin/></div><div><div className="contact-detail-label">Location</div><div className="contact-detail-value">Fullerton, CA (Open to remote)</div></div></div>
            <div className="contact-socials">
              <a href="https://github.com/shridat" target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="GitHub"><FiGithub/></a>
              <a href="https://linkedin.com/in/shrinivas-patil-70536720b" target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="LinkedIn"><FiLinkedin/></a>
              <a href="mailto:shrinivasp9421@gmail.com" className="contact-social" aria-label="Email"><FiMail/></a>
            </div>
          </motion.div>
          <motion.form ref={ref} className="contact-form" onSubmit={hs} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <div className="form-row">
              <div className="form-group"><label className="form-label">Name</label><input name="name" value={f.name} onChange={hc} className="form-input" placeholder="Your name" required/></div>
              <div className="form-group"><label className="form-label">Email</label><input name="email" type="email" value={f.email} onChange={hc} className="form-input" placeholder="your@email.com" required/></div>
            </div>
            <div className="form-group"><label className="form-label">Subject</label><input name="subject" value={f.subject} onChange={hc} className="form-input" placeholder="ML Engineer role / Collaboration" required/></div>
            <div className="form-group"><label className="form-label">Message</label><textarea name="message" value={f.message} onChange={hc} className="form-textarea" placeholder="Tell me about the role or project..." required/></div>
            <div className="form-submit"><button type="submit" className="btn-primary" disabled={st==='sending'}>{st==='sending'?'⏳ Sending...':<><FiSend/> Send Message</>}</button></div>
            {st==='success'&&<p className="form-success">✅ Message sent! I'll reply within 24 hours.</p>}
            {st==='error'&&<p className="form-error">❌ Something went wrong. Please email me directly at shrinivasp9421@gmail.com</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
