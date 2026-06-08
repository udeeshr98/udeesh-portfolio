import { Linkedin, Mail, ArrowUp, Play } from 'lucide-react';

interface FooterProps {
  onWatchIntro: () => void;
}

export default function Footer({ onWatchIntro }: FooterProps) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-black border-t border-orange-500/10 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_42%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="w-full rounded-2xl border border-orange-500/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_0_30px_rgba(249,115,22,0.08)] backdrop-blur-sm px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-sm font-semibold text-orange-400 mb-1">Udeesh R</div>
              <div className="text-xs text-white">AI GTM Strategist &amp; Research Analyst</div>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                onClick={onWatchIntro}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-400 transition-all duration-200 shadow-[0_0_18px_rgba(249,115,22,0.35)]"
              >
                <Play size={14} />
                Watch Intro Again
              </button>

              <a
                href="mailto:udeeshr98@gmail.com"
                className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-200 shadow-[0_0_18px_rgba(249,115,22,0.35)]"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/udeesh-r-741241168/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-200 shadow-[0_0_18px_rgba(249,115,22,0.35)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>

              <button
                onClick={scrollTop}
                className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-200 shadow-[0_0_18px_rgba(249,115,22,0.35)]"
                aria-label="Back to top"
              >
                <ArrowUp size={15} />
              </button>
            </div>

            <div className="text-xs text-white text-center md:text-right">
              &copy; {new Date().getFullYear()} Udeesh. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}