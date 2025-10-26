import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoUrl from '../assets/logo.svg';

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 ${
      isActive ? 'text-indigo-600' : 'text-slate-700 dark:text-slate-200'
    }`}
  >
    {label}
  </NavLink>
);

export default function Navbar({ rightSlot }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="TechEd" className="h-8 w-8" />
              <span className="font-semibold tracking-tight text-slate-900 dark:text-white">TechEdu</span>
            </Link>
            <div className="hidden md:flex items-center ml-6">
              <NavItem to="/" label="Home" />
              <NavItem to="/courses" label="Courses" />
              <NavItem to="/about" label="About" />
              <NavItem to="/blog" label="Blog" />
              <NavItem to="/contact" label="Contact" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {rightSlot}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1 px-4 py-3">
            <NavItem to="/" label="Home" onClick={() => setOpen(false)} />
            <NavItem to="/courses" label="Courses" onClick={() => setOpen(false)} />
            <NavItem to="/about" label="About" onClick={() => setOpen(false)} />
            <NavItem to="/blog" label="Blog" onClick={() => setOpen(false)} />
            <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
