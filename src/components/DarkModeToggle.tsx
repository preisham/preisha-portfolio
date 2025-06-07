
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Sun size={16} className="text-muted-foreground" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
      />
      <Moon size={16} className="text-muted-foreground" />
    </div>
  );
};

export default DarkModeToggle;
