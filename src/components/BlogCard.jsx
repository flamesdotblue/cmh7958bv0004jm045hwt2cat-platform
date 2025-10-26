import { motion } from 'framer-motion';

export default function BlogCard({ image, title, excerpt }) {
  return (
    <motion.article whileHover={{ y: -3 }} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <img src={image} alt={title} className="h-44 w-full object-cover" />
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{excerpt}</p>
        <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700">Read More →</button>
      </div>
    </motion.article>
  );
}
