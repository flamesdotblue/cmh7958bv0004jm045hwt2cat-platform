import AnimatedContainer from '../components/AnimatedContainer';
import BlogCard from '../components/BlogCard';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    title: 'Why TypeScript elevates your React codebase',
    excerpt: 'Discover how TypeScript improves DX, scalability, and reliability in modern React apps.'
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
    title: 'Designing delightful UI with Tailwind',
    excerpt: 'Utility-first styling can be elegant. Here is a practical approach to building design systems.'
  },
  {
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
    title: 'API performance tips for Node.js',
    excerpt: 'From caching to clustering, learn techniques to squeeze more performance from your Node servers.'
  }
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedContainer>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Blog</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Insights, tutorials, and stories from our team.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>
      </AnimatedContainer>
    </div>
  );
}
