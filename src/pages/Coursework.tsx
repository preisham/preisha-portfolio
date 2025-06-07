
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';

const Coursework = () => {
  const mechanicalEngineering = [
    {
      courseCode: "440:127",
      title: "Introduction to Computers for Engineers",
      instructor: "Dr. Philip Brown"
    },
    {
      courseCode: "440:205",
      title: "Mechanics of Materials",
      instructor: "Dr. Sarah Johnson"
    },
    {
      courseCode: "440:254",
      title: "Thermodynamics",
      instructor: "Dr. Michael Chen"
    },
    {
      courseCode: "440:311",
      title: "Fluid Mechanics",
      instructor: "Dr. Emily Rodriguez",
      isOngoing: true
    },
    {
      courseCode: "440:356",
      title: "Heat Transfer",
      instructor: "Dr. James Wilson"
    },
    {
      courseCode: "440:423",
      title: "Control Systems",
      instructor: "Dr. Lisa Park",
      isOngoing: true
    }
  ];

  const mathematics = [
    {
      courseCode: "640:151",
      title: "Calculus I",
      instructor: "Dr. Robert Smith"
    },
    {
      courseCode: "640:152",
      title: "Calculus II",
      instructor: "Dr. Jennifer Lee"
    },
    {
      courseCode: "640:251",
      title: "Multivariable Calculus",
      instructor: "Dr. David Kim"
    },
    {
      courseCode: "640:291",
      title: "Differential Equations",
      instructor: "Dr. Amanda Taylor"
    }
  ];

  const computerScience = [
    {
      courseCode: "198:111",
      title: "Introduction to Computer Science",
      instructor: "Dr. Mark Anderson"
    },
    {
      courseCode: "198:112",
      title: "Data Structures and Algorithms",
      instructor: "Dr. Rachel Green"
    },
    {
      courseCode: "198:214",
      title: "Systems Programming",
      instructor: "Dr. Kevin White"
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Coursework</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A comprehensive list of completed and ongoing coursework throughout my academic journey.
          </p>
          <p className="text-sm text-muted-foreground italic">
            * indicates present coursework
          </p>
        </div>

        <div className="space-y-12">
          {/* Mechanical Engineering */}
          <section>
            <h3 className="text-2xl font-semibold text-foreground mb-6 border-b-2 border-primary pb-2">
              Mechanical Engineering
            </h3>
            <div className="bg-card border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {mechanicalEngineering.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Mathematics */}
          <section>
            <h3 className="text-2xl font-semibold text-foreground mb-6 border-b-2 border-primary pb-2">
              Mathematics
            </h3>
            <div className="bg-card border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {mathematics.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Computer Science */}
          <section>
            <h3 className="text-2xl font-semibold text-foreground mb-6 border-b-2 border-primary pb-2">
              Computer Science
            </h3>
            <div className="bg-card border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {computerScience.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center bg-card border border-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Academic Progress</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold level-100">100-Level</div>
              <div className="text-sm text-muted-foreground">Foundation Courses</div>
            </div>
            <div>
              <div className="text-2xl font-bold level-200">200-Level</div>
              <div className="text-sm text-muted-foreground">Core Principles</div>
            </div>
            <div>
              <div className="text-2xl font-bold level-300">300-Level</div>
              <div className="text-sm text-muted-foreground">Advanced Topics</div>
            </div>
            <div>
              <div className="text-2xl font-bold level-400">400-Level</div>
              <div className="text-sm text-muted-foreground">Specialized Studies</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Coursework;
