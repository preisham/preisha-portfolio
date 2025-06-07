
import Widget from './Widget';
import CourseCard from './CourseCard';

interface Course {
  courseCode: string;
  title: string;
  instructor?: string;
  isOngoing?: boolean;
}

interface CourseWidgetProps {
  title: string;
  courses: Course[];
}

const CourseWidget = ({ title, courses }: CourseWidgetProps) => {
  return (
    <Widget>
      <h3 className="text-xl font-semibold text-foreground mb-4 border-b-2 border-primary pb-2">
        {title}
      </h3>
      <div className="overflow-hidden rounded-md -mx-2">
        <table className="w-full">
          <tbody>
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </tbody>
        </table>
      </div>
    </Widget>
  );
};

export default CourseWidget;
