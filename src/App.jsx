import React, { useState, useRef, useEffect } from 'react';
import './App.css'; 
import { TrendingUp, BarChart3, Users, ArrowUpRight, FolderOpen, Github, Linkedin, Mail, Briefcase, FileText, Code2, GraduationCap, Zap, Clock, Target, Download, Layers, LayoutTemplate, Award, CheckCircle2, Box, Laptop, UserCheck, Menu, X, MapPin, Phone } from "lucide-react";

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" }, // Added About Me
    { name: "Impact", id: "impact" },
    { name: "Experience", id: "work" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" }
  ];

  return (
    <>
      <nav className="glass-nav">
        <div className="nav-content">
          <a href="#home" className="nav-logo">Kunal</a>
          <div className="desktop-links">
            {links.map((link) => (
              <a key={link.name} href={`#${link.id}`} className="nav-link">{link.name}</a>
            ))}
          </div>
          <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.name} href={`#${link.id}`} className="mobile-nav-link" onClick={() => setIsOpen(false)}>{link.name}</a>
          ))}
        </div>
      )}
    </>
  );
};

// --- TYPEWRITER COMPONENT ---
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="cursor"></span>
    </span>
  );
};

// --- CONTACT MODAL ---
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <h2 style={{marginBottom: '2rem', fontSize: '1.8rem'}}>Get in Touch</h2>
        <div className="modal-row"><div className="section-icon-box"><Mail size={20} /></div><div><div className="modal-label">Gmail</div><div className="modal-value">kunalshrofff@gmail.com</div></div></div>
        <div className="modal-row"><div className="section-icon-box"><Linkedin size={20} /></div><div><div className="modal-label">LinkedIn</div><a href="#" className="modal-value" style={{textDecoration:'none', color:'#1a1a1a'}}>https://www.linkedin.com/in/kunal-shroff-485b4b1b4</a></div></div>
        <div className="modal-row"><div className="section-icon-box"><Phone size={20} /></div><div><div className="modal-label">Phone</div><div className="modal-value">+91 8779673427</div></div></div>
        <div className="modal-row"><div className="section-icon-box"><MapPin size={20} /></div><div><div className="modal-label">Location</div><div className="modal-value">Mumbai, India</div></div></div>
      </div>
    </div>
  );
};

const BentoCard = ({ children, className = "", span = 1, onClick, id }) => (
  <div 
    id={id} 
    onClick={onClick} 
    className={`bento-card span-${span} ${onClick ? 'interactive' : ''} ${className}`}
  >
    {children}
  </div>
);

