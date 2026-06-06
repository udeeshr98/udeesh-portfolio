import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/5 py-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold text-gradient mb-1">Udeesh R</div>
            <div className="text-xs text-slate-500">AI GTM Strategist &amp; Research Analyst</div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:udeeshr98@gmail.com"
              className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/udeesh-r-741241168/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={scrollTop}
              className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

          <div className="text-xs text-slate-600 text-center md:text-right">
            &copy; {new Date().getFullYear()} Udeesh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}