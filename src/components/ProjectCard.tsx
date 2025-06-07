
import { ExternalLink, Github } from 'lucide-react';
import Widget from './Widget';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Widget className="group">
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-md -mx-2 -mt-2">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex space-x-2 opacity-60 group-hover:opacity-100 transition-opacity">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </Widget>
  );
};

export default ProjectCard;
