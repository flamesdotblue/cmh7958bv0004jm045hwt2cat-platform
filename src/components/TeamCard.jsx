export default function TeamCard({ name, role, image }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur text-center">
      <img src={image} alt={name} className="mx-auto h-20 w-20 rounded-full object-cover" />
      <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">{name}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-300">{role}</p>
    </div>
  );
}
