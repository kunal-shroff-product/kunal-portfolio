import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { TrendingUp, BarChart3, Users, ArrowUpRight, FolderOpen, Github, Linkedin, Mail, Briefcase, FileText, Code2, GraduationCap, Zap, Clock, Target, Download, Layers, LayoutTemplate, Award, CheckCircle2, Box, Laptop, UserCheck, Menu, X, MapPin, Phone } from "lucide-react";

// --- SCROLL HELPER FOR HASH LINKS ---
const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
};

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Impact", path: "/#impact" },
    { name: "Experience", path: "/#work" },
    { name: "Deck-Vault", path: "/#deck-vault" }, // Updated to deck-vault
    { name: "Education", path: "/#education" }
  ];

  return (
    <>
      <nav className="glass-nav">
        <div className="nav-content">
          <Link to="/" className="nav-logo">Kunal</Link>
          <div className="desktop-links">
            {links.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link">{link.name}</Link>
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
            <Link key={link.name} to={link.path} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
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

        {/* Updated Native Links */}
        <div className="modal-row"><div className="section-icon-box"><Mail size={20} /></div><div><div className="modal-label">Gmail</div><a href="mailto:kunalshrofff@gmail.com" className="modal-value" style={{textDecoration:'none', color:'#1a1a1a'}}>kunalshrofff@gmail.com</a></div></div>
        <div className="modal-row"><div className="section-icon-box"><Linkedin size={20} /></div><div><div className="modal-label">LinkedIn</div><a href="https://www.linkedin.com/in/kunal-shroff-485b4b1b4" target="_blank" rel="noopener noreferrer" className="modal-value" style={{textDecoration:'none', color:'#1a1a1a', wordBreak: 'break-all'}}>linkedin.com/in/kunal-shroff-485b4b1b4</a></div></div>
        <div className="modal-row"><div className="section-icon-box"><Phone size={20} /></div><div><div className="modal-label">Phone</div><a href="tel:+918779673427" className="modal-value" style={{textDecoration:'none', color:'#1a1a1a'}}>+91 8779673427</a></div></div>
        <div className="modal-row"><div className="section-icon-box"><MapPin size={20} /></div><div><div className="modal-label">Location</div><div className="modal-value">Mumbai, India</div></div></div>
      </div>
    </div>
  );
};

const BentoCard = ({ children, className = "", span = 1, onClick, id }) => (
  <div id={id} onClick={onClick} className={`bento-card span-${span} ${onClick ? 'interactive' : ''} ${className}`}>
    {children}
  </div>
);

