
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import Widget from './Widget';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const BlogCard = ({ title, excerpt, date, readTime, tags, slug }: BlogCardProps) => {
  return (
    <Widget className="group">
      <Link to={`/blog/${slug}`} className="block">
        <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
          {title}
        </h2>
        
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={12} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </Widget>
  );
};

export default BlogCard;
