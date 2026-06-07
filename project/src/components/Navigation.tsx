import { useState, useEffect } from 'react';
import { Menu, X, Download, Linkedin } from 'lucide-react';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);

      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroTop = heroSection.getBoundingClientRect().top;
        setShowNav(heroTop <= 80);
      }
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNav ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        scrolled ? 'glass-strong shadow-lg shadow-navy-950/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#hero');
            }}
            className="text-base font-semibold tracking-wide text-gradient hover:opacity-80 transition-opacity"
          >
            AI GTM Strategist
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/20 hover:border-sky-500/50 transition-all duration-200"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-sky-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-strong border-t border-sky-500/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-3 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 mt-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-all"
              >
                <Download size={14} />
                Resume
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-600/30 text-blue-400 text-sm font-medium hover:bg-blue-600/20 transition-all duration-200"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}