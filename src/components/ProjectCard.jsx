import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <a href={`/project/${project.id}`} className="block h-full flex flex-col group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/20">
          {project.category}
        </span>
        <ArrowUpRight className="text-text-muted group-hover:text-primary group-hover:rotate-45 transition-all" size={20} />
      </div>

      <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm mb-6 line-clamp-2">
        {project.summary}
      </p>

      <div className="mt-auto flex gap-2 flex-wrap">
        {project.tech.map((tech, i) => (
          <span key={i} className="text-xs text-text-muted/60 bg-white/5 px-2 py-1 rounded border border-white/5">
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
