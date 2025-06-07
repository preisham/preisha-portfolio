
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

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'MATLAB', 'SolidWorks', 'AutoCAD', 'C++', 'Git'
  ];

  const interests = [
    'Renewable Energy Systems', 'Robotics', 'Web Development',
    'Sustainable Design', 'Machine Learning', 'IoT'
  ];

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
          {/* About Me Profile Widget */}
          <Widget className="md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">About Me</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0 flex-shrink-0"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm a passionate engineering student with a deep interest in technology and innovation. 
                  My journey in engineering began with a curiosity about how things work and a desire to build 
                  solutions that make a positive impact on the world.
                </p>
                <p>
                  Currently pursuing my degree in Mechanical Engineering, I've developed a strong foundation in 
                  both theoretical principles and practical applications. My coursework has exposed me to various 
                  engineering disciplines, from thermodynamics and fluid mechanics to materials science and design.
                </p>
              </div>
            </div>
          </Widget>

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

          {/* Skills Widget */}
          <Widget>
            <h3 className="text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Widget>

          {/* Interests Widget */}
          <Widget>
            <h3 className="text-lg font-semibold text-foreground mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20 font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Widget>

          {/* Quick Actions */}
          <Widget>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/projects"
                className="block p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors"
              >
                <div className="font-medium text-foreground text-sm">View Projects</div>
                <div className="text-muted-foreground text-xs">Explore my work</div>
              </Link>
              <Link 
                to="/coursework"
                className="block p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors"
              >
                <div className="font-medium text-foreground text-sm">Academic Progress</div>
                <div className="text-muted-foreground text-xs">View my coursework</div>
              </Link>
              <Link 
                to="/blog"
                className="block p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors"
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

          {/* Experience Widget */}
          <Widget className="md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Engineering Intern</h4>
                <p className="text-primary text-sm mb-2">Company Name • Summer 2024</p>
                <p className="text-muted-foreground text-sm">
                  Worked on renewable energy projects, collaborating with cross-functional teams to develop 
                  sustainable solutions. Gained hands-on experience with CAD software and project management.
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Research Assistant</h4>
                <p className="text-primary text-sm mb-2">University Lab • 2023-Present</p>
                <p className="text-muted-foreground text-sm">
                  Assisting with research on advanced materials and their applications in sustainable engineering. 
                  Contributing to publications and presenting findings at conferences.
                </p>
              </div>
            </div>
          </Widget>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
