import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import AnimatedContainer from '../components/AnimatedContainer';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const courses = [
  { title: 'React Pro Essentials', duration: '12h', category: 'Frontend', level: 'Beginner' },
  { title: 'Node.js APIs with Express', duration: '10h', category: 'Backend', level: 'Intermediate' },
  { title: 'TypeScript in Practice', duration: '8h', category: 'Frontend', level: 'Intermediate' },
];

const testimonials = [
  { name: 'Alex Rivera', role: 'Frontend Dev', text: 'The lessons are concise and practical. I landed a job in 2 months!', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
  { name: 'Priya Nair', role: 'Full-stack Dev', text: 'Beautiful UI and top-notch content. Highly recommend!', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop' },
  { name: 'Sam Lee', role: 'Student', text: 'The hands-on approach made complex topics easy.', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-950 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimatedContainer className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                Master modern tech skills with confidence
              </motion.h1>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
                Learn by building. Join thousands of learners advancing their careers with practical courses.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button as={Link} to="/courses" className="gap-2">
                  <Rocket className="h-4 w-4" /> Explore Courses
                </Button>
                <Link to="/about" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">About Us →</Link>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
                  alt="Coding Hero"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl"
                />
              </div>
            </motion.div>
          </AnimatedContainer>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Courses</h2>
          <Link to="/courses" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all →</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold">What learners say</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
}
