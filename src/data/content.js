import { TrendingUp, Users, BarChart3, FileText } from "lucide-react";

export const profile = {
  name: "Your Name",
  role: "Product Manager | Fintech & Media",
  bio: "APM shipping data products. I turn messy data into clear user insights.",
  availability: "Open for Roles",
  socials: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:you@example.com"
  }
};

// Your "Top 3" Highlights for the Bento Grid
export const highlights = [
  {
    id: 1,
    title: "Mid-day Growth",
    metric: "+15% Retention",
    icon: TrendingUp,
    color: "text-green-500",
    description: "Led acquisition experiments for digital news platform."
  },
  {
    id: 2,
    title: "ETF Dashboard",
    metric: "10k+ Views",
    icon: BarChart3,
    color: "text-blue-500",
    description: "Built & shipped real-time investment tracker."
  },
  {
    id: 3,
    title: "User Research",
    metric: "50+ Interviews",
    icon: Users,
    color: "text-purple-500",
    description: "Qualitative analysis for wealth management app."
  }
];

export const projects = [
  {
    id: "etf-dashboard",
    title: "Real-Time ETF Tracker",
    category: "Fintech",
    summary: "A React-based dashboard for retail investors to track Nifty BeES.",
    metrics: ["2s Load Time", "Zero Cost Hosting"],
    tech: ["React", "Python", "Vercel"],
    content: "Full case study text goes here..." 
  },
  {
    id: "midday-growth",
    title: "Journalism Subscription Model",
    category: "Media",
    summary: "Strategic roadmap to convert free readers to paid subscribers.",
    metrics: ["5% Conv. Uplift", "New Funnel"],
    tech: ["Google Analytics 4", "Figma", "Strategy"],
    content: "Full case study text goes here..."
  }
];

export const artifacts = [
  {
    id: "deck-1",
    title: "Competitor Analysis Deck",
    type: "PDF",
    link: "/assets/competitor-analysis.pdf",
    icon: FileText
  },
  {
    id: "prd-1",
    title: "Wealth Management PRD",
    type: "Notion",
    link: "https://notion.site",
    icon: FileText
  }
];
