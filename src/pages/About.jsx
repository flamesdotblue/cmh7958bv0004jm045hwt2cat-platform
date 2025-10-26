import AnimatedContainer from '../components/AnimatedContainer';
import TeamCard from '../components/TeamCard';

const team = [
  { name: 'Maya Patel', role: 'CEO & Co-founder', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
  { name: 'Daniel Kim', role: 'Curriculum Lead', image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop' },
  { name: 'Sara Gomez', role: 'Design Director', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop' },
];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedContainer>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Team working"
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 shadow"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">About TechEdu</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We are on a mission to make high-quality tech education accessible to everyone. Our courses are crafted by
              industry experts and designed to be hands-on, practical, and engaging.
            </p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              From web development to DevOps, our curriculum keeps pace with the latest industry trends.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Meet the Team</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </AnimatedContainer>
    </div>
  );
}
