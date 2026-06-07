import { ArrowRight, Play } from 'lucide-react';

export default function IntroVideo() {
  return (
    <section
      id="intro-video"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <img
          src="https://dynamic.heygen.ai/aws_pacific/avatar_tmp/85e07de6360643749b822187752897c1/va86f7257aa1a493880ba2130f63bc7a1/67fd0c5504974a01b8e9066761c18a69.jpeg"
          alt="Udeesh AI Portfolio Hero Video"
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

          <a
            href="https://app.heygen.com/videos/udeesh-ai-portfolio-hero-video-67fd0c5504974a01b8e9066761c18a69"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-4xl rounded-[28px] overflow-hidden border border-orange-400/20 shadow-[0_0_60px_rgba(249,115,22,0.16)] animate-fadeUp"
            style={{ animationDelay: '0.3s' }}
            aria-label="Open portfolio introduction video"
          >
            <img
              src="https://dynamic.heygen.ai/aws_pacific/avatar_tmp/85e07de6360643749b822187752897c1/va86f7257aa1a493880ba2130f63bc7a1/67fd0c5504974a01b8e9066761c18a69.jpeg"
              alt="Udeesh AI Portfolio Hero Video Thumbnail"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-500/90 border border-orange-200/30 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-400">
                <Play size={30} className="text-white ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
              <div className="text-white text-xl md:text-2xl font-bold mb-2">
                Udeesh AI Portfolio Hero Video
              </div>
              <div className="text-slate-200 text-sm md:text-base max-w-2xl">
                Click to watch the full introduction video in a new tab.
              </div>
            </div>
          </a>

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
