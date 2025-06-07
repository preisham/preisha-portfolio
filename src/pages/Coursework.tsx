
import Layout from '../components/Layout';
import CourseWidget from '../components/CourseWidget';

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
          <h1 className="text-3xl font-bold text-foreground mb-4">Coursework</h1>
          <p className="text-muted-foreground mb-4">
            A comprehensive list of completed and ongoing coursework throughout my academic journey.
          </p>
          <p className="text-sm text-muted-foreground italic">
            * indicates present coursework
          </p>
        </div>

        <div className="space-y-8">
          <CourseWidget title="Mechanical Engineering" courses={mechanicalEngineering} />
          <CourseWidget title="Mathematics" courses={mathematics} />
          <CourseWidget title="Computer Science" courses={computerScience} />
        </div>
      </div>
    </Layout>
  );
};

export default Coursework;
