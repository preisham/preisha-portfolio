
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import Widget from '../components/Widget';

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with Sustainable Engineering",
      excerpt: "Exploring the intersection of engineering principles and environmental sustainability. Learn about the key concepts and practices that are shaping the future of engineering.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["Sustainability", "Engineering", "Environment"],
      slug: "sustainable-engineering-intro"
    },
    {
      title: "Building My First IoT Project",
      excerpt: "A detailed walkthrough of creating a smart home monitoring system using Arduino and Raspberry Pi. From concept to deployment, here's what I learned.",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      tags: ["IoT", "Arduino", "Programming", "Projects"],
      slug: "first-iot-project"
    },
    {
      title: "The Role of AI in Modern Engineering",
      excerpt: "How artificial intelligence and machine learning are transforming traditional engineering disciplines. Exploring applications in design, optimization, and automation.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      tags: ["AI", "Machine Learning", "Engineering", "Technology"],
      slug: "ai-in-engineering"
    },
    {
      title: "Lessons from My Engineering Internship",
      excerpt: "Reflections on my summer internship experience. Key takeaways about working in industry, professional development, and bridging the gap between theory and practice.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      tags: ["Internship", "Career", "Professional Development"],
      slug: "engineering-internship-lessons"
    },
    {
      title: "Debugging Complex Systems: A Methodical Approach",
      excerpt: "Whether it's code or mechanical systems, debugging requires a systematic approach. Here are the strategies I've developed for tackling complex problems.",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      tags: ["Problem Solving", "Debugging", "Methodology"],
      slug: "debugging-complex-systems"
    },
    {
      title: "The Future of Renewable Energy Technology",
      excerpt: "An analysis of emerging trends in renewable energy, from advanced solar cells to wind turbine innovations. What to expect in the next decade.",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      tags: ["Renewable Energy", "Technology", "Future"],
      slug: "future-renewable-energy"
    }
  ];

  const categories = ["All", "Engineering", "Technology", "Projects", "Career"];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl">
            Thoughts on engineering, technology, and everything in between. 
            Sharing insights from my academic journey and project experiences.
          </p>
        </div>

        {/* Categories Filter Widget */}
        <Widget className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Widget>

        {/* Blog Posts Grid */}
        <div className="widget-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