// --- IMAGE PREVIEW MODAL (With Zoom) ---
const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;
  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      style={{zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <div 
        className="zoom-image" 
        style={{position: 'relative', maxWidth: '90%', maxHeight: '90%'}} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close" 
          onClick={onClose} 
          style={{top: '-20px', right: '-20px', background: 'white', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'}}
        >
          <X size={24} />
        </button>
        <img 
          src={imgSrc} 
          alt="Certificate Full View" 
          style={{
            maxWidth: '100%', 
            maxHeight: '85vh', 
            borderRadius: '12px', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }} 
        />
      </div>
    </div>
  );
};



// --- MAIN APP ---
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState('impactguru');
  const selectedJob = [
    {
      id: 'impactguru',
      role: "Associate Product Manager",
      company: "Impactguru",
      period: "Oct 2024 - Nov 2025",
      color: "blue",
      bullets: [
        "Led end-to-end development of the BD app dashboard with a fee-upgrade flow, driving a 2% revenue increase.",
        "Delivered an OCR-powered billing module, bringing billing errors down to under 1%.",
        "Automated settlement and receipts through Razorpay APIs, cutting TAT to 24–48 hours.",
        "Launched a POC tracking and feedback system that grew leads by 5% and improved lead-to-campaign conversions by 10%.",
        "Built a WhatsApp consent system increasing GMV by 5%.",
        "Automated chargeback/refund syncing with Razorpay APIs, raising internal–PG match rates from ~90% to 97%."
      ]
    },
    {
      id: 'skillmatics',
      role: "Product Management Intern",
      company: "Skillmatics",
      period: "Apr 2024 - Jun 2024",
      color: "yellow",
      bullets: [
        "Revamped product display pages increasing conversion by 8%.",
        "Built bottom-nav bar improving site navigation.",
        "Boosted AOV by 5% through A/B testing new features.",
        "Created internal analytics dashboards using GA4."
      ]
    },
    {
      id: 'laaj',
      role: "Assistant Portfolio Manager",
      company: "Laaj International",
      period: "Mar 2021 - Feb 2024",
      color: "green",
      bullets: [
        "Achieved 40% returns in FY 23-24 managing 10 Cr+ portfolio.",
        "Developed risk management strategies for derivatives.",
        "Built internal dashboard for real-time P/L tracking."
      ]
    }
  ].find(j => j.id === selectedJobId);

  const [selectedEduId, setSelectedEduId] = useState('grad');
  const selectedEdu = education => { // Helper not needed, using direct find below
  };

  const workExRef = useRef(null);
  const handleImpactClick = (jobId) => {
    setSelectedJobId(jobId);
    workExRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{position: 'relative', paddingTop: '80px'}}>
      <div className="gradient-bg"></div>
      <Navbar />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <ImageModal isOpen={showCertModal} onClose={() => setShowCertModal(false)} imgSrc="/nextleap-logo.png" />

      <div className="bento-grid">

        {/* 1. HERO */}
        <BentoCard span={2} className="hero-mode" id="home">
          <div className="hero-container">
             <h1 style={{marginBottom: '0.5rem'}}>Hi, I am Kunal Shroff</h1>
             <h2 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#594632'}}>
               Product Manager specializing in <span className="typewriter-text">
                 <Typewriter words={["Fintech", "Media", "CRM Workflows", "API Integrations"]} />
               </span>
             </h2>
             <p style={{fontSize: '1.15rem', maxWidth: '90%', marginBottom: '2rem'}}>
               A product thinker with a builder’s mindset, I work across revenue, settlements, and user workflows to ship meaningful outcomes. 
               Off the clock, I’m into football, Video games, Cricket, Stock market, and creating meme-level insights on Twitter.
             </p>
             <div className="action-bar" style={{marginTop: '0'}}>
               <a href="/kunal-shroff-cv.pdf" download= "Kunal-Shroff-CV.pdf"className="action-btn primary"><Download size={18} /> Download CV</a>
               <button onClick={() => setShowModal(true)} className="action-btn"><Mail size={18} /> Get in Touch</button>
             </div>
          </div>
        </BentoCard>

        {/* 2. IMPACT */}
        <BentoCard id="impact">
          <h2>Key Impact</h2>
          <div className="impact-list">
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><Zap size={20} color="#E67847" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+2% Revenue</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>BD App Fees Upgrade</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><TrendingUp size={20} color="#10b981" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+5% GMV</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>WhatsApp Consent System</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><Clock size={20} color="#f59e0b" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>24-48h TAT</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>Settlement Completion</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><Target size={20} color="#3b82f6" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+10% Funnel</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>Lead-to-Campaign</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><CheckCircle2 size={20} color="#8b5cf6" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>97% Accuracy</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>Auto Chargeback & Refund</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('laaj')} style={{cursor:'pointer'}}>
               <div className="icon-box"><BarChart3 size={20} color="#ef4444" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>40% Returns</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>Portfolio Management</div></div>
            </div>
          </div>
        </BentoCard>

        {/* 3. NEW ABOUT ME SECTION (No Tile) */}
        <BentoCard span={3} className="hero-mode" id="about">
           <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#1a1a1a'}}>About Me</h2>
           <p style={{color: '#594632', fontWeight: '700', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px'}}>
             I am a product manager who thrives at the intersection of data, design, and user psychology, 
             currently driving key charters in Settlements, Revenue, and the BD App at ImpactGuru.I specialize in building scalable systems, 
             automating complex workflows, and improving financial operations through product, data, and API-driven solutions.
             <br/><br/>
             Across ImpactGuru, and Skillmatics, I’ve shipped products end-to-end—from dashboards to PDP redesigns and WhatsApp-based growth systems. 
             My work has improved conversion rates, reduced operational effort, and enhanced stability across internal and customer-facing systems. 
             Before transitioning into product, I managed a ₹10 Cr portfolio at Laaj International, strengthening my analytical and 
             strategic decision-making foundation.
             <br/><br/>
             When I'm not writing PRDs or analyzing SQL queries, you can find me debating the latest Football match.
             I’m also an active stock-market investor who enjoys combining product thinking with market insight.
           </p>
        </BentoCard>

        {/* 4. WORK EXPERIENCE */}
        <BentoCard span={3} id="work">
          <div ref={workExRef} className="section-icon-header">
            <div className="section-icon-box"><Briefcase size={24} /></div>
            <h2>Work Experience</h2>
          </div>
          <div className="split-timeline">
            <div className="timeline-list">
              {['impactguru', 'skillmatics', 'laaj'].map((id) => {
                 const job = [
                    { id: 'impactguru', role: "Associate Product Manager", company: "Impactguru", period: "Oct 2024 - Nov 2025" },
                    { id: 'skillmatics', role: "Product Management Intern", company: "Skillmatics", period: "Apr 2024 - Jun 2024" },
                    { id: 'laaj', role: "Assistant Portfolio Manager", company: "Laaj International", period: "Mar 2021 - Feb 2024" }
                 ].find(j => j.id === id);

                 return (
                  <button key={job.id} className={`timeline-item-btn ${selectedJobId === job.id ? 'active' : ''}`} onClick={() => setSelectedJobId(job.id)}>
                    <div className="timeline-circle"></div>
                    <div style={{fontWeight: '700', color: '#1f2937', fontSize: '1.1rem'}}>{job.role}</div>
                    <div style={{fontSize: '0.95rem', color: '#E67847', marginBottom:'0.25rem', fontWeight:'600'}}>{job.company}</div>
                    <div style={{fontSize: '0.85rem', color: '#6b7280'}}>{job.period}</div>
                  </button>
                 );
              })}
            </div>
            <div className={`sticky-note ${selectedJob.color}`}>
               <div style={{fontWeight:'bold', fontSize:'1.3rem', marginBottom:'1.5rem', borderBottom:'1px solid rgba(0,0,0,0.1)', paddingBottom:'0.5rem'}}>Key Achievements</div>
               <ul style={{paddingLeft:'1.2rem', margin:0}}>
                 {selectedJob.bullets.map((b, i) => (<li key={i} style={{marginBottom:'0.75rem', lineHeight:'1.6', fontSize:'1rem'}}>{b}</li>))}
               </ul>
            </div>
          </div>
        </BentoCard>

        {/* 5. PROJECTS */}
        <BentoCard span={3} id="projects">
          <div className="section-icon-header">
            <div className="section-icon-box"><Code2 size={20} /></div>
            <h2>Personal & Professional Projects</h2>
          </div>
          <div className="project-grid-container">
            {[
              { title: "ETF Nexus", desc: "A web-based ETF tracking tool I built to help people monitor and analyze key ETFs & their constituents in one place.", tech: ["React", "Python", "Vercel", "Vite", "API"], link: "https://etf-nexus.vercel.app" },
              { title: "Portfolio V1", desc: "A React-powered personal website showcasing my education, skills, projects and professional journey. (This Website)", tech: ["React", "Vite", "CSS", "Vercel"] },
              { title: "BD App Fees Upgrade", desc: "A feature prototype I designed to drive revenue and boost operational productivity of our internal agents.", tech: ["Product Strategy", "Data Visualization"],link:"https://preview--vision-into-vista.lovable.app" },
              { title: "Billing Module", desc: "Wireframes of OCR-driven billing module that centralizes all bills, automates data extraction and verification,", tech: ["Automation", "OCR Automation", "Fintech"], link:"https://whimsical.com/billing-module-and-settlement-auto-completion-flow-F25ygSrHFFmhEhYKvBzkc6" }
            ].map((p, i) => (
              <a 
                      key={i} 
                      href={p.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{textDecoration: 'none', display: 'block', color: 'inherit'}}
                    >
                      <div className="project-tile">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'1rem' }}>
                           <h3 style={{ fontSize: '1.25rem', color: '#1f2937' }}>{p.title}</h3>
                           <ArrowUpRight size={20} className="text-gray" />
                        </div>
                        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>{p.desc}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </BentoCard>  

        {/* 6. CERTIFICATIONS */}
        <BentoCard span={1} id="certifications">
          <div className="cert-header" style={{ alignItems: 'flex-start' }}>
            <div style={{ flex: 1, paddingRight: '1rem' }}>
              <h2 style={{fontSize:'1.4rem', fontWeight:'800', color:'#2D2420', marginBottom:'0.5rem'}}>Certifications</h2>

              {/* Updated: Bold Orange Font */}
              <div style={{fontSize:'0.85rem', color:'#594632', fontWeight:'700', marginBottom:'1rem'}}>
                Product Manager Fellowship
              </div>

              <a 
                href="https://nextleap.app/portfolio/kunal-shroff" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{fontSize:'0.9rem', color:'#E67847', textDecoration:'none', fontWeight:'600', display:'inline-block'}}
              >
                Learn More
              </a>
            </div>
            {/* Clickable Logo - Opens Image Modal */}
            <div 
              onClick={(e) => {
                e.preventDefault(); // Prevent any default link behavior
                setShowCertModal(true);
              }}
              className="cert-logo-circle" 
              style={{
                width:'100px', 
                height:'100px', 
                flexShrink: 0,
                overflow:'hidden', 
                padding:'0', 
                border:'3px solid #E67847',
                cursor:'pointer',
                display:'block',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
               <img src="/nextleap-logo.png" alt="NL" style={{width:'100%', height:'100%', objectFit:'cover'}} 
                    onError={(e) => {e.target.style.display='none'; e.target.parentNode.innerText='NL'}} /> 
            </div>            
          </div>

          {/* Updated: Reduced bottom margin to close gap with Top Skills */}
          <div style={{marginBottom:'1.5rem', marginTop:'1rem'}}>
             {/* Updated: Orange Color */}
             <div style={{fontSize:'0.75rem', color:'#594632', marginBottom:'0.75rem', textTransform:'uppercase', letterSpacing:'0.05em', fontWeight:'700'}}>
               Evaluated by Product Managers from:
             </div>
             <div className="mentor-badge-container" style={{flexWrap:'wrap', gap:'0.5rem', marginBottom: '0'}}>
               <div className="mentor-badge">Khatabook</div>
               <div className="mentor-badge">ZenfitX</div>
               <div className="mentor-badge">PhonePe</div>
             </div>
          </div>

          <div>
            <h3 style={{fontSize:'1.2rem', color:'#594632', marginBottom:'1rem', marginTop:'0.5rem', fontWeight:'700', textAlign:'center'}}>Top Skills</h3>

            {[
              { name: "Data & Metrics Orientation", score: 88 },
              { name: "Clarity & Depth of Thought", score: 75 },
              { name: "Creativity of Solution", score: 69 },
              { name: "Presentation & Communication", score: 66 }
            ].map((c, i) => (
              <div key={i} className="cert-row">
                 <div className="cert-name">
                   <span style={{color:'#594632', fontWeight:'600'}}>{c.name}</span>
                   <span style={{color:'#1a1a1a', fontWeight:'700'}}>{c.score}%</span>
                 </div>
                 <div className="cert-bar-bg">
                   <div className="cert-bar-fill" style={{width:`${c.score}%`, background:'#E67847'}}></div>
                 </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 7. GRADUATION PROJECT (With Image Thumbnail) */}
        <BentoCard span={2}>
           <div className="grad-project-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

             {/* 1. Title & Description */}
             <div style={{ marginBottom: '1.5rem' }}>
               <h2 style={{fontSize:'1.5rem', marginBottom:'0.75rem', color:'#2D2420'}}>Graduation Project</h2>
               <p style={{fontSize:'1.05rem', fontWeight:"600",color:'#594632', maxWidth:'600px'}}>
                I built an MVP that connects pet parents with trusted service providers and facilitates safe, structured socialization experiences.
               </p>
             </div>

             {/* 2. Real Image Thumbnail */}
             {/* Ensure 'project-thumbnail.jpg' is uploaded to your public folder */}
             <div className="grad-thumb-big" style={{ flex: 1, marginBottom: '1.5rem', minHeight: '220px', padding: 0, overflow: 'hidden' }}>
                <img 
                  src="/project-thumnail.png" 
                  alt="Graduation Project Preview" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide if image not found
                    e.target.parentNode.style.padding = '2rem'; // Restore padding for text fallback
                    e.target.parentNode.innerText = 'Image not found. Please upload project-thumbnail.jpg';
                  }}
                />
             </div>

             {/* 3. Button */}
             <div>
               <a 
                 href="/Graduation-project.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="action-btn primary"
                 style={{ display: 'inline-flex', textDecoration: 'none' }}
               >
                 View Project Deck <ArrowUpRight size={16} />
               </a>
             </div>
           </div>
        </BentoCard>

        {/* 7. DECK VAULT */}
        {/* 7. DECK VAULT (Thumbnails + Links/PDFs) */}
        <BentoCard span={3}>
           <div className="section-icon-header">
             <div className="section-icon-box"><Layers size={20} /></div>
             <h2>Deck Vault</h2>
           </div>

           <div className="deck-scroll-container">
             {[
               { 
                 title: "BD POC Management (PRD)", 
                 desc: "A detailed PRD for the feature", 
                 link: "https://whimsical.com/poc-management-VucfKmRkZScPBvVP4TZKtP", // <--- INSERT YOUR EXTERNAL LINK
                 thumb: "/thumb-bd.png" 
               },
               { 
                 title: "Competitor Analysis", 
                 desc: "Deep dive into market landscape & feature gaps.", 
                 link: "https://whimsical.com/mid-day-homepage-TY9JfZv6ogYsG3jVwpNEqy", // <--- INSERT YOUR EXTERNAL LINK
                 thumb: "/thumb-competitor.png" 
               },
               { 
                 title: "Analyzing User Experience", 
                 desc: "Usability Heuristics for User Interface Design.", 
                 link: "/google-photos.pdf", // <--- Opens PDF from public folder
                 thumb: "/thumb-photos.png" 
               },
               { 
                 title: "Shopping assistant for Flipkart", 
                 desc: "Building AI chatbot for Flipkart", 
                 link: "/flipkart.pdf",      // <--- Opens PDF from public folder
                 thumb: "/thumb-flipkart.png" 
               },
               { 
                 title: "Product Teardown- Netflix", 
                 desc: "A detailed analysis of New User Onboarding by Netflix.", 
                 link: "/netflix.pdf",       // <--- Opens PDF from public folder
                 thumb: "/netflix.png" 
               }
             ].map((d, i) => (
               <a 
                 key={i}
                 href={d.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="deck-card-large"
                 style={{textDecoration: 'none', display: 'block', cursor: 'pointer', color: 'inherit'}}
               >
                  {/* Thumbnail Image */}
                  <div 
                    className="deck-thumb-large" 
                    style={{ 
                      padding: 0, 
                      overflow: 'hidden', 
                      background: '#fff',
                      border: '1px solid rgba(230, 120, 71, 0.1)' 
                    }}
                  >
                     <img 
                       src={d.thumb} 
                       alt={d.title} 
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                       onError={(e) => {
                         e.target.style.display='none'; 
                         e.target.parentNode.style.display='flex';
                         e.target.parentNode.innerText='Img Not Found';
                         e.target.parentNode.style.fontSize='0.8rem';
                         e.target.parentNode.style.color='#9ca3af';
                       }}
                     />
                  </div>

                  {/* Title & Description */}
                  <div style={{fontWeight:'700', fontSize:'1.1rem', marginBottom:'0.25rem', color:'#1f2937'}}>
                    {d.title}
                  </div>
                  <div style={{fontSize:'0.9rem', color:'#6b7280', lineHeight: '1.4'}}>
                    {d.desc}
                  </div>
               </a>
             ))}
           </div>
        </BentoCard>


        {/* 8. EDUCATION */}
        <BentoCard span={3} id = "education">
          <div className="section-icon-header"><div className="section-icon-box"><GraduationCap size={24} /></div><h2>Education & Activities</h2></div>
          <div className="edu-split-container">
            <div className="edu-list">
              {['grad', 'hsc', 'ssc'].map((id) => {
                 const edu = [
                    { id: 'grad', year: "2020", degree: "BSc IT (8.5 CGPA)", school: "Jai Hind College" },
                    { id: 'hsc', year: "2017", degree: "HSC (56.92%)", school: "Jai Hind College" },
                    { id: 'ssc', year: "2015", degree: "SSC (83.80%)", school: "Sacred Heart Boys High School" }
                 ].find(e => e.id === id);
                 return (
                  <button key={edu.id} className={`edu-item-btn ${selectedEduId === edu.id ? 'active' : ''}`} onClick={() => setSelectedEduId(edu.id)}>
                     <div className="edu-circle"></div>
                     <div className="edu-year-label">{edu.year}</div>
                     <div className="edu-degree-title">{edu.degree}</div>
                     <div className="edu-school-name">{edu.school}</div>
                  </button>
                 );
              })}
            </div>
            <div className={`sticky-note ${selectedEduId === 'grad' ? 'blue' : selectedEduId === 'hsc' ? 'yellow' : 'green'}`}> {/* Dynamic color logic */}
               <div style={{fontWeight:'bold', fontSize:'1.3rem', marginBottom:'1.5rem', borderBottom:'1px solid rgba(0,0,0,0.1)', paddingBottom:'0.5rem'}}>Extra-Curriculars</div>
               <ul style={{paddingLeft:'1.2rem', margin:0}}>
                 {[
                    { id: 'grad', activities: ["Member of Entrepreneurial Cell.", "Member of Dot-Com Club.", "Fifa Head 2018-2020 (Cyberstrike)"]},
                    { id: 'hsc', activities: ["Member of Gymkhana Club.", "Organized e-sports events and cultural fests."] },
                    { id: 'ssc', activities: ["Played football in MSSA Level (4th-8th Grade).", "School Council - Assistant Headboy.", "Choir committee member (6th-8th Grade)."] }
                 ].find(e => e.id === selectedEduId).activities.map((act, i) => (
                   <li key={i} style={{marginBottom:'0.75rem', lineHeight:'1.6', fontSize:'1rem'}}>{act}</li>
                 ))}
               </ul>
            </div>
          </div>
        </BentoCard>

        {/* 9. SKILLS */}
        <BentoCard span={3} id="skills">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <h2 style={{fontSize:'2rem', marginBottom:'0.5rem', textAlign:'center'}}>Skills & Expertise</h2>
            <p style={{fontSize:'1.1rem'}}>A comprehensive breakdown of my technical and managerial stack.</p>
          </div>
          <div className="skills-wrapper">
            <div className="skill-box skills-row-top">
              <div className="skill-header-row"><div className="section-icon-box"><Box size={20} /></div><div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#1f2937'}}>Industry Knowledge</div></div>
              <div className="skill-tag-container">
                {["Product Strategy & Roadmapping", "Go-to-Market & Launch Planning", "Agile & MVP Development", "Payment Gateways & Integrations", "Product Analytics & A/B Testing", "Data-Driven Decision Making", "User-Centered Design & UX Research", "Wireframing", "Prototyping & Usability Testing", "Design Thinking", "PRD & Documentation"].map((s,i) => <span key={i} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="skills-row-bottom">
              <div className="skill-box">
                <div className="skill-header-row"><div className="section-icon-box"><Laptop size={20} /></div><div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#1f2937'}}>Tools & Technologies</div></div>
                <div className="skill-tag-container">
                  {["Google Analytics", "Tableau", "Metabase", "Gupshap", "Microsoft Clarity", "Google Firebase", "Whimiscal", "JIRA", "Notion", "Lovable","Replit","Vercel", "Postman", "Excel", "SQL", "Figma"].map((s,i) => <span key={i} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div className="skill-box">
                <div className="skill-header-row"><div className="section-icon-box"><UserCheck size={20} /></div><div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#1f2937'}}>Interpersonal Skills</div></div>
                <div className="skill-tag-container">
                  {["Stakeholder Management", "Team Collaboration", "Cross-Functional Leadership", "Backlog Grooming", "Presentation Skills", "Adaptability", "Problem Solving", "Communication"].map((s,i) => <span key={i} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}

export default App;
