
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

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
    <article className="bg-card border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group">
      <Link to={`/blog/${slug}`} className="block">
        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
          {title}
        </h2>
        
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
