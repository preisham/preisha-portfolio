
import Layout from '../components/Layout';
import Widget from '../components/Widget';

const About = () => {
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-2xl">
            Learn more about my background, interests, and what drives me as an engineer.
          </p>
        </div>
        
        <div className="widget-grid">
          {/* Profile Widget */}
          <Widget className="md:col-span-2">
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

export default About;
