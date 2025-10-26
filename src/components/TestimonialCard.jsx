import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ name, role, text, avatar }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="flex items-center gap-1 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-500" />
        ))}
      </div>
      <p className="mt-4 text-slate-700 dark:text-slate-300">{text}</p>
      <div className="mt-4 flex items-center gap-3">
        <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
        </div>
        <Quote className="ml-auto h-5 w-5 text-slate-400" />
      </div>
    </div>
  );
}
