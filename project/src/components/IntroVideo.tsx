import { ArrowRight } from 'lucide-react';

export default function IntroVideo() {
  return (
    <section
      id="intro-video"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <img
          src="https://dynamic.heygen.ai/aws_pacific/avatar_tmp/85e07de6360643749b822187752897c1/va86f7257aa1a493880ba2130f63bc7a1/67fd0c5504974a01b8e9066761c18a69.jpeg"
          alt="Udeesh AI Portfolio Hero Background"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_45%)]" />
      </div>

      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        style={{ backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-orange-400 mb-6 animate-fadeUp">
            <span className="w-8 h-px bg-orange-400" />
            Portfolio Introduction
            <span className="w-8 h-px bg-orange-400" />
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-5xl mb-6 animate-fadeUp"
            style={{ animationDelay: '0.1s' }}
          >
            Experience My AI-Led GTM Journey
          </h1>

          <p
            className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10 animate-fadeUp"
            style={{ animationDelay: '0.2s' }}
          >
            Watch a quick visual introduction to my work in AI commercialization, market intelligence,
            competitive strategy, and enterprise go-to-market execution.
          </p>

          <div
            className="group relative w-full max-w-4xl rounded-[28px] overflow-hidden border border-orange-400/20 shadow-[0_0_60px_rgba(249,115,22,0.16)] animate-fadeUp"
            style={{ animationDelay: '0.3s' }}
          >
            <video
              className="w-full aspect-video object-cover bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/videos/udeesh-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <button
            onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 animate-fadeUp"
            style={{ animationDelay: '0.45s' }}
          >
            To Know Me
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}