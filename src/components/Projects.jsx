import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {FiGithub} from 'react-icons/fi';
const projects=[
  {title:'Policy Document RAG Chatbot',cat:'LLM / GenAI',featured:true,desc:'End-to-end RAG pipeline for insurance policy PDFs. Natural language Q&A with FAISS vector store, LangChain orchestration, and HuggingFace models deployed via Streamlit.',tech:['LangChain','FAISS','HuggingFace','Streamlit','Python','RAG'],gh:'https://github.com/Shridat/Insuarance-policy-RAG-chatbot',filter:'LLM'},
  {title:'Rental Lease Summarizer',cat:'NLP',featured:false,desc:'NLP app that summarizes rental lease agreements using LangChain and transformers. Extracts key clauses, backed by Firebase.',tech:['LangChain','Python','NLP','Firebase','Flask'],gh:'https://github.com/Shridat/Rental-Lease-Summarizer',filter:'NLP'},
  {title:'Intel Image Classifier (ViT)',cat:'Machine Learning',featured:true,desc:'Vision Transformers built from scratch to classify 6 scene categories from the Intel Image dataset. Compared against CNN baselines.',tech:['PyTorch','Vision Transformers','Python','NumPy'],gh:'https://github.com/Shridat/Intel-Image-Classification',filter:'ML'},
  {title:'Twitter Sentiment Classifier',cat:'NLP',featured:false,desc:'Multi-class tweet sentiment analysis using TF-IDF and Naive Bayes. Full EDA, preprocessing, and evaluation pipeline.',tech:['Scikit-learn','TF-IDF','NLP','Pandas'],gh:'https://github.com/Shridat/Twitter-Sentiment-Analysis',filter:'NLP'},
  {title:'Mobile Price Classifier',cat:'Machine Learning',featured:false,desc:'Compared 5 ML algorithms (LR, SVC, RF, KNN, XGBoost) for mobile price range classification with full hyperparameter tuning.',tech:['Scikit-learn','XGBoost','Python','Pandas'],gh:'https://github.com/Shridat/Mobile-Price-Clasiification',filter:'ML'},
  {title:'Human Emotion Classifier',cat:'NLP',featured:false,desc:'LSTM neural network for human emotion classification with one-hot encoding preprocessing and full evaluation metrics.',tech:['TensorFlow','LSTM','Keras','Python'],gh:'https://github.com/Shridat/Human-Emotion-Classification-',filter:'NLP'},
  {title:'E-Commerce Platform',cat:'Web Dev',featured:false,desc:'Full-featured e-commerce app with product catalog, cart, auth, and orders built with Django and MongoDB.',tech:['Django','Python','MongoDB','HTML'],gh:'https://github.com/Shridat/Ecommerce',filter:'Web'},
  {title:'Quiz App',cat:'Web Dev',featured:false,desc:'Interactive general knowledge quiz with real-time scoring and leaderboard built with ReactJS and Firebase.',tech:['ReactJS','Firebase','JavaScript'],gh:'https://github.com/Shridat/Quiz-App',filter:'Web'}
];
const filters=['All','LLM','ML','NLP','Web'];
const fl={All:'✨ All',LLM:'🤖 LLM/GenAI',ML:'🧠 ML',NLP:'💬 NLP',Web:'🌐 Web'};
const Projects=()=>{
  const [active,setActive]=useState('All');
  const shown=active==='All'?projects:projects.filter(p=>p.filter===active);
  return(
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">Real ML systems, LLM apps, and full-stack products</p>
        </div>
        <div className="projects-filters">{filters.map(f=><button key={f} className={'filter-btn'+(active===f?' active':'')} onClick={()=>setActive(f)}>{fl[f]}</button>)}</div>
        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {shown.map((p,i)=>(
              <motion.div key={p.title} layout initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}} transition={{duration:0.3,delay:i*0.05}} className={'project-card'+(p.featured?' project-featured':'')} whileHover={{y:-6}}>
                <div className="project-card-banner"></div>
                <div className="project-card-body">
                  <div className="project-category-badge">{p.cat}{p.featured&&<span className="featured-badge">⭐ Featured</span>}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">{p.tech.map(t=><span key={t} className="tech-tag">{t}</span>)}</div>
                  <div className="project-links"><a href={p.gh} target="_blank" rel="noopener noreferrer" className="project-link github"><FiGithub/> Code</a></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
