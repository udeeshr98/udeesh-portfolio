import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Linkedin, Mail, ArrowRight } from 'lucide-react';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '250+', label: 'Intel Reports on Executive Strategy & Insight Deliverables' },
  { value: '20+', label: 'AI Adoption & GTM Initiatives' },
  { value: '10+', label: 'Enterprise Solution Workshops' },
  { value: '50+', label: 'Customer Discovery & Advisory Engagements' },
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
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* FULL BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/uddu-video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* UDEESH BACKGROUND TEXT */}
      <div className="absolute top-0 left-0 right-0 overflow-visible pointer-events-none h-1/2 flex items-start justify-center pt-4 lg:pt-8 z-10">
        <div
          className="text-[18vw] md:text-[24vw] lg:text-[26vw] font-black text-white leading-none whitespace-nowrap select-none"
          style={{
            opacity: 0.12,
            letterSpacing: '-0.04em',
            transform: `scale(${1 + mousePos.x * 0.02})`,
            transition: 'transform 0.6s ease-out',
          }}
        >
          UDEESH
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full min-h-screen flex items-center px-6 md:px-10 lg:px-20 xl:px-28">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center pt-24 lg:pt-20">

            {/* Left side */}
            <div
              className="flex flex-col justify-center space-y-6 max-w-xl lg:justify-self-start"
              style={{ animation: 'fadeUp 0.8s ease-out 0.3s both' }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
  Strategy &amp; Growth Consultant | <br />
  Customer Success &amp; Advisory Professional
</h1>
                <p className="text-orange-400 text-base md:text-lg font-semibold mb-4">
                  Customer Success · Product Adoption · Strategy Consulting · AI GTM & Commercialization
                </p>
              </div>

              <p
                className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-lg"
                style={{ animation: 'fadeUp 0.8s ease-out 0.4s both' }}
              >
                Helping organizations realize measurable business value through strategic consulting, customer advisory, and AI-driven transformation. Experienced in translating complex business challenges into customer adoption strategies, executive recommendations, and scalable AI solutions that accelerate technology adoption and long-term growth..
              </p>

              <div
                className="flex items-center gap-3 pt-2"
                style={{ animation: 'fadeUp 0.8s ease-out 0.5s both' }}
              >
                <a
                  href="https://www.linkedin.com/in/udeesh-r-741241168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500/40 transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:udeeshr98@gmail.com"
                  className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500/40 transition-all duration-200 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500/40 transition-all duration-200 hover:scale-110"
                  aria-label="Resume"
                >
                  <Download size={18} />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div
              className="flex flex-col justify-center space-y-8 lg:justify-self-end lg:items-end text-left lg:text-left"
              style={{ animation: 'fadeUp 0.8s ease-out 0.4s both' }}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-md">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-black text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-base md:text-lg italic text-slate-300 font-medium leading-tight mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
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

      {/* SCROLL DOWN ARROW */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ animation: 'fadeIn 1s ease-out 2s both' }}
      >
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-slate-300 hover:text-orange-400 transition-colors p-2"
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