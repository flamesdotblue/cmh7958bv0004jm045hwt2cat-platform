import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">TechEdu</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Learn modern tech skills with hands-on courses and expert mentors.</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 dark:text-white">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-indigo-600">Courses</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-600">Blog</Link></li>
              <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 dark:text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-600">Guides</a></li>
              <li><a href="#" className="hover:text-indigo-600">Community</a></li>
              <li><a href="#" className="hover:text-indigo-600">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 dark:text-white">Follow</h4>
            <div className="mt-3 flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <a href="#" aria-label="Twitter" className="hover:text-indigo-600"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-indigo-600"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500 dark:text-slate-400">© {year} TechEdu. All rights reserved.</div>
      </div>
    </footer>
  );
}
