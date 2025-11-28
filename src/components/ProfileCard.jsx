import React from 'react';
import { profile } from '../data/content';
import { Github, Linkedin, Mail } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="h-full flex flex-col justify-between relative z-10">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4 border border-accent/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          {profile.availability}
        </div>
        <h1 className="text-4xl font-bold text-text-main mb-2 tracking-tight">
          {profile.name}
        </h1>
        <p className="text-text-muted text-lg font-light">
          {profile.role}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-text-muted/80 text-sm leading-relaxed max-w-md mb-6">
          {profile.bio}
        </p>

        <div className="flex gap-4">
          <SocialIcon href={profile.socials.github} icon={<Github size={20} />} label="GitHub" />
          <SocialIcon href={profile.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialIcon href={profile.socials.email} icon={<Mail size={20} />} label="Email" />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:text-primary transition-all border border-white/5"
    aria-label={label}
  >
    {icon}
  </a>
);

export default ProfileCard;
