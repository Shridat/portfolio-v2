import React from 'react';
import { motion } from 'framer-motion';
const cats=[
  {title:'LLM / GenAI',color:'var(--accent-cyan)',emoji:'🤖',featured:true,skills:[{n:'LangChain',i:'🔗'},{n:'LlamaIndex',i:'🦙'},{n:'OpenAI API',i:'⚡'},{n:'RAG Pipelines',i:'📚'},{n:'FAISS',i:'🔍'},{n:'Pinecone',i:'🌲'},{n:'HuggingFace',i:'🤗'},{n:'Prompt Engineering',i:'✍️'},{n:'Fine-tuning (LoRA)',i:'🎯'}]},
  {title:'ML / Deep Learning',color:'var(--accent-purple)',emoji:'🧠',skills:[{n:'Python',i:'🐍'},{n:'PyTorch',i:'🔥'},{n:'TensorFlow',i:'📊'},{n:'Scikit-learn',i:'⚙️'},{n:'Pandas',i:'🐼'},{n:'NumPy',i:'🔢'},{n:'Matplotlib',i:'📈'},{n:'Vision Transformers',i:'👁️'},{n:'NLP',i:'💬'}]},
  {title:'Backend & APIs',color:'var(--accent-green)',emoji:'⚙️',skills:[{n:'Django',i:'🌿'},{n:'FastAPI',i:'⚡'},{n:'NodeJS',i:'🟢'},{n:'REST APIs',i:'🔌'},{n:'Docker',i:'🐳'},{n:'Streamlit',i:'🎈'},{n:'SQL',i:'🗄️'},{n:'MongoDB',i:'🍃'},{n:'Firebase',i:'🔥'}]},
  {title:'Frontend',color:'var(--accent-amber)',emoji:'🎨',skills:[{n:'ReactJS',i:'⚛️'},{n:'JavaScript',i:'🟨'},{n:'TypeScript',i:'🔷'},{n:'C++',i:'⚡'},{n:'HTML / CSS',i:'🎨'}]},
  {title:'Cloud & MLOps',color:'var(--accent-cyan)',emoji:'☁️',skills:[{n:'AWS',i:'☁️'},{n:'Google Cloud',i:'🌐'},{n:'MLflow',i:'📋'},{n:'Git / GitHub',i:'🐙'},{n:'W&B',i:'📊'},{n:'Linux / Bash',i:'🐧'}]}
];
const Skills=()=>(
  <section className="skills" id="skills">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Technical Arsenal</span>
        <h2 className="section-title">Skills & <span>Technologies</span></h2>
        <p className="section-subtitle">Specialized in LLM/GenAI with a strong ML and full-stack foundation</p>
      </div>
      <div className="skills-categories">
        {cats.map((cat,ci)=>(
          <motion.div key={cat.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:ci*0.1}}>
            <div className="skill-category-title" style={{color:cat.color}}><span>{cat.emoji}</span> {cat.title}</div>
            <div className="skills-grid">
              {cat.skills.map((sk,si)=>(
                <motion.div key={sk.n} className={'skill-pill'+(cat.featured?' featured':'')} whileHover={{scale:1.05,y:-3}} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.3,delay:si*0.04}}>
                  <span className="skill-icon">{sk.i}</span>{sk.n}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;
