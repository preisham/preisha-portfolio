
import Layout from '../components/Layout';

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
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
            />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
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
            
            <p>
              Beyond the classroom, I'm actively involved in projects that bridge the gap between engineering 
              and technology. I enjoy working on web development projects, exploring sustainable design solutions, 
              and experimenting with emerging technologies like IoT and machine learning.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b-2 border-primary pb-2">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b-2 border-primary pb-2">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="bg-card border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground">Engineering Intern</h4>
                <p className="text-primary mb-2">Company Name • Summer 2024</p>
                <p className="text-muted-foreground">
                  Worked on renewable energy projects, collaborating with cross-functional teams to develop 
                  sustainable solutions. Gained hands-on experience with CAD software and project management.
                </p>
              </div>
              
              <div className="bg-card border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground">Research Assistant</h4>
                <p className="text-primary mb-2">University Lab • 2023-Present</p>
                <p className="text-muted-foreground">
                  Assisting with research on advanced materials and their applications in sustainable engineering. 
                  Contributing to publications and presenting findings at conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
