import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 border-b border-orange-500/15 backdrop-blur-md shadow-[0_2px_24px_rgba(249,115,22,0.08)]'
          : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-bold text-orange-400 tracking-wide hover:text-orange-300 transition-colors"
        >
          AI GTM Strategist
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.06] border border-white/10 rounded-2xl px-3 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'bg-orange-500/15 text-orange-300 border border-orange-400/20'
                  : 'text-orange-200/80 hover:text-orange-300 hover:bg-orange-500/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.30)] hover:shadow-[0_0_28px_rgba(249,115,22,0.40)] hover:-translate-y-0.5"
        >
          <Download size={14} />
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-orange-400 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-orange-400 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-orange-400 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 border-t border-orange-500/10' : 'max-h-0'
        }`}
      >
        <div className="bg-black/95 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'bg-orange-500/15 text-orange-300 border border-orange-400/20'
                  : 'text-orange-200/70 hover:text-orange-300 hover:bg-orange-500/10'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-all duration-200"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}