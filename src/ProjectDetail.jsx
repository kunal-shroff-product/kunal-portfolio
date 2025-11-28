import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Code2, BarChart3 } from 'lucide-react';
import './App.css';

// Mock Data (Ideally this comes from a separate file)
const projectData = {
  'etf-tracker': {
    title: "Real-Time ETF Tracker",
    category: "Fintech",
    summary: "A high-performance dashboard for retail investors to track Nifty BeES.",
    metrics: ["< 200ms Latency", "Zero Cost Hosting"],
    tech: ["React", "Python", "Vercel"],
    content: (
      <>
        <h3>The Challenge</h3>
        <p>Retail investors struggle to track real-time ETF prices because standard broker apps are cluttered and slow. The goal was to build a focused, "zero-latency" dashboard.</p>
        <h3>The Solution</h3>
        <p>I architected a hybrid solution where a Python script runs on a cron job to fetch market data and caches it on the edge. The React frontend fetches this pre-cached JSON, ensuring instant loads.</p>
        <h3>Key Results</h3>
        <p>The dashboard now loads in under 200ms, compared to 3-5 seconds for standard broker apps. It serves 500+ daily active users with zero hosting costs.</p>
      </>
    )
  },
  'subscription-model': {
    title: "Subscription Funnel Optimization",
    category: "Media",
    summary: "Redesigning the paywall experience to boost conversion rates.",
    metrics: ["+15% Conversion", "5% Churn Reduction"],
    tech: ["GA4", "Figma", "A/B Testing"],
    content: (
      <>
        <h3>The Challenge</h3>
        <p>Our news platform had high traffic but low conversion. Users were hitting the paywall and bouncing immediately.</p>
        <h3>The Solution</h3>
        <p>We implemented a "Metered Paywall" (3 free articles) and redesigned the checkout flow to support 1-click Apple Pay. We also added a "Save for Later" feature to capture emails before purchase.</p>
        <h3>Key Results</h3>
        <p>Conversion rate increased by 15% within 30 days. The email capture strategy grew our newsletter list by 5,000 users.</p>
      </>
    )
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="detail-container"><h1>Project Not Found</h1><Link to="/" className="back-link">Back Home</Link></div>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Portfolio</Link>

      <div className="detail-header">
        <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>{project.category}</span>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>{project.title}</h1>
        <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '700px' }}>{project.summary}</p>

        <div style={{ marginTop: '3rem', display: 'flex', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', marginBottom: '0.5rem' }}><Calendar size={16}/> Timeline</div>
            <div style={{ fontWeight: 'bold' }}>Q4 2024</div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', marginBottom: '0.5rem' }}><Code2 size={16}/> Tech Stack</div>
            <div style={{ fontWeight: 'bold' }}>{project.tech.join(', ')}</div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', marginBottom: '0.5rem' }}><BarChart3 size={16}/> Impact</div>
            <div style={{ fontWeight: 'bold', color: '#34d399' }}>{project.metrics[0]}</div>
          </div>
        </div>
      </div>

      <div className="detail-content">
        {project.content}
      </div>
    </div>
  );
};

export default ProjectDetail;
