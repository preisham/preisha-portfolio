
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Engineering Student & Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about solving complex problems through engineering and technology. 
            Welcome to my digital space where I share my projects, experiences, and thoughts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/about"
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>Learn More About Me</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              to="/projects"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
