
interface CourseCardProps {
  courseCode: string;
  title: string;
  instructor?: string;
  isOngoing?: boolean;
}

const CourseCard = ({ courseCode, title, instructor, isOngoing }: CourseCardProps) => {
  const getCourseLevelClass = (code: string) => {
    const level = code.split(':')[1]?.charAt(0);
    switch (level) {
      case '1': return 'level-100';
      case '2': return 'level-200';
      case '3': return 'level-300';
      case '4': return 'level-400';
      default: return 'text-foreground font-bold';
    }
  };

  return (
    <tr className="border-b border-gray-50 last:border-b-0 hover:bg-gray-25 transition-colors">
      <td className={`py-3 px-4 ${getCourseLevelClass(courseCode)} text-sm`}>
        {courseCode}
      </td>
      <td className="py-3 px-4">
        <div className="flex flex-col">
          <span className="font-medium text-foreground text-sm">
            {title}
            {isOngoing && <em className="ml-2 text-muted-foreground font-normal">*</em>}
          </span>
          {instructor && (
            <span className="text-xs text-muted-foreground italic mt-1">
              {instructor}
            </span>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CourseCard;
