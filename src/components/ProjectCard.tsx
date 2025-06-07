
import { ExternalLink, Github } from 'lucide-react';

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
    <div className="bg-card border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex space-x-2">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
