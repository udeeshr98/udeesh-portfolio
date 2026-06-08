import { ArrowRight } from 'lucide-react';

export default function IntroVideo() {
  return (
    <section
      id="intro-video"
      className="relative h-[300vh] bg-black overflow-hidden"
    >
      <div className="sticky top-0 w-full h-screen">
        <video
          className="w-full h-full object-cover bg-black"
          controls
          playsInline
          preload="metadata"
        >
          <source src="/videos/udeesh-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() =>
              document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1"
          >
            To Know Me
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}