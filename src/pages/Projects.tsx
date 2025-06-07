
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Sustainable Energy Dashboard",
      description: "A comprehensive web application for monitoring and analyzing renewable energy consumption patterns. Features real-time data visualization, predictive analytics, and energy optimization recommendations.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      title: "Robotic Arm Control System",
      description: "Designed and implemented a control system for a 6-DOF robotic arm using inverse kinematics algorithms. The system includes computer vision for object detection and manipulation.",
      technologies: ["Python", "OpenCV", "ROS", "MATLAB", "Arduino"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/username/robotic-arm"
    },
    {
      title: "Smart Home IoT Network",
      description: "Developed an integrated IoT system for home automation, including temperature control, lighting management, and security monitoring. Features a mobile app and web dashboard.",
      technologies: ["React Native", "Firebase", "Arduino", "Raspberry Pi", "MQTT"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      liveUrl: "https://smarthome-demo.com",
      githubUrl: "https://github.com/username/smart-home"
    },
    {
      title: "Fluid Dynamics Simulation",
      description: "Created a computational fluid dynamics simulation to analyze airflow patterns around wind turbine blades. Used for optimizing blade design and improving energy efficiency.",
      technologies: ["MATLAB", "ANSYS Fluent", "Python", "NumPy", "Matplotlib"],
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      githubUrl: "https://github.com/username/cfd-simulation"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with modern web technologies. Features a clean design, smooth animations, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/username/portfolio"
    },
    {
      title: "Machine Learning Price Predictor",
      description: "Developed a machine learning model to predict housing prices based on various features. Includes data preprocessing, feature engineering, and model evaluation.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      githubUrl: "https://github.com/username/ml-predictor"
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of engineering and development projects I've worked on, 
            ranging from web applications to robotics and sustainable energy solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <span>Visit my GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
