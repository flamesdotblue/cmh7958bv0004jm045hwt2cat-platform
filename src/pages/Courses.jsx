import AnimatedContainer from '../components/AnimatedContainer';
import CourseCard from '../components/CourseCard';

const allCourses = [
  { title: 'React Pro Essentials', duration: '12h', category: 'Frontend', level: 'Beginner' },
  { title: 'Advanced React Patterns', duration: '9h', category: 'Frontend', level: 'Advanced' },
  { title: 'Node.js APIs with Express', duration: '10h', category: 'Backend', level: 'Intermediate' },
  { title: 'TypeScript in Practice', duration: '8h', category: 'Frontend', level: 'Intermediate' },
  { title: 'Design Systems with Tailwind', duration: '6h', category: 'UI/UX', level: 'Beginner' },
  { title: 'Database Fundamentals', duration: '7h', category: 'Backend', level: 'Beginner' },
  { title: 'Next.js for Production', duration: '11h', category: 'Full-stack', level: 'Advanced' },
  { title: 'Docker & DevOps Basics', duration: '8h', category: 'DevOps', level: 'Intermediate' },
  { title: 'GraphQL from Zero', duration: '7h', category: 'Backend', level: 'Intermediate' },
];

export default function Courses() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedContainer>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Courses</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Browse our catalog by category, duration, and level.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allCourses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </AnimatedContainer>
    </div>
  );
}
