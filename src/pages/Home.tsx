
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Github } from 'lucide-react';
import Layout from '../components/Layout';
import Widget from '../components/Widget';
import StatusWidget from '../components/StatusWidget';

const Home = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Engineering Student & Developer
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about solving complex problems through engineering and technology.
          </p>
        </div>

        {/* Status Widgets Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatusWidget
            title="Location"
            status="New York, NY"
            icon={<MapPin size={16} className="text-primary" />}
          />
          <StatusWidget
            title="Local Time"
            status={currentTime}
            icon={<Clock size={16} className="text-primary" />}
          />
          <StatusWidget
            title="Status"
            status="Available for internships"
            lastUpdated="Updated today"
          />
          <StatusWidget
            title="Currently"
            status="Building cool stuff"
            icon={<Github size={16} className="text-primary" />}
          />
        </div>

        {/* Main Content Widgets */}
        <div className="widget-grid">
          {/* Featured Project */}
          <Widget>
            <h3 className="text-lg font-semibold text-foreground mb-3">Latest Project</h3>
            <div className="mb-4 overflow-hidden rounded-md -mx-2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
                alt="Latest project"
                className="w-full h-32 object-cover"
              />
            </div>
            <h4 className="font-medium text-foreground mb-2">Sustainable Energy Dashboard</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Real-time monitoring and analytics for renewable energy systems.
            </p>
            <Link 
              to="/projects"
              className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
            >
              View all projects <ArrowRight size={14} className="ml-1" />
            </Link>
          </Widget>

          {/* Quick Actions */}
          <Widget>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/about"
                className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-foreground text-sm">About Me</div>
                <div className="text-muted-foreground text-xs">Learn about my background</div>
              </Link>
              <Link 
                to="/coursework"
                className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-foreground text-sm">Academic Progress</div>
                <div className="text-muted-foreground text-xs">View my coursework</div>
              </Link>
              <Link 
                to="/blog"
                className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-foreground text-sm">Latest Thoughts</div>
                <div className="text-muted-foreground text-xs">Read my blog posts</div>
              </Link>
            </div>
          </Widget>

          {/* Recent Activity */}
          <Widget>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-foreground">Completed Heat Transfer course</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-foreground">Published new blog post</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-foreground">Started Fluid Mechanics project</p>
                  <p className="text-xs text-muted-foreground">2 weeks ago</p>
                </div>
              </div>
            </div>
          </Widget>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
