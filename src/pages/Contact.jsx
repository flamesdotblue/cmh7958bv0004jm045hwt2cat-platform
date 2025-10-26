import AnimatedContainer from '../components/AnimatedContainer';
import Button from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedContainer>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Have questions? We would love to hear from you.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600" /> hello@techedu.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-600" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-600" /> 123 Innovation Dr, San Francisco, CA</p>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500" placeholder="How can we help?" />
              </div>
              <Button type="button" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </AnimatedContainer>
    </div>
  );
}
