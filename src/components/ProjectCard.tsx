import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
}

const ProjectCard = ({ title, description, image, tags, liveLink, codeLink }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-gray-700/50 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;