
import { ReactNode } from 'react';

interface WidgetProps {
  children: ReactNode;
  className?: string;
  compact?: boolean;
  hover?: boolean;
}

const Widget = ({ children, className = '', compact = false, hover = true }: WidgetProps) => {
  const baseClasses = compact ? 'widget-compact' : 'widget';
  const hoverClasses = hover ? 'hover:scale-[1.01]' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Widget;