// --- IMAGE PREVIEW MODAL ---
const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose} style={{zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="zoom-image" style={{position: 'relative', maxWidth: '90%', maxHeight: '90%'}} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} style={{top: '-20px', right: '-20px', background: 'white', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'}}><X size={24} /></button>
        <img src={imgSrc} alt="Certificate Full View" style={{maxWidth: '100%', maxHeight: '85vh', borderRadius: '12px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'}} />
      </div>
    </div>
  );
};

// --- ABOUT PAGE COMPONENT ---
// --- ABOUT PAGE COMPONENT ---
const AboutPage = () => {
  return (
    <div className="bento-grid" style={{ minHeight: '70vh', alignContent: 'center', paddingBottom: '2rem' }}>
      <BentoCard span={3} className="hero-mode" id="about">

         {/* THE FIX: Added a wrapper with paddingTop to push content below the sticky navbar */}
         <div style={{ paddingTop: '4rem' }}>
           <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#1a1a1a'}}>About Me</h2>
           <p style={{color: '#594632', fontWeight: '500', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '1300px'}}>
             I am a product manager who thrives at the intersection of data, design, and user psychology. Currently at Mid-day, I’m leading a full-scale website revamp to enhance user experience, engagement, and content discoverability across the platform. At ImpactGuru, I led key charters across Settlements, Revenue, and the BD App, building scalable systems and automating complex financial workflows through API-driven solutions.
             <br/><br/>
             Across organisations I’ve shipped products end-to-end from dashboards to PDP redesigns and WhatsApp-based growth systems. My work has improved conversion rates, reduced operational effort, and enhanced stability across internal and customer-facing systems. Before transitioning into product, I managed a ₹10 Cr portfolio at Laaj International, strengthening my analytical and strategic decision-making foundation.
             <br/><br/>
             When I'm not writing PRDs or analyzing SQL queries, you can find me debating the latest Football match. I’m also an active stock-market investor who enjoys combining product thinking with market insight.
           </p>
         </div>

      </BentoCard>
    </div>
  );
};

// --- HOME PAGE COMPONENT ---
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  // NEW: Scroll detection logic for the Deck Vault
  const [isDeckScrolling, setIsDeckScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleDeckScroll = () => {
    setIsDeckScrolling(true);
    // Clear the existing timeout if they keep scrolling
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    // Hide the scrollbar 800 milliseconds after they stop scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      setIsDeckScrolling(false);
    }, 800);
  };

  const jobsData = [
    {
      id: 'midday', role: "Associate Product Manager", company: "Mid-day", period: "Nov 2025 - Present", color: "blue",
      bullets: [
        "Owned the end-to-end website revamp, improving content structure, user flow, and engagement.",
        "Conceptualized and launched high-traffic event microsites (T20 World Cup, Valentine’s Day, IPL 2026),contributing ~2% revenue and ~3% pageviews.",
        "Implemented GIS-based login and sign-up enhancements, removing onboarding friction and scaling adoption to 25K+ active users.",
        "Built an in-house HR module and careers portal, replacing a third-party solution and saving ₹3L+ annually."
      ]
    },
    {
      id: 'impactguru', role: "Associate Product Manager", company: "Impactguru", period: "Oct 2024 - Nov 2025", color: "blue",
      bullets: [
        "Led end-to-end development of the BD app dashboard with a fee-upgrade flow, driving a 2% revenue increase.",
        "Delivered an OCR-powered billing module, bringing billing errors down to under 1%.",
        "Automated settlement and receipts through Razorpay APIs, cutting TAT to 24–48 hours.",
        "Launched a POC management system that grew leads by 3% and improved lead-to-campaign conversions by 10%.",
        "Built a WhatsApp consent system increasing GMV by 5%.",
        "Automated chargeback/refund syncing with Razorpay APIs, raising internal–PG match rates from ~90% to 97%."
      ]
    },
    {
      id: 'skillmatics', role: "Product Management Intern", company: "Skillmatics", period: "Apr 2024 - Jun 2024", color: "yellow",
      bullets: [
        "Revamped product display pages increasing conversion by 8%.",
        "Built a bottom-nav bar improving site navigation.",
        "Boosted AOV by 5% through A/B testing new features.",
        "Created an internal analytics dashboards using GA4."
      ]
    },
    {
      id: 'laaj', role: "Assistant Portfolio Manager", company: "Laaj International", period: "Mar 2021 - Feb 2024", color: "green",
      bullets: [
        "Achieved 40% returns in FY 23-24 managing 10 Cr+ portfolio.",
        "Developed risk management strategies for derivatives.",
        "Built an internal dashboard for real-time P/L tracking."
      ]
    }
  ];

  const selectedJob = jobsData.find(j => j.id === selectedJobId);
  const [selectedEduId, setSelectedEduId] = useState('grad');
  const workExRef = useRef(null);

  const handleImpactClick = (jobId) => {
    setSelectedJobId(jobId);
    workExRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <ImageModal isOpen={showCertModal} onClose={() => setShowCertModal(false)} imgSrc="/nextleap-logo.png" />

      <div className="bento-grid">
        {/* 1. HERO */}
        <BentoCard span={2} className="hero-mode" id="home">
          <div className="hero-container">

             {/* 1. The Profile Image */}
             <div className="hero-image-container fade-in-up">
                {/* Make sure to upload a photo named 'profile.jpg' into your Replit public folder! */}
                <img 
                  src="/profile.jpg" 
                  alt="Kunal Shroff" 
                  className="hero-profile-img" 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
             </div>

             {/* 2. The Text Content */}
             <div className="hero-text-content fade-in-up" style={{animationDelay: '0.1s'}}>
                 <h1 style={{marginBottom: '0.5rem'}}>Hi, I am Kunal Shroff</h1>
                 <h2 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#594632'}}>
                   Product Manager specializing in <br className="mobile-break" />
                   <span className="typewriter-text">
                     <Typewriter words={["Fintech", "Media", "Backend Workflows", "API Integrations"]} />
                   </span>
                 </h2>
                 <p style={{fontSize: '1.15rem', maxWidth: '90%', marginBottom: '2rem'}}>
                   A product thinker with a builder’s mindset, I work across revenue, settlements, and user workflows to ship meaningful outcomes. Off the clock, I’m into football, Video games, Cricket, Stock market, and creating meme-level insights on Twitter.
                 </p>
                {/* --- CENTER ALIGNED BUTTON BAR --- */}
                 <div style={{ 
                   display: 'flex', 
                   justifyContent: 'center', /* This centers the buttons! */
                   flexWrap: 'wrap',
                   gap: '16px', 
                   marginTop: '2rem', 
                   width: '100%' 
                 }}>

                   <a href="#projects" style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center', 
                     gap: '8px', 
                     padding: '12px 0', 
                     backgroundColor: '#E67847', 
                     color: '#fff', 
                     borderRadius: '12px', 
                     textDecoration: 'none', 
                     fontWeight: '600', 
                     fontSize: '0.95rem', 
                     whiteSpace: 'nowrap', 
                     width: '160px', /* Explicit matching width */
                     boxSizing: 'border-box',
                     border: '1px solid #E67847', 
                     cursor: 'pointer' 
                   }}>
                     <FolderOpen size={18} /> View Projects
                   </a>

                   <button onClick={() => setShowModal(true)} style={{ 
                     all: 'unset', /* Nukes Vite's hidden global button defaults */
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center', 
                     gap: '8px', 
                     padding: '12px 0', 
                     backgroundColor: '#fff', 
                     color: '#E67847', 
                     borderRadius: '12px', 
                     border: '1px solid #E67847', 
                     fontWeight: '600', 
                     fontSize: '0.95rem', 
                     whiteSpace: 'nowrap', 
                     width: '160px', /* Explicit matching width */
                     boxSizing: 'border-box',
                     cursor: 'pointer', 
                     fontFamily: 'inherit'
                   }}>
                     <Mail size={18} /> Get in Touch
                   </button>

                 </div>
               
             </div>

          </div>
        </BentoCard>

        {/* 2. IMPACT */}
        <BentoCard id="impact">
          <h2>Key Impact</h2>
          <div className="impact-list">
            <div className="impact-item" onClick={() => handleImpactClick('midday')} style={{cursor:'pointer'}}>
               <div className="icon-box"><Target size={20} color="#3b82f6" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+3% Page Views</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>Event Microsites</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><Zap size={20} color="#E67847" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+2% Revenue</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>BD App Fees Upgrade</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><TrendingUp size={20} color="#10b981" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+5% GMV</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>WhatsApp Consent System</div></div>
            </div>
            <div className="impact-item" onClick={() => handleImpactClick('impactguru')} style={{cursor:'pointer'}}>
               <div className="icon-box"><Users size={20} color="#10b981" /></div>
               <div><div style={{fontWeight:'bold', fontSize:'1.1rem', color:'#1a1a1a'}}>+3% Leads</div><div style={{fontSize:'0.8rem', color:'#6b7280'}}>Poc Management System</div></div>
            </div>
          </div>
        </BentoCard>

        {/* 4. WORK EXPERIENCE */}
        <BentoCard span={3} id="work">
          <div ref={workExRef} className="section-icon-header">
            <div className="section-icon-box"><Briefcase size={24} /></div>
            <h2>Work Experience</h2>
          </div>
          <div className="split-timeline">
            <div className="timeline-list">
              {jobsData.map((job) => (
                  <button 
                    key={job.id} 
                    className={`timeline-item-btn ${selectedJobId === job.id ? 'active' : ''}`} 
                    onClick={() => setSelectedJobId(selectedJobId === job.id ? null : job.id)}
                  >
                    <div className="timeline-circle"></div>

                    {/* --- NEW HIERARCHY: Brand First, Role Second --- */}
                    <div style={{fontWeight: '700', color: '#E67847', fontSize: '1.2rem', marginBottom: '0.15rem'}}>{job.company}</div>
                    <div style={{fontWeight: '600', color: '#374151', fontSize: '0.95rem', marginBottom:'0.25rem'}}>{job.role}</div>
                    <div style={{fontSize: '0.89rem', color: '#6b7280'}}>{job.period}</div>

                    {/* --- MOBILE ACCORDION CONTENT --- */}
                    <div className="mobile-achievements">
                      <div style={{fontWeight:'bold', fontSize:'1rem', marginTop:'1rem', marginBottom:'0.5rem', color:'#1f2937', borderTop:'1px solid rgba(230, 120, 71, 0.2)', paddingTop:'0.75rem'}}>
                        Key Achievements
                      </div>
                      <ul style={{paddingLeft:'1.2rem', margin:0, textAlign:'left', color:'#4b5563'}}>
                        {job.bullets.map((b, i) => (
                          <li key={i} style={{marginBottom:'0.5rem', lineHeight:'1.5', fontSize:'0.95rem', fontWeight:'normal'}}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </button>
              ))}
            </div>

            {/* --- DESKTOP STICKY NOTE --- */}
            <div className="desktop-sticky-note">
              {selectedJob ? (
                <div className={`sticky-note ${selectedJob.color}`}>
                   <div style={{fontWeight:'bold', fontSize:'1.3rem', marginBottom:'1.5rem', borderBottom:'1px solid rgba(0,0,0,0.1)', paddingBottom:'0.5rem'}}>Key Achievements</div>
                   <ul style={{paddingLeft:'1.2rem', margin:0}}>
                     {selectedJob.bullets.map((b, i) => (<li key={i} style={{marginBottom:'0.75rem', lineHeight:'1.6', fontSize:'1rem'}}>{b}</li>))}
                   </ul>
                </div>
              ) : (
                <div className="sticky-note" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', minHeight: '300px', textAlign: 'center', border: '2px dashed rgba(230, 120, 71, 0.2)', background: 'transparent', boxShadow: 'none' }}>
                   <Briefcase size={32} style={{ marginBottom: '1rem', color: '#E67847', opacity: 0.5 }} />
                   <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#594632' }}>Select an experience</div>
                   <div style={{ fontSize: '0.9rem' }}>Click on a role to view key achievements</div>
                </div>
              )}
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
              <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', display: 'block', color: 'inherit'}}>
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

        {/* --- MOVED UP: DECK VAULT --- */}
        <BentoCard span={3} id="deck-vault">
           <div className="section-icon-header"><div className="section-icon-box"><Layers size={20} /></div><h2>Deck Vault</h2></div>
           <div 
              className={`deck-scroll-container ${isDeckScrolling ? 'is-scrolling' : ''}`}
              onScroll={handleDeckScroll}
            >
             {[
               { title: "BD POC Management (PRD)", desc: "A detailed PRD for the feature", link: "https://whimsical.com/poc-management-VucfKmRkZScPBvVP4TZKtP", thumb: "/thumb-bd.png" },
               { title: "Competitor Analysis", desc: "Deep dive into market landscape & feature gaps.", link: "https://whimsical.com/mid-day-homepage-TY9JfZv6ogYsG3jVwpNEqy", thumb: "/thumb-competitor.png" },
               { title: "Analyzing User Experience", desc: "Usability Heuristics for User Interface Design.", link: "/google-photos.pdf", thumb: "/thumb-photos.png" },
               { title: "Shopping assistant for Flipkart", desc: "Building AI chatbot for Flipkart", link: "/flipkart.pdf", thumb: "/thumb-flipkart.png" },
               { title: "Product Teardown- Netflix", desc: "A detailed analysis of New User Onboarding by Netflix.", link: "/netflix.pdf", thumb: "/netflix.png" }
             ].map((d, i) => (
               <a key={i} href={d.link} target="_blank" rel="noopener noreferrer" className="deck-card-large" style={{textDecoration: 'none', display: 'block', cursor: 'pointer', color: 'inherit'}}>
                  <div className="deck-thumb-large" style={{ padding: 0, overflow: 'hidden', background: '#fff', border: '1px solid rgba(230, 120, 71, 0.1)' }}>
                     <img src={d.thumb} alt={d.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display='none'; e.target.parentNode.style.display='flex'; e.target.parentNode.innerText='Img Not Found'; e.target.parentNode.style.fontSize='0.8rem'; e.target.parentNode.style.color='#9ca3af'; }} />
                  </div>
                  <div style={{fontWeight:'700', fontSize:'1.1rem', marginBottom:'0.25rem', color:'#1f2937'}}>{d.title}</div>
                  <div style={{fontSize:'0.9rem', color:'#6b7280', lineHeight: '1.4'}}>{d.desc}</div>
               </a>
             ))}
           </div>
        </BentoCard>

        {/* 6. CERTIFICATIONS */}
        <BentoCard span={1} id="certifications">
          <div className="cert-header" style={{ alignItems: 'flex-start' }}>
            <div style={{ flex: 1, paddingRight: '1rem' }}>
              <h2 style={{fontSize:'1.4rem', fontWeight:'800', color:'#2D2420', marginBottom:'0.5rem'}}>Certifications</h2>
              <div style={{fontSize:'0.85rem', color:'#594632', fontWeight:'700', marginBottom:'1rem'}}>Product Manager Fellowship</div>
              <a href="https://nextleap.app/portfolio/kunal-shroff" target="_blank" rel="noopener noreferrer" style={{fontSize:'0.9rem', color:'#E67847', textDecoration:'none', fontWeight:'600', display:'inline-block'}}>Learn More</a>
            </div>
            <div onClick={(e) => { e.preventDefault(); setShowCertModal(true); }} className="cert-logo-circle" style={{width:'100px', height:'100px', flexShrink: 0, overflow:'hidden', padding:'0', border:'3px solid #E67847', cursor:'pointer', display:'block', transition: 'transform 0.2s'}} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
               <img src="/nextleap-logo.png" alt="NL" style={{width:'100%', height:'100%', objectFit:'cover'}} onError={(e) => {e.target.style.display='none'; e.target.parentNode.innerText='NL'}} /> 
            </div>            
          </div>

          <div style={{marginBottom:'1.5rem', marginTop:'1rem'}}>
             <div style={{fontSize:'0.75rem', color:'#594632', marginBottom:'0.75rem', textTransform:'uppercase', letterSpacing:'0.05em', fontWeight:'700'}}>Evaluated by Product Managers from:</div>
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
                 <div className="cert-name"><span style={{color:'#594632', fontWeight:'600'}}>{c.name}</span><span style={{color:'#1a1a1a', fontWeight:'700'}}>{c.score}%</span></div>
                 <div className="cert-bar-bg"><div className="cert-bar-fill" style={{width:`${c.score}%`, background:'#E67847'}}></div></div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 7. GRADUATION PROJECT */}
        <BentoCard span={2}>
           <div className="grad-project-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <div style={{ marginBottom: '1.5rem' }}>
               <h2 style={{fontSize:'1.5rem', marginBottom:'0.75rem', color:'#2D2420'}}>Graduation Project</h2>
               <p style={{fontSize:'1.05rem', fontWeight:"600",color:'#594632', maxWidth:'600px'}}>
                I built an MVP that connects pet parents with trusted service providers and facilitates safe, structured socialization experiences.
               </p>
             </div>
             <div className="grad-thumb-big" style={{ flex: 1, marginBottom: '1.5rem', minHeight: '220px', padding: 0, overflow: 'hidden' }}>
                <img src="/project-thumnail.png" alt="Graduation Project Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.padding = '2rem'; e.target.parentNode.innerText = 'Image not found. Please upload project-thumbnail.jpg'; }} />
             </div>
             <div>
               <a href="/Graduation-project.pdf" target="_blank" rel="noopener noreferrer" className="action-btn primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>View Project Deck <ArrowUpRight size={16} /></a>
             </div>
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
            <div className={`sticky-note ${selectedEduId === 'grad' ? 'blue' : selectedEduId === 'hsc' ? 'yellow' : 'green'}`}>
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
    </>
  );
};

// --- MAIN APP ---
function App() {
  return (
    <>
      <ScrollToHash />
      <div style={{position: 'relative', paddingTop: '25px'}}>
        <div className="gradient-bg"></div>
        <Navbar />

        {/* --- FLOATING CV BUTTON --- */}
        <a href="/kunal-shroff-cv.pdf" download="Kunal-Shroff-CV.pdf" className="floating-cv-btn">
          <Download size={20} />
          <span className="floating-btn-text">Download CV</span>
        </a>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;