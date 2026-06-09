import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Linkedin, Mail, ArrowRight } from 'lucide-react';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '250+', label: 'Market Intel Reports' },
  { value: '20+', label: 'Agentic AI GTM Projects' },
  { value: '10+', label: 'Enterprise Proposals' },
  { value: '25+', label: 'AI Use Cases Identified' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black pt-32 lg:pt-0"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-50"
        style={{ backgroundSize: '60px 60px' }}
      />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-orange-500/10 blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full bg-orange-600/5 blur-[180px]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/50 pointer-events-none" />

      {/* Big UDEESH text in background */}
      <div className="absolute top-0 left-0 right-0 overflow-visible pointer-events-none h-1/2 flex items-start justify-center pt-4 lg:pt-8">
        <div
          className="text-[18vw] md:text-[24vw] lg:text-[26vw] font-black text-white leading-none whitespace-nowrap select-none"
          style={{
            opacity: 0.22,
            letterSpacing: '-0.04em',
            textShadow: '0 0 80px rgba(56, 189, 248, 0.12)',
            transform: `scale(${1 + mousePos.x * 0.02})`,
            transition: 'transform 0.6s ease-out',
          }}
        >
          UDEESH
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center justify-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left — Text + links */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:mt-64">
              <div style={{ animation: 'fadeUp 0.8s ease-out 0.3s both' }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-3">
                  AI GTM Strategist
                </h1>
                <p className="text-orange-400 text-sm md:text-base font-semibold mb-4">
                  Research Analyst · Market Intelligence · GTM Strategy · AI Solutions
                </p>
              </div>

              <p
                className="text-slate-300 text-base leading-relaxed max-w-md"
                style={{ animation: 'fadeUp 0.8s ease-out 0.4s both' }}
              >
                Driving AI solution commercialization through market intelligence, competitive
                strategy, and data-driven go-to-market execution. Experienced in translating AI
                capabilities into scalable business value, enabling organizations to identify
                growth opportunities, accelerate enterprise AI adoption, and achieve measurable
                business outcomes.
              </p>

              <div
                className="flex items-center gap-3 pt-2"
                style={{ animation: 'fadeUp 0.8s ease-out 0.5s both' }}
              >
                <a
                  href="https://www.linkedin.com/in/udeesh-r-741241168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/10 hover:border-orange-400/40 transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:udeeshr98@gmail.com"
                  className="w-10 h-10 rounded-full glass border border-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/10 hover:border-orange-400/40 transition-all duration-200 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass border border-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/10 hover:border-orange-400/40 transition-all duration-200 hover:scale-110"
                  aria-label="Resume"
                >
                  <Download size={18} />
                </a>
              </div>
            </div>

            {/* Center — Walking video replaces photo */}
            <div
              className="lg:col-span-4 flex justify-center items-center order-first lg:order-none lg:translate-y-12 lg:translate-x-12"
              style={{ animation: 'fadeUp 0.8s ease-out 0.3s both' }}
            >
              <div
                className="relative w-[850px] h-[580px] overflow-hidden rounded-2xl"
                style={{
                  transform: `perspective(1200px) rotateY(${mousePos.x * 8}deg) rotateX(${mousePos.y * -8}deg)`,
                  transition: 'transform 0.6s ease-out',
                }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover object-center scale-[1.05]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/uddu-video1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,transparent_0_42%,rgba(5,11,24,0.12)_65%,rgba(5,11,24,0.45)_100%)]" />
              </div>
            </div>

            {/* Right — Stats + CTA */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:mt-52">
              <div className="pt-28" style={{ animation: 'fadeUp 0.8s ease-out 0.4s both' }}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 max-w-md">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl md:text-3xl font-black text-white leading-none">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-slate-400 font-medium leading-tight mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 w-fit"
                style={{ animation: 'fadeUp 0.8s ease-out 0.5s both' }}
              >
                Explore My Work
                <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ animation: 'fadeIn 1s ease-out 2s both' }}
      >
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-slate-500 hover:text-orange-400 transition-colors p-2"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}