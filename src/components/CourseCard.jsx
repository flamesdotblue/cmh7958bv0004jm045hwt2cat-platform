import { Clock, GraduationCap, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ title, duration, category, level }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-indigo-600">
          <GraduationCap className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{category}</span>
        </div>
        <span className="text-[10px] rounded-full border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-slate-600 dark:text-slate-300">{level}</span>
      </div>
      <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="mt-3 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {duration}</span>
        <span className="inline-flex items-center gap-1"><Tag className="h-4 w-4" /> {category}</span>
      </div>
      <button className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">View details →</button>
    </motion.div>
  );
}
